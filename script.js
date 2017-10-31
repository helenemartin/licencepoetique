var a;
var b;
var c;

window.onload = function() {
  a = document.getElementsByClassName("dropdown")[0];
  console.log("hello");

  b = document.getElementsByClassName("dropdownitem")[0];
  c = document.getElementsByClassName("triangle")[0];
  a.addEventListener("click", function(){
    if (
     b.style.display === 'none'
    ){
     b.style.display = 'block'; 
    c.innerHTML = "&#x25BE;";
    }
    else {
      b.style.display = 'none'; 
      c.innerHTML = "&#x25B2;";
    }
  });
};
