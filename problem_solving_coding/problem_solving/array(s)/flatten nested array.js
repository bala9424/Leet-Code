/*
Approach Taken:

maintain a finalArray to return (ex: const result = [])
for of loop to the paramArr (ex: for(let item of arr))
if the item satisfies the Array.isArray(item) then simply use the recursion technique (ex: result.push(...yourFunction(item)))
else result.push(item)

*/
function flattenRecursive(arr) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenRecursive(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// Test
const nestedArray = [1, [2, 3, [4, 5]], 6, [[7], [8, 9]]];
console.log(flattenRecursive(nestedArray)); // Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
