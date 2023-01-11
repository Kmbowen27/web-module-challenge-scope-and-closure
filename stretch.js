function createBase(baseNum) {
	return function (num) {
		return baseNum + num;
	};
}

var addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

/* Stretch: Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming

  - Functional programming is useful when you want to have a program with a set number of entities and you want expand by adding more operations.
  - Object-oriented programming is useful when you want to have a program with a set number of operations and you want to expand by adding more entities.
*/
