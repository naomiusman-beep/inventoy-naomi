import { useState, useContext } from "react";
import {ProductContext} from "../context/ProductContext"

const Create = () => {
    const {products, setProducts} = useContext(ProductContext)  // used to track product name input
    const [name, setName] = useState("")
    const [qty, setQty] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        let id = Date.now();
        setProducts([...products, {name: name.trim(), qty, id}]);
        setName("")
        setQty("")
    }

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5">
                <h2 className="text-lg font-semibold text-slate-900">Add a product</h2>
                <p className="mt-1 text-sm text-slate-500">Enter a product name and the quantity you have.</p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-[1fr_180px_auto] sm:items-end">
                <label className="block text-sm font-medium text-slate-700">
                    Product name
                    <input
                        type="text"
                        placeholder="e.g. Desk lamp"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                    Quantity
                    <input
                        type="number"
                        placeholder="0"
                        value={qty}
                        onChange={(event) => setQty(event.target.value)}
                        min="1"
                        required
                        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </label>
                <button
                    type="submit"
                    name="add_product_button"
                    className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Add product
                </button>
            </form>
        </section>
    )

}

export default Create