import { StyleSheet, Text, TextInput, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { Colors } from '@/constants/theme'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import Food from '@/api/food'
import DateTimePicker from '@react-native-community/datetimepicker'
import Button from '@/components/ui/buttom'
import { Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function ModalScreen() {
  const colorScheme = useColorScheme() ?? 'light'
  const styles = useStyles(colorScheme)
  const foods = Food.getFoods()
  const router = useRouter()

  const [selectedFood, setSelectedFood] = useState<Food>()
  const [grams, setGrams] = useState(0)
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  function saveMeal() {
    if(selectedFood === undefined) return null
    if(date === undefined) return null
    if(isNaN(grams)) return null
    Food.saveMeal(selectedFood, grams, date)
    router.navigate('/')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Log Meal' }} />
      <StatusBar style="auto" />

      <Text style={styles.title}>Select the food</Text>
      <View style={styles.foodPickerContainer}>
        <Picker
          selectedValue={selectedFood}
          onValueChange={(id) => {
            const food = foods.find(food => food.id === Number(id))
            if(food === undefined) return null
            setSelectedFood(food)
          }}
          style={styles.foodPicker}
        >
          {foods.map(food => (
            <Picker.Item key={food.id} label={food.name} value={food.id} />
          ))}
        </Picker>
      </View>

      <Text style={styles.title}>Set the date</Text>
      <Button onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
        <Text style={styles.datePicker}>
          { date ? date.toLocaleDateString() : 'Open calendar' }
        </Text>
      </Button>
      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          /* @ts-ignore */
          onValueChange={(_, selectedDate) => {
            setDate(selectedDate)
            setShowDatePicker(false)
          }}
          onDismiss={() => setShowDatePicker(false)}
          accentColor={Colors[colorScheme].tint}
        />
      )}

      <Text style={styles.title}>Select the food</Text>
      <TextInput
        style={styles.input}
        placeholder="Grams"
        onChangeText={(text) => setGrams(Number.parseInt(text))}
        keyboardType="numeric"
      />

      <Button onPress={saveMeal} style={{ marginTop: 20 }}>
        LOG MEAL
      </Button>
    </SafeAreaView>
  );
}

const useStyles = (mode: 'dark' | 'light') => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors[mode].background,
    gap: 8
  },
  title: {
    color: Colors[mode].text,
    marginTop: 12,
    fontSize: 20,
    fontWeight: '500',
  },
  foodPickerContainer: {
    width: '100%',
    color: Colors.light.text,
    backgroundColor: Colors[mode].backgroundTint,
    borderRadius: 16,
    paddingHorizontal: 12,
    fontSize: 18,
    fontWeight: '500',
    height: 50,
    borderColor: Colors[mode].tint,
    borderWidth: 1,
    overflow: 'hidden'
  },
  foodPicker: {
    width: '100%',
    color: Colors.light.text,
    backgroundColor: Colors[mode].backgroundTint,
    borderRadius: 16,
    paddingHorizontal: 12,
    fontSize: 18,
    fontWeight: '500',
    height: 48,
  },
  datePicker: {
    width: '100%',
    color: Colors.light.text,
    backgroundColor: Colors[mode].backgroundTint,
    borderRadius: 16,
    paddingHorizontal: 12,
    fontSize: 18,
    fontWeight: '500',
    height: 50,
    elevation: 0,
    borderColor: Colors[mode].tint,
    borderWidth: 1,
  },
  input: {
    color: Colors.light.text,
    backgroundColor: Colors[mode].backgroundTint,
    borderRadius: 16,
    paddingHorizontal: 12,
    width: '100%',
    fontSize: 18,
    fontWeight: '500',
    height: 50,
    borderColor: Colors[mode].tint,
    borderWidth: 1,
  }
});
