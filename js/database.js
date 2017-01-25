
/**UTILITY GLOBAL VARIABLES */

var db; //variable to hold reference to the database object
var dataset; //variable to store and return the results of queries 


/**CREATE TABLES QUERIES */
//query statement to create users table.
var createUsersTableStatement = "CREATE TABLE IF NOT EXISTS Users (id primary key autoincrement, username text, password text)"; 

//query statement to create members table.
var createMembersTableStatement = "CREATE TABLE IF NOT EXISTS Members (id primary key autoincrement, firstName text, lastName text, birthDate DATETIME, age number, gender char, cardNumber number, NHISnumber number, NHISexpiry DATETIME)"; 

//query statement to create communities table
var createCommunitiesTableStatement = "CREATE TABLE IF NOT EXISTS Communities (id autoincrement primary key, name text)"; 



/**DROP TABLES QUERIES */
//query statement to drop members table.
var dropMembersTableStatement = "DROP TABLE Members";

//query statement to dtop users table.
var dropUsersTableStatement = "DROP TABLE Users";

//query statement to drop communities table.
var dropCommunitiesTableStatement = "DROP TABLE Communities";


/**DATABASE INITIALIZATION QUERY */

function initDatabase(){
    db = window.openDatabase('yaresadb', 1.0, 'Yaresa DB', 1000000);
}


/*CREATE TABLES FUNCTIONS
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
        : gender ['varchar'] will be M/F
        : card number [number ,primary key]
        : NHIS card number [number, primary key]
        : expiry date of NHIS [date]
       
    * communities
        : id [autoincrement, primary key]
        : name [text]
*/
function createTables(){
    createUsersTable();
    createMembersTable();
    createCommunitiesTable();
}

//function to create users table in local database.
function createUsersTable(){
    db.transaction(
        function(tx){
            tx.executeSql(createUserTableStatement);
        }
    );
}

//function to create members table in local database
function createMembersTable(){
    db.transaction(
        function(tx){
            tx.executeSql(createMembersTableStatement);
        }
    )
}

//function to create communities table in local database
function createCommunitiesTable(){
    db.transaction(
        function(tx){
            tx.executeSql(createCommunitiesTableStatement);
        }
    )
}

/**DROP TABLES FUNCTIONS */

//function to drop tables in local database
function dropAllTables(){
    dropUsersTable();
    dropMembersTable();
    dropCommunitiesTable();
}

//function to drop users database.
function dropUsersTable(){
    db.transaction(
        function(tx){
            tx.executeSql(dropUsersTableStatement);
        }
    )
}

//function to drop members table 
function dropMembersTable(){
    db.transaction(
        function(tx){
            tx.executeSql(dropMembersTableStatement);
        }
    )
}

//function to drop communities table.
function dropCommunitiesTable(){
    db.transaction(
        function(tx){
            tx.executeSql(dropCommunitiesTableStatement);
        }
    )
}


/**DELETE RECORDS FUNCTIONS */

//function to delete record from 

//query to be run when the page is loaded.
document.ready(function(){
    initDatabase();
    createTables();
});