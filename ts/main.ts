window.onload = function(){
    //set up onlick for register button
    let formBTN = <HTMLElement>document.querySelector("form > button");
    formBTN.onclick = main;
}

function main(): void{
    alert("reg button was clicked");
}