g
import { Card, Spinner } from "flowbite-react";

const Meal = ({error, loading, meals}) => {
  return (

    <>
    <h1 className="text-center text-3xl py-5 font-extrabold">Latest Meal Category</h1>
    <div className="grid gap-4 px-5 py-10 bg-amber-50 sm:grid-cols-2 lg:grid-cols-3">
        {
            loading && !error && <Spinner aria-label="Loading ingredients" size="xl" />
        }
        {
            error && <p role="alert" className="col-span-full text-red-700">Could not load ingredients. Please try again later.</p>
        }
        {
            !error && !loading && meals.length === 0 && <p className="col-span-full">No ingredients were found.</p>
        }
        {
            !error && !loading && meals.map(function(meal){
                return(
                    <Card
      key={meal.idIngredient}
      className="max-w-sm"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {meal.strIngredient}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Browse recipes made with {meal.strIngredient}.
      </p>
                    </Card>
                )
            })
        }
    </div>
    </>
    
  )
}

export default Meal;