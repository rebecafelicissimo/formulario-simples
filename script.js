const form = document.querySelector('#form')
const userName = document.querySelector('#userName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#passwordConfirmation')

form.addEventListener('submit', function (e) {
  e.preventDefault() // para não enviar o formulário

  checkInputs()
})

function checkInputs() {
  // pegar os valores dos inputs e armazenar em variáveis
  const userNameValue = userName.value
  const emailValue = email.value
  const passwordValue = password.value
  const passwordConfirmationValue = passwordConfirmation.value

  if (userNameValue === '') {
    setErrorFor(userName, 'O nome de usuário é obrigatório.')
  } else {
    setSuccessFor(userName)
  }

  if (emailValue === '') {
    setErrorFor(email, 'O email é obrigatório.')
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, 'Por favor digite um e-mail válido.')
  } else {
    setSuccessFor(email)
  }

  if (passwordValue === '') {
    setErrorFor(password, 'A senha é obrigatória.')
  } else if (passwordValue.length < 7) {
    setErrorFor(password, 'A senha deve ter no mínimo 7 caracteres.')
  } else {
    setSuccessFor(password)
  }

  if (passwordConfirmationValue === '') {
    setErrorFor(passwordConfirmation, 'A confirmação de senha é obrigatória.')
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, 'As senhas não estão iguais.')
  } else {
    setSuccessFor(passwordConfirmation)
  }

  const formControls = form.querySelectorAll('.form-control')
  const formIsValid = [...formControls].every(formControl => {
    return formControl.className === 'form-control success'
  }) // [... formControls] é um NodeList

  if (formIsValid) {
    console.log('O formulário está 100% válido!')
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  //Adicionar a mensagem de erro
  small.innerText = message

  // Adicionar a classe de erro
  formControl.className = 'form-control error'
}

function setSuccessFor(input) {
  const formControl = input.parentElement

  //Adicionar a classe de sucesso
  formControl.className = 'form-control success'
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )
}

// Mostrar e Ocultar a senha
const getPasswordInput = document.getElementById('password')
const openEye = document.getElementById('openEye')
const closeEye = document.getElementById('closeEye')

function showOrHidePassword() {
  const inputTypePassword = getPasswordInput.type === 'password'

  if (inputTypePassword) {
    showPassword()
  } else {
    hidePassword()
  }
}

/* Quando eu quiser que a senha apareça */
function showPassword() {
  getPasswordInput.setAttribute('type', 'text')

  /* O olho aberto irá ficar invisível */
  openEye.classList.add('hide')

  /* O olho fechado irá ficar visível */
  closeEye.classList.add('show')
}

/* Quando eu quiser que a senha volte a ficar com as bolinhas */
function hidePassword() {
  getPasswordInput.setAttribute('type', 'password')
  /* O olho fechado irá ficar invisível */
  closeEye.classList.remove('show')

  /* O olho aberto irá ficar visível */
  openEye.classList.remove('hide')
}

// Olhinho confirmação de senha
const getPasswordConfirmationInput = document.getElementById(
  'passwordConfirmation'
)

function showOrHidePasswordConfirmation() {
  const inputTypePasswordConfirmation =
    getPasswordConfirmationInput.type === 'password'

  if (inputTypePasswordConfirmation) {
    showPasswordConfirmation()
  } else {
    hidePasswordConfirmation()
  }
}

// /* Quando eu quiser que a senha apareça */
function showPasswordConfirmation() {
  getPasswordConfirmationInput.setAttribute('type', 'text');

  /* O olho aberto irá ficar invisível */
  openEyeConfirmation.classList.add('hide');

  //   /* O olho fechado irá ficar visível */
  closeEyeConfirmation.classList.add('show');
}

// /* Quando eu quiser que a senha volte a ficar com as bolinhas */
function hidePasswordConfirmation() {
  getPasswordConfirmationInput.setAttribute("type", "password");
  /* O olho fechado irá ficar invisível */
  closeEyeConfirmation.classList.remove("show");

  /* O olho aberto irá ficar visível */
  openEyeConfirmation.classList.remove("hide");
}
