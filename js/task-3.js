const textInput = document.querySelector('#name-input')
const textName = document.querySelector('#name-output')
textInput.addEventListener('input', (event) => {
    if (event.target.value === '') {
        textName.textContent = 'Anonymous'
    }
    else {
        textName.textContent = event.target.value
    }

})
