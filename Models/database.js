alert("database");

/**
 * IMPROVEMENTS THAT CAN BE MADE
 * 
 * 1. currently, the query functions are independent. it would be best if there was one basic 'executeQuery' function, which all these others then called, and passed their query statements to. Passing all queries through one function makes it easier to debug and manage.
 * 
 */



/**UTILITY GLOBAL VARIABLES */
var db; //variable to hold reference to the database object
var dataset; //variable to store and return the results of queries 


/* list of tables created and their columns
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

    * opd records.
        : member id [number, foreign key]
        : 
    
    * vaccination records.
        : member id [number, foreign key]
        : 

    * family planning records.
        : member id [number, foreign key]
        : 
*/


/**CREATE TABLES QUERIES */
var createUsersTableStatement = "CREATE TABLE IF NOT EXISTS Users (id primary key autoincrement, username text, password text)"; 
var createMembersTableStatement = "CREATE TABLE IF NOT EXISTS Members (id primary key autoincrement, firstName text, lastName text, birthDate DATETIME, age number, gender char, cardNumber number, NHISnumber number, NHISexpiry DATETIME, community NUMBER)"; 
var createCommunitiesTableStatement = "CREATE TABLE IF NOT EXISTS Communities (id autoincrement primary key, name text)"; 
var createOPDtableStatement = "";
var createVaccinationTableStatement = "";
var createFamilyPlanningTableStatement = "";


/**DROP TABLES QUERIES */
var dropMembersTableStatement = "DROP TABLE Members";
var dropUsersTableStatement = "DROP TABLE Users";
var dropCommunitiesTableStatement = "DROP TABLE Communities";
var dropOPDtableStatement = "";
var dropVaccinationTableStatement = "";
var dropFamilyPlanningTableStatement = "";


/**INSERT RECORDS QUERIES */
var insertUserStatement = "INSERT INTO ";
var insertMemberStatement = "INSERT INTO Members (firstName, lastName, birthdate, age, gender, cardNumber, NHISnumber, NHISexpiry, community) VALUES (?,?,?,?,?,?,?,?,?)";
var insertCommunityStatement = "";
var insertOPDrecordStatement = "";
var insertVaccinationRecordStatement ="";
var insertFamilyPlanningRecordStatement = "";


/**DELETE RECORDS QUERIES */
var deleteUserStatement = "";
var deleteMemberStatement = "";
var deleteCommunityStatement = "";
var deleteOPDrecordStatement = "";
var deleteVaccinationRecordStatement = "";
var deleteFamilyPlanningiRecordStatement = "";


/**DATABASE INITIALIZATION QUERY */
function initDatabase(){
    db = window.openDatabase('yaresadb', 1.0, 'Yaresa DB', 1000000);
}

/**EXECUTE SQL FUNCTION. */
function executeSQL(query, parameters, callbackFunction){
    db.transaction(
        function(tx){
            tx.executeSql(query="", parameters=[], callbackFunction);
        }
    );
}

/*CREATE TABLES FUNCTIONS*/

//function to create all tables
function createTables(){
    createUsersTable();
    createMembersTable();
    createCommunitiesTable();
}

//function to create users table in local database.
function createUsersTable(){
    executeSQL(createUsersTableStatement);
}

//function to create members table in local database
function createMembersTable(){
    executeSQL(createMembersTableStatement);
}

//function to create communities table in local database
function createCommunitiesTable(){
    db.transaction(
        function(tx){
            tx.executeSql(createCommunitiesTableStatement);
        }
    )
}

//function to create OPD records table in local database.
function createOPDtable(){
    db.transaction(
        function(tx){
            tx.executeSql(createOPDtableStatement);
        }
    )
}

//function to create vaccination records table in local database.
function createVaccinationTable(){
    db.transaction(
        function(tx){
            tx.executeSql(createVaccinationTableStatement);
        }
    )
}

//function to create family planning records table in local database.
function createFamilyPlanningTable(){
    db.transaction(
        function(tx){
            tx.executeSql(createFamilyPlanningTableStatement);
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

//function to drop opd records table.
function dropOPDrecordsTable(){
    executeSQL(dropOPDtableStatement);
}

//function to drop vaccination records table.
function dropVaccinationecordsTable(){
    executeSQL(dropVaccinationTableStatement);
}

/**INSERT RECORDS FUNCTIONS */
function insertMember(community, firstName, lastName, birthDate, age, cardNumber, NHIScardNum, NHISexpiryDate){
    db.transaction(
        function(tx){
            tx.executeSql(insertUserStatement, [firstName, lastName, birthDate, age, cardNumber, NHIScardNum, NHISexpiryDate, community], onSuccess);
            //specify callback function that indicates success, and indicates when there's a failure.
        }
    )
}


/**DELETE RECORDS FUNCTIONS */



/**READ RECORDS FUNCTIONS */
function fetchAllUsers(){
    db.transaction(
        function(tx){
            tx.executeSql(fetchAllUsersStatement, [], function(tx, results){
                dataset = result.rows;
                return dataset;
            })
        }
    )
}

//function to fetch user given id.
function fetchUser(id){
    var userid = id.toString();
    db.transaction(
        function(tx){
            tx.executeSql()
        }
    );
}

//function to delete record from 







//function to display success
function onSuccess(){
    return "inserted the user";
}
//query to be run when the page is loaded.
$(document).ready(function(){
    initDatabase();
    createTables();
}
);