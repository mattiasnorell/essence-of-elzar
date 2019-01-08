import { IngredientModel } from './IngredientModel';

export class RecipeModel {
    public id!: number;
    public title!: string;
    public description!: string|null;
    public ingredients!: IngredientModel[];
    public cookingProcedureSteps!: string[];
    public tags!: string[];
    public sourceUrl!: string;
}

