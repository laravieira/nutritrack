import { StyleSheet, View, VirtualizedList } from 'react-native'

import { ThemedText } from '@/components/themed-text'
import FoodItem from '@/components/food-item'
import MealAddItem from '@/components/meal-add'
import Food from '@/api/food'

export default function TabTodayScreen() {
  const foods = Food.getFoods()

  return (
    <View style={styles.container}>
      <VirtualizedList
        contentContainerStyle={styles.content}
        ListHeaderComponent={<ThemedText type="title">FOODS</ThemedText>}
        ListFooterComponent={<View style={{ marginBottom: 90 }} />}
        ListEmptyComponent={<MealAddItem onPress={() => null} />}
        initialNumToRender={4}
        renderItem={({item}: {item: Food}) => <FoodItem food={item} />}
        keyExtractor={item => item.id.toString()}
        getItemCount={() => foods.length}
        getItem={(_, index) => foods.at(index) as Food}/>
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
