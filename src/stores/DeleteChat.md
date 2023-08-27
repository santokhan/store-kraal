# Deleting `Chat` from `ChatList`

```javascript
const arr = [1, 2, 3, 5, 7, 8, 9];
let num = 7
let min = arr.reduce((acc, curr) => acc < curr ? acc : curr, 0); // Output 1

for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (e < num && e > min) {
        min = e
    }
}

console.log(min); // Output 6
```

We will use this formula to find out immediate smaller of deleted chat id
