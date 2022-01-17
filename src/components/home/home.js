import React from "react";
import { Main } from "./styles";
import Listar from "../list/list";

const Home = () => {

  return (
    <Main>
      <h1>Produtos em Destaque</h1>
      <Listar/>
    </Main>
  );
};
export default Home;
