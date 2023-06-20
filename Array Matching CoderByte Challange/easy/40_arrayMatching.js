export const arrayMatching = (arr) => {
  const arr1 = JSON.parse(arr[0]);
  const arr2 = JSON.parse(arr[1]);

  const minLength = Math.min(arr1.length, arr2.length);
  const maxLength = Math.max(arr1.length, arr2.length);

  const newArr = [];

  for (let i = 0; i < minLength; i++) {
    newArr.push(arr1[i] + arr2[i]);
  }

  if (minLength < maxLength) {
    const remainingArr = arr1.length > arr2.length ? arr1.slice(minLength) : arr2.slice(minLength);
    newArr.push(...remainingArr);
  }

  return newArr.join("-");
}




  



/*
read the array of strings stored in strArr which will contain only two elements,
both of which will represent an array of positive integers.

Example:
if strArr = ["[1, 2, 5, 6]", "[5, 2, 8, 11]"]''

then both elements in the input repserent two integer arrays,
and your goal for this challenge is to add the elements in corresponding
locations from both arrays.

For the example input, your program should do the following 
additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] whic then equals 
[6, 4, 13, 17].

Your program should finally return this resulting  array in a string format
with each element  separated by a hypen: 6-4-13-17 .

If the two arrays do not have the same amount of elements,
then simply append the remaining elements onto the new array
(example shown below).

Both arrays will be in the format: [e1, e2, e3, ...]
where at least one element will exist in each array.

*/