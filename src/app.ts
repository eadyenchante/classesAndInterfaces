interface Named {
    
}

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "eady",
  age: 40,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
};

user1.greet('hiya - I am');
