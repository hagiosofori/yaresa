var db;

//function to initialize the database object
function initDatabase(){

    db = window.openDatabase('yaresadb', 1.0, 'Yaresa DB', 10000000);
}


/*function to create tables for the application. 
* list of tables created and their columns
    * users
        : id [autoincrement, primary key]
        : username [text]
        : password [text] probably should be hashed.

    * members
        : community [number, foreign key (community table)]
        : first name [text]
        : last name [text]
        : birth date [date]
        : age [number]
        : card number [number]
        : NHIS card number [number]
        : expiry date of NHIS [date]
       
    * 

*/
function createTables(){

}