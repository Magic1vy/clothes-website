function Clothes ({item}){

    return(
    <div className="products">

        {item.map(( element => {
    const {id, name, price, image} = element;

    return(
        <div className="product-card" key={id}>
            <img src={image} alt="clothes" width="300px"/>
            <div className="product-info">
                <h3>{name}</h3>
                <h4>{price}</h4>
            </div>
        </div>
    )
}
))}
    </div>
    )
}
export default Clothes;