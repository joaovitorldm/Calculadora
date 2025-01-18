var valorinicial = ""
var expressão = ""
var valorfinal = ""

function zero(){
if(expressão === ""){
valorinicial += "0"
}else{
    valorfinal +=  0
}
}
function um(){
if(expressão === ""){
valorinicial += "1"
}else{
    valorfinal += 1
}
}
function dois(){
if(expressão === ""){
valorinicial += 2
}else{
    valorfinal += 2
}
}
function três(){
if(expressão === ""){
    valorinicial += 3
}else{
    valorfinal += 3
}
}
 function quatro(){
if(expressão === ""){
valorinicial += 4
}else{
    valorfinal += 4
}
}
function cinco(){
    if(expressão === ""){
    valorinicial += 5
    }else{
        valorfinal += 5
    }
    }
function seis(){
if(expressão === ""){
valorinicial += 6
}else{
    valorfinal += 6
}
}
function sete(){
if(expressão === ""){
valorinicial += 7
}else{
    valorfinal += 7
}
}
function oito(){
if(expressão === ""){
valorinicial += 8
}else{
    valorfinal += 8
}
}
function nove(){
if(expressão === ""){
valorinicial += 9
}else{
    valorfinal += 9
}
}
function mais(){
    expressão = "+"
}
function menos(){
    expressão = "-"
}
function vezes(){
    expressão = "*"
}
function divisão(){
    expressão = "/"
}
function send(){
let resultado = eval( valorinicial + expressão + valorfinal)
    document.getElementById("resultado").innerHTML =  "= " + resultado
}
function c(){
    valorinicial = ""
    valorfinal = ""
    expressão = ""
    document.getElementById("resultado").innerHTML =  " "
}

function teste(){
   console.log(valorinicial)
    console.log(expressão)
    console.log(valorfinal) 
    console.log(resultado)
}