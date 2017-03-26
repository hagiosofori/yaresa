//all DOM objects used in this file.







//linking to database.js file.
var database = document.createElement('script');
database.src = '../Models/indexeddb.js';
document.head.appendChild(database);



/**This controller is the intermediary between the Records view and the database
 * 
 */


/**Function to save the details of a new member to the local database. */
function saveNewMember() {
    validate();
    document.getElementById("status").innerHTML = "success";

    /**var input = document.getElementById("new-mem-comm");
    var community = input.value;
    */
    var community = document.getElementById('community').value;
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;

    var birthDate = document.getElementById('bdate').value;


    var age = document.getElementById('age').value;
    var cardNumber = document.getElementById('cardNum').value;

 

    var nhisCardNum = document.getElementById('nhisNum').value;
    
   
    var nhisExpiryDate = document.getElementById('nhisExpiry');
     
     document.getElementById("status").innerHTML = "alvin";
    
   
    //compose json object out of the details, and send to indexeddb.js for storage in database.
}

//function to clear the textboxes for a new entry
function clearFields() {
    document.getElementById("memberform").reset();
    document.getElementById("status").innerHTML = "clearFields() called";
}

//function to validate the input before saving.
function validate() {

}

//function to populate community member records table with values from the database.

//2. in a loop, fill the fields with the values, and attach them to the table object. and then display it on the page.
function displayMembers(table){
    //1. get values from database. 

}
