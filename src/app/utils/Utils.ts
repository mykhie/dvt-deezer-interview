export class Utils {
  static shortNumber(number: number): string {

    if (number > 1000 && number < 1000000) {
      return Math.ceil(number / 1000) + "k";
    }
    if (number > 1000000) {
      return Math.ceil(number / 1000000) + "m";
    }

    return number + '';
  }
  static dateYear(date){
    return new Date(date).getFullYear();
  }
}
