import Link from "next/link";

function ProductList({ productId = 100 }) {
    return (
        <>
            <Link href='/'>Home</Link>
            <h2><Link href='/product/1'>P1</Link></h2>
            <h2><Link href='/product/2'>P2</Link></h2>
            <h2><Link href='/product/3' replace>P3</Link></h2>
            <h2><Link href={`/product/${productId}`}>P{productId}</Link></h2>
        </>
    )
}

export default ProductList;