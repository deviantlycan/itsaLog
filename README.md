Simple Node.js logger. Contains "debug," "debugFinest," "warning," and "info" 
modes. Will also log errors if passed in the error message with a callback. 

Install instructions to follow once uploaded to npm.

# Usage:
For implementation, check the file testaLog.js. First you will need to create
some form of module settings object and pass that into the createLog function,
with whatever module name you wish to give it. From there, you can call 
the logger at any point with the provided functions.

Handy tip: If you only want to print out debug information around a certain method, 
you can use the setters for print out information only when you need it!
