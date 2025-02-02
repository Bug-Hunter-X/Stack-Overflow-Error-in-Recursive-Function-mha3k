function foo(a, b) {
  if (a > b) {
    return false;
  } else if (a === b) {
    return true;
  } else {
    return foo(a + 1, b - 1);
  }
}
console.log(foo(10, 2)); // This will now work correctly