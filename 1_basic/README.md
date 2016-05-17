This demo shows the basic bundling feature of webpack.

1.  Read the source code, and note how `index.js` _requires_ the content of `users.js`.
1.  Run `webpack`.
2.  Look at `index.html` in the browser or run `node out/bundle`, and see that the combined ages are correctly output to the console.
3.  Look at the generated code in `bundle.js` in the `out` folder. Can you see how it works?