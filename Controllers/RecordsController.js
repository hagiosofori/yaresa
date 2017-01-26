/**This controller is the intermediary between the Records view and the database
 * 
 */
//include the database javascript file here.


/**Function to save the details of a new member to the local database. */
function saveNewMember(){
    validate();

    var community = "";
    var firstName = "";
    var lastName = "";
    var birthDate = "";
    var age = "";
    var cardNumber = "";
    var nhisCardNum = "";
    var nhisExpiryDate = "";

    var result = insertUser(community, firstName, lastName, birthDate, age, cardNumber, nhisCardNum, nhisExpiryDate);

    alert(result + "!");
}

//function to clear the textboxes for a new entry
function clearFields(){

}

//function to validate the input before saving.
function validate(){
    $("input").value="";
}