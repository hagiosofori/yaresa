/**This controller is the intermediary between the Records view and the database
 * 
 */
//include the database javascript file here.


/**Function to save the details of a new member to the local database. */
function saveNewMember() {
    validate();
    document.getElementById("status").innerHTML = "success";

    /**var input = document.getElementById("new-mem-comm");
    var community = input.value;
    */

    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;

    var birthDate = document.getElementById('bdate').value;


    var age = document.getElementById('age').value;
    var cardNumber = document.getElementById('cardNum').value;

 

    var nhisCardNum = document.getElementById('nhisNum').value;
    
   
    var nhisExpiryDate = document.getElementById('nhisExpiry');
     
     document.getElementById("status").innerHTML = "alvin";
    var result = insertUser(community, firstName, lastName, birthDate, age, cardNumber, nhisCardNum, nhisExpiryDate);
document.getElementById("status").innerHTML = "ofori";
document.getElementById('status').innerHTML = result;

}

//function to clear the textboxes for a new entry
function clearFields() {
    document.getElementById("memberform").reset();
    document.getElementById("status").innerHTML = "clearFields() called";
}

//function to validate the input before saving.
function validate() {

}