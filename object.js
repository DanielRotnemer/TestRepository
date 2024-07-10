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

var elements =
{
    "Element1": {
        "Key1": "value1",
        "Key2": "value2",
    },
    "Element2": {
        "Key1": "value1",
        "Key2": "value2",
    }
};

for (let e in elements)
    for (let k in e.Element1)
        console.log(obj[k] + ", " + e.Element1);