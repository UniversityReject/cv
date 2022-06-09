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
		
		$this->loadSession(); // load all session at start of REQUEST
 	}

 	// CRUD method declarations: create, read, update and delete

 	// CREATE
 	public

 	function addUser( $username, $fullname, $email, $pwd ) {

 		// sql commands
 		$sql = "INSERT INTO `userTable` (`username`,`fullname`, `email`, `password`)
		VALUES (:username, :fullname, :email, :password);";

 		$statement = $this->dbh->prepare( $sql );

 		$statement->bindParam( ':username', $username, PDO::PARAM_STR );
 		$statement->bindParam( ':fullname', $fullname, PDO::PARAM_STR );
 		$statement->bindParam( ':email', $email, PDO::PARAM_STR );

 		$hasedpwd = password_hash( $pwd, PASSWORD_DEFAULT ); // always hashed password!
 		$statement->bindParam( ':password', $hasedpwd, PDO::PARAM_STR );

 		if ( $statement->execute() ) {
 			$last_id = $this->dbh->lastInsertId();
 		} else {
 			$last_id = -1; // error
 		}

 		return $last_id;
 	}

 	
 	// Check that username is not used
 	// @param string $name
 	// @return boolean - true if found
 	public

 	function checkUserName( $name ) {
 		
 		$sql = "SELECT username FROM `userTable` WHERE username=:username";

 		$statement = $this->dbh->prepare( $sql );

 		$statement->bindParam( ':username', $name, PDO::PARAM_STR );

 		if ( $statement->execute() ) {
 			/* Count the number of columns in the (non-existent) result set */
 			$count = $statement->rowCount();
 		} else {
 			$count = 0; // error
 		}
 		return $count;
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

     
 	// loginUser with username & password. 
 	// store user data in sessions
 	// @param string $username
 	// @param string $password
 	// @return boolean - success or failer
 	public

 	function loginUser( $name, $pwd ) {
 		$sql = "SELECT `id`, `user_group`, `password`, `user_active`, `username`, `email`, `fullname`, `lastvisit`, `regdate` 
		FROM `usertable`WHERE username=:username";

 		$statement = $this->dbh->prepare( $sql );
 		$statement->bindParam( ':username', $name, PDO::PARAM_STR );

 		if ( $statement->execute() ) {
 			$found = $statement->fetch( PDO::FETCH_ASSOC ); // fetch only first record
 			$storedpwd = $found[ 'password' ];

 			if ( password_verify( $pwd, $storedpwd ) ) {
 				return ( $found );
 			};
 		}
 		return [];
 	}

 	public
 	function logoff() {
 		// do nothing for now.
 		// some people may like to keep track of last logoff
 		return true;
 	}

 	// check password of logged in user. 
 	// @return boolean - success or failer
 	public
 	function checkPassword( $user_id, $pwd ) {
 		$sql = "SELECT `password`	FROM `usertable` WHERE id=:id";

 		$statement = $this->dbh->prepare( $sql );
 		$statement->bindParam( ':id', $user_id , PDO::PARAM_INT );

 		if ( $statement->execute() ) {
 			$found = $statement->fetch( PDO::FETCH_ASSOC ); // fetch only first record
 			$storedpwd = $found[ 'password' ];
 			return ( password_verify( $pwd, $storedpwd ) );
 		}
 		return false;
 	}

 	// UPDATE
 	// Store the timestamp for the last successful login
 	public
 	function updateLastLogin( $id ) {
 		$sql = "UPDATE `usertable`SET lastvisit = now() WHERE id=:id";

 		$statement = $this->dbh->prepare( $sql );
 		$statement->bindParam( ':id', $id, PDO::PARAM_INT );

 		return $statement->execute(); // return true/false
 	}

 	// Store the timestamp for the last successful login
 	public
 	function updateProfile( $username, $fullname, $email, $pwd = "" ) {
 		$status = array(); // error

 		if ( $this->user_id > 0 ) { // if user is logged in
 			//`username`,`fullname`, `email`, `password`
 			$sql = "UPDATE `usertable` SET `username` = :username,
			`fullname` = :fullname, `email` = :email ";

 			if ( !empty( $pwd ) ) {
 				$sql .= ', `password` = :password ';
 			}
 			$sql .= 'WHERE id=:id;';

 			$statement = $this->dbh->prepare( $sql );
 			$statement->bindParam( ':username', $username, PDO::PARAM_STR );
 			$statement->bindParam( ':fullname', $fullname, PDO::PARAM_STR );
 			$statement->bindParam( ':email', $email, PDO::PARAM_STR );

 			if ( !empty( $pwd ) ) { // only if password is supplied!
 				$hasedpwd = password_hash( $pwd, PASSWORD_DEFAULT ); // always hased password!
 				$statement->bindParam( ':password', $hasedpwd, PDO::PARAM_STR );
 			}

 			$statement->bindParam( ':id', $this->user_id, PDO::PARAM_INT );
 			$statement->execute(); // return true/false

 			if ( $statement->rowCount() > 0 )$status[ 'err' ] = 0;
 			else $status[ 'err' ] = -1;
 		} else {
 			$status[ 'err' ] = -1;
 			$status[ 'msg' ] = "User not login";
 		}

 		return $status;
 	}

 	// SESSIONS MANAGEMENT
 	//CREATE
 	// store session variables
 	public
 	function storeSession( $userRec ) { // store only important info
 		$_SESSION[ 'id' ] = $userRec[ 'id' ];
 		$_SESSION[ 'user_group' ] = $userRec[ 'user_group' ];
 	}

 	// READ
 	// load the session variables 
 	public
 	function loadSession() {
 		$this->user_id = (isset($_SESSION[ 'id' ]) ? $_SESSION[ 'id' ] : true );
		$this->user_group  = (isset($_SESSION[ 'user_group' ]) ? $_SESSION[ 'user_group' ] : true );
 	}

 	// UPDATE

 	// DELETE
 	// remove all session variables
 	public
 	function destroySession() {
 		unset( $_SESSION[ 'id' ] );
 		unset( $_SESSION[ 'user_group' ] );

 		session_unset();
 		return true;
 	}

 }
 ?>