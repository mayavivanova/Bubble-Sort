export * from "./core";
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharactersCollection';


// Sort numbers array
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);


// Sort string
const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);


// Sort Linked List
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();