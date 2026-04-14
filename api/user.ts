import data from '../assets/json/user.json';

export default class User {
  public static kcal: number = data?.kcal ?? 0
  public static protein: number = data?.protein ?? 0
  public static carbs: number = data?.carbs ?? 0
  public static fat: number = data?.fat ?? 0
}