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

  # string processing functions
    String
      - .search, .match, .replace
      - match returns an array with object properties. index 0 is the match, then it has keys with other stuff
    RegExp
      - .exec, .test 

    more String methods
      - indexOf, lastIndexOf
      - replace - only first occurance unless you use /g regex i.e.
        `let state = 'Mississippi';`
        `state.replace(/s/g, 'q');  // "Miqqiqqippi"`
      - substring (seems like slice?)
        unlike slice, substring will swap the 2 arguments if a > b, slice returns ''
        slice uses negative indecies for end of string 

  # PEDAC
    *Problem*
      - take notes while parsing the problem
      - verify/refute understanding. ask questions!
      - DO NOT ASSUME ALL REQUIREMENTS ARE EXPLICIT!!
      - Extract the implicit requirements and make them explicit
        - requirements can be shown with examples or not at all!

      *TO WORK ON*
        - consider the 'bad' inputs even if the problem explicitly says otherwise
        - explicitly write down problem patterns
    
    *examples and test cases*
      - happy paths
      - edge cases
      - null, empty strings, empty arrays
      - boundary conditions
      - repeat/duplicate values
      - data specific considerations (i.e. case for strings)
      - failures and bad input

      # Writing good test cases
        - can it handle different input types?
        - are there special values that might mess it up?
          - for numbers infinity, NaN, floats
          - strings empty strings or weird strings
          - empty objects or arrays
          - sparse arrays or an array with an object property

    *data structures*
      - pick a good one - Chris like hashes a lot

    *algorithms*
      - take a step back if when you're solving it you cant figure out what to do next
      - avoid solving big problems - break into smaller!
      - try to solve a problem in 1-2 sentences
        - if you can't, raise your abstraction level
    
    # risks
      - ACTUALLY solve the problem! If you don't P/E, you risk this.
        - ALL OF PEDAC is a de-risking process
      - DON'T put off the hard part until the end! START by solving the hard part when your mental energy is highest!

  
# Study steps
  1) do the working aloud problems whenever I get the chance Y
  2) When I don't have the chance, work through regex book Y

  3) Work on asking questions - ASSUMING NOTHING
  4) IF YOU ARE GIVEN A SECOND OR THIRD PROBLEM, START PEDAC OVER!
  5) figure out HOW the algorithm is going to work before you code
      With very specific steps

# strings:
  empty strings, upper, lower, all characters

# arrays:
  empty, SPARSE, mixed content

# args
  more than, less than, different input types?

# numbers
  negative, 0, special numbers

# return values
  return if x?

# objects
  deep check?