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







// let emailInput = document.querySelector('.email');
// let passwordInput = document.querySelector('.password');
// let form = document.getElementById('newsletterForm');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   validateForm();
//   register();
// });

// function validateForm() {
//   let email = emailInput.value;
//   let password = passwordInput.value;

//   if (!email) {
//     alert("Пожалуйста, введите адрес электронной почты.");
//     return;
//   }

//   if (!password) {
//     alert("Пожалуйста, введите пароль.");
//     return;
//   }

//   if (!email.includes("@gmail.com")) {
//     alert("Адрес электронной почты должен быть адресом Gmail.");
//     return;
//   }
// }

// function register() {
//   let email = emailInput.value;
//   let password = passwordInput.value;

//   // Создаем объект с данными для отправки на сервер
//   let data = {
//     email: email,
//     password: password
//   };

//   // Отправляем данные на сервер с помощью метода POST
//   fetch("/register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }