import { last } from "https://deno.land/x/ramda@v0.27.2/mod.ts";

/**
 * The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
 *
 * 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
 *
 * Let us list the factors of the first seven triangle numbers:
 *
 *      1: 1
 *      3: 1,3
 *      6: 1,2,3,6
 *     10: 1,2,5,10
 *     15: 1,3,5,15
 *     21: 1,3,7,21
 *     28: 1,2,4,7,14,28
 *
 * We can see that 28 is the first triangle number to have over five divisors.
 *
 * What is the value of the first triangle number to have over five hundred divisors?
 */

// function nextTriangleNumber(list: number[]): number {
//   return (list.length + 1) + last(list);
// }

function nextTriangleNumber(foo: [number, number] = [0, 0]): [number, number] {
  return [foo[0] + 1, (foo[0] + 1) + foo[1]];
}

function numDivisors(num: number): number {
  if (num % 2 != 0) {
    return -1;
  }
  const max: number = Math.floor(num / 2);
  let count = 0;
  for (let i = 2; i <= max; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  return count + 2;
}

let start = nextTriangleNumber();

while (numDivisors(start[1]) < 500) {
  start = nextTriangleNumber(start);
}

console.log(start);
