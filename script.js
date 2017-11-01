var a;
var b;
var c;

window.onload = function() {
  a = document.getElementsByClassName("dropdown")[0];

  b = document.getElementsByClassName("dropdownitem")[0];
  c = document.getElementsByClassName("triangle")[0];
  b.style.display = 'none'; 
  a.addEventListener("click", function(){
    if (
     b.style.display === 'none'
    ){
      console.log("hello");
     b.style.display = 'block'; 
    c.innerHTML = "&#x25B2;";
    }
    else {
      b.style.display = 'none'; 
      c.innerHTML = "&#x25BE;";
    }
  });
};
