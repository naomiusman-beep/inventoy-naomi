import Hero from "./mealdb_components/Hero.jsx";
import Meal from "./mealdb_components/Meal.jsx";
import { Nav } from "./mealdb_components/Nav.jsx";
import { useEffect, useState } from "react";

const MealDb = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchMeals() {
            try {
                const response = await fetch(
                    "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
                    { signal: controller.signal },
                );
                if (!response.ok) {
                    throw new Error(`Meal list request failed: ${response.status}`);
                }

                const data = await response.json();
                if (!Array.isArray(data.meals)) {
                    throw new Error("Meal list response did not contain a meal list.");
                }

                setMeals(data.meals);
            } catch (fetchError) {
                if (fetchError.name !== "AbortError") {
                    setError(true);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchMeals();
        return () => controller.abort();
    }, []);

    return (
        <div className="py-10 bg-blue-100 min-h-screen text-center">
            <h1>Welcome to MealDb</h1>

            <Nav />
            <Hero />
            <Meal error={error} loading={loading} meals={meals} />
        </div>
    );
};

export default MealDb;