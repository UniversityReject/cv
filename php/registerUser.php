<?php
error_reporting( E_ALL );
ini_set( 'display_errors', 1 );
header( "Content-Type: application/json" );
include_once( "data/user.class.php" );

$userdata = new UserData(); // add the photoData class

// validate and sanitise data
$full_name = filter_var( $_REQUEST[ 'full_name' ], FILTER_SANITIZE_MAGIC_QUOTES );
$username = filter_var( $_REQUEST[ 'username' ], FILTER_SANITIZE_FULL_SPECIAL_CHARS, FILTER_FLAG_NO_ENCODE_QUOTES );
$user_email = filter_var( $_REQUEST[ 'user_email' ], FILTER_SANITIZE_EMAIL );

$user_pwd = filter_var( $_REQUEST[ 'user_pwd' ], FILTER_VALIDATE_REGEXP,
	array( "options" => array( "regexp" => "/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,}/" ) ) );

// check that all the fields are valid before insert record
if ( empty( $user_pwd ) || empty( $username ) || empty( $user_email ) ) {
	$status[ "err" ] = -1;
	$status[ "msg" ] = "Missing fields";
} else {
	// check if $username used
	if ( $userdata->checkUserName( $username ) ) { // if name used, error
		$status[ "err" ] = -1;
		$status[ "msg" ] = "Username is used. Try another.";
	} else {
		if ( empty( $full_name ) ) $full_name = $username; // if $fullname empty, 

		// add new user, assign new id
		$newID = $userdata->addUser( $username, $full_name, $user_email, $user_pwd );
		
		// compose RESPONSE
		$status[ 'err' ] = 0;
		$status[ 'newID' ] = $newID;
		if ( $newID < 0 ) {
			$status[ "msg" ] = "Error creating record.";
		} else {
			$status[ "msg" ] = "Record added.";
		}
	}
}

echo json_encode( $status ); // convert json to string

?>