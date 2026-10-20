import { useEffect, useState } from "react";
import { ProductContext } from "./ProductContext.jsx";

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(() => {
        const storedProducts = localStorage.getItem("products");
        return storedProducts ? JSON.parse(storedProducts) : [];
    });

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
};
