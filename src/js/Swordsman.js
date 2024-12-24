import Character from './character';

export default class Swordsman extends Character {
    constructor(name, type, level) {
        super(name, type, level)
        this.attack = 40,
        this.defence = 10

    }
}