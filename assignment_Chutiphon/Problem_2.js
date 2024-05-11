function maxProtectedChickens(n, k, positions) {
  let maxChickens = 0;
  let left = 0;
  let right = 0;

  while (right < n) {
      if (positions[right] - positions[left] <= k-1) {
          maxChickens = Math.max(maxChickens, right - left + 1);
      } else {
          left++;
      }
      right++;
  }
  return maxChickens;
}

console.log(maxProtectedChickens(5, 5, [2, 5, 10, 12, 15]));
console.log(maxProtectedChickens(6, 10, [1, 11, 30, 34, 35, 37]));

