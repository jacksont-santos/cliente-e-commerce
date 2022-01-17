import { Pesquisar } from "./styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {IoMdSearch} from "react-icons/io";

export default function Search() {
  const navigate = useNavigate();

  async function EventListener() {
    var lista = [];
    await axios.get("/products/listitem").then(function (response) {
      lista = response.data;
    });

    const inputValue = document.getElementById("myInput");
    const value = inputValue.value;
    var item = {};
    lista.map((res) => {
      if (res.nome === value) {
        item = res;
      }
      return item;
    });
    navigate(`/product`, {state: item.id});
  }

  return (
    <Pesquisar>
      <input placeholder="Buscar" id="myInput" type="text"></input>
      <button type="button" onClick={EventListener}>
        <IoMdSearch className="icon"/>
      </button>
    </Pesquisar>
  );
}
