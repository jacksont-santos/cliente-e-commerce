import { Prof } from "./styles";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./../card/card";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({});
  const [logado, setLogado] = useState(false);
  const [prod, setProd] = useState([]);

  useEffect(() => {
    if (localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios.get("/auth/profile", config).then((response) => {
        setUsuario(response.data);
        setLogado(true);
      });

      axios.get("/userList", config).then((response) => {
        console.log(response);
        setProd(response.data.produtos);
      });
    }
  }, [logado]);

  const handleLogoff = () => {
    localStorage.removeItem("token");
    navigate('user');
  };

  return (
    <Prof>
      {logado ? (
        <>
        <div>
          <span>
            <strong>Email:</strong> {usuario.email}
          </span>
          <span>
            <strong>Nome:</strong> {usuario.nome}
          </span>
          <span>
            <strong>Data de Nascimento:</strong> {usuario.nascimento}
          </span>
          <span>
            <strong>Membro desde:</strong> {usuario.createdAt}
          </span>
          <button onClick={handleLogoff}><h1>Sair</h1></button>
          
          <br/><br/>
          <h1> Lista de desejos</h1>
          </div>
          <hr/>
          <br/><br/>
          {prod.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              nome={item.nome}
              preco={item.preco}
              pagamento={item.pagamento}
              img={item.imagemUrl}
              descricao={item.descricao}
              marca={item.marca}
            />
          ))}
        </>
      ) : (
        <>
          <h2>Sem dados do perfil, faça login</h2>
        </>
      )}
    </Prof>
  );
};
export default Profile;
