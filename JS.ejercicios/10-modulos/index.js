import {suma,multi}from "./controller.js";
 import chalk from 'chalk';
const Suma1=suma(1,2);
const Suma2=suma(4,5);

const Total=multi(Suma1,Suma2);
console.log(chalk.green(Total));