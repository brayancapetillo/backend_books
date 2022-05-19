const pool = require('../database/database');

const pool2 = require('../database/databasetwo');

const pool3 = require('../database/databasethree');

const chalk = require('chalk');

const students = {
    getUsers : async (req,res)=>{

        try{
        const result = await pool.query("select * from user");

        if(!result){
            return res.json({
                success: false,
                message: "users not found!!"
            })
        }

        return res.json({
            success: true,
            users: result,
            message: "users found!!"
        })
    }catch(e){
        console.log(chalk.red("Existe error en la base de datos 1"))
        return res.json({
            success: false,
            message: "no se pudo hacer tu consulta fallo la base de datos 1"
        })
    }
    },

    getUsers2 : async (req,res)=>{
        try{
        const result = await pool2.query("select * from user");

        if(!result){
            return res.json({
                success: false,
                message: "users not found!!"
            })
        }

        return res.json({
            success: true,
            users: result,
            message: "users found!!"
        })
    }catch(e){
        console.log(chalk.red("Existe error en la base de datos 2"))
        return res.json({
            success: false,
            message: "no se pudo hacer tu consulta fallo la base de datos 2"
        })
        
    }
    },

    getUsers3 : async (req,res)=>{
        try{
        const result = await pool3.query("select * from nat;");

        if(!result){
            return res.json({
                success: false,
                message: "users not found!!"
            })
        }

        return res.json({
            success: true,
            users: result,
            message: "users found!!"
        })
    }catch(e){
        console.log(chalk.red("Existe error en la base de datos 3"))
        return res.json({
            success: false,
            message: "no se pudo hacer tu consulta fallo la base de datos 3"
        })
    }
    }
}


module.exports = students;