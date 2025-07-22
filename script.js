const form = document.querySelector("#myForm");
const input = document.querySelector("#email");
const emailError = document.querySelector("#error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email");
   validatedEmail(email)
});   

input.addEventListener("input",(e)=>{
    hideError();
})
function validatedEmail(email) {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
    showError('Whoops! It looks like you forgot to add your email')
  } else {
    if (regex.test(email)) {
      hideError();
    } else {
      showError('Please provide a valid email address')
    }
  }
}
function showError(message){
   input.classList.add("error-email");
      emailError.textContent = message;
      emailError.style.visibility = "visible";
}
function  hideError() {
    input.classList.remove("error-email");
      emailError.style.visibility = "hidden";
}