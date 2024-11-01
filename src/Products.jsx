import { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function Products() {
    const [products, setProducts] = useState(null);
    useEffect(()=>{
        fetch('../Data/products.json')
            .then(res => {
            return res.json()
            })
                .then(data => {
                    setProducts(data.products)
                })
    }, []);

    console.log(products)

    return (
        <>
        <div>
            <h1>Products</h1>
            <Link to="/">Home</Link>
            {Array.isArray(products) && products.map((product) => {

                return <Link key={product.id} to={`product/${product.id}`}>{product.name}</Link>
            })}


        </div>
        </>
    )
}

export default Products