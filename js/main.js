window.onload = function () {
    let formBTN = document.querySelector("form > button");
    formBTN.onclick = main;
};
function main() {
    isTextPresent("first-name", "First name is required.");
    isTextPresent("last-name", "Last name is required.");
}
function isTextPresent(id, errMsg) {
    let txtBox = document.getElementById(id);
    let txtBoxValue = txtBox.value;
    if (txtBoxValue == "") {
        let errSpan = txtBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
