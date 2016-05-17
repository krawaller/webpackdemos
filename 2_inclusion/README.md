This demo shows the importance of being clever about how we include large multi-purpose modules.

1.  Run `webpack`. This will create a bundle using `src/silly.js` as the starting point.
2.  Look at `index.html` in the browser or run `node out/bundle`, and see that the combined ages are correctly output to the console.
3.  Navigate to the `out` folder with a file explorer and check the size of the created `bundle.js`. Keep the explorer window open.
4.  Edit `webpack.config.js` to use `src/smart.js` as a starting point instead.
5.  Run `webpack` again.
6.  Now check the size of `bundle.js` in the file explorer window again. What do you think happened?