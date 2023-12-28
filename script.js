const collection = new Map();

collection.set("Nathan", "555-0182");
collection.set("Jane", "555-0182");

console.log(collection.get("Nathan")); // 555-0182
console.log(collection.size); // 2

// The Map data structure is also iterable, which means you can loop over the data as follows:

const myMap = new Map();

myMap.set("Nathan", "555-0182");
myMap.set("Jane", "315-0322");
myMap.set("Jeremiah", "606-3193");
myMap.set("Toddler", "666-8008");

for (let [key, value] of myMap) {
  console.log(
    `${key} = ${value}`,
    "The key is: " + key + " and the value is: " + value
  );
}

// creating my own Hash Table

class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }
  set(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }
  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}
