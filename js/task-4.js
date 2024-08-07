const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();

    const email = loginForm.elements.email.value;
    const password = loginForm.elements.password.value;

    if (email === '' || password === '') {
        return alert('All form fields must be filled in')
    }
    const dataForm = {
        email, password
    }
    console.log(dataForm);

    loginForm.reset();

}
