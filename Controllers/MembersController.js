var members = [
    {
        firstname: 'alvin',
        lastname: 'ofori',
        cardnumber: '12345',
        stored: 'true',
    },
    {
        firstname: 'florence',
        lastname: 'bota',
        cardnumber: '54322',
        stored: 'false',
    }
];

function addMember(){

}

function populateMembers(){
    var text = '';
    console.log('inside popoulateMembers');
    var list = document.getElementById('membersList');
    members.forEach(function(member,index) {
        text=text+"<a href='MemberDetailsView.html'><div class='w3-card w3-blue'>"+member.firstname+' '+member.lastname+'</div></a><br>';
    }, this);
    
    list.innerHTML = text;
    console.log(text);
}