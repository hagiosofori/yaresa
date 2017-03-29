/**
 * class representing a user object.
 * @param {*the user's username} name 
 * @param {*the user's password} pword 
 */

function User(name, pword) {
    this.username = name;
    this.password = pword;

    this.validateLogin = function () {
        //check the database for a user with this.username
        var user = dbgetUser(this.username);
        //if there exists a user with that username, check if the passwords are the same, else return false;
        //if retrieved password is the same as user's current password, return true, else return false
        if (user != undefined && (user.password == this.password)) {
            return true;
        } else {
            return false;
        }

    };
}