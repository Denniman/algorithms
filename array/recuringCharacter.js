const firstRecuringCharacter = (arr) => {
  const hashmap = {};

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] in hashmap) {
      return arr[index];
    }

    hashmap[arr[index]] = arr[index];
  }
};

console.log(firstRecuringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecuringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecuringCharacter([2, 1, 3, 4]));
