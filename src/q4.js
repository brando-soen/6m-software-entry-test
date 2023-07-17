/*
    Task 1: 
    - Implement a Child class that extends the Parent.
    - Add a constructor to the Child class can calls super().
    - Implement a new function addNewAbilities(newAbility) in the Child class where the new ability will be added to the Parent's #abilities array.     
*/
class Parent {
    abilities = [];

    constructor() {
        this.abilities.push("Parenting");
        this.abilities.push("Role modeling");
    }

    showAbilities() {
        console.log("These are the abilities:");
        for (const a of this.abilities) {
            console.log(a);
        }
    }
}

class Child extends Parent {
    constructor() {
        super();
    }

    addNewAbility(newAbility) {
        this.abilities.push(newAbility);
    }
}

const p = new Parent();
p.showAbilities(); // Prints "Parenting" and "Role modeling".

const c = new Child();
c.addNewAbility("Dancing");
c.showAbilities(); // Prints "Parenting", "Role modeling", and "Dancing".
