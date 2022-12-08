import * as React from "react";
import {useSiteMetadata } from "../Hooks/site-meta-data";



export const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <div>
        <title>{title}</title>
        <meta name="description" content={description} />
        <main>{children}</main>
        <footer className="bg-green-800 text-gray-200 text-center py-4">
            © {new Date().getFullYear()}, Built with {` `} 🤍️ by {` `} <a href="https://dereje-getu-tadesse.com" className="text-white font-medium">Dereje Getu Tadesse</a>
        </footer>
        </div>
    );
}