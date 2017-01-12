# Law of Demeter

* Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.
* Each unit should only talk to its friends; don't talk to strangers.
* Only talk to your immediate friends.

[Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter)

1. An object can call its own methods
2. it's okay to call methods on objects passed in to our method
3. it's okay to call methods on any objects we create
4. any directly held component objects

The Law of Demeter for functions requires that a method M of an object O may only invoke the methods of the following kinds of objects:
1. O itself
2. M's parameters
3. Any objects created/instantiated within M
4. O's direct component objects
5. A global variable, accessible by O, in the scope of M
