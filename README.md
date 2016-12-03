# castlemilk-xmas-dojo
Some code for use at the Castlemilk Coder Dojo for kids.

# Installation within node-red

Edit ~/.node-red/settings.js and add...

```JavaScript
var XmasDojo = require('xmasdojo');
```

Then find the section of the settings file with

```JavaScript
    functionGlobalContext: {
       ...
    }
```

And add the following entry:

```JavaScript
    functionGlobalContext: {
       dojo: new XmasDojo()
    }
```

This should expose this to functions in noder-red as:

```JavaScript
context.global.dojo
```
