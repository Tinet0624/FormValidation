window.onload = function(){
    //set up onlick for register button
    let formBTN = <HTMLElement>document.querySelector("form > button");
    formBTN.onclick = main;
}

function main(): void{
    validateTxtInput();

}
/**
 * // Return true if the text boxes with the 
 * given ID has some text inside it.
 * @param id the id of the <input type="text"> to validate.
 * @param errMsg message to display in the sibling span of the textbox
 * @returns true or false
 */
function validateTxtInput(id:string, errMsg:string):boolean{

    let txtBox = <HTMLInputElement>document.getElementById(id);
    let txtBoxValue = txtBox.value;

    if(txtBoxValue == ""){
        let errSpan = <HTMLElement>txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}