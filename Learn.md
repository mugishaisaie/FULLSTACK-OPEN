
Hello,
This was the section of Building turning full working one page project into Baby steps by grouping controllers,models,routes ...

- Testing the blog project


deepStrictEqual
Required when comparing objects

### Lodash Library


#### ✅ What is Lodash?

Lodash is a JavaScript utility library that gives you ready-made helper functions to work with:

Type of Data	Examples of Lodash Features
Arrays	Sorting, filtering, removing duplicates
Objects	Cloning, merging, picking keys, deep comparison
Strings	Changing case, trimming, repeating
Functions	Debouncing, throttling, memoizing
Collections	= arrays, objects, maps

It helps you write cleaner, shorter, faster, and less error-prone code.

✅ Why Developers Use Lodash
Without Lodash
const numbers = [1,2,3,4,5]
const doubled = numbers.map(n => n * 2)

With Lodash
const doubled = _.map(numbers, n => n * 2)


✔ Clean
✔ Consistent
✔ Works for arrays, objects, array-like, etc.

📦 How to Install Lodash
Node.js Project
npm install lodash

Import in Code
const _ = require("lodash")

Frontend (browser)
<script src="https://cdn.jsdelivr.net/npm/lodash/lodash.min.js"></script>

🧠 Core Concept: Lodash Naming

All methods are under one variable:

_.methodName()


Example:

_.max([2, 5, 7, 1]) // → 7

🚀 Now We Start Learning by Categories

We will cover:

Array Utils

Object Utils

Collection Utils

Function Utils (Very Important in Frontend Apps)

String Utils

Deep Clone / Deep Compare

Real Projects Scenarios

We go step by step.

1) ARRAY METHODS
1.1 _.chunk — split array into groups
_.chunk([1,2,3,4,5], 2)
// → [[1,2],[3,4],[5]]

1.2 _.compact — remove falsey values

(falsey = false, null, 0, "", undefined, NaN)

_.compact([0, 1, false, 2, "", 3])
// → [1, 2, 3]

1.3 _.uniq — remove duplicates
_.uniq([1,2,2,3,1,4])
// → [1,2,3,4]

1.4 _.flattenDeep — flatten nested arrays
_.flattenDeep([1, [2, [3, [4]]]])
// → [1,2,3,4]

2) OBJECT METHODS
2.1 _.pick — select specific properties
const user = { name: "John", age: 25, role: "admin" }
_.pick(user, ["name", "role"])
// → { name: "John", role: "admin" }

2.2 _.omit — remove properties
_.omit(user, ["role"])
// → { name: "John", age: 25 }

2.3 _.merge — deep merge objects
_.merge({a: {b: 1}}, {a: {c: 2}})
// → { a: { b: 1, c: 2 } }

3) COLLECTION METHODS (Works on Arrays & Objects)
3.1 _.groupBy
_.groupBy([6.1, 4.2, 6.3], Math.floor)
// → { 6: [6.1, 6.3], 4: [4.2] }

3.2 _.sortBy
_.sortBy([{age:30},{age:10},{age:20}], "age")
// → [{age:10},{age:20},{age:30}]

4) FUNCTION HELPERS (Very useful in React)
4.1 _.debounce

Wait until user stops typing (Useful in search bars):

const search = _.debounce((text) => {
  console.log("Searching:", text);
}, 400);

search("a");
search("ab");
search("abc");
// Only logs: "Searching: abc"

4.2 _.throttle

Run function at most once per time interval.

Used in scroll, resize events.

5) STRING HELPERS
_.kebabCase("Hello World") // → "hello-world"
_.capitalize("mugisha")    // → "Mugisha"
_.upperCase("hello world") // → "HELLO WORLD"

6) Deep Clone & Deep Compare
Deep Clone (copy object deeply)
const newObj = _.cloneDeep(obj)

Deep Equal
_.isEqual(obj1, obj2)

🎯 REAL WORLD EXAMPLE (Rwanda Context)

Imagine you query database users:

const users = [
  {name:"Mugisha", role:"student"},
  {name:"Isaie", role:"student"},
  {name:"Claude", role:"teacher"}
]

Group by role:
_.groupBy(users, "role")


Result:

{
  student: [
    {name:"Mugisha", role:"student"},
    {name:"Isaie", role:"student"}
  ],
  teacher: [
    {name:"Claude", role:"teacher"}
  ]
}


This is