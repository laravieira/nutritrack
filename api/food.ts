import foods_data from '../assets/json/foods.json';
import history_data from '../assets/json/history.json';

type Meal = {
  id: number
  date: string
  food: number
  grams: number
}

export default class Food {
  private static foods = Array.isArray(foods_data)
    ? foods_data.map((food) => new Food().fromJSON(food as Food))
    : []
  private static history = Array.isArray(history_data)
    ? history_data as unknown as Meal[]
    : [] as Meal[]

  public id: number = 0
  public name: string = ''
  public description: string = ''
  public kilo_calories_per_gram: number = 0
  public protein_per_gram: number = 0
  public carbohydrates_per_gram: number = 0
  public fats_per_gram: number = 0

  public history_id: number = 0
  public calories: number = 0
  public protein: number = 0
  public carbohydrates: number = 0
  public fats: number = 0
  public date: Date | null = null

  public static getFoods() {
    return this.foods
  }

  public static getMeals({ start, end }: { start?: Date, end?: Date } = {}) {
    const foods = this.getFoods()
    if(foods.length === 0) return []

    return this.history.map((meal) => {
      if(start && new Date(meal.date) < start) return undefined
      if(end && new Date(meal.date) > end) return undefined

      const food = foods.find((food) => food.id === meal.food)

      const item = food ? new Food().fromJSON(food) : undefined
      if(!item) return undefined

      item.setAmount(meal.grams)
      item.date = new Date(meal.date)
      item.history_id = meal.id

      return item
    }).filter(item => item !== undefined)
      .sort((a, b) => b.date!.getTime() - a.date!.getTime())
  }

  public static saveMeal(food: Food, grams: number, date: Date = new Date()): Food {
    const meal = Object.assign({}, food)
    this.history.unshift({
      id: this.history.length + 1,
      date: date.toISOString(),
      food: food.id,
      grams: grams
    })
    return meal
  }

  public static saveFood(food: Food): Food {
    this.foods.push(food)
    return food
  }

  private fromJSON(json: Food) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.kilo_calories_per_gram = json.kilo_calories_per_gram
    this.protein_per_gram = json.protein_per_gram
    this.carbohydrates_per_gram = json.carbohydrates_per_gram
    this.fats_per_gram = json.fats_per_gram
    return this;
  }

  public setAmount(grams: number) {
    this.calories = this.kilo_calories_per_gram * grams
    this.protein = this.protein_per_gram * grams
    this.carbohydrates = this.carbohydrates_per_gram * grams
    this.fats = this.fats_per_gram * grams
  }
}