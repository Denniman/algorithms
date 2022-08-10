const formatName = (fullName) => {
  let name = "";

  const myName = fullName.split(" ").splice(0, 1);

  for (let i = 0; i < myName.length; i++) {
    name = `${name} ${myName[i][0].toUpperCase()}${myName[i]
      .substring(1)
      .toLowerCase()}`;
  }

  return name;
};

console.log(formatName("dennis terna"));
