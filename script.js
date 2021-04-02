const btnEntrar = document.getElementById('button-login');
const personalizado = document.getElementById('Personalizado');
const labelGender = document.getElementById('generos');
const genderCustom = document.createElement('input');
const inputForm = document.querySelectorAll('#form input');
const para = document.getElementById('para');
const btnCadastrar = document.getElementById('facebook-register');

const createGenderCustom = () => {
  labelGender.appendChild(genderCustom);
  genderCustom.name = 'gender-custom';
  genderCustom.placeholder = 'Gênero (opcional)';
};

const campoInvalido = () => {
  for (let i = 0; i < inputForm.length; i += 1) {
    if (inputForm[i].innerText === '') {
      para.innerText = 'Campos inválidos';
    }
  }
};
const alerta = () => {
  alert(`${document.getElementById('user-email-phone').value}`);
};

btnCadastrar.addEventListener('click', campoInvalido);
btnEntrar.addEventListener('click', alerta);
personalizado.addEventListener('click', createGenderCustom);
