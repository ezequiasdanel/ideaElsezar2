const CardWidget = (props) => {
    return (
<button type="button" class="btn btn-carrito" data-toggle="modal" data-target="#exampleModal">
    <i class="fas fa-shopping-cart"></i><span id="contadorCarrito">0</span>
</button>
    )
}
export default CardWidget;