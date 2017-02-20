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
var createUsersTableStatement = "CREATE TABLE IF NOT EXISTS Users (id int NOT NULL AUTO_INCREMENT, username varchar(255), pword varchar(255), PRIMARY KEY(id))";

var createMembersTableStatement = "CREATE TABLE IF NOT EXISTS Members (memberID int NOT NULL AUTO_INCREMENT, firstName varchar(255), lastName varchar(255), birthDate DATE, age int, gender varchar(2), cardNumber int, NHISnumber int, NHISexpiry DATE, community int, PRIMARY KEY(MemberID));";

var createCommunitiesTableStatement = "CREATE TABLE IF NOT EXISTS Communities (communityID int NOT NULL AUTO_INCREMENT, name varchar(255), PRIMARY KEY(communityID));";

var createOPDtableStatement = "CREATE TABLE IF NOT EXISTS OPDs (opdID int NOT NULL AUTO_INCREMENT, memberID int, PRIMARY KEY(opdID), CONSTRAINT fk_memberID FORIEGN KEY (memberID) REFERENCES Members(memberID))";

var createVaccinationTableStatement = "CREATE TABLE IF NOT EXISTS Vaccinations (vaccinationID int NOT NULL AUTO_INCREMENT, memberID int, PRIMARY KEY(vaccinationID), CONSTRAINT fk_memberID FORIEGN KEY (memberID) REFERENCES Members(memberID))";

var createFamilyPlanningTableStatement = "CREATE TABLE IF NOT EXISTS FamilyPlanning (familyPlanningID int NOT NULL AUTO_INCREMENT, memberID int, PRIMARY KEY(familyPlanningID), CONSTRAINT fk_memberID FOREIGN KEY (memberID) REFERENCES Members(memberID))";


/**DROP TABLES QUERIES */
var dropMembersTableStatement = "DROP TABLE Members";
var dropUsersTableStatement = "DROP TABLE Users";
var dropCommunitiesTableStatement = "DROP TABLE Communities";
var dropOPDtableStatement = "DROP TABLE OPDs";
var dropVaccinationTableStatement = "DROP TABLE Vaccinations";
var dropFamilyPlanningTableStatement = "DROP TABLE FamilyPlanning";


/**INSERT RECORDS QUERIES */
var insertUserStatement = "INSERT INTO Users (username, pword) VALUES (?,?)";

var insertMemberStatement = "INSERT INTO Members (firstName, lastName, birthdate, age, gender, cardNumber, NHISnumber, NHISexpiry, community) VALUES (?,?,?,?,?,?,?,?,?)";

var insertCommunityStatement = "INSERT INTO Communities(name) VALUES(?)";

var insertOPDrecordStatement = "INSERT INTO OPDs (memberID) VALUES (?)";

var insertVaccinationRecordStatement = "";

var insertFamilyPlanningRecordStatement = "";


/**DELETE RECORDS QUERIES */
var deleteUserStatement = "";
var deleteMemberStatement = "";
var deleteCommunityStatement = "";
var deleteOPDrecordStatement = "";
var deleteVaccinationRecordStatement = "";
var deleteFamilyPlanningiRecordStatement = "";


/**FETCH RECORD QUERIES */
var fetchAllMembersStatement = "SELECT * FROM Members";


/**DATABASE INITIALIZATION QUERY */
function initDatabase() {
    db = window.openDatabase('yaresadb', 1.0, 'Yaresa DB', 1000000);

}

/**EXECUTE SQL FUNCTION. */
function executeSQL(query, parameters, callbackFunction) {
    db.transaction(
        function (tx) {
            tx.executeSql(query = "", parameters = [], callbackFunction);
        }
    );
}

/*CREATE TABLES FUNCTIONS*/

//function to create all tables
function createTables() {
    createUsersTable();
    createMembersTable();
    createCommunitiesTable();
    alert('created database tables');
}

//function to create users table in local database.
function createUsersTable() {
    executeSQL(createUsersTableStatement);
}

//function to create members table in local database
function createMembersTable() {
    executeSQL(createMembersTableStatement);
}

//function to create communities table in local database
function createCommunitiesTable() {
    db.transaction(
        function (tx) {
            tx.executeSql(createCommunitiesTableStatement);
        }
    )   
}

//function to create OPD records table in local database.
function createOPDtable() {
    db.transaction(
        function (tx) {
            tx.executeSql(createOPDtableStatement);
        }
    )
}

//function to create vaccination records table in local database.
function createVaccinationTable() {
    db.transaction(
        function (tx) {
            tx.executeSql(createVaccinationTableStatement);
        }
    )
}

//function to create family planning records table in local database.
function createFamilyPlanningTable() {
    db.transaction(
        function (tx) {
            tx.executeSql(createFamilyPlanningTableStatement);
        }
    )
}


/**DROP TABLES FUNCTIONS */

//function to drop tables in local database
function dropAllTables() {
    dropUsersTable();
    dropMembersTable();
    dropCommunitiesTable();
}

//function to drop users database.
function dropUsersTable() {
    db.transaction(
        function (tx) {
            tx.executeSql(dropUsersTableStatement);
        }
    )
}

//function to drop members table 
function dropMembersTable() {
    db.transaction(
        function (tx) {
            tx.executeSql(dropMembersTableStatement);
        }
    )
}

//function to drop communities table.
function dropCommunitiesTable() {
    db.transaction(
        function (tx) {
            tx.executeSql(dropCommunitiesTableStatement);
        }
    )
}

//function to drop opd records table.
function dropOPDrecordsTable() {
    executeSQL(dropOPDtableStatement);
}

//function to drop vaccination records table.
function dropVaccinationecordsTable() {
    executeSQL(dropVaccinationTableStatement);
}

/**INSERT RECORDS FUNCTIONS */
function insertMember(community, firstName, lastName, birthDate, age, cardNumber, NHIScardNum, NHISexpiryDate) {
    db.transaction(
        function (tx) {
            tx.executeSql(insertUserStatement, [firstName, lastName, birthDate, age, cardNumber, NHIScardNum, NHISexpiryDate, community], onSuccess);
            //specify callback function that indicates success, and indicates when there's a failure.
        }
    );
    alert('successfully inserted');
    fetchMembers();
}


/**DELETE RECORDS FUNCTIONS */



/**READ RECORDS FUNCTIONS */
function fetchAllUsers() {
    db.transaction(
        function (tx) {
            tx.executeSql(fetchAllUsersStatement, [], function (tx, results) {
                dataset = result.rows;
                return dataset;
            })
        }
    )
}

//function to fetch user given id.
function fetchUser(id) {
    var userid = id.toString();
    db.transaction(
        function (tx) {
            tx.executeSql()
        }
    );
}

//function to fetch all members.
function fetchMembers() {
    var result = [];
    db.transaction(
        function (tx) {
            tx.executeSql(fetchAllMembersStatement, [], function (tx, rs) {
                document.getElementById('status') = rs;

            });
        });
}

//function to delete record from 







//function to display success
function onSuccess() {
    return "inserted the user";
}
//query to be run when the page is loaded.
$(document).ready(function () {
    initDatabase();
    createTables();
}
);