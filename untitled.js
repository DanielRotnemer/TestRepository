let obj = {
    key1: 100,
    key2: 50,
    key3: 75,
    key4: 120,
    key5: 200
};

let sum = 0;
for (let i = 1; i < 6; i++) {
    sum += obj["key" + i];
}
console.log(sum);