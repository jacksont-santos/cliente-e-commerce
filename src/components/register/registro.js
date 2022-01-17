import axios from "axios";
import { Cad } from "./styles";

const Registrar = (props) => {

  const modal = props.modal;


  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const nome = evento.target.name.value;
    const email = evento.target.email.value;
    const nascimento = evento.target.nascimento.value;
    const senha = evento.target.password.value;
    const confirmacao = evento.target.confirmacao.value;
    const imageUrl = evento.target.imageUrl.value;

    const novoUsuario = {
      nome,
      email,
      nascimento,
      senha,
      confirmacao,
      imageUrl,
    };

    await axios
      .post("/user/create", novoUsuario)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      modal();
  };

  const esvaziar = () => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let birthdate = document.getElementById("birthdate");
    let password = document.getElementById("password");
    let passwordConfirmation = document.getElementById("confirmacao");
    let imageUrl = document.getElementById("imageUrl");
    name.value = "";
    email.value = "";
    birthdate.value = "";
    password.value = "";
    passwordConfirmation.value = "";
    imageUrl.value = "";
  };

  return (
    <Cad>
      <form onSubmit={handleSubmit}>
      <h1>Registre-se</h1>
        <label htmlFor="name">
          <strong>Nome</strong>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" Digite seu nome"
          required
        />
        <label htmlFor="email">
          <strong>Email</strong>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder=" Digite seu email"
          required
        />
        <label htmlFor="nascimento">
          <strong>Data de nascimento</strong>
        </label>
        <input
          type="date"
          name="nascimento"
          id="nascimento"
          placeholder=" Digite sua data de nascimento"
          required
        />
        <label htmlFor="password">
          <strong>Senha</strong>
        </label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder=" Digite a senha"
          required
        />
        <label htmlFor="confirmacao">
          <strong>Confirmação</strong>
        </label>
        <input
          type="text"
          name="confirmacao"
          id="confirmacao"
          placeholder=" Digite a senha novamente"
          required
        />
        <div>
          <button type="submit" className="sucess">
            <strong>Confirmar</strong>
          </button>
        </div>
        <div>
          <button type="button" className="danger" onClick={esvaziar}>
            <strong>Apagar tudo</strong>
          </button>
          <button type="button" className="cancelar" onClick={modal}>
            <strong>Cancelar</strong>
          </button>
        </div>
      </form>
    </Cad>
  );
};

export default Registrar;