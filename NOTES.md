# NOTES

  - Using callback functions 
    function iterate(array, callback) {
      for (let i = 0; i < array.length; i += 1) { // for each element in the Array
        callback(array[i]);                       // invoke callback and pass the element
      }
    }

  because functions are first class, it's easy to pass one around and use it to iterate through an array

  # imperative vs declarative

    declarative programming is focused on 'what am i doing', not 'how do i do it'
    CSS is declarative
    i.e.
      iterate through this array, pick out the odd numbers, then print those
    vs:
      pick out the odds, print it

  'The higher the level of abstraction that you work with, the more declarative your code is.'

  # built-in JS functions

    - forEach is preferred for iteration over loops
      it accepts a callback function as an argument
      forEach(function (element, index, array))

    - Object.entries returns an array of arrays, each containing K-V pairs from an object
    - Object.fromEntries reverses that