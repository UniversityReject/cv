<?php
error_reporting( E_ALL );
ini_set( 'display_errors', 1 );
header( "Content-Type: application/json" );
include_once( "data/contact.class.php" );

$userdata = new UserData(); // add the photoData class

// validate and sanitise data
$full_name = filter_var( $_REQUEST[ 'full_name' ], FILTER_SANITIZE_MAGIC_QUOTES );


$user_email = filter_var( $_REQUEST[ 'user_email' ], FILTER_SANITIZE_EMAIL );


$description = filter_var( $_REQUEST[ 'description' ], FILTER_SANITIZE_FULL_SPECIAL_CHARS, FILTER_FLAG_NO_ENCODE_QUOTES );



// check that all the fields are valid before insert record
if ( empty( $full_name ) || empty( $user_email ) || empty( $description )  ) {
	$status[ "err" ] = -1;
	$status[ "msg" ] = "Missing fields";
} else {
		// add new user, assign new id
		$newID = $userdata->addUser($full_name, $user_email, $description );
		
		// compose RESPONSE
		$status[ 'err' ] = 0;
		$status[ 'newID' ] = $newID;
		if ( $newID < 0 ) {
			$status[ "msg" ] = "Error creating record.";
		} else {
			$status[ "msg" ] = "Record added.";
		}
}

echo json_encode( $status ); // convert json to string

?>