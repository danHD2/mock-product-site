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

  

    return (
        <>
        <div className="pt-10 pl-10"><Link to="/">Home</Link></div>
        <div className="grid place-content-center text-center pb-10">
            <h1 className="text-3xl font-bold py-10">Products</h1>
            
            <div className="flex flex-col">
            {Array.isArray(products) && products.map((product) => {
                return <Link key={product.id} to={`product/${product.id}`}><div className="border my-1">{product.name}<p className="text-red-400 text-xs"> {product.stock ? "" : "Out of stock"}</p></div></Link>
            })}
            </div>


        </div>
        </>
    )
}

export default Products