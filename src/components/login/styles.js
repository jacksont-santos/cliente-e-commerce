import styled from "styled-components";

export const Log = styled.div`
    margin-top: 6rem;
    color: rgb(3,3,68);
    padding: 10px;
    border: rgb(3,3,68) solid 3px;
    border-radius: 6px;
    width: 30rem;
    display: flex;
    justify-content: center;
    position: relative;
    left: 32%;

    h1 {
        width: 100%;
        text-align: center;
        margin-bottom: 8px;
    }

    label {
        width: 4rem;
        text-align: end;
    }
    
    input {
        background-color: whitesmoke;
        margin-bottom: 8px;
        margin-left: 3px;
        height: 100%;
        padding-left: 5px;
    }

    .sucess {
        padding: 2px 10px 2px 10px;
        border-radius: 7px;
        font-size: 1rem;
        background-color: whitesmoke
        transition: all 0.3s ease-out;
    }
    .sucess:hover {
        background-color:lawngreen;
        transform: scale(1.1);
        cursor: pointer;
    }

    .danger {
        padding: 2px 10px 2px 10px;
        border-radius: 7px;
        font-size: 1rem;
        background-color: whitesmoke
        transition: all 0.3s ease-out;
    }
    .danger:hover {
        background-color:rgb(252, 0, 0);
        transform: scale(1.1);
        cursor: pointer;
    }
    .button {
        margin: 5px;
        display: flex;
        justify-content: space-around
    }
    .cancelar {
        padding: 2px 10px 2px 10px;
        border-radius: 7px;
        font-size: 1rem;
        background-color: whitesmoke;
        transition: all 0.3s ease-out;
    }
    .cancelar:hover {
        background-color:rgb(252, 0, 0);
        transform: scale(1.1);
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 30rem;
        font-size: 20px;
    }

    .form {
        display: flex;
        margin-bottom: 2px;
    
    }
    .form input {
        width: 90%;
    }
    .strong:hover {
        color: violet;
        cursor: pointer;
    }
`;
