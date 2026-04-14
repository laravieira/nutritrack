import { StyleSheet, View, VirtualizedList } from 'react-native'

import { ThemedText } from '@/components/themed-text'
import MealItem from '@/components/meal-item'
import MealAddItem from '@/components/meal-add'
import { useState } from 'react'
import Button from '@/components/ui/buttom'

type ItemData = {
  id: number
  name: string
  description: string
  calories: number
};

const getItem = (_data: unknown, index: number): ItemData => index % 2 === 0 ? ({
  id: index,
  name: 'Oatmeal with berries',
  description: `2% Milk
Almonds`,
  calories: 380
}) : ({
  id: index,
  name: 'Grilled Chicken Salad',
  description: `Whole What Bread
Olive Oil Dressing`,
  calories: 450
});

export default function TabTodayScreen() {
  const [amount, setAmount] = useState(3)

  return (
    <View style={styles.container}>
      <VirtualizedList
        contentContainerStyle={styles.content}
        ListHeaderComponent={<ThemedText type="title">MEALS</ThemedText>}
        ListFooterComponent={<MealAddItem onPress={() => setAmount(amount + 1)} style={{ marginBottom: 90 }} />}
        ListEmptyComponent={<MealAddItem onPress={() => setAmount(amount + 1)} />}
        initialNumToRender={4}
        renderItem={({item}) => <MealItem name={item.name} description={item.description} calories={item.calories} />}
        keyExtractor={item => item.id.toString()}
        getItemCount={() => amount}
        getItem={getItem}/>
      <View style={styles.floatingButton}>
        <Button onPress={() => setAmount(amount + 1)}>LOG FOOD</Button>
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
