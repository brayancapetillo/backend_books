import app from './app';
const chalk = require('chalk');

const main=()=>{

    app.listen(app.get("port"));

    console.log(chalk.hex('#0CFFF6').bold("server on port") + chalk.hex("#7851FF").bold(" => ")  + chalk.hex('#00EBAE').bold(app.get("port")));
    // console.log(`server on port ${app.get("port")}`);
};

main();