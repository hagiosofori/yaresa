var members = [
    {
        id: 1,
        firstname: 'alvin',
        lastname: 'ofori',
        cardnumber: '12345',
        stored: 'true',
    },
    {
        id: 2,
        firstname: 'florence',
        lastname: 'bota',
        cardnumber: '54322',
        stored: 'false',
    }
];

function addMember() {

}

//show all members on the records home page.
function populateMembers() {
    var text = '';
    console.log('inside popoulateMembers');
    var list = document.getElementById('membersList');
    members.forEach(function (member, index) {
        text = text + "<div class='w3-card w3-blue' onclick=showDetails(" + member.id + ",'"+member.firstname + "')>" + member.firstname + ' ' + member.lastname + '</div><br>';
    }, this);

    list.innerHTML = text;
    console.log(text);
}

var clickedMemberFamilyPlanRecords='testing', clickedMemberVaccinationRecords, clickedMemberOPDrecords, membername="";
//function to get the details of the member clicked on.
function showDetails(memberId, name) {    
    text = '';
    membername = name;
    //fetching opd records of clicked member
    var opdRecords = [], vacRecords = [], familyPlanningRecords = [];

    clickedMemberOPDrecords = $.grep(opdRecords, function (member) {
        return member.id == memberId;
    });

    //fetching vaccination records of clicked member
    clickedMemberVaccinationRecords = $.grep(vacRecords, function (member) {
        return member.id == memberId;
    });

    //fetching family planning records of 
    clickedMemberFamilyPlanRecords = $.grep(familyPlanningRecords, function (member) {
        return member.id == memberId;
    });
    
    window.location.href="../Views/MemberDetailsView.html";
}

//global variables, for accessibility across functions


function loadMemberDetailsPage(){
    document.getElementById('username').innerHTML = membername + "'s";

    console.log('loadMembers loaded'+clickedMemberFamilyPlanRecords);
}