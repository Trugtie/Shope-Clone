const loginBtn = document.querySelector(".btn-login");
const registerBtn = document.querySelector(".btn-register");
const modal = document.querySelector(".modal");
const loginForm = document.querySelector(".form-login");
const registerForm = document.querySelector(".form-register");
const closeBtn = document.querySelectorAll(".close-btn");

loginBtn.addEventListener("click", () => {
  modal.classList.add("modal-show");
  loginForm.classList.add("form-show");
});

registerBtn.addEventListener("click", () => {
  modal.classList.add("modal-show");
  registerForm.classList.add("form-show");
});

for (const btn of closeBtn) {
  btn.addEventListener("click", () => {
    if (btn.parentElement.parentElement.classList.contains('form-register'))
      registerForm.classList.remove("form-show");
    else loginForm.classList.remove("form-show");
    modal.classList.remove("modal-show");
  });
}
