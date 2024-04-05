import { nanoid } from "nanoid";

type Person = {
  id: string;
  name: string;
  age: number;
};

let Jaqub: Person = {
  id: nanoid(),
  name: "Jaqub",
  age: 26,
};
let Adriaan: Person = {
  id: nanoid(),
  name: "Adriaan",
  age: 45,
};
let Pete: Person = {
  id: nanoid(),
  name: "Pete",
  age: 30,
};

const oldest = (people: Person[]): Person => {
  if (people.length === 0) throw new Error("Huston we have a Problem");
  return people.sort((a, b) => b.age - a.age)[0];
};

const people: Person[] = [Adriaan, Pete, Jaqub];

const oldestPerson = oldest(people);

