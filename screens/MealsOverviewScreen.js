import { useLayoutEffect } from 'react'

import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealsList from '../component/MealsList/MealsList';

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() =>{
        const categoryTitle = CATEGORIES.find((category) => category.id === catId ).title;

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    return <MealsList items={displayedMeals} />
};

export default MealsOverviewScreen;

