## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## `npm run server`

Runs a production version of the app and includes some basic Server Side Rendering.

**Warning:** In order to run this command, you must first run `npm run build` at least once. No need to run it every time, only when client side code changes.

## `npm run cypress`

Opens a cypress testing suite, it allows to run end-to-end tests.

### Before running cypress

1. Make sure you have run `npm run build` at least once.
2. Run: `npm run start`
3. Run (in a different console): `npm run server`
4. Run (in a different console): The API server. Usually, all you need is go to the place where you have the server clone and run `npm run start`.

### Available specs

* navigation: Tests the site by modifying the URL and checking if it has the desired effect.
* spec: Tests the navigation controls by clicking in the necessary buttons.
* ssr: Navigates to the SSR-enabled site (localhost:9001) and checks if the SSR works. It deletes every script upon page rendering.
* writing: Tests the edit/update capabilities in the App.