let a = document.getElementById("out");
let b;

//Ha így van külön, akkor csak refresh után számolja ki?????
/*a.addEventListener("change", Szamol());

function Szamol(){
    b = document.getElementById("out").value;
    try{
        a.value = eval(b);
    }
    catch(err){
        a.value = "0";
    }
    console.log(b);
}*/

a.addEventListener("change", ()=>{
    b = document.getElementById("out").value;
    try{
        a.value = eval(b);
    }
    catch(err){
        a.value = "0";
    }
    console.log(b);
});

//ez meg a kicommentelt módon csak nem működik??????
document.getElementById("eredmeny").addEventListener("click", ()=>{
    b = document.getElementById("out").value;
    try{
        a.value = eval(b);
    }
    catch(err){
        a.value = "0";
    }
    console.log(b);
});

document.getElementById("9").addEventListener("click", ()=>{
    a.value+="9";
});

document.getElementById("8").addEventListener("click", ()=>{
    a.value+="8";
});

document.getElementById("7").addEventListener("click", ()=>{
    a.value+="7";
});

document.getElementById("6").addEventListener("click", ()=>{
    a.value+="6";
});

document.getElementById("5").addEventListener("click", ()=>{
    a.value+="5";
});

document.getElementById("4").addEventListener("click", ()=>{
    a.value+="4";
});

document.getElementById("3").addEventListener("click", ()=>{
    a.value+="3";
});

document.getElementById("2").addEventListener("click", ()=>{
    a.value+="2";
});

document.getElementById("1").addEventListener("click", ()=>{
    a.value+="1";
});

document.getElementById("0").addEventListener("click", ()=>{
    a.value+="0";
});

document.getElementById("/").addEventListener("click", ()=>{
    a.value+="/";
});

document.getElementById("torol").addEventListener("click", ()=>{
    a.value="";
});

document.getElementById("-").addEventListener("click", ()=>{
    a.value+="-";
});

document.getElementById("+").addEventListener("click", ()=>{
    a.value+="+";
});

document.getElementById("*").addEventListener("click", ()=>{
    a.value+="*";
});