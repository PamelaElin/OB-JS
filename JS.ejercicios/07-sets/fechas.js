const hoy=new Date();
const nacimiento=new Date(1992,09,21);
const comparar=hoy>nacimiento;
const día=nacimiento.getDate();
const mes=nacimiento.getMonth()+1;
const año=nacimiento.getFullYear()
console.log(año)