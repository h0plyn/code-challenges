// Create a factory function artefact which accepts the following parameters, in the following
// order: name, age, location, status. Your function should return an immutable object whose
// keys have the same name as the names of the parameters mentioned above. There will be tests for immutability.

function artefact(name, age, location, status) {
  return Object.freeze({ name, age, location, status });
}
