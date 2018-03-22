document.querySelector(".login-form__username input").addEventListener("keyup", validateLogin);
document.querySelector(".login-form__password-repeater input").addEventListener("keyup", checkPassword);

function showError(container, errorMessage) {
    container.querySelector(".error-message") && container.querySelector(".error-message").remove();
    container.className = "error";
    let msgElem = document.createElement("span");
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function ResetError(container) {
    container.className = "";
    container.lastChild.className === "error-message" && container.removeChild(container.lastChild);
}

function validateReg(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassLength(firstPass, secondPass) {
    return /^.{6,}$/.test(String(firstPass));
}

function comparePassLength(firstPass, secondPass) {
    return firstPass === secondPass;
}

function validateLogin() {
    let parentBlock = this.parentNode;
    ResetError(parentBlock);

    !validateReg(this.value) && showError(parentBlock, "Enter a valid email");
}

function checkPassword() {
    let parentBlock = this.parentNode;
    let mainPass = document.querySelector(".login-form__password input").value;
    ResetError(parentBlock);

    !validatePassLength(mainPass, this.value) && showError(parentBlock, "Password must be more then 6 symbols");
    !parentBlock.classList.contains("error") &&!comparePassLength(mainPass, this.value) && showError(parentBlock, "Passwords don't match"); 
}