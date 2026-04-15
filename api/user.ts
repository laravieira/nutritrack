import data from '../assets/json/user.json';

export default class User {
  public static calories: number = data?.calories ?? 0
  public static protein: number = data?.protein ?? 0
  public static carbohydrates: number = data?.carbohydrates ?? 0
  public static fats: number = data?.fats ?? 0
}