import styled from "styled-components";

export const Navbar = styled.header`
  height: 3.5rem;
  background-color: rgb(1, 1, 46);
  color: whitesmoke;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  width: 100%;
  z-index:1;
`;

export const Logo = styled.a`
  display: flex;
  text-decoration: none;
  color: whitesmoke;

  img {
    width: 4rem;
    height: 100%;
    background-color: whitesmoke;
    border-radius: 15px;
  }

  h1 {
    padding-top: 6px;
    margin-left: 5px;
  }
`;

export const List1 = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;

  li {

    padding-top: 10px;

    a {
      text-decoration: none;
      color: whitesmoke;
      font-weight: 1000;
      padding: 0 1rem;
      font-size: 1.2rem;
      display: flex;
      align-items: center;

      span {
        padding: 0 0.2rem;
        color: whitesmoke;
      }

      .ico {
        height: 30px;
        width: 17px;
      }

      &:hover {
        color: aqua;
        cursor: pointer;
        transition: all 500ms ease;
        
      }
    }

    div {
      text-decoration: none;
      color: whitesmoke;
      font-weight: 1000;
      padding: 0 1rem;
      font-size: 1.2rem;
      display: flex;
      align-items: center;

      span {
        padding: 0 0.2rem;
        color: whitesmoke;
      }

      .ico {
        height: 30px;
        width: 17px;
      }

      &:hover {
        color: aqua;
        cursor: pointer;
        transition: all 500ms ease;
      }
    }
  }
`;
