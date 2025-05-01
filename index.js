let rad;
const pi=3.14;
let Circum;
document.getElementById(`b1`).onclick=function(){
    rad = Number(document.getElementById('rad').value);
    Circum= 2*pi*rad;
    document.getElementById(`ans`).innerHTML=`The Circumtance is ${Circum}`;
}
