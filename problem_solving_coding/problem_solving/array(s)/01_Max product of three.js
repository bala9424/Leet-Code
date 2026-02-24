
//approach 
/*
To get the maximum product of 3 numbers, there are only two possible best cases:

Three largest positive numbers
Example: [2, 5, 10, 20] → 20 × 10 × 5

Two very small (negative) numbers + one largest positive
Because: negative × negative = positive
Example: [-100, -5, 10, 2] → (-100) × (-5) × 10 = 5000 (bigger!)

So the answer is always:

max( largest1 × largest2 × largest3 , smallest1 × smallest2 × largest1 )
*/
function maxProductOfThree(nums) {
  if (nums.length < 3) {
    throw new Error("Array must have at least 3 numbers");
  }

  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;
  let min1 = Infinity, min2 = Infinity;

  for (let n of nums) {
    // Update max1, max2, max3
    if (n > max1) {
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (n > max2) {
      max3 = max2;
      max2 = n;
    } else if (n > max3) {
      max3 = n;
    }

    // Update min1, min2
    if (n < min1) {
      min2 = min1;
      min1 = n;
    } else if (n < min2) {
      min2 = n;
    }
  }

  const product1 = max1 * max2 * max3;
  const product2 = min1 * min2 * max1;

  return Math.max(product1, product2);
} 

console.log(maxProductOfThree([1, 10, -5, 1, -100]));
// Output: 5000  -> (-100 * -5 * 10)
console.log(maxProductOfThree([1, 2, 3, 4]));
// Output: 24 -> (4 * 3 * 2)
