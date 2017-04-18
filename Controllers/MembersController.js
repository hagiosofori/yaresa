var members = [
    {
        id: 1,
        firstname: 'alvin',
        lastname: 'ofori',
        cardnumber: '12345',
        stored: 'true',
        gender: 'M',
        opdRecords: [

        ],
        vaccinationRecords: [

        ],
        familyPlanningRecords: [

        ],
    },
    {
        id: 2,
        firstname: 'florence',
        lastname: 'bota',
        cardnumber: '54322',
        stored: 'false',
        gender: 'F',
        opdRecords: [

        ],
        vaccinationRecords: [

        ],
        familyPlanningRecords: [

        ],
    }
];

var currentMember;

function addMember() {

}

//show all members on the records home page.
function populateMembers() {
    var text = '<table class=" table table-striped"><tr><th> First name </th><th> Last name </th><th> Gender </th><th> Actions</th></tr>';
    console.log('inside popoulateMembers');
    var list = document.getElementById('membersList');
    members.forEach(function (member, index) {
        //create table, and populate with basic info of member.
        text += "<tr><td>"+member.firstname+"</td><td>"+member.lastname+"</td><td>"+member.gender+"</td><td><div class='btn-group btn-group-vertical' role='group'> <button class='btn-primary' onclick='editMember("+member.id+")'>Edit</button><button class='btn-primary' onclick='deleteMember("+member.id+")'>Delete</button><button class='btn-primary' onclick='showDetails("+member+")'>Details</button></div></tr>";

        // text = text + "<div class='w3-card w3-blue' onclick=showDetails(" + member.id + ",'"+member.firstname + "')>" + member.firstname + ' ' + member.lastname + '</div><br>';
    }, this);
    text+='</table>';
    list.innerHTML = text;
    console.log(text);
}


//function to get the details of the member clicked on.
function showDetails(member) {    
    currentMember = member;
    
    window.location.href="../Views/MemberDetailsView.html";
}

//function to display details of selected member in DetailsView.
function displayDetails(){
    //show the details in their respective panes.
    var opdDiv = document.getElementById('opd');
    var vacDiv = document.getElementById('vacrec');
    var famDiv = document.getElementById('famplan');

    var opdTable = "<table class='table table-striped'><tr><th>Date</th><th>Lab Report</th></tr>";

    var vacTable = "<table class='table table-striped'><tr><th>Vaccine</th><th>Vaccine Date</th></tr>";

    var famTable = "<table class='table table-striped'><tr><th>Service</th><th>Date</th><th>Quantity</th><th>Service Schedule</th><th>Service Type</th></tr>"
    
    //filling opd values on page.
    currentMember.opdRecords.forEach(function(element, index) {
        opdTable += "<tr><td>"+element.recordDate+"</td><td>"+element.labReport+"</tr>"    
    }, this);
    opdTable += '</table>';
    opdDiv.innerHTML = opdTable;

    //filling vaccination details on page.
    currentMember.vaccinationRecords.forEach(function(element, index) {
        vacTable += "<tr><td>"+element.vaccine+"</td><td>"+element.date+"</tr>"    
    }, this);
    vacTable += '</table>';
    vacDiv.innerHTML = vacTable;

    currentMember.familyPlanningRecord.forEach(function(element, index) {
        famTable += "<tr><td>"+element.service+"</td><td>"+element.labReport+"<td>"+element.date+"</td><td>"+element.quantity+"</td><td>"+element.serviceSchedule+"</td><td></tr>"    
    }, this);
    famTable += '</table>';
    famDiv.innerHTML = famTable;

}

//global variables, for accessibility across functions


function loadMemberDetailsPage(){
    document.getElementById('username').innerHTML = membername + "'s";

    console.log('loadMembers loaded'+currentFamilyPlanRecords);
}