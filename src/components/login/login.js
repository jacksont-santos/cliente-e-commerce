import axios from "axios";
import { Log } from "./styles";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import Registrar from "../register/registro";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [aberto, setAbrir] = useState(false);
  const abreModal = () => setAbrir(true);
  const fechaModal = () => setAbrir(false);

  const navigate = useNavigate();

  const Loging = async (evento) => {
    evento.preventDefault();
    const email = evento.target.email.value;
    const senha = evento.target.password.value;
    const login = {
      email,
      senha
    };
    console.log(login);

    await axios.post('/auth/login', login)
    .then(function (response) {
      const tokenValue = response.data.token;
      console.log(tokenValue);
      localStorage.setItem('token', tokenValue)
    })
    .catch(function (error) {
      console.log(error);
    });

    navigate(`/user`)
  }

  return (
    <Log>
      <form onSubmit={Loging}>
        <h1>Fazer login</h1>
        <div className="form">
          <label htmlFor="usuario">
            <strong>email:</strong>
          </label>
          <input type="text" name="email"></input>
        </div>
        <div className="form">
          <label htmlFor="senha">
            <strong>senha:</strong>
          </label>
          <input type="password" name="password"></input>
        </div>
        <div className="button">
          <button className="sucess" type="submit">
            <strong>Entrar</strong>
          </button>
          <button className="danger">
            <strong>Cancelar</strong>
          </button>
        </div>
        <hr></hr>
        <p>
          <strong> Não tem uma conta? </strong>
          <strong className="strong" onClick={abreModal}>
            Cadastre-se
          </strong>
        </p>
      </form>
      <Modal open={aberto} onClose={fechaModal} center showCloseIcon={false}>
        <Registrar modal={fechaModal} />
      </Modal>
    </Log>
  );
};
export default Login;
