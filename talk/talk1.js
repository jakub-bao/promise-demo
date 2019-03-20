
// queryToDb is oldschool library and uses call-backs
function getUser(name, cb){
    queryToDb('select * from users where name like ' + name, function(err, result){
        cb(err, result[0]);
    });
}

getUser('ben', function(err, user){
    if (err) send404Back();
    doSomething(user);
});