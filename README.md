# spaced-out-math
This takes math strings and parses then using spaces as boundaries instead of order of operations

## To use

Install with npm or download script. 

The npm module exports a function that parses a string and takes in options dictating various properties. 

The script version gives a global spaceOutMath that does the same. 

## Basics

The idea is that space is an easier marker for parsing math than order of operations or parentheses. This script ignores order of operations entirely. It is left-to-right evaluation with spaces allowing separation of execution contexts and with parentheses of course. 

`3^2/5` becomes `3^(2/5)` instead of `(3^2)/5` which is what order of operations gives. To obtain the latter form, use `3^2 /5` That's the core idea. 

`3/6+x^2` is `3/(6 + (x^2))` while `3/6 + x^2` is `(3/6) + (x^2)`  and `3/6+x ^2` is `3/(6+x)^2`. `3/6+x ^ 2` would be `(3/(6+x))^2`. 

The rule is that at each operator, an invisible parenthetical is started. Every time there is a space before an operator, it closes one level of a parenthetical. If we have multiple spaces before an operator, then it closes the invisible parentheticals up to that level. A space after a spaced out operator will close all the way up to the top, whether the top parenthetical or to an actual parenthetical. To be clear, it is just before the top level. 

So, for example,  `3/(5+6 ^2 / 8)` is `3/(((5+6)^2)/8)`. 

One caveat is that of subtraction and negation. Subtraction requires a space to the right if there is a space to the left. Otherwise, it will be interpreted as negative and an implicit multiplication. One can either use `\ ` or `--` to force a subtraction. Sorry. Negation is a pain in the bit. 

Multiplication and function composition are implicit when there are spaces between terms with no operators. It is quite conventional. 

To create your own binary operators, use `\bin` where `bin` should be replaced with whatever binary symbol one wants. It will do a longest match attempt with defined binary operators, but if you want one that is not yet defiend(?), then use `\bin\ ` to indicate its end. 


## Why

While order of operations is a fine methodology, being a very logical progression up the chain of operations where repeated application of the lower operator is what makes the higher operation bind more tightly, it simply does not seem to be the way most human brains work. 

Instead, humans like groupings. Space helps greatly with this. So, as a first approximation, spacing denotes the separation of contexts. If it gets too complicated, parenthees should be used, but too many nested parentheses becomes hard to read. So by being able to omit some, it can greatly help clarify it all. 
