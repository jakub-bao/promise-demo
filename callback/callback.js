let staffModel = require('../shared/db').staff;

staffModel.find({name: 'Ben'}, function(err, result){
   console.log(result[0]);
});