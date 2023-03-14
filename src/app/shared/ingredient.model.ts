export enum UnitOfMeasure {}

export class Ingredient {
  constructor(
    public name: string,
    public amount: number,
    public unit: UnitOfMeasure
  ) {}
}
