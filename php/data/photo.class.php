<?php
error_reporting( E_ALL );
ini_set( 'display_errors', 1 );
include_once( "DB_PDO.Class.php" );
class PhotoData {
	// property declaration
	private $dbh;

	public
	function __construct() {
		$link = new myPDO(); // link to mySQL Database
		$this->dbh = $link->dbh();
	}

	// CRUD method declarations: create, read, update and delete

	// CREATE
	// addPhoto: add new photo record
	public
	function addPhoto( $newname,$newpath ) { //missing
		// sql commands
		$sql = "INSERT INTO `bookrow` (`name`, `imageRef`)
		VALUES (:name, :imageRef);";

		$statement = $this->dbh->prepare( $sql );

		$statement->bindParam(':name', $newname, PDO::PARAM_STR);
        $statement->bindParam(':imageRef', $newpath, PDO::PARAM_STR);

		if ( $statement->execute( ) ) {
			$last_id = $this->dbh->lastInsertId();
		} else {
			$last_id = -1; // error
		}

		return $last_id;
	}




	// READ
	// complete listing of photos
	public
	function getListing() {
        
        
        
		$sql = "SELECT * FROM `bookrow`;";

		$statement = $this->dbh->prepare( $sql );
		$rec = [ ];

		if ( $statement->execute( ) ) {
			$found = $statement->fetchAll(PDO::FETCH_ASSOC);
		} else {
			$found = []; // empty
		}

		return $found;
	}
	
	// find photo records where title or description contain the $searchString
	public
	function searchPhotos($searchString) {
		$sql = "SELECT `name`, `imageRef` FROM `bookrow` 
		WHERE `name` LIKE :search 
		ORDER BY title ASC;";

		$statement = $this->dbh->prepare( $sql );
		$rec = [ ];
		$rec[":search"] = '%'.$searchString.'%';

		if ( $statement->execute( $rec ) ) {
			$found = $statement->fetchAll(PDO::FETCH_ASSOC);
		} else {
			$found = []; // empty
		}

		return $found;
	}

	// get single record $recID
	public function getPhotoRec($recID) {
		
		$sql = "SELECT `id`, `name`, `imageRef` FROM `bookrow` 
		WHERE `id` = :id;";

		$statement = $this->dbh->prepare( $sql );
		$statement->bindParam(':id', $recID, PDO::PARAM_INT);

		if ( $statement->execute(  ) ) {
			// use fetch instead of fetchAll for single record
			$found = $statement->fetch( PDO::FETCH_ASSOC );
		} else {
			$found = []; // empty
		}
		return $found;

	}
	
	
	// complete listing of photos by album and search string
	public
	function getPhotoList( $album, $searchStr) {
		

		return $found;
	}
		
	// UPDATE
	// updatePhoto: update photo record $recID
	// return photoID
	public
	function updatePhoto( $recID, $newname,$newpath ) { //missing
		// sql commands
		$sql = "INSERT INTO `bookrow` (`name`, `ImageRef`)
		VALUES (:name, :newImage);";

        $sql = "UPDATE `bookrow` SET `name`=:name,`imageRef`=:newImage
        WHERE id=:id;";
            
		$statement = $this->dbh->prepare( $sql );

        $statement->bindParam(':id', $recID);
		$statement->bindParam(':name', $newname, PDO::PARAM_STR);
        $statement->bindParam(':newImage', $newpath, PDO::PARAM_STR);

		if ( $statement->execute( ) ) {
			$last_id = $this->dbh->lastInsertId();
		} else {
			$last_id = -1; // error
		}

		return $last_id;
	}

	// Update filename of photo
	public
	function updatePhotoFilename($recID, $newFilename) {
		
		return $err;
	}
	
	// DELETE : We don't 
    
    public
	function deletePhoto( $recID) { //missing
		// sql commands
		$sql = "INSERT INTO `bookrow` (`ImageRef`)
		VALUES ( :newImage);";

        $sql = "DELETE FROM `bookrow`  WHERE id=:id;";
         
		$statement = $this->dbh->prepare( $sql );
        
        $statement->bindParam(':id', $recID);

		if ( $statement->execute( ) ) {
			$last_id = $this->dbh->lastInsertId();
		} else {
			$last_id = -1; // error
		}

		return $last_id;
	}

	// Update filename of photo
	public
	function deletePhotoFilename($recID, $newFilename) {
		
		return $err;
	}
}
?>