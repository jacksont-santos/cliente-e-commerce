import styled from "styled-components";

export const Pesquisar = styled.div`
    display: flex;
    padding-top: 10px;

    input {
        padding-left: 3px;
        height: 30px;
        width: 20rem;
    }
    button {
        height: 30px;
    }
    button:hover {
        color: aqua;
        cursor: pointer;
        transition: all 500ms ease;
        background-color: white;
    }
    .icon {
        height: 30px;
        width: 25px;
    }
`;