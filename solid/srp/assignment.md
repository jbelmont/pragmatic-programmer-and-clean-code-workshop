## Single Responsibility principle

**[Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)**

The single responsibility principle states that every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class.
All its services should be narrowly aligned with that responsibility.
Robert C. Martin expresses the principle as follows:

**A class should have only one reason to change.**

**[Full Stack JavaScript](http://thefullstack.xyz/solid-javascript/)**
There is strong corollary with Unix philosophy to do one thing and do it well

Every function you write should do exactly one thing. It should have one clearly defined goal.

You’ll be surprised at the number of times you would like your function to do more than "one thing".

You’ll also struggle repeatedly with defining what the "one thing" you want to do is.

How to spot clear violations to SRP?

1. Calling a function such as getAverageAndComputeStandardDeviationAndFormat is clearly doing too many things.
    * A function like this should be broken into multiple parts.
2. For each function that you create, think about whether some parts would be better if you extracted them into another smaller function.
3. After you have created your function, look through it again and see how many reusable functions that you can extract.
