## Getting started 
- Run `yarn install`
- Run `yarn run start` to start the client and server.

## Motivation for choices 🧐
Generally, readability and composition where driving factors when deciding how to build this app. Good examples of this can be found 
here: `src/redux/selectors/expenses.js`. Using the ramda `compose` function, pagination and filtering where built separately and declaratively, 
making the code easier to reason about and refactor.  

## Getting around the app 🏃‍
Folder follow a structure similar to 'Atomic design'. 
1. **Common** contains all the globals such as colors and spacing. In a larger app this would also contain themes, screens for responsive design and other common styles.
2. **Components** are the smallest pieces and form the foundation of the app. They are meant to be reused and can be combined to form compounds and scenes.
3. **Compounds** are large complex components that are not scenes themselves but are too complex to be reused across the app.  
They are usually made with combinations of components. 
4. **Containers** are the data layer of the app. In this app, they don't provide any markup themselves and expose their state and methods
via 'render props'. Typically these are only concerned with a single domain and can be composed together to form more complex data structures. (See the composed container in 
`src/scenes/ExpensesIndex/ExpensesIndex.js`) Using render props encourages reuse and provides a way to limit indirection.
5. **Redux** houses all the redux logic including sagas, modules (actions, action creators and reducers) and selectors.
5. **Scenes** can be thought of as 'Pages' and consist of components, compounds and containers.


## Styling 🕶
Styling was done by styled-components which encourages modularity and reuse. Unlike other styling solutions such as glamour and CSS,
styled components doesn't require management of specificity, classNames and style precendance. It also provides a natural api for exposing props in 
the styles themselves. This makes it the ideal library for creating pattern libraries where modularity and extensiblity is very important.
 
 
## Things I would have added with more time 🌈
1. Tests - integration tests via `redux-saga-test-plan`, `jest` and `enzyme`. End to end testing - `cypress`
2. Typing with either flow or typescript 😉.
3. Immutability via Immer
4. Responsive styling
5. Dynamic imports