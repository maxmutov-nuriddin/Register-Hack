let emailInput = document.querySelector('.email');
let passwordInput = document.querySelector('.password');
let btn = document.querySelector('.btn');
let form = document.getElementById('newsletterForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();
  Regis()
  postData()
  register();
});

function validateForm() {
  let emailInput = document.querySelector('.email');
  let passwordInput = document.querySelector('.password');

  let email = emailInput.value;
  let password = passwordInput.value;

  if (!email) {
    alert("Пожалуйста, введите адрес электронной почты.");
    return;
  }

  if (!password) {
    alert("Пожалуйста, введите пароль.");
    return;
  }

  if (!email.includes("@gmail.com")) {
    alert("Адрес электронной почты должен быть адресом Gmail.");
    return;
  }
}

function register() {
  passwordInput.value = "";
  emailInput.value = "";
}

async function postData() {
  let teacherData = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  await request.post("register", teacherData);

  console.log(teacherData);
}
