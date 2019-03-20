
//queryToDb is a newer library and uses promises
function getUser(name){
    return queryToDb('select * from users where name like ' + name);
}

getUser('ben').then(function(user){
    doSomething(user);
}).catch(function(){
    send404Back();
});
