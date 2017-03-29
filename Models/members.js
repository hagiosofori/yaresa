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
    this.firstname = fname;
    this.lastname = lname;
    this.birthdate = bdate;
    this.gender = g;
    this.cardNumber = cardNum;
    this.NHISCardNum = nhisNum;
    this.NHISexpiry = nhisexpiry;
    this.hasbirthDate = isbirthdate;

    this.getAllMembers = function () {
        
    }
}