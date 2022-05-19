import { config } from "dotenv";

config();


const c = {
    database: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    port: process.env.PORT
}

const d = {
    database: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE2
    },
    port: process.env.PORT
}

const e = {
    database: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE3
    },
    port: process.env.PORT
}

module.exports = {c , d , e } ;

