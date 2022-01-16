import { ITransformer } from './hero-interface';

/**
 * Állítsd be helyesen a TransformerHero osztályt!
 * Ez az ITransformer interfészt implementálja.
 * Neve: TransformerHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class TransformerHero implements ITransformer {
    public id: number;
    public name: string;
    public photo ?: string;
    public wings: number;
    public wheels: number;
    public clan: string;

    constructor(id: number, name: string, wings: number, wheels: number, clan: string) {
        this.id = id;
        this.name = name;
        this.wings = wings;
        this.wheels = wheels;
        this.clan = clan;
    }

}
