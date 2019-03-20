
function getUser(name){
    return queryToDb('select * from users where name like ' + name);
}

let user = await getUser('ben');
doSomething(user);
