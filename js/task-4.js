class User{
    email;
    password;
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
}
/**
 * Будемо враховувати, що тут все приватно. Просто в умові - вивести в консоль. 
 * Я зробив так, як я це зрозумів.
 * Звісно, можна зробити гетер і інші якісь методи, але нащо собі робити складніше, якщо
 * все відповідає умові
 */
const mainForm = document.querySelector('form.login-form');


mainForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  const user = new User(email, password);
  console.log(user);
  form.reset();
}
