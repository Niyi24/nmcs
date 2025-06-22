import Link from "next/link";
 const page =() => {
    return (
        <div>
            <h1>Footer is working</h1>
         <Link href="/register" className="text-blue-500 hover:underline">
            Navigate for register
         Navigate for navbar
         </Link>
        </div>
    )}
    export default page;