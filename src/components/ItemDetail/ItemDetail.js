import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({id, name, img, category, description, price, stock}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
    }

    return (
        <article className="detail">
            <header>
                <h2>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section className="description">
                <p>Categoria: {category}</p>
                <p>Descripción: {description}</p>
                <p>Precio: $ {price}</p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;