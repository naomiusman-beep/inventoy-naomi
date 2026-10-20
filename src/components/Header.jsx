
// header components need appName and it does not want it via prop drilling, it will consume it from product context
// import the context
import { ProductContext } from "../context/ProductContext"  
// import the hook: useContext()
import { useContext } from "react"
// destructure want you to use from inside the context




const Header = () => {
   
    const {products} = useContext(ProductContext) // pulling out products from context

    return (
        <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Inventory</p>
                    <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Inventory Manager</h1>
                    <p className="mt-1 text-sm text-slate-500">Keep track of the products in your stock.</p>
                </div>
                <div className="inline-flex w-fit items-center gap-3 rounded-xl bg-blue-50 px-4 py-3">
                    <span className="text-sm font-medium text-blue-800">Products in stock</span>
                    <span className="rounded-lg bg-white px-3 py-1 text-lg font-bold text-blue-700 shadow-sm">{products.length}</span>
                </div>
            </div>
        </header>
    )
}

export default Header