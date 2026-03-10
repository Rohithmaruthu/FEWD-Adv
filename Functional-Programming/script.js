// 6 core ideas:
// 1. Pure functions — same input always gives same output, no side effects
// 2. Immutability — don't mutate data, create new data
// 3. Isolated functions — everything a function needs comes in as a parameter
// 4. Higher-Order Functions (HOFs) — functions that take or return other functions (map, filter, reduce)
// 5. Recursion — a function solving a problem by calling itself
// 6. Currying — splitting a multi-argument function into a chain of single-argument functions



// impure function — result changes depending on external state
    let total = 0;
    function addToTotal(val) {
        total += val; // touching something outside itself
        return total;
    }

// pure function — self-contained, predictable
    function add(a, b) {
        return a + b; // only uses what it's given
    }

// Immutability Example
    const user = { name: 'Arjun', age: 20 };
    // ❌ mutating — changing the original
    user.age = 21;
    // ✅ immutable — create a new object instead
    const updatedUser = { ...user, age: 21 };

    //console.log(user);        // { name: 'Arjun', age: 20 }  — untouched
    //console.log(updatedUser); // { name: 'Arjun', age: 21 }



// Higher-Order Function Example
    function multiplyBy(factor) {
        return function (num) {
            return num * factor; // returns a new function that multiplies by the factor
        }
    }

    const double = multiplyBy(2);

    //console.log(double(5)); // 10

    function addBy (a) {
        return function (b) {
            return a + b;
        }
    }

    const increment = addBy(1);
    increment(10);


// Recursion example — factorial
    function factorial(n) {
    if (n === 0 || n === 1) return 1;  // base case — stop here
    return n * factorial(n - 1);       // recursive case
    }

    factorial(5);
    // 5 * factorial(4)
    // 5 * 4 * factorial(3)
    // 5 * 4 * 3 * factorial(2)
    // 5 * 4 * 3 * 2 * factorial(1)
    // 5 * 4 * 3 * 2 * 1  → 120


// Currying example
    function add(a) {
        return function(b) {
            return function(c) {
                return a+b+c;
            } 
        }
    }

    //console.log(add(1)(2)(3));

    const arrowAdd = a => b => c => a+b+c;
    //console.log(arrowAdd(1)(3)(6));

    function calc(a) {
        return function(b){
            return function(c) {
                return (a*b)+c;
            }
        }
    }

    const arrowCalc = a => b => c => (a*b)+c;

    console.log(calc(3)(3)(1));

    console.log(arrowCalc(5)(2)(10));