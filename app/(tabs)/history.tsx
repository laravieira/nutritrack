import { StyleSheet, View, VirtualizedList } from 'react-native'

import { ThemedText } from '@/components/themed-text'
import FoodItem, { FOOD_VARIANT } from '@/components/food-item'
import MealAddItem from '@/components/meal-add'
import Food from '@/api/food'

export default function TabTodayScreen() {
  const meals = Food.getMeals()

  return (
    <View style={styles.container}>
      <VirtualizedList
        contentContainerStyle={styles.content}
        ListHeaderComponent={<ThemedText type="title">HISTORY</ThemedText>}
        ListFooterComponent={<MealAddItem onPress={() => null} style={{ marginBottom: 90 }} />}
        ListEmptyComponent={<MealAddItem onPress={() => null} />}
        initialNumToRender={4}
        renderItem={({item}: {item: Food}) => <FoodItem food={item} variant={FOOD_VARIANT.MEAL} />}
        keyExtractor={item => item.history_id.toString()}
        getItemCount={() => meals.length}
        getItem={(_, index) => meals.at(index) as Food}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  content: {
    padding: 16,
    gap: 16,
  }
});
