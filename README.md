# SECBERUS Frontend Homework Task

### by Khristina Sheer

Deployed website: https://rotten-oranges.now.sh.

It said in the instructions that Healthy House has a blue roof:

- Four SVG files located in the /public folder. Make sure you use these to portray homes in the view.
  - HealthyHome.svg (Blue roof)
  - ZombieHome.svg (Green roof)
  - EmptyHome.svg (Gray roof)
  - InfectedHome.svg (Light Green Roof)

However, the SVG that was provided for Healthy House has a red roof.
I just wanted to point that out to avoid the confusion.

All SVG files were minified using https://jakearchibald.github.io/svgomg.

### Situation

The year is 2021 - the Zombie apocalypse has started, and the virus spreads through the air. Only those who distance at least one home from another will be safe.

You have been asked by the government of your province to generate a model of the spread of zombies in order to preview the coming days. As of right now, our doctors claim that zombies will spread the infection by one home per day. However, due to the grid-style of your town, it can only spread north (up), south (down), west (left) and right (east). Additionally, zombies can not jump over empty homes.

Our top scientists are finishing a cure for the infected soon, but this relies on all of humanity not being infected. We need to buy them enough time to get the cure available.

You will be given a data-map of current homes, with known infected homes - show the spread step by step, and the ending result with how many days, if all are infected, remain. The government will move people around if the situation is grim.

Data map:

```
0 = Empty Home
1 = Healthy Home
2 = Zombie Home
```

```

// A case where all can be infected

// Input
[
  [1, 0, 1, 1, 0, 2],
  [1, 1, 1, 2, 1, 0],
  [0, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 2],
  [2, 0, 1, 0, 1, 0]
]

// Output
[
  [2, 0, 2, 2, 0, 2],
  [2, 2, 2, 2, 2, 0],
  [0, 0, 2, 0, 2, 2],
  [2, 0, 2, 2, 2, 2],
  [2, 2, 2, 2, 2, 2],
  [2, 0, 2, 0, 2, 0]
]
Your community will be totally infected in 4 day(s)
```

However, due to the above model, we can assume that with effective distancing, we can wait for all of this "to blow over while we are at the winchester"

```
// A case with effective social distancing

// Input
[
  [2, 0, 1, 0, 1, 2],
  [1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1, 1],
  [2, 0, 1, 1, 0, 2],
  [1, 0, 0, 0, 1, 0],
  [2, 1, 0, 0, 2, 0]
]

// Output
[
  [2, 0, 1, 0, 2, 2],
  [2, 0, 0, 1, 0, 2],
  [0, 0, 1, 0, 2, 2],
  [2, 0, 1, 1, 0, 2],
  [2, 0, 0, 0, 2, 0],
  [2, 2, 0, 0, 2, 0]
]
Not all will be infected, and the infected will be cured!
// Note: Show the step after, which cures all individuals who have been infected in this case.
```

## Instructions

### Setup

**_This app was generated via create-react-app._**

- Fork the repository on github.com (Private or public, whichever works for you)
  - Use yarn to prep the environment.
- Do not create a pull request into the homework repository

### Task

- Show the spread of the zombies on the page with at least a 1 second pause between spread.
- Show the newly infected homes as the InfectedHome svg (Light green) per turn.
- Once the spread is complete, show all stages as left/right carets.

  - Feel free to just use < or >, be creative with CSS, or install an icon dependency.

- Use the SVG images given

  - How you implement these SVGs is up to you.

- Enjoy the task and be creative!

### Upon completion

Option 1:

- Zip your directory and email frontend@secberus.com with the .zip file and answer inside
  - Format your subject as follows
    - `%Your name here% - Completed interview homework (Zip)`

Option 2 (with a private fork):

- Invite @colemars and @sigkar to your private repository once you have completed the task
  - Email frontend@secberus.com and format your subject as follows
    - `%Your name here% - Completed interview homework (Invitation)`

## Included items

You have been provided with the following

- Basic project structure
- Boilerplate Immer-based Redux store, and a basic reducer/action.
  - Includes Redux-Thunk and Redux-Logger middlewares
- Styled components global styling and theme provider
- Four SVG files located in the /public folder. Make sure you use these to portay homes in the view.
  - HealthyHome.svg (Blue roof)
  - ZombieHome.svg (Green roof)
  - EmptyHome.svg (Gray roof)
  - InfectedHome.svg (Light Green Roof)
- Three static inputs `/src/constants/matrices`

## Optional Items (These aren't required)

- Add dependencies, but dependencies already listed are required.
- Add, remove, or change documentation at will.
- Write tests of your choice (Integration, Unit, TDD)
- Write an input generator / algorithm
- Add a graphing option - we use ChartJS at SECBERUS, but feel free to use any charts you wish
- Feel free to implement TypeScript into the build process. We love any JS!
- Add any lint you wish (Prettier, es/tslint)

# Contributors

- Sigkar
- Colemars

# Create React App Info:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
