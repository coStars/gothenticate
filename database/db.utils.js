const table = require('./sql.js');

function createTable(client, cb) {
    const tables = `${table.users} ${table.sessions}`
    client.query(tables, cb);

    /*
query sentence to insert into table
cb the error
  */
}
const userData = {
    username: "user",
    email: "email",
    password: "password"
};

function insert(client, table, data, cb) {
    const d = conversion(data);
    const query = `INSERT INTO ${table} ${d}`
    client.query(query, (errSelect, result) => {
        if (errSelect) {
            console.log("errINSERT", errINSERT);
            cb(errINSERT);
        }
    });

}

function select(client, table, condition, cb) {
    const query = `SELECT * FROM ${table} WHERE ${condition};`
    client.query(query, (errSelect, result) => {
        if (errSelect) {
            console.log("errSelect", errSelect);
            cb(errSelect);
        }
        cb(undefined, result.rows);
    });

}
function update(client, table, data, condition, cb) {
    const d =conversionUPDATE(data);
        const query = `UPDATE  ${table} SET ${d} WHERE ${condition};`
    client.query(table.updateUser, cb);
  }
function conversion(data) {
    const columns = arraytoString(Object.keys(data));
    const values = arraytoString(Object.keys(data).map((elm) => data[elm]))
    return `(${columns}) values (${values})`;
}

function conversionUPDATE(data) {
    const columns = arraytoString(Object.keys(data), Object.keys(data).map((elm) => data[elm]));
    return `${columns}`;
}
function arraytoString(array, array2) {
    return array.reduce(function(prev, curr, index) {
        prev += (curr + "=" + `'${array2[index]}'`);
        if (index < array.length - 1) {
            prev += ', ';
        }
        return prev;
    }, '');
}
function arraytoString(array) {
    return array.reduce(function(prev, curr, index) {
        prev = prev + curr
        if (index < array.length - 1) {
            prev = prev + ', ';
        }
        return prev;
    }, "");
}
module.exports = {
    createTable: createTable,
    insert: insert,
    select: select,
    update: update
}
