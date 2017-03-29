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
        }

    }

}

/** function to create object stores in indexed database */
function createObjectStores(e) {
    db = e.target.result;
    console.log("creating object stores");

    if (!db.objectStoreNames.contains("members")) {
        db.createObjectStore("members", { autoIncrement: true });
    }

    if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { autoIncrement: true });
        db.createIndex("username", "username", {unique:true});
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
function dbinsertMember(memberjson) {
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
function dbgetAllMembers() {
    var transaction = db.transaction(["members"], "readonly");
    var objectStore = transaction.objectStore("members");
    var result = objectStore.openCursor();

    
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

    return membersjson;
}

/*function to get a user given a username */
function dbgetUser(username){
    var results = db.transaction(["users"], "readonly").objectStore("users").get(username);

    results.onsuccess = function(e){
        return results;
    }
}













