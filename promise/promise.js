let staffModel = require('../shared/db').staff;

staffModel.find({name: 'Ben'}).then(function(result){
    console.log(result[0]);
});