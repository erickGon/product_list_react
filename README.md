Test project for inditex, create with [Create React App](https://github.com/facebook/create-react-app).

Made by: Erick González.

Plexus tech.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run lint`

Check code format, in order to follow prettier styles.

### `npm run stylelint`

Check scss code, in order to follow stylelint styles.

### `npm run reformat: stylelint, lint or all`

Check and reformat when possible js and scss code.

### `husky hooks`

pre-commit: check that code is well formatted before avery commit. 
pre-push: run test before pushing to repo.

### `Project structure`

src/
  componets/
    (main components reused)
  redux/
    (actions, store and reducers)
  services/
    (reused functions)
  styles/
    (main scss styles and vars)
  test/
    (unit tests)
  view/
    (two main components)
  

