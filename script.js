const btnEntrar = document.getElementById('button-login');
// const emailTelefone = document.getElementById('user-name-phone');
const personalizado = document.getElementById('Personalizado');
const labelGender = document.getElementById('generos');
const genderCustom = document.createElement('input');

const createGenderCustom = () => labelGender.appendChild(genderCustom);

function alerta() {
  alert(`${document.getElementById('user-email-phone').value}`);
} 

btnEntrar.addEventListener('click', alerta);
personalizado.addEventListener('click', createGenderCustom);
