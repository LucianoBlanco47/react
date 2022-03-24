import Card from '../Card/Card'

const ListProducts = () => {
    let dataProduct = {
      title : "Camiseta1", 
      talle : "XL",
      price : 9000,
      stock : 10,

    }

    return(
        <div className="container-cards">

          <Card data = {dataProduct} />
          
        </div>
    )
}

export default ListProducts