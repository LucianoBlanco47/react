import Card from '../Card/Card'

const ListProducts = () => {

    return(
        <div className="container-cards">

          <Card title="Camiseta1" talle="XL" price={9000} />
          <Card title="Camiseta2" talle="S"  price={7000} />
          <Card title="Camiseta3" talle="M"  price={6500} />
          <Card title="Camiseta4" talle="L" price={6500} />
        </div>
    )
}

export default ListProducts