const button=document.getElementById("btn");
const main=document.querySelector(".maindiv");

var newno=1;


//function
var clickHandler=function()
{
    var bxval=document.querySelector(".boxno").value;
    const bxnoo=parseInt(bxval);
    // console.log(bxnoo);
    var color1=document.querySelector(".favcolor").value;
    // console.log(color1);

     let template=`<div class="box" style="background-color:${color1};visibility:visible;">${newno}</div>`;
    
     var newDiv=document.createElement("div");
     var newText=document.createTextNode("welcome");
     newDiv.appendChild(newText);
     for(let i=1;i<=bxnoo;i++)
     {
        main.innerHTML+=template;
        //console.log(newno);
        newno=newno+1;  
        var bxcnt=document.querySelector(".box").innerHTML;
        console.log(bxcnt);  
     }  
}


//event calls
button.onclick=clickHandler;