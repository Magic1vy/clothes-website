function Buttons({filteredClother}){
    return(
        <div className="cont">
            <button className="change" onClick = {() => filteredClother("dress")}>Dresses</button>
            <button className="change" onClick = {() => filteredClother("skirt")}>Skirts</button>
            <button className="change" onClick = {() => filteredClother("pants")}>Pants</button>
            <button className="change" onClick = {() => filteredClother("shoes")}>Shoes</button>
            <button className="change" onClick = {() => filteredClother("shirt")}>Shirts</button>
        </div>
    )
}
export default Buttons;