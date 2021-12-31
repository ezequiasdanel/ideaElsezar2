const CardWidget = (props) => {
    return (
<button type="button" className="btn btn-carrito" data-toggle="modal" data-target="#exampleModal">
    <i className="fas fa-shopping-cart"></i><span id="contadorCarrito"></span>
</button>
    )
}
export default CardWidget;