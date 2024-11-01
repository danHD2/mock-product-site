import { useParams } from "react-router-dom/cjs/react-router-dom.min"


function Product() {
 const { id } = useParams
    return (

        <h1>Product single - { id } </h1>
    )
}

export default Product