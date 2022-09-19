function pairElement(str) {
  const stringArr = str.split("");
  const pairedArr = [];

  for (const char of stringArr) {
    switch (char) {
      case "G":
        pairedArr.push(["G", "C"]);
        break;
      case "C":
        pairedArr.push(["C", "G"]);
        break;
      case "A":
        pairedArr.push(["A", "T"]);
        break;
      case "T":
        pairedArr.push(["T", "A"]);
        break;
      default:
        return null;
    }
  }

  return pairedArr;
}

console.log(pairElement("GCG"));
console.log(pairElement("GCG")); //[["G", "C"], ["C","G"], ["G", "C"]]
console.log(pairElement("ATCGA")); //[["G", "C"], ["C","G"], ["G", "C"]]
console.log(pairElement("CTCTA")); //[["G", "C"], ["C","G"], ["G", "C"]]
