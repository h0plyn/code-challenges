function adviseBefore(target, advice) {
  return function () {
    let newValue = advice(...arguments);

    if (Array.isArray(newValue)) {
      return target(newValue);
    }

    return target(...arguments);
  };
}
