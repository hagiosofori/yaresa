var vaccinationRecords = [];

function addNewMember(vaccine, communityMember, date){
    var vacRecord = new VaccinationRecord();
    vacRecord.vaccine = vaccine;
    vacRecord.communityMember = communityMember;
    vacRecord.date = date;

    vaccinationRecords.put(vacRecord);
}

function getAll(){
    var storedRecords = dbgetAllVaccinations();

    //still not sure what the return type of the db function is.
    storedRecords.forEach(function(record, index) {
        vaccinationRecords.put(vacRecord);
    }, this);
}