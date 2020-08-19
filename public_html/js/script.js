/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
    Created on : 17 ago. 2020, 00:11:30
    Author     : anthony
*/
document.write("Programa para determinar que un número es par <br>");
function showPar(){
    var num = parseInt(prompt("Escribe tu numero para evaluar si es par"));
    if(num>0){
        if(num % 2 === 0){  
         document.write(`<h1>El número ${num} es par</h1>`);   
         }else{
             document.write(`<h1>El número ${num} es impar</h1>`);  
         }   
     }else{
         while(num<=0){
             alert("Ingrese un número mayor a 0");
             num = parseInt(prompt("Escribe tu numero para evaluar si es par"));
         }
     }
     document.write("<hr>");
}
function showPares(){
    var num = parseInt(prompt("Escribe tu numero 1 para evaluar el intervalo"));
    var num_two = parseInt(prompt("Escribe tu numero 2 para evaluar el intervalo"));
    if(num>0 && num_two>0){
        for(num; num<=num_two; num++){
            if(num % 2 === 0){  
                document.write(`<h1>El número ${num} es par</h1>`);   
            }
        } 
     }else{
         while(num<=0){
             alert("Ingrese un número mayor a 0");
             num = parseInt(prompt("Escribe tu numero 1 para evaluar el intervalo"));
             num_two = parseInt(prompt("Escribe tu numero 2 para evaluar el intervalo"));
         }
     }
     document.write("<hr>");
 }
 function reload(){
     location.reload();
 }
 
 function showButtonShowPar(){  
    document.write('<button onclick="reload()">Evaluar si un número es par</button>');
 }
 
 function showButtonShowPares(){
     document.write('<button onclick="reload()">Evaluar en un intervalo de números, los números pares</button>');
 }
 
 //this.showPar(); 
 //this.showButtonShowPar();
 
 this.showPares();
 this.showButtonShowPares();

