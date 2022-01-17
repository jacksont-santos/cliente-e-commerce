import styled from "styled-components";

export const Prof = styled.div`
    margin-top: 5rem;
    color: whitesmoke;

    div {
        background-color: rgb(1, 1, 46);
    }
    
    h1 {
        margin-left: 3px;
    }

    span {
        margin-right: 20px;
    }

    button {
        position: absolute;
        right: 10px;
        padding: 3px;
        border-radius: 7px;
        margin-top: 15px;
    }
    button:hover {
        transition: 300ms;
        transform: scale(1.1);
        background-color: rgb(1, 1, 46);
        color: whitesmoke;
        cursor: pointer;
    }
`;