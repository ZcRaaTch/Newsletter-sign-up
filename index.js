const form = document.querySelector("[data-js-form]");
const temp = document.querySelector("[data-js-temp]");
const wrapper = document.querySelector("[data-js-wrapper]");

function isValid(str){
//     let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

//     return regex.test(str);
return str.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function finalState(event){
    event.preventDefault();
    const email = form.querySelector("#email");
    const valid = isValid(email.value);
    if(!valid){
        document.querySelector(".error").classList.toggle("hidden");
        document.querySelector("input").classList.toggle("hidden-input");
    }
    if(valid){
    wrapper.innerHTML=temp.innerHTML;
    
    document.getElementById("mailed").textContent=email.value;
    }
}


form.addEventListener("submit", finalState);


