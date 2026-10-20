import Header from "./components/Header"
import Create from "./components/Create"
import Products from "./components/Products"
import Footer from "./components/Footer" 


const App = () => {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <Create />
        <Products />
      </main>
      <Footer />
    </div>
  )
}
export default App