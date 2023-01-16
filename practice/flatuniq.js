// Write a function that takes a two-dimensional array as the argument and turns it into a flat array 
// with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, 
// and keep the one that comes first in the result.​Examples

// questions:
// what do i do if i don't get a 2d array?
// what should i do if either array is empty?
// should i always expect an array?
// shoudl i always expect 1 argment?
// should i treat falsey values differently?
// should i only expect numbers and strings?
// should i consider case when comparing strings?
// what should i do with unique numbers?
// if objects are allowed, should i compare them via their values?
// what should i do with a sparse array?
flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']