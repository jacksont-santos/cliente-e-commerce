import { useNavigate } from "react-router-dom";
import { Cards } from "./styles";

const Card = (props) => {

    const navigate = useNavigate();
    const pageItem = () => {
        navigate('/product', { state: props.id })
    };

    return (
        <>
        <Cards key={props.id} onClick={pageItem}>
            <figure>
            <img src={props.img} alt="cover"></img>
            <figcaption>
                <strong>{props.nome}</strong>
            </figcaption>
            </figure>
        </Cards>
        </>
    )
}
export default Card;