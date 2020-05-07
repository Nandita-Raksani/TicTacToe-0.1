# TicTacToe

Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 matrix as per the below depiction. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. Game will be considered as 'Draw' when all of the grids are marked.
```
0 1 2
3 4 5
6 7 8
```
# Purpose
This game is developed in React using Test Driven Development approach.

# Functional cases
1)	Player X will be given first move and selects a tile within the board
2)	Player O will be given alternate move and selects a tile
3)	Players should not be allowed to play on same position
4)	Declare player X as winner if horizontally all tiles in first row are taken by Player X
5)	Declare player O as winner if horizontally all tiles in first row are taken by Player O
6)	Declare player X as winner if horizontally all tiles in second row are taken by Player X
7)	Declare player O as winner if horizontally all tiles in second row are taken by Player O
8)	Declare player X as winner if horizontally all tiles in third row are taken by Player X
9)	Declare player O as winner if horizontally all tiles in third row are taken by Player O
10)	Declare player X as winner if vertically all tiles in first column are taken by Player X
11)	Declare player O as winner if vertically all tiles in first column are taken by Player O
12)	Declare player X as winner if vertically all tiles in second column are taken by Player X
13)	Declare player O as winner if vertically all tiles in second column are taken by Player O
14)	Declare player X as winner if vertically all tiles in third column are taken by Player X
15)	Declare player O as winner if vertically all tiles in third column are taken by Player O
16)	Declare player X as winner if diagonally all tiles from left to right are taken by Player X
17)	Declare player O as winner if diagonally all tiles from left to right are taken by Player O
18)	Declare player X as winner if diagonally all tiles from right to left are taken by Player X
19)	Declare player O as winner if diagonally all tiles from right to left are taken by Player O
20)	Declare as Draw when all tiles are filled in the board
21)	The winning row should be highlighted
22)	All tiles should be disabled on game over

# Code commit guidelines

Inspired from Udacity

feat: a new feature
fix: a bug fix
docs: changes to documentation
style: formatting, missing semi colons, etc; no code change
refactor: refactoring production code
test: adding tests, refactoring test; no production code change
chore: updating build tasks, package manager configs, etc; no production code change

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.