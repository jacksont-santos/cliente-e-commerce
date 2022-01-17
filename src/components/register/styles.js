import styled from "styled-components";

export const Cad = styled.div`
    
    color: rgb(3,3,68);
    padding: 10px;
    border: rgb(3,3,68) solid 3px;
    border-radius: 6px;
    width: 35rem;
    display: flex;
    justify-content: center;

    h1 {
        width: 100%;
        text-align: center;
        margin-bottom: 8px;
    }
    
    input {
        background-color: whitesmoke;
        margin-bottom: 8px;
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
    }
    div {
    margin: 5px;
    display: flex;
    justify-content: space-between;
}
.cancelar {
    padding: 2px 10px 2px 10px;
    border-radius: 7px;
    font-size: 1rem;
    background-color: whitesmoke
    transition: all 0.3s ease-out;
}
.cancelar:hover {
    background-color:rgb(252, 0, 0);
    transform: scale(1.1);
}

    form {
        display: flex;
        flex-direction: column;
        width: 30rem;
        font-size: 20px;
    }
`;