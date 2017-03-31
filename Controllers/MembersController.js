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

function addMember() {

}

function populateMembers() {
    var text = '';
    console.log('inside popoulateMembers');
    var list = document.getElementById('membersList');
    members.forEach(function (member, index) {
        text = text + "<div class='w3-card w3-blue' onclick='showDetails(" + member.id + ")'>" + member.firstname + ' ' + member.lastname + '</div><br>';
    }, this);

    list.innerHTML = text;
    console.log(text);
}

//function to get the details of the member clicked on.
function showDetails(memberId) {
    text = '';
    //fetching opd records of clicked member
    clickedMemberOPDrecords = $.grep(opdRecords,function (member) {
        return member.id == memberId;
    });

    //fetching vaccination records of clicked member
    clickedMemberVaccinationRecords = $.grep(vacRecords,function (member) {
        return member.id == memberId;
    });

    //fetching family planning records of 
        clickedMemberFamilyPlanRecords = $.grep(familyPlanningRecords,function (member) {
        return member.id == memberId;
    });
    if (clickedMember!=undefined){
        
    }
}