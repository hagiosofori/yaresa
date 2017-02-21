var idbSupported = false; //global variable to store whether indexeddb is supported by the browser.

var db; //global variable to hold the database object.


//checking if indexeddb is supported.
document.addEventListener("DOMContentLoaded", function () {
    if ("indexedDB" in window) {
        idbSupported = true;
        alert("idbSupported is active");
        checkForAlreadyExistingDB();

    } else {
        alert("db unable to load.");
    }
}, false);

/**function to check if the db has already been created.
 * This is important because, tables can only be created the first time the db is being created.
 * to make changes to the db, it must be opened with a new version number. 
 * this function opens it with a new version number, if we need to make changes to the db.
 */
function checkForAlreadyExistingDB() {
    alert("in checkForAlreadyExistingblahblah");
    if (idbSupported) {
        var request = indexedDB.open("yaresa");

        request.onsuccess = function (e) {
            console.log("running onsuccess");
            db = e.target.result;
            var version = parseInt(db.version);
            alert(parseInt(version));
            db.close();

            var secondRequest = indexedDB.open("yaresa", version + 1);
            secondRequest.onupgradeneeded = createObjectStores();
            }

        }
        request.onupgradeneeded = createObjectStores(e);

        request.onerror = function(e){
            console.log("Error");
            console.dir(e);
        }
    }


function createObjectStores() {
    console.log("creating object stores");

    if(!db.objectStoreNames.contains("members")){
        db.createObjectStore("members");
    }

    if(!db.objectStoreNames.contains("users")){
        db.createObjectStore("users");
    }

}


/** function to create objectstore for members */
function createMembersObjectStore() {

}







