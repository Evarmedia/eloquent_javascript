function loop(startValue, testFunction, updateFunction, bodyFunction) {
    for (let value = startValue; testFunction(value); value = updateFunction(value)) {
      bodyFunction(value);
    }
  }
  
  loop(3, n => n > 0, n => n - 1, console.log);
  // → 3
  // → 2
  // → 1