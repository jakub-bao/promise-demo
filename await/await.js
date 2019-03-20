let staffModel = require('../shared/db').staff;

async function getStaff(){
    let staff = await staffModel.find({name: 'Ben'});
    console.log(staff.name);
}

getStaff();

