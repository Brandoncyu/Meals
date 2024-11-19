import { useLayoutEffect } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native"

import { MEALS } from "../data/dummy-data";
import MealDetails from "../component/MealDetails";
import Subtitle from "../component/MealDetail/Subtitle";
import List from "../component/MealDetail/List";
import IconButton from "../component/IconButton";

function MealDetailScreen ({route, navigation}){
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal => meal.id === mealId))

    function headerButtonPressHandler() {
        console.log('Pressed!')
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton 
                        icon="star" 
                        color="white" 
                        onPress={headerButtonPressHandler} 
                    />
                )
            }
        })
    }, [navigation, headerButtonPressHandler])

    const mealDetails = {
        complexity: selectedMeal.complexity,
        duration: selectedMeal.duration,
        affordability: selectedMeal.affordability,
        textStyle: styles.detailText
    }

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails {...mealDetails} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 250
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        maxWidth: '80%'
    }
})