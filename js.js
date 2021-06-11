console.log("welcome to the calculator ");

let screeninput  = document.getElementById('answer');
let screenvalue ="";

let button = document.querySelectorAll('button');
for(items of button ){
    items.addEventListener('click',(e)=>{
        buttontext = e.target.innerText;
        console.log("You cicked the Button: " + buttontext);
        if(buttontext == 'X'){
            buttontext = '*';
            screenvalue += buttontext;
            screeninput.value = screenvalue;
        }
        else if (buttontext == '='){
            //then i have to so the evaluation
            screeninput.value = eval(screenvalue);
            
        }
        else if (buttontext == 'AC'){
            screenvalue ="";
            screeninput.value = screenvalue;
        }
        else if (buttontext == 'DEL'){
           screenvalue = screenvalue.substring(0, screenvalue.length-1);
        //    console.log(screenvalue);
           screeninput.value = screenvalue; 
        //    console.log(screeninput);
      console.log(screenvalue);    
    }
        else {
            screenvalue += buttontext;
            screeninput.value = screenvalue;
        }
    })
}
