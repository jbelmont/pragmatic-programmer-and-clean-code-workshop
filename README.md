# Pragmatic Programmer and Clean Code

## Table of Contents
  1. [Setup](#setup-instructions)
  2. [Assignments](#assignments)
  3. [DRY Assignment](#dry-assignment)
  4. [SOLID](#solid)
  5. [SOLID Exercises](#exercise-instructions-for-solid)
  6. [Law of Demeter](#law-of-demeter)
  7. [Exercise for Law of Demeter](#exercise-for-law-of-demeter)
  8. [Pragmatic Software Development Tips](#pragmatic-software-development-tips)

This meetup will go over concepts from the books [Pragmatic Programmer](https://pragprog.com/book/tpp/the-pragmatic-programmer) and [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)

# Setup instructions
### 1. Install node.js via [Node.js](https://nodejs.org/en/download/)
### 2. Run `npm install` on root level of folder.
### 3. Run `npm run` to see all the scripts available

# Assignments

Each assignment folder has several exercise files.
Read the assignment.md file in order to complete the exercise.
Some assignments may or may not have a program.js file that you will test.
Each assignment will have a file called program.test.js.

## DRY Assignment

####1. Go to `dry` folder
####2. Open `assignment.md`
####3. Follow instructions to complete the assignment.
####4. Run command `npm run dry:test`

## SOLID

1. Single Responsibility Principle
  1. a class should have only a single responsibility (i.e. only one potential change in the software's specification should be able to affect the specification of the class).
  2. * :scroll: [Single Responsibility Principle](docs/solid/srp.pdf)
2. Open/Closed Principle
  1. "software entities … should be open for extension, but closed for modification."\
  2. * :scroll: [Open Closed Principle](docs/solid/ocp.pdf)
3. Liskov Subsitution Principle
  1. "objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."
  2. * :scroll: [Liskov Substitution Principle](docs/solid/lsp.pdf)
4. Interface Segregation Principle
  1. "many client-specific interfaces are better than one general-purpose interface."
  2. * :scroll: [Interface Segregation Principle](docs/solid/isp.pdf)
5. Dependency Inversion Principle
  1. one should "depend upon abstractions, [not] concretions."
  2. * :scroll: [Dependency Inversion Principle](docs/solid/dip.pdf)

### Exercise Instructions for SOLID
1. Go to srp folder with `cd solid/srp`
  1. Run command `npm run solid:srp:test`
  2. Finish exercises by passing the tests.
2. Go to ocp folder with `cd solid/ocp`
  1. Run command `npm run solid:ocp:test:solution`
  2. Mob/Pair program Exercise
3. Go to lsp folder with `cd solid/lsp`
  1. Run command `npm run solid:lsp:test:solution1`
  2. Run command `npm run solid:lsp:test:solution2`
  3. Mob/Pair program Exercise
4. Go to isp folder with `cd solid/isp`
  1. Run command `npm run solid:isp:test`
  2. Mob/Pair program Exercise
5. Go to dip folder with `cd solid/dip`
  1. Run command `npm run solid:dip:test`
  2. Mob/Pair program Exercise

## Law of Demeter
The Law of Demeter (LoD) or principle of least knowledge is a design guideline for developing software, particularly object-oriented programs. In its general form, the LoD is a specific case of loose coupling.

1. Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.
2. Each unit should only talk to its friends; don't talk to strangers.
3. Only talk to your immediate friends.

* :scroll: [Law of Demeter](docs/demeter.pdf)

### Exercise for Law of Demeter
This will be a group exercise where we mob program.

## Pragmatic Software Development Tips

###Care About Your Craft
Why spend your life developing software unless you care about doing it well?

###Provide Options, Don’t Make Lame Excuses
Instead of excuses, provide options. Don’t say it can’t be done; explain what can be done.

###Be a Catalyst for Change
You can’t force change on people. Instead, show them how the future might be and help them participate in creating it.

###Make Quality a Requirements Issue
Involve your users in determining the project’s real quality requirements.

###Critically Analyze What You Read and Hear
Don’t be swayed by vendors, media hype, or dogma. Analyze information in terms of you and your project.

###DRY—Don’t Repeat Yourself
Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

###Eliminate Effects Between Unrelated Things
Design components that are self-contained, independent, and have a single, well-defined purpose.

###Use Tracer Bullets to Find the Target
Tracer bullets let you home in on your target by trying things and seeing how close they land.

###Program Close to the Problem Domain
Design and code in your user’s language.

###Iterate the Schedule with the Code
Use experience you gain as you implement to refine the project time scales.

###Use the Power of Command Shells
Use the shell when graphical user interfaces don’t cut it.

###Always Use Source Code Control
Source code control is a time machine for your work—you can go back.

###Don’t Panic When Debugging
Take a deep breath and THINK! about what could be causing the bug.

###Don’t Assume It—Prove It
Prove your assumptions in the actual environment—with real data and boundary conditions.

###Write Code That Writes Code
Code generators increase your productivity and help avoid duplication.

###Design with Contracts
Use contracts to document and verify that code does no more and no less than it claims to do.

###Use Assertions to Prevent the Impossible
Assertions validate your assumptions. Use them to protect your code from an uncertain world.

###Finish What You Start
Where possible, the routine or object that allocates a resource should be responsible for deallocating it.

###Configure, Don’t Integrate
Implement technology choices for an application as configuration options, not through integration or engineering.

###Analyze Workflow to Improve Concurrency
Exploit concurrency in your user’s workflow.

###Always Design for Concurrency
Allow for concurrency, and you’ll design cleaner interfaces with fewer assumptions.

###Use Blackboards to Coordinate Workflow
Use blackboards to coordinate disparate facts and agents, while maintaining independence and isolation among participants.

###Estimate the Order of Your Algorithms
Get a feel for how long things are likely to take before you write code.

###Refactor Early, Refactor Often
Just as you might weed and rearrange a garden, rewrite, rework, and re-architect code when it needs it. Fix the root of the problem.

###Test Your Software, or Your Users Will
Test ruthlessly. Don’t make your users find bugs for you.

###Don’t Gather Requirements—Dig for Them
Requirements rarely lie on the surface. They’re buried deep beneath layers of assumptions, misconceptions, and politics.

###Abstractions Live Longer than Details
Invest in the abstraction, not the implementation. Abstractions can survive the barrage of changes from different implementations and new technologies.

###Don’t Think Outside the Box—Find the Box
When faced with an impossible problem, identify the real constraints. Ask yourself: “Does it have to be done this way? Does it have to be done at all?”

###Some Things Are Better Done than Described
Don’t fall into the specification spiral—at some point you need to start coding.

###Costly Tools Don’t Produce Better Designs
Beware of vendor hype, industry dogma, and the aura of the price tag. Judge tools on their merits.

###Don’t Use Manual Procedures
A shell script or batch file will execute the same instructions, in the same order, time after time.

###Coding Ain’t Done ‘Til All the Tests Run
‘Nuff said.

###Test State Coverage, Not Code Coverage
Identify and test significant program states. Just testing lines of code isn’t enough.

###English is Just a Programming Language
Write documents as you would write code: honor the DRY principle, use metadata, MVC, automatic generation, and so on.

###Gently Exceed Your Users’ Expectations
Come to understand your users’ expectations, then deliver just that little bit more.

###Think! About Your Work
Turn off the autopilot and take control. Constantly critique and appraise your work.

###Don’t Live with Broken Windows
Fix bad designs, wrong decisions, and poor code when you see them.

###Remember the Big Picture
Don’t get so engrossed in the details that you forget to check what’s happening around you.

###Invest Regularly in Your Knowledge Portfolio
Make learning a habit.

###It’s Both What You Say and the Way You Say It
There’s no point in having great ideas if you don’t communicate them effectively.

###Make It Easy to Reuse
If it’s easy to reuse, people will. Create an environment that supports reuse.

###There Are No Final Decisions
No decision is cast in stone. Instead, consider each as being written in the sand at the beach, and plan for change.

###Prototype to Learn
Prototyping is a learning experience. Its value lies not in the code you produce, but in the lessons you learn.

###Estimate to Avoid Surprises
Estimate before you start. You’ll spot potential problems up front.

###Keep Knowledge in Plain Text
Plain text won’t become obsolete. It helps leverage your work and simplifies debugging and testing.

###Use a Single Editor Well
The editor should be an extension of your hand; make sure your editor is configurable, extensible, and programmable.

###Fix the Problem, Not the Blame
It doesn’t really matter whether the bug is your fault or someone else’s—it is still your problem, and it still needs to be fixed.

###“select” Isn’t Broken
It is rare to find a bug in the OS or the compiler, or even a third-party product or library. The bug is most likely in the application.

###Learn a Text Manipulation Language
You spend a large part of each day working with text. Why not have the computer do some of it for you?

###You Can’t Write Perfect Software
Software can’t be perfect. Protect your code and users from the inevitable errors.

###Crash Early
A dead program normally does a lot less damage than a crippled one.

###Use Exceptions for Exceptional Problems
Exceptions can suffer from all the readability and maintainability problems of classic spaghetti code. Reserve exceptions for exceptional things.

###Minimize Coupling Between Modules
Avoid coupling by writing “shy” code and applying the Law of Demeter.

###Put Abstractions in Code, Details in Metadata
Program for the general case, and put the specifics outside the compiled code base.

###Design Using Services
Design in terms of services—independent, concurrent objects behind well-defined, consistent interfaces.

###Separate Views from Models
Gain flexibility at low cost by designing your application in terms of models and views.

###Don’t Program by Coincidence
Rely only on reliable things. Beware of accidental complexity, and don’t confuse a happy coincidence with a purposeful plan.

###Test Your Estimates
Mathematical analysis of algorithms doesn’t tell you everything. Try timing your code in its target environment.

###Design to Test
Start thinking about testing before you write a line of code.

###Don’t Use Wizard Code You Don’t Understand
Wizards can generate reams of code. Make sure you understand all of it before you incorporate it into your project.

###Work with a User to Think Like a User
It’s the best way to gain insight into how the system will really be used.

###Use a Project Glossary
Create and maintain a single source of all the specific terms and vocabulary for a project.

###Start When You’re Ready
You’ve been building experience all your life. Don’t ignore niggling doubts.

###Don’t Be a Slave to Formal Methods
Don’t blindly adopt any technique without putting it into the context of your development practices and capabilities.

###Organize Teams Around Functionality
Don’t separate designers from coders, testers from data modelers. Build teams the way you build code.

###Test Early. Test Often. Test Automatically.
Tests that run with every build are much more effective than test plans that sit on a shelf.

###Use Saboteurs to Test Your Testing
Introduce bugs on purpose in a separate copy of the source to verify that testing will catch them.

###Find Bugs Once
Once a human tester finds a bug, it should be the last time a human tester finds that bug. Automatic tests should check for it from then on.

###Build Documentation In, Don’t Bolt It On
Documentation created separately from code is less likely to be correct and up to date.

###Sign Your Work
Craftsmen of an earlier age were proud to sign their work. You should be, too.
