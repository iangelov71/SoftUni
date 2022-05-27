function bomb(sequence, bomb) {
  let specialNumber = bomb[0];
  let bombPower = bomb[1];

  while (sequence.includes(specialNumber)) {
      let index = sequence.indexOf(specialNumber);
      let elementsToRemove = bombPower * 2 + 1;
      let startIndex = index - bombPower;

      if (startIndex < 0) {
          elementsToRemove += startIndex;
          startIndex = 0;
      }
      sequence.splice(startIndex, elementsToRemove);
  }
  console.log(sequence.reduce((a, b) => a + b, 0));
}
bomb([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2])