const Mysqli = require('mysqli');


const conn = new Mysqli({
    host : 'localhost',
    port :'3306',
    user:'root',
    passwd:'12345',
    charset:'utf8',
    // db :'fc'
});
let db = conn.emit(false, 'fc');


module.exports = db;