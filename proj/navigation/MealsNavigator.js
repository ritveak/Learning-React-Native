import {createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createStackNavigator } from 'react-navigation-stack'
const MealsNavigator = createStackNavigator({
    Categories : CategoriesScreen,
    CategoryMeals : CategoryMealScreen,
    MealDetail : MealDetailScreen

});

export default createAppContainer (MealsNavigator);