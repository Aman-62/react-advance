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

### General Rules of Hooks

- starts with "use" (both react and custom hooks)
- invoke inside function/component body
- don't call hooks conditionally
- set functions don't update state immediately

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

### useState weird behavior

Keep in mind that the state update function setState does not immediately mutate the state. Instead, it schedules an update to the state and tells React that it needs to re-render the component. The actual state update will be performed as part of the next rendering cycle. Be mindful when you need to set state value based on a different state value.

If you want to update the state immediately and synchronously, you can pass a function to setState that receives the previous state as an argument and returns the new state.

This can be useful if you need to update the state based on the previous state, or if you need to update the state synchronously.

### useEffect

useEffect is a hook in React that allows you to perform side effects in function components. Basically any work outside of the component. Some examples of side effects are: subscriptions, fetching data, directly updating the DOM, event listeners, timers, etc.

- useEffect hook
- accepts two arguments (second optional)
- first argument - cb function
- second argument - dependency array
- by default runs on each render (initial and re-render)
- cb can't return promise (so can't make it async)
- if dependency array empty [] runs only on initial render

### short circuit

Truthy And Falsy
Falsy -> 0, '', undefined, null, NaN

const x = 0;
const y = 1;

In JavaScript, short-circuit evaluation is a technique that allows you to use logical operators (such as && and ||) to perform conditional evaluations in a concise way.

The && operator (logical AND) returns the first operand if it is "falsy", or the second operand if the first operand is "truthy".
console.log("===&&===");
console.log(x && y);
console.log(y && x);

The || operator (logical OR) returns the first operand if it is "truthy", or the second operand if the first operand is "falsy".
console.log("===||===");
console.log(x || y);
console.log(y || x);
