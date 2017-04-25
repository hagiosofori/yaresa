/**
 * class representing a community member
 * @param {*member's first name} fname 
 * @param {*member's last name} lname 
 * @param {*member's birth date} bdate 
 * @param {*member's gender} g 
 * @param {*member's hospital card number} cardNum 
 * @param {*member's nhis number} nhisNum 
 * @param {*member's NHIS expiry date} nhisexpiry 
 * @param {*member's birthdate is set or not} isbirthdate 
 */

function Member(fname, lname, bdate, g, cardNum, nhisNum, nhisexpiry, isbirthdate) {
    this.id = '';
    this.firstname = fname;
    this.lastname = lname;
    this.birthdate = bdate;
    this.gender = g;
    this.cardNumber = cardNum;
    this.NHISCardNum = nhisNum;
    this.NHISexpiry = nhisexpiry;
    this.hasbirthDate = isbirthdate;

    this.getAllMembers = function () {
        //fetch from the database.

        //loop over, create member from each entry, and store the member in the members array.    
    }

    //function to add new member to database.
    this.addNewMember = function(member){
        this.members.push(member);
    }

    //function to remove member from database
    this.deleteMember = function(memberid){
        //call the remove function from the indexeddb and pass the member's id.
    }
}