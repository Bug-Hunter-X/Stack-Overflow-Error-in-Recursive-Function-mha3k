# Stack Overflow Bug in JavaScript

This repository demonstrates a common coding error in JavaScript that leads to stack overflow errors. The bug is present in a recursive function that lacks proper termination conditions, causing infinite recursion.

## Description

The `foo` function is designed to compare two numbers (a and b).  However, the recursive calls continue indefinitely when 'a' is significantly smaller than 'b', resulting in a stack overflow.

## How to Reproduce

1. Clone this repository.
2. Open the `bug.js` file.
3. Run the code using a JavaScript environment (e.g., Node.js).
4. Observe the stack overflow error.

## Solution

The solution, found in `bugSolution.js`, adds a base case to handle the scenario where 'a' becomes greater than 'b'.