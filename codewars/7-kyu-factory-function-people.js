const person = (
  firstName,
  lastName,
  age,
  gender,
  employed,
  occupation,
  married
) => {
  return {
    firstName,
    lastName,
    age,
    gender,
    employed,
    occupation,
    married,

    sayName() {
      return `${this.firstName} ${this.lastName}`;
    },

    introduce() {
      return `Hello, my name is ${this.firstName} ${this.lastName}.  I am ${this.age} years old.  I am a ${this.gender}.`;
    },
  };
};
