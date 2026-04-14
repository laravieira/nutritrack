import { StyleSheet, View, VirtualizedList } from 'react-native'

import { ThemedText } from '@/components/themed-text'
import MealItem from '@/components/meal-item'
import MealAddItem from '@/components/meal-add'
import Button from '@/components/ui/buttom'
import Food from '@/api/food'

export default function TabTodayScreen() {
  const foods = Food.getFoods()

  return (
    <View style={styles.container}>
      <VirtualizedList
        contentContainerStyle={styles.content}
        ListHeaderComponent={<ThemedText type="title">FOODS</ThemedText>}
        ListFooterComponent={<MealAddItem onPress={() => null} style={{ marginBottom: 90 }} />}
        ListEmptyComponent={<MealAddItem onPress={() => null} />}
        initialNumToRender={4}
        renderItem={({item}: {item: Food}) => <MealItem name={item.name} description={item.description} calories={item.calories} />}
        keyExtractor={item => item.id.toString()}
        getItemCount={() => foods.length}
        getItem={(_, index) => foods.at(index) as Food}/>
      <View style={styles.floatingButton}>
        <Button onPress={() => null}>LOG FOOD</Button>
      </View>
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
  },
  floatingButton: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 32,
    left: 0,
    right: 0,
  }
});
