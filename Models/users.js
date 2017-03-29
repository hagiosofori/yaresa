function User(name, pword){
    this.username = name;
    this.password = pword;

    this.validateLogin = function(){
        //check the database for a user with this.username
        getUser(this.username);
        //if there exists a user with that username, check if the passwords are the same, else return false;
        //if it is the same, return true, else return false
    };
}