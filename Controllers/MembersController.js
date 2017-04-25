
var members = [
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
                recordDate: '2012-12-12',
                serverRecordNumber: 2,
                recorded: true,
                opdCaseCategory: 'Communicable Immune',
            },
            {
                opdCaseID: 3,
                recordDate: '2015-12-15',
                serverRecordNumber: 2,
                recorded: true,
                opdCaseCategory: 'Mental health',
            }
        ],
        vaccinationRecords: [
            {
                vaccine: 'Penumococcal',
                date: '2015-12-26',

            },
            {
                vaccine: 'Vitamin A',
                date: '2016-02-14',

            }
        ],
        familyPlanningRecords: [
            {
                service: 'Vasectomy',
                date: '2017-12-07',
                quantity: '77',
                serviceSchedule: 'example service schedule',

            }  
        ],
    },
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
                recordDate: '12-12-12',
                serverRecordNumber: 1,
                recorded: true,
                labReport: 'something',
                opdCaseCategory: 'Non-communicable',
            },
        ],
        vaccinationRecords: [

        ],
        familyPlanningRecords: [
            {
                service: 'a',
                date: '2013-12-12',
                quantity: '76',
                serviceSchedule: 'dunno',
                serviceType: 'summa',
            }
        ],
    },
];

var currentMember;

//function to take member details from form and store in database.
function addMember() {
    //take and store all field values.
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var community = document.getElementById('community').value;
    var birthdate = document.getElementById('bdate').value;
    var gender = document.querySelector('input[name = "gender"]:checked').value;
    var nhisNum = document.getElementById('nhisnum').value;
    var nhisExpiry = document.getElementById('nhisExpiry').value;


    //append new member to the existing members in the table.
    //1. get the current contents of the table.
    var table = document.getElementsByClassName('table');

    row = "<tr><td>" + firstname + "</td><td>" + lastname + "</td><td>" + gender + "</td><td><div class='btn-group btn-group-vertical' role='group'><button class='btn  btn-default' onclick='showDetails()'>Details</button> <button class='btn btn-primary' onclick='editMember()'>Edit</button><button class='btn btn-danger' onclick='deleteMember(this)'>Delete</button></div></td></tr>";

    $('table').append(row);
    console.log(table);

    //reset form.
    document.getElementById('addMemberForm').reset();
}

//show all members on the records home page.
function populateMembers() {
    var text = '<table class=" table table-striped table-responsive"><tr><th> Surname </th><th> Other names </th><th> Gender </th><th> Actions</th></tr><tbody>';
    console.log('inside populateMembers');
    var list = document.getElementById('membersList');
    members.forEach(function (member, index) {
        //create table, and populate with basic info of member.
        text += "<tr><td>" + member.lastname + "</td><td>" + member.firstname + "</td><td>" + member.gender + "</td><td><div class='btn-group btn-group-vertical' role='group'><button class='btn  btn-default' onclick='showDetails(" + member.id + ")'>Details</button> <button class='btn btn-primary' data-toggle='modal' data-target='#editMember' onclick=deleteMember(this) >Edit</button><button class='btn btn-danger' onclick='deleteMember(this)'>Delete</button></div></tr>";

        // text = text + "<div class='w3-card w3-blue' onclick=showDetails(" + member.id + ",'"+member.firstname + "')>" + member.firstname + ' ' + member.lastname + '</div><br>';
    }, this);
    text += '</tbody></table>';
    list.innerHTML = text;
    // console.log(text);
}


