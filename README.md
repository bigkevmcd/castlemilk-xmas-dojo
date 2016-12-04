# castlemilk-xmas-dojo
Some code for use at the Castlemilk Coder Dojo for kids.

Requires `node-red-node-pi-sense-hat`.

# Installation within node-red

Edit ~/.node-red/settings.js and add...

Find the section of the settings file with

```JavaScript
    functionGlobalContext: {
       ...
    }
```

And add the following entry:

```JavaScript
    functionGlobalContext: {
       xmasdojo: require('xmasdojo')
    }
```

This should expose this to functions in noder-red as:

```JavaScript
context.global.xmasdojo
```

To use it in a function in node-red output the results to a
node-red-sense-hat node.

```JavaScript
context.global.xmasdojo.gridToCommand([['red','red']], {brightness: 0, flip: 'horizontal'});
```
