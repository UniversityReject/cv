<?php
error_reporting( E_ALL );
ini_set( 'display_errors', 1 );

class UploadImage {
	/*
	Default setting for uploadImage
	@param string $img_directory - The image's directory. Example: C:\xampp\htdocs\your_project\img\
	@param string [$thumb_directory=""] - The thumb's directory. This parameter is optional, so if no value is provided, thumb nails are NOT created. Example: C:\xampp\htdocs\your_project\thumb\
	@param int $thumb_width - Width of the thumbnail. Only integers allowed.
	@param int $thumb_height - Height of the thumbnail. Only integers allowed.
	@param (int[int] | 'transparent') $background - An array containing the values of red, green, and blue to be used as the image's background color, or use the string 'transparent' to define the background as transparent (only applicable to png images). This parameter is optional, so if no value is provided, then the default background will be black.
	*/
	private $imgDir;
	private $thumbDir;
	private $thumb_width;
	private $thumb_height;
	private $backgroundCol;

	public
	function __construct( $img_directory, $thumb_directory = "", $thumb_width = 320, $thumb_height = 180, $background = [100,100,100] ) {
		$this->imgDir = $img_directory;
		$this->thumbDir = $thumb_directory;
		$this->thumb_width = $thumb_width;
		$this->thumb_height = $thumb_height;
		$this->backgroundCol = $background;
	}

	/**
 Upload the image and create a thumbnail 
 @param string $upload_file - The name of the uploaded file defined in form. Add enctype="multipart/form-data" to the form tag
 @param string $target_file - The name of the saved file. If no value is provided, a new filename is created.
@return [int,string] - Returns [true, filename] if successful, [false, error message] otherwise.
 */
	public

	function upload( $upload_file, $target_file ) {

        $uploadedFile = $_FILES[ $upload_file ];
		$filename = $uploadedFile[ "name" ]; // the actual name of the upload file
		if (empty($filename)) {
			return array("err"=>0, "file"=> "" ); // not file submitted
		}
		
		$imageFileType = strtolower( pathinfo( $filename, PATHINFO_EXTENSION ) ); // the extentsion of the uploaded file
		//getimagesize: returns width, height, type, attr, bits and mime
		//$uploadedFile["tmp_name"] is the temporary stored file on server
		$image_info = getimagesize( $uploadedFile[ "tmp_name" ] );
		if ( $image_info === false ) { // 
			// $image_info = 0 or error
			return array("err"=>-1, "msg"=>"File is not an image.");
		}

		// Check file size, accept only file smaller than 2MB
		if ( $uploadedFile[ "size" ] > 2000000 ) {
			return  array("err"=>-1, "msg"=>"Sorry, your file is too large.");
		}

		// Allow file formats jpg, png, jpeg and gif
		if ( $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" &&
			$imageFileType != "gif" ) {
			return  array("err"=>-1, "msg"=>"Sorry, only JPG, JPEG, PNG & GIF files are allowed." );
		}

		if ( !empty( $target_file ) ) {
			$new_file = $this->imgDir . basename( $target_file ); // replaces old files
			// Check if file already exists
			
  			if ( file_exists( $new_file ) ) {
				unlink( $new_file ); // remove file
			}
		} else {
			do { // create a new filename
				$randomNum = rand( 1000, 9999 );
				
				$target_file = pathinfo( $filename, PATHINFO_FILENAME ) . "$randomNum.$imageFileType";
				
				$new_file = $this->imgDir . basename( $target_file );

			} while ( file_exists( $new_file ) );
		}

		// move uploaded file to $target_file
		if ( move_uploaded_file( $uploadedFile[ "tmp_name" ], $new_file ) ) {
			if ( $this->createThumbnail( $new_file ) ) {
				return  array("err"=>0, "file"=> $target_file );
			} else {
				return  array("err"=>-1, "msg"=>"Sorry, there was an error creating the thumbnail." );
			}
		} else {
			return  array("err"=>-1, "msg"=>"Sorry, there was an error uploading your file." );
		}
	}

	/* create a thumb nail of the image file 
	$param string $filename - name of the image file
	*/
	public
	function createThumbnail( $filename ) {
	if (empty($this->thumbDir)) return true; // exit if no thumb directory
		$filepath = $this->imgDir . basename( $filename );
		$thumbpath = $this->thumbDir . basename( $filename );
		list( $original_width, $original_height, $original_type ) = getimagesize( $filepath );

		$width_ratio = $this->thumb_width / $original_width;
		$height_ratio = $this->thumb_height / $original_height;

		if ( $width_ratio > $height_ratio ) {
			// smaller
			$new_height = $this->thumb_height;
			$new_width = intval( $original_width * $height_ratio );
		} else {
			$new_height = intval( $original_height * $width_ratio );
			$new_width = $this->thumb_width;
		}

		$dest_x = intval( ( $this->thumb_width - $new_width ) / 2 );
		$dest_y = intval( ( $this->thumb_height - $new_height ) / 2 );
		if ( $original_type === 1 ) {
			$imgt = "ImageGIF";
			$imgcreatefrom = "ImageCreateFromGIF";
		} else if ( $original_type === 2 ) {
			$imgt = "ImageJPEG";
			$imgcreatefrom = "ImageCreateFromJPEG";
		} else if ( $original_type === 3 ) {
			$imgt = "ImagePNG";
			$imgcreatefrom = "ImageCreateFromPNG";
		} else {
			return false;
		}
		$old_image = $imgcreatefrom( $filepath );
		$new_image = imagecreatetruecolor( $this->thumb_width, $this->thumb_height ); // creates new image, but with a black background
		// figuring out the color for the background
		if ( is_array( $this->backgroundCol ) && count( $this->backgroundCol ) === 3 ) {
			list( $red, $green, $blue ) = $this->backgroundCol;
			$color = imagecolorallocate( $new_image, $red, $green, $blue );
			imagefill( $new_image, 0, 0, $color );
			// apply transparent background only if is a png image
		} else if ( $this->backgroundCol === 'transparent' && $original_type === 3 ) {
			imagesavealpha( $new_image, TRUE );
			$color = imagecolorallocatealpha( $new_image, 0, 0, 0, 127 );
			imagefill( $new_image, 0, 0, $color );
		}
		imagecopyresampled( $new_image, $old_image, $dest_x, $dest_y, 0, 0, $new_width, $new_height, $original_width, $original_height );

		if ( file_exists( $thumbpath ) ) {
			unlink( $thumbpath ); // remove file
		}
		$imgt( $new_image, $thumbpath );

		return file_exists( $thumbpath );
	}
}