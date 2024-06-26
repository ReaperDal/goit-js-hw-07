const inputname = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');
inputname.addEventListener("input", (event) => {
    if(inputname.value.trim() != ""){
        span.textContent = event.currentTarget.value;
    }else{
        span.textContent = "Anonymous";
    }  
  });