export default class IceCreamMultiplier {

  public multiply(input: number): number {
    return this.multiplyByTwo(input);
  }

  private multiplyByTwo(input: number): number {
    return input * 2;
  }
}