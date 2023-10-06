//variables
const input=document.querySelector('#adder');
const taskcontainer=document.querySelector('.task');
const btn=document.querySelector('#btn');



//adding events
btn.addEventListener('click',function(){
    if (input.value===''){
        alert("The feild cannot be empty");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        taskcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="&times;";
        li.appendChild(span);
        span.addEventListener("click",function(){
            taskcontainer.removeChild(li);
        })
    }
})

