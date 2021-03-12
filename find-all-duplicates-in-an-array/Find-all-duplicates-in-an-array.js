const arr = [4, 3, 2, 7, 8, 2, 3, 1];
const res = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      res.push(arr[j]);
    }
  }
}
console.log(res);
