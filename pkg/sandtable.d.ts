/* tslint:disable */
export enum Species {Empty,Wall,Powder,}
export class Universe {
free(): void;

 tick(): void;

 width(): number;

 height(): number;

 cells(): number;

static  new(): Universe;

}
export class Cell {
free(): void;

}