 <?php
 error_reporting( E_ALL );
 ini_set( 'display_errors', 1 );

 session_start(); /// START SESSIONS
 include_once( "DB_PDO.Class.php" );
 class UserData {
 	// property declaration
 	private $dbh;
	 
	public $user_id; // id of logged in user
	public $user_grp; // the groups user below to
	 

 	public
 	function __construct() {
 		$link = new myPDO(); // link to mySQL Database
 		$this->dbh = $link->dbh();
		

 	}

 	// CRUD method declarations: create, read, update and delete

 	// CREATE
 	public

 	function addUser( $full_name ,$user_email, $description  ) {

 		// sql commands
 		$sql = "INSERT INTO `contactform` (`fullname`, `email`, `description`)
		VALUES (:fullname, :email, :description);";

 		$statement = $this->dbh->prepare( $sql );

 		$statement->bindParam( ':fullname', $full_name, PDO::PARAM_STR );
 		$statement->bindParam( ':email',  $user_email, PDO::PARAM_STR );
 		$statement->bindParam( ':description', $description, PDO::PARAM_STR );


 		if ( $statement->execute() ) {
 			$last_id = $this->dbh->lastInsertId();
 		} else {
 			$last_id = -1; // error
 		}

 		return $last_id;
 	}


     // READ

 	// Load user profile of user 
 	// @ return array userProfile
 	public
 	function getProfile($id) {
 		$found = array(); // error

 		$sql = "SELECT `user_group`, `password`, `user_active`, `username`, `email`, `fullname`, `lastvisit`, `regdate` 
		FROM `usertable` WHERE id=:id";

 		$statement = $this->dbh->prepare( $sql );
 		$statement->bindParam( ':id', $id, PDO::PARAM_INT );

 		if ( $statement->execute() ) {
 			/* Count the number of columns in the (non-existent) result set */
 			$found = $statement->fetch( PDO::FETCH_ASSOC );
 		}
		
 		return $found;
 	}


 }
 ?>