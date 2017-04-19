var members = [
    {
        id: 1,
        firstname: 'alvin',
        lastname: 'ofori',
        cardnumber: '12345',
        stored: 'true',
        gender: 'M',
        opdRecords: [
            {
                opdCaseID: 1,
                recordDate: '12/12/12',
                serverRecordNumber: 1,
                recorded: true,
                labReport: 'something',
            },
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
            {
                opdCaseID: 2,
                recordDate: '12/12/12',
                serverRecordNumber: 2,
                recorded: true,
                labReport: 'something',
            }
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
        text += "<tr><td>" + member.firstname + "</td><td>" + member.lastname + "</td><td>" + member.gender + "</td><td><div class='btn-group btn-group-vertical' role='group'> <button class='btn btn-primary' onclick='editMember(" + member.id + ")'>Edit</button><button class='btn btn-primary' onclick='deleteMember(" + member.id + ")'>Delete</button><button class='btn btn-primary' onclick='showDetails(" + member.id + ")'>Details</button></div></tr>";

        // text = text + "<div class='w3-card w3-blue' onclick=showDetails(" + member.id + ",'"+member.firstname + "')>" + member.firstname + ' ' + member.lastname + '</div><br>';
    }, this);
    text += '</table>';
    list.innerHTML = text;
    // console.log(text);
}


//function to get the details of the member clicked on.
function showDetails(memberid) {
    console.log('inside showDetails');

    len = members.length;
    var skip = false;
    for (var i = 0; i < len; i++) {
        if (skip){
            break;
        }
        console.log(members[i].id + ' vs. ' + memberid);
        if (members[i].id == memberid) {
            console.log('found the member');
            currentMember = members[i];
            skip = true;
            sessionStorage.setItem(1, currentMember);
        }
    }

    //    currentMember = members.forEach(function(element) {
    //        element.id == memberid;
    //        console.log(element.id +' is (not) the same as'+memberid);
    //        console.log(element.id==memberid);
    //    }, this);
    console.log('current member is ' + currentMember);

    window.location.href = "../Views/MemberDetailsView.html";
}

//function to display details of selected member in DetailsView.
// function displayDetails() {
//     //display patient's name on the page
//     var currentMember = sessionStorage.getItem(1);
//     console.log('currentMember is '+sessionStorage.getItem(1));
//     document.getElementById('username').innerHTML = currentMember.firstname + ' ' + currentMember.lastname + "'s";

//     console.log('in displayDetails with ' + currentMember.opdRecords);
//     //show the details in their respective panes.
//     var opdDiv = document.getElementById('opd');
//     var vacDiv = document.getElementById('vacrec');
//     var famDiv = document.getElementById('famplan');

//     var opdTable = "<table class='table table-striped'><tr><th>Date</th><th>Lab Report</th><th>Actions></th></tr>";

//     var vacTable = "<table class='table table-striped'><tr><th>Vaccine</th><th>Vaccine Date</th><th>Actions></th></tr>";

//     var famTable = "<table class='table table-striped'><tr><th>Service</th><th>Date</th><th>Quantity</th><th>Service Schedule</th><th>Service Type</th><th>Actions></th></tr>"

//     //filling opd values on page.
//     currentMember.opdRecords.forEach(function (element, index) {
//         opdTable += "<tr><td>" + element.recordDate + "</td><td>" + element.labReport + "</td><td><button class='btn' onclick='#'>Edit</button> <button class='btn' onclick='#'>Delete</button></td></tr>"
//     }, this);
//     opdTable += '</table>';
//     opdDiv.innerHTML = opdTable;

//     //filling vaccination details on page.
//     currentMember.vaccinationRecords.forEach(function (element, index) {
//         vacTable += "<tr><td>" + element.vaccine + "</td><td>" + element.date + "</td><td><button class='btn' onclick='#'>Edit</button> <button class='btn' onclick='#'>Delete</button></td></tr>"
//     }, this);
//     vacTable += '</table>';
//     vacDiv.innerHTML = vacTable;

//     currentMember.familyPlanningRecords.forEach(function (element, index) {
//         famTable += "<tr><td>" + element.service + "</td><td>" + element.labReport + "</td><td>" + element.date + "</td><td>" + element.quantity + "</td><td>" + element.serviceSchedule + "</td><td><button class='btn' onclick='#'>Edit</button> <button class='btn' onclick='#'>Delete</button></td></tr>"
//     }, this);
//     famTable += '</table>';
//     famDiv.innerHTML = famTable;

// }

//function to display values of the member for editing.
function editMember(memberid){
    //get the modal to display teh stuff in.

    //create the form, store in a variable, and display in teh modal.


}