//function to get the details of the member clicked on.
function showDetails(memberid) {
    console.log('inside showDetails');

    len = members.length;
    var skip = false;
    for (var i = 0; i < len; i++) {
        if (skip) {
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

//function to display values of the member for editing.
function editMember() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var gender = 'F';

    console.log('edited details: ' + firstname + lastname);

    row = "<tr><td>" + firstname + "</td><td>" + lastname + "</td><td>" + gender + "</td><td><div class='btn-group btn-group-vertical' role='group'><button class='btn  btn-default' onclick='showDetails()'>Details</button> <button class='btn btn-primary' onclick='editMember()'>Edit</button><button class='btn btn-danger' onclick='deleteMember(this)'>Delete</button></div></td></tr>";

    $('table').append(row);
}


//function to delete 
function deleteMember(btn) {
    var row = btn.parentNode.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//add new opd record function.

function addNewOPD() {
    var date = document.getElementById('opddate').value;
    console.log(date);
    var opdcase = document.getElementById('opdcase').value;
    var opdcasecat = document.getElementById('opdcasecat').value;

    row = "<tr><td>" + date + "</td><td>" + opdcasecat + "</td><td><div class='btn-group btn-group-vertical' role='group'><button class='btn btn-primary' onclick='editMember()'>Edit</button><button class='btn btn-danger' onclick='deleteMember(this)'>Delete</button></div></td></tr>";

    $('#opdtable').append(row);
}

//edit opd record.
function editOPD(btn) {

    var date = document.getElementById('eopddate').value;
    var opdcasecat = document.getElementById('eopdcasecat').value;
    var opdcase = document.getElementById('eopdcase').value;

    row = "<tr><td>" + date + "</td><td>" + opdcasecat + "</td><td><div class='btn-group btn-group-vertical' role='group'><button class='btn btn-primary' onclick='deleteOPD(this)' data-toggle='modal' data-target='#editopd'>Edit</button><button class='btn btn-danger' onclick='deleteMember(this)'>Delete</button></div></td></tr>";

    $('#opdtable').append(row);
}

//
function deleteOPD(btn) {
    var row = btn.parentNode.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function addVaccine() {
    var date = document.getElementById('addvacdate').value;

    var opdcase = document.getElementById('addvacvac').value;
    row = "<tr><td>" + date + "</td><td>" + opdcasecat + "</td><td><div class='btn-group btn-group-vertical' role='group'><button class='btn btn-primary' onclick='editMember()'>Edit</button><button class='btn btn-danger' onclick='deleteMember(this)'>Delete</button></div></td></tr>";

    $('#opdtable').append(row);
}


//function to display details of selected member in DetailsView.
function displayDetails(memberid) {
    //display patient's name on the page
    var currentMember = members[0];
    document.getElementById('username').innerHTML = currentMember.firstname + ' ' + currentMember.lastname + "'s";

    console.log('in displayDetails with ' + currentMember.opdRecords);
    //show the details in their respective panes.
    var opdDiv = document.getElementById('opdrecords');
    var vacDiv = document.getElementById('vacationrecords');
    var famDiv = document.getElementById('familyPlanning');

    var opdTable = "<div class=table-responsive><table id='opdtable'class='table table-striped table-responsive'><tr><th>Date</th><th>Case Category </th><th>Actions</th></tr><tbody>";

    var vacTable = "<table id=vacTable class='table table-striped table-responsive'><tr><th>Vaccine</th><th>Vaccine Date</th><th>Actions</th></tr><tbody>";

    var famTable = "<div class=table-responsive><table id=famTable class='table table-striped table-responsive'><tr><th>Service</th><th>Date</th><th>Quantity</th><th>Service Schedule</th><th>Actions</th></tr><tbody>"

    //filling opd values on page.
    currentMember.opdRecords.forEach(function (element, index) {
        opdTable += "<tr><td>" + element.recordDate + "</td><td>" + element.opdCaseCategory + "</td><td><div class='btn-group-vertical'><button class='btn btn-primary' data-target='#editopd' data-toggle='modal' onclick='deleteOPD(this)'>Edit</button><button class='btn btn-danger' onclick='deleteOPD(this)'>Delete</button></div></td></tr>"
    }, this);
    opdTable += '</tbody></table></div>';
    opdDiv.innerHTML = opdTable;

    //filling vaccination details on page.
    currentMember.vaccinationRecords.forEach(function (element, index) {
        vacTable += "<tr><td>" + element.vaccine + "</td><td>" + element.date + "</td><td><div class='btn-group-vertical'><button class='btn-primary btn' onclick='#'>Edit</button> <button class='btn btn-danger' onclick='deleteOPD(this)'>Delete</button></div></td></tr>"
    }, this);
    vacTable += '</table>';
    vacDiv.innerHTML = vacTable;

    currentMember.familyPlanningRecords.forEach(function (element, index) {
        famTable += "<tr><td>" + element.service + "</td><td>" + element.date + "</td><td>" + element.quantity + "</td><td>" + element.serviceSchedule + "</td><td><div class='btn-group-vertical'> <button class='btn btn-primary' onclick='#'>Edit</button> <button class='btn btn-danger' onclick='deleteOPD(this)'>Delete</button></div></td></tr>"
    }, this);
    famTable += '</table></div>';
    famDiv.innerHTML = famTable;

}


