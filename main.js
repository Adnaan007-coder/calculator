// display in calculator screen

function displayContent(content){
    console.log(content);
    
    result.value += content
}


// clear data

function Clearcalcscreen(){
    result.value=""
}

// backspace

function removeCalc(){
    result.value= result.value.slice(0,-1)
}

// Evualtion

function callout(){
    result.value = eval(result.value )
}