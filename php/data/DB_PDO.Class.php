<?php
define( "DB_host", "localhost" );
define( "DB_user", "donghan123456" ); // leave as "root"
define( "DB_pass", "mywebsite123" ); // no password
define( "DB_name", "db_mywebsite" ); // scheme name

class myPDO {
	protected $conn = null;

	public function __construct() {
		try {
			$this->conn = new PDO( "mysql:host=" . DB_host . ";dbname=" . DB_name, DB_user, DB_pass );
			$this->conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
		} catch ( PDOException $exc ) {
			echo $exc->getMessage();
		}
	}

	public function dbh() {
		return $this->conn;
	}
	
	// close connection manually
	public function close() {
		$this->conn = null;
	}
}

?>