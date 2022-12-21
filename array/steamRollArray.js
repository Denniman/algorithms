/**
 @description flattens a nested array. It account for varying levels of nesting
 @params {arr} any[]
 @return flattened array
 */

  function steamrollArray(arr) {
    return arr.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
    }, []);
  }

  console.log(steamrollArray([1, [2], [3, [[4]]]]))

  console.log(steamrollArray([1, {}, [3, [[4]]]]))

  