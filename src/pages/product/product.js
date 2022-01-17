import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Item } from './styles';


const Prod = () => {

    const state = useLocation();
    const id = state.state;

    const [item, setItem] = useState({});
    const [mounted, setMounted] = useState(false);

    const dados = async () => {
        await axios.get(`/products/product/${id}`)
        .then(response => {
          setItem(response.data)
        })
      };

      useEffect(() => {
        setMounted(true)
        dados()
      }, [mounted]);

      const addList = async() => {
        const token = localStorage.token;
        const config = {
          headers: { Authorization: `Bearer ${token}`}
        };
    
        await axios.patch(`/addList/${id}`, '', config)
        .then(response => {
          const res = response;
          console.log(res);
        })
        .catch(response => {
            const res = response;
            console.log(res);
        })
      };

    return (
        <Item>
            <img src={item.imagemUrl} alt="imagem"/>
            <div>
                <h2>{item.nome}</h2>
                <hr/>
                <p className='marca'>Marca: {item.marca}</p>
                <h3>R$ {item.preco}</h3>
                <h4> Parcela em {item.pagamento}</h4>
                <br/>
                <hr/>
                <p className='desc'><strong>Sobre este item</strong><br/><br/>{item.descricao}</p>
            </div>
            <button onClick={addList}> Adicionar ao carrinho</button>
        </Item>
    )

}
export default Prod;