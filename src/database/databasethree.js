const mysql = require('mysql');
const { promisify } = require('util');
const chalk = require('chalk');

// const { database } = require('./../config');

const {e} = require('./../config')


var data = e.database;

const pool3 = mysql.createPool(data);

pool3.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    
    if (connection){
        connection.release();
        console.log(chalk.hex('#655DDB').bold("DB ")+chalk.hex('#FA3055').bold(`${data.database}`)+chalk.hex('#655DDB').bold(" is connected "))
    }else{
        console.log(chalk.bgHex('#000').hex("#fff").bold("La base de datos ") + chalk.bgHex("#000").hex("#00EBAE").bold(`${data.database} `)+chalk.bgHex('#000').hex("#fff").bold("no existe o existe un problema de conexion "))
    } 
    

    return;
});

// Promisify Pool Query
pool3.query = promisify(pool3.query);

module.exports = pool3;
