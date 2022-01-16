import { IHuman } from './hero-interface';

/**
 * Állítsd be helyesen a HumanHero osztályt!
 * Ez az IHuman interfészt implementálja.
 * Neve: HumanHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class HumanHero implements IHuman {
    public id: number;
    public name: string;
    public photo ?: string;
    public sex: string;
    public age: number;
    public health: number;
    constructor(id: number, name: string, sex: string, age: number, health: number) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.health = health;
    }
}
