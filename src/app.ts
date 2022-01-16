// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from './hero';
import { TransformerHero } from './transformer';

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
    new HumanHero(1, 'Pistike', 'male', 10, 100),
    new HumanHero(2, 'Józsika', 'female', 20, 100),
    new HumanHero(3, 'Ó hát én', '5 times a week', 30, 50),
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [
    new TransformerHero(1, 'Transformer1', 0, 4, 'clan1'),
    new TransformerHero(2, 'Transformer2', 2, 0, 'clan2'),
    new TransformerHero(3, 'Transformer3', 4, 4, 'clan1'),
];
