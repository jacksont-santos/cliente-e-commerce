import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../card/card";
import { Listando } from "./styles"

const Listar = () => {

  const [listaItem, setListItem] = useState([]);

  const Lista = async () => {
    await axios.get("/products/listitem").then(function (response) {
      console.log(response);
      setListItem(response.data);
    });
  };
  useEffect(() => {
    Lista();
  }, []);

  return (
    <Listando>
      {
        listaItem.map((item) => (
            <Card   key={item.id}
                    id={item.id}
                    nome={item.nome}
                    preco={item.preco}
                    pagamento={item.pagamento}
                    img={item.imagemUrl}
                    descricao={item.descricao}
                    marca={item.marca}/>
        ))
      }
    </Listando>
  );
}
export default Listar
