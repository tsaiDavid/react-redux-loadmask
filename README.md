# react-redux-loadmask

## Requirements

##### Peer dependencies are currently as follows:
  - `immutable`
  - `react`
  - `react-redux`
  - `immutable` [ optional - depends on your app state ]

## Installation

**NPM**
```
$ npm install react-redux-loadmask --save
```

**Yarn**
```
$ yarn add react-redux-loadmask
```

## Usage

##### Using the `<Loadmask />` component provided by this module is simple.

There are a few 'parts' provided out of the box for you:

|                     | ES6 Import             | Immutable.js Import *            |
|---------------------|------------------------|----------------------------------|
| `<Loadmask />`      | `react-redux-loadmask` | `react-redux-loadmask/immutable` |
| **loadmaskReducer** | `react-redux-loadmask` | `react-redux-loadmask/immutable` |
| **showLoadmask**    | `react-redux-loadmask` | *N/A*                            |
| **hideLoadmask**    | `react-redux-loadmask` | *N/A*                            |

> `*` The Loadmask component and its corresponding reducer are available in the Immutable.js flavors,
as indicated above.

## Example

1. Import the <Loadmask /> component and render it within a higher order container. This could be your app's "Main.js" or "App.js".

  ```jsx
  import React, { Component } from 'react'
  import Loadmask from 'react-redux-loadmask'

  export default class ExampleApp extends Component {
    // ... Let's skip to the fun part

    render () {
      return (
        <div>
          <Loadmask />
          // ... Your other components
        </div>
      )
    }
  }
  ```
2. Import and combine `loadmaskReducer` into your app's "root reducer" (top level).
Keep in mind that only the `<Loadmask />` component and this function have and require its Immutable variants if your state is utilizing it. (see table above)

  ```jsx
  import { loadmaskReducer } from 'react-redux-loadmask'

  export default combineReducers({
    loadmaskReducer,
    // ... Your other reducers
  })
  ```

3. Use the actions `showLoadmask` and `hideLoadmask` provided. They utilize namespaced "types", inspired by the `react-redux-router` library. Examples of how you can use them are shown below.

  ```jsx
    import { showLoadmask, hideLoadmask } from 'react-redux-loadmask'

    // You can then dispatch to either show or hide the loadmask from anywhere!
    dispatch(showLoadmask())
  ```

  ```jsx
    import { loadmaskActions } from 'react-redux-loadmask'

    // The same methods are available for you off the `loadmaskActions` import
    dispatch(loadmaskActions.hideLoadmask())
  ```

  4. And that's it! By utilizing the provided reducer and simply rendering the `<Loadmask />` component, you're now able to conveniently manage this top-level UI to enhance browsing experience during large data fetches, page transitions, or even preventing access to a view.

## Rendering Children

In the likely event that you'll want to render your own child in the middle of the Loadmask, you can do so by simply wrapping the intended child with the Loadmask tags.

```jsx
  <Loadmask>
    <ExampleChild />
  </Loadmask>
```
