import { useContext } from "react";
import {ProductContext} from "../context/ProductContext"


const Products = () => {
    const {products, setProducts}= useContext(ProductContext)

    // a function that response to clicking of delete button
    function handleDelete(id){
        // send a request to an endpoint that will do the actual deletion from the database
        // remove the product with that id from your product state
        const filteredProducts = products.filter(function(prod){
            return prod.id != id
        })
        setProducts(filteredProducts)
        console.log(products);
    }

    return(
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
                <div>
                    <h2 className="text-lg font-semibold text-slate-900">Product inventory</h2>
                    <p className="mt-1 text-sm text-slate-500">A list of all products currently tracked.</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                    {products.length} {products.length === 1 ? "item" : "items"}
                </span>
            </div>
            {products.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[520px] text-left text-sm">
                        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                            <tr>
                                <th scope="col" className="px-5 py-3 font-semibold sm:px-6">#</th>
                                <th scope="col" className="px-5 py-3 font-semibold">Product name</th>
                                <th scope="col" className="px-5 py-3 font-semibold">Quantity</th>
                                <th scope="col" className="px-5 py-3 text-right font-semibold sm:px-6">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {products.map((pro, index) => (
                                <tr key={pro.id} className="transition hover:bg-slate-50">
                                    <td className="px-5 py-4 text-slate-500 sm:px-6">{index + 1}</td>
                                    <td className="px-5 py-4 font-medium text-slate-900">{pro.name}</td>
                                    <td className="px-5 py-4">
                                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700">{pro.qty}</span>
                                    </td>
                                    <td className="px-5 py-4 text-right sm:px-6">
                                        <button
                                            type="button"
                                            onClick={() => handleDelete(pro.id)}
                                            className="rounded-md px-3 py-1.5 font-medium text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300"
                                            aria-label={`Delete ${pro.name}`}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="px-5 py-12 text-center sm:px-6">
                    <p className="font-medium text-slate-700">Your inventory is empty</p>
                    <p className="mt-1 text-sm text-slate-500">Add a product above to get started.</p>
                </div>
            )}
        </section>
    )
}

export default Products