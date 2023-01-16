const doubler = array => {

};

doubler([1, 2, 3]) // [2, 4, 6]
doubler([1.2, 2.2]) // [2.4, 4.4]
doubler(['a', 2, 3]) // ['aa', 4, 6]
doubler(['', 'poop']) // ['', 'pooppoop']
doubler([1, ,3]) // [2, 6]
doubler([]) // []
doubler([1,2,3], 'hi') // [2, 4, 6]
doubler('hello') // ['hh', 'ee', 'll', 'll', 'oo']
doubler(55) // [10, 10]
doubler({a: 1, b: 2}) // [2, 4]
doubler(-1) // invalid input
doubler([Infinity, NaN]) // [Infinity, NaN]
doubler([undefined, null, true]) // [undefined, undefined, null, null, true tue]
let array = [1,2,3];
doubler([array, array]) // [array, array, array, array]
let otherArray = doubler(array);
array !== otherArray;

// ones i missed

doubler([[1], []]);                    // [[1], [1], [], []]
doubler([{ foo: 'bar' }]);             // [{ foo: "bar" }, { foo: "bar" }]
doubler([function foo() {}]);          // [function foo(), function foo()]
doubler([/abc/]);                      // [/abc/, /abc/]
doubler([1, 1, true, true, {}, {}]);   // [2, 2, true, true, true, true, {}, {}, {}, {}]
doubler('') // []

doubler(0.42);                         // "Invalid input"
doubler(Infinity);                     // "Invalid input"
doubler(NaN);                          // "Invalid input"
doubler(true);                         // "Invalid input"
doubler(false);                        // "Invalid input"
doubler(null);                         // "Invalid input"
doubler(undefined);                    // "Invalid input"
doubler(function () {});               // "Invalid input"
doubler(/abc/);                        // "Invalid input"
doubler();                             // "Invalid input"
