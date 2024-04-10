## React Hooks

- useState
- useEffect
- conditional rendering
- form
- useRef
- useContext
- useReducer
- react-router-dom
- react redux-toolkit

### useState

- useSate hook
- returns an array with two elements: the current state value, and a function that we can use to update the state
- accepts default value as an argument
- state update triggers re-render

### Initial Render and Re-Render

In a React application, the initial render is the first time that the component tree is rendered to the DOM. It happens when the application first loads, or when the root component is first rendered. This is also known as "mounting" the components.

Re-renders, on the other hand, happen when the component's state or props change, and the component needs to be updated in the DOM to reflect these changes. React uses a virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

There are a few ways that you can trigger a re-render in a React component:

By changing the component's state or props. When the component's state or props change, React will re-render the component to reflect these changes.

When the parent element re-renders, even if the component's state or props have not changed.

### General Rules of Hooks

- starts with "use" (both react and custom hooks)
- invoke inside function/component body
- don't call hooks conditionally
- set functions don't update state immediately
