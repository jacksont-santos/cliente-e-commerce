import styled from "styled-components";

export const Item = styled.div`

    display: flex;
    margin-top: 4rem;
    margin-left: 4rem;
    margin-right: 4rem;

    img {
        width:30rem;
        height:30rem;
    }

    h2 {
        margin-bottom: 1rem;
    }

    div {
        margin-left: 3px;
        width: 100%;
        text-align: justify;
    }

    .marca {
        color: darkblue;
        margin-bottom: 2rem;
        margin-top: 1rem;
    }

    .desc {
        margin-top: 2rem;
    }
    button {
        position: absolute;
        bottom: 1;
        height: 1.5rem;
        padding: 1px;
    }
    button:hover {
        transition: 0.3ms;
        transform: scale(1.1);
    }
`;