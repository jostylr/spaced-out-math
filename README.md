# spaced-out-math
This takes math strings and parses then using spaces as boundaries instead of order of operations

## To use

Install with npm or download script. 

The npm module exports a function that parses a string and takes in options dictating various properties. 

The script version gives a global spaceOutMath that does the same. 

## Basics

The idea is that space is an easier marker for parsing math than order of operations or parentheses. This script ignores order of operations entirely. It is left-to-right evaluation with spaces allowing separation of execution contexts and with parentheses of course. 

`3^2/5` becomes `3^(2/5)` instead of `(3^2)/5` which is what order of operations gives. To obtain the latter form, use `3^2 /5` That's the core idea. 

`3/6+x^2` is `3/(6 + (x^2))` while `3/6 + x^2` is `(3/6) + (x^2)`  and `3/6+x ^2` is `(3/(6+x))^2`. The interesting case is `3/ 6+x ^2` Gonna try to get that to be `3/((6+x)^2)`  Maybe have a difference between `3/ ....` and `3 /...`. Not sure if I can get away with it. 



## Why

While order of operations is a fine methodology, being a very logical progression up the chain of operations where repeated application of the lower operator is what makes the higher operation bind more tightly, it simply does not seem to be the way most human brains work. 

Instead, humans like groupings. Space helps greatly with this. So, as a first approximation, spacing denotes the separation of contexts. If it gets too complicated, parenthees should be used, but too many nested parentheses becomes hard to read. So by being able to omit some, it can greatly help clarify it all. 
