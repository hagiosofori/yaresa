
/* link to the tutorial on how to use the framework: https://www.codeproject.com/articles/438028/a-new-javascript-wrapper-library-for-html-s-index */


var idbSupported = 0; //global variable to store whether indexeddb is supported by the browser.

var db; //global variable to hold the database object.


//checking if indexeddb is supported.
document.addEventListener("DOMContentLoaded", function () {
    if ("indexedDB" in window) {
        idbSupported = idbSupported + 1;
        console.log("idbSupported is active");
        checkForAlreadyExistingDB();

    } else {
        console.log("db unable to load.");
    }



}, false);

/**function to check if the db has already been created.
 * This is important because, tables can only be created the first time the db is being created.
 * to make changes to the db, it must be opened with a new version number. 
 * this function opens it with a new version number, if we need to make changes to the db.
 */

function checkForAlreadyExistingDB() {
    console.log("in checkForAlreadyExistingblahblah");
    if (idbSupported == 1) {
        var request = indexedDB.open("yaresa");

        request.onsuccess = function (e) {
            console.log("running onsuccess");
            db = e.target.result;
            var version = parseInt(db.version);
            console.log(parseInt(version));
            db.close();

            var secondRequest = indexedDB.open("yaresa", version + 1);
            secondRequest.onupgradeneeded = function (e) {
                createObjectStores(e);
            }
        }

        request.onupgradeneeded = function (e) {
            createObjectStores(e);
        }

        request.onerror = function (e) {
            console.log("Error");
            console.dir(e);
            alert("Database error!" + e.target.errorCode);
        }

    }

}

/** function to create object stores in indexed database */
function createObjectStores(e) {
    db = e.target.result;
    console.log("creating object stores");

    if (!db.objectStoreNames.contains("members")) {
        db.createObjectStore("members", { autoIncrement: true })
            .createIndex();
    }

    if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { autoIncrement: true });
    }

}



/**function to insert community member into database.
 * @param: json object representation of community member.
 * member object has the following properties.
 *   : community [number, foreign key (community table)]
        : first name [text]
        : last name [text]
        : birth date [date]
        : gender [male or female]
        : card number [number ,primary key]
        : NHIS card number [number, primary key]
        : expiry date of NHIS [date]
        : isbirthdate 
 */
function insertMember(memberjson) {
    console.log("insertMember called");

    var transaction = db.transaction(["members"], "readwrite");
    console.log(transaction);
    var store = transaction.objectStore("members");

    var request = store.add(memberjson);

    request.onerror = function (e) {
        console.log("Error", e.target.error.name);
        console.log("Unable to save member");
    }

    request.onsuccess = function (e) {
        console.log("Success");
        console.log("Added new member");
    }

    alert(JSON.stringify(memberjson));
}

/**function to fetch community members from database 
 * @returns json object representing members.
*/
function getMembers() {

    var transaction = this.db.transaction(["members"], "readonly");
    var objectStore = transaction.objectStore("members");
    var results = objectStore.getAll();

    results.onsuccess = function (e) {
        console.log(results.result);
        return results.result;

    }
    /* var result = objectStore.openCursor();
 
     
     var membersjson; //variable to hold the json object to be returned
     result.onsuccess = function (e) {
         var cursor = e.target.result;
         membersjson = "[";
 
         //looping through and creating json object from fields
         if (cursor) {
             membersjson += "{"+cursor.key;
             for (var field in cursor) {
                 membersjson += '\"field\":' + cursor[field] + ",";
             }
             membersjson += "}";
 
         }
         cursor.continue();
 
         membersjson + "{" + "\"key\":\"" + cursor.key + "\",firstname\":\"" + cursor.firstname + "\"}";
         cursor.continue;
     }
     membersjson = membersjson + "]";
     
     
     document.getElementById("status").innerHTML = membersjson;
 
     return membersjson; */

}

function getUser(username, password) {
    var transaction = db.transaction(["users"], "readonly").objectStore("users");
    var results = objectStore.get(1);

    results.onsuccess = function (e) {
        console.log(results);
        return results.result;

    }
}

/*function to add user to database */
function addUser(username, pword){
    var user = {
        name: 'alvin',
        password: 'alvin',
    }

    var transaction = db.transaction(["users"], "readwrite").objectStore("users").add(user);
    console.log(user +'done recording...');
}












