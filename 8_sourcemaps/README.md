This demo shows off the power of source maps (and basic local module usage).

1.  Run `webpack`.
2.  Open `index.html` in the browser and note the error thrown in the console with a reference to a line in `bundle.js`.
3.  Now recompile the `bundle.js` but this time type `webpack -d` (or uncomment line 6 in `webpack.config.js`)
4.  Refresh the browser and note the new line reference to `mymodule.js`.