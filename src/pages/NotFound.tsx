import { Link } from "react-router-dom"

//ShadCN
import { Button } from "@/components/ui/button"

function NotFound() {
  return (
    <>
    <div className="flex min-h-svh flex-col items-center justify-center scale-300">
        <h1 className="scale-100 ml-5">404...</h1>
        <h2>There's no info about me here!</h2>
        <Link to={"/"}>
         <Button>Return Home?</Button>
        </Link>

    </div>
    </>
  )
}

export default NotFound 
