# REGULAR EXPRESSIONS PART 2
  - a regular expression matches all matches in the string, but the function might not return all of them!
  [] is a character set - only used if you need a specific set of characters

  quantifiers:
    - * zero+
    - + 1+
    - ? 0-1
    - * or + then ? - lazy, matching as few characters as possible
    - {n, i} n-i matches
      {n} exactly n matches
      {n,} at least n matches

  # EXAMPLES:
    /w*cat\w*/ - all words that contain the word cat
    /cat/ - just matches 'cat'
    /cat\w*?
    (cat){2} - matches catcat
    (c(a|o|u)t) - matches cat cot cut

  /\w[^!?.]*?[!?.]/g
  a single word character
  0 or more any other char not-greedy (not sure why this matters here)
  a single punctuation

  # Special chars
    . - anything but a linebreak
    \s - whitespace (including tabs, spaces, linebreaks)