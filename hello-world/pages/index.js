import Link from "next/link";


function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link href='/blog'>
                Blog
            </Link>
            <br />
            <Link href='/product'>
                Product Page
            </Link>
        </div>
    )
}

export default Home;