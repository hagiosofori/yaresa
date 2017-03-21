
/**create member object from the values, and store in database */
function storeMember() {
    console.log('running storeMember()');

    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var birthdate = document.getElementById('bdate').value;
    var serialNum = document.getElementById('cardNum').value;
    var nhisCardNum = document.getElementById('nhisNum').value;
   
    var nhisExpiry = document.getElementById('nhisExpiry').value;

    memberjson = {
        "firstname": firstname,
        "lastname": lastname,
        "birthdate": birthdate,
        "serialNum": serialNum,
        "nhisCardNum": nhisCardNum,
        "nhisExpiry": nhisExpiry,
    }
    console.log(memberjson);
    insertMember(memberjson);
}