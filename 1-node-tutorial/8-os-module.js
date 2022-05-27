const os = require('os')

const user = os.userInfo()
console.log(user);

console.log(`The system time is : ${os.uptime()}`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS);