import {Monster, MonsterTuple, MonsterType, SuperMonster} from "./models/monsterTypes";

const monster1: Monster = {
    firstName: "Zorg",
    age: 500,
    type: MonsterType.Undead,
    moreInfo: "Terrifies People."
}
const monster2: Monster = {
    firstName: "Blobbo",
    age: 3,
    type: MonsterType.Blob,
    moreInfo: "Absorbs everything in sight"
}
const monster3: Monster = {
    firstName: "Alice ",
    lastName: "Smith",
    age: 28,
    type: MonsterType.Human,
    moreInfo: "Does monster research."
}
const monster4: SuperMonster = {
    firstName : "Vlad",
    age : 1000,
    type : MonsterType.Human,
    moreInfo : "Shape Shifter: bats, rats, and cats",
    powerLevel : 100
}

console.log(monster1)
console.log(monster2)
console.log(monster3)
console.log(monster4)

const monsters : Monster[] = [monster1,monster2,monster3,monster4];
console.log(monsters);
const monsterData : MonsterTuple = ["Vlad", 1000, "Undead"];
console.log(monsterData)