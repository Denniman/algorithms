class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i];
        }
      }
    }
  }
  keys() {
    const keysArray = [];
    if (this.data.length) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i]) {
          keysArray.push(this.data[i][0][0]);
        }
      }

      return keysArray;
    }
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("mangoes", 400);
myHashTable.set("potatoes", 100);
myHashTable.set("apples", 9);
myHashTable.set("oranges", 90);

console.log(myHashTable.keys());

// console.log(myHashTable.get("apples"));

// console.log(myHashTable.get("grapes"));
// console.log(myHashTable.get("apples"));
// console.log(myHashTable.get("mangoesz"));
