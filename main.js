let demo = document.getElementById("demo");
let btn1 = document.getElementById("btn");
let zeyad = document.getElementById("zeyad");
let botn = document.getElementById("botn");
btn1.onclick = function(){
let year = document.getElementById("year").value;
  if(year==""){
    zeyad.style.display="block";
    botn.onclick = function(){
    zeyad.style.display="none";
    }
  }else{
    let num = 2024 - year;
    let num1 = 12 * num;
    let num2 = 365 * num;
    document.getElementById("demo").textContent = ' عمرك الان' + " "+num;
    document.getElementById("demo1").textContent = ' عمرك بالشهور' + " "+num1;
    document.getElementById("demo2").textContent = ' عمرك بالايام' + " "+num2;
  }
} 