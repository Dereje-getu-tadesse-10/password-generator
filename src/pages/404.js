import * as React from "react"
import { Link } from "gatsby"

const Error = () => {
    return (
        <>
            <head>
                <title>Page Not Found</title>
            </head>
            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold text-center text-gray-700">
                        Oups! il semblerait que cette page n'existe pas.
                    </h1>
                   <button
                        className="bg-gray-600 text-white py-2 px-4 rounded-full mt-4 mx-auto block"
                   >
                         <Link to="/">
                            Retourner à la page d'accueil
                        </Link>
                   </button>
                </div>
            </div>
        </>
    )
}

export default Error