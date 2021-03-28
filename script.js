const btnEntrar = document.getElementById('button-login');
// const emailTelefone = document.getElementById('user-name-phone');
const personalizado = document.getElementById('Personalizado');
const labelGender = document.getElementById('generos');
const genderCustom = document.createElement('input');
const botao = document.getElementById('facebook-register');
const createGenderCustom = () => labelGender.appendChild(genderCustom);

function alerta() {
  alert(`${document.getElementById('user-email-phone').value}`);
}

btnEntrar.addEventListener('click', alerta);
personalizado.addEventListener('click', createGenderCustom);

function checarCampo() {
  const nome = document.getElementById('nomeLogin').value;
  const sobrenome = document.getElementById('sobrenomeLogin').value;
  const telefone = document.getElementById('telefoneLogin').value;
  const nascimento = document.getElementById('nascimentoLogin').value;
  const senha = document.getElementById('senhaLogin').value;
  const elementos = [nome, sobrenome, telefone, nascimento, senha];
  for (let index = 0; index < elementos.length; index += 1) {
    if (elementos[index] === '') {
      campo.style.display = 'flex';
      campo.innerText = 'Campos inválidos';
      break;
    }
  }
}

botao.addEventListener('click', checarCampo);
