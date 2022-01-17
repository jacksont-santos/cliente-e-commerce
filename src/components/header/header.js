import { Navbar, List1, Logo } from "./styles";
import { FaRegUser, FaUserPlus } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useState } from "react";
import Registrar from "./../register/registro";
import Search from "../search/search";
import logo from "./logo.png";


export default function Header() {
  const [aberto, setAbrir] = useState(false);
  const abreModal = () => setAbrir(true);
  const fechaModal = () => setAbrir(false);
  return (
    <>
      <Navbar>
        <Logo href="/">
          <img src={logo} alt="logo" />
          <h1>e-commerce</h1>
          </Logo>
        <Search />
        <List1>
          <li>
            <a href="/">
              <TiHome className="ico"/>
              <span>Página Inicial</span>
            </a>
          </li>
          <li>
            <a href="/login">
              <FaRegUser className="ico"/>
              <span>Login</span>
            </a>
          </li>
          <li>
            <div>
              <FaUserPlus className="ico"/>
              <span onClick={abreModal}>Criar uma Conta</span>
            </div>
          </li>
        </List1>
        <Modal open={aberto} onClose={fechaModal} center showCloseIcon={false}>
          <Registrar modal={fechaModal} />
        </Modal>
      </Navbar>
    </>
  );
}
