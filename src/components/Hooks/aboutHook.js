// Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

// Hooks don’t replace your knowledge of React concepts. Instead, Hooks provide a more direct API to 
// the React concepts you already know: props, state, context, refs, and lifecycle. As we will show later, 
// Hooks also offer a new powerful way to combine them.

// what is a Hook?
// Hooks are functions that let you “hook into” React state and lifecycle 
// features from function components. Hooks don’t work inside classes — they let you use
// React without classes. (We don’t recommend rewriting your existing components 
//   overnight but you can start using Hooks in the new ones if you’d like.)

// what is a Effect Hook?
// You’ve likely performed data fetching, subscriptions, or manually changing the DOM from 
// React components before. We call these operations “side effects” (or “effects” for short) because 
// they can affect other components and can’t be done during rendering.

// The Effect Hook, useEffect, adds the ability to perform side effects from a function component. 
// It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, 
// but unified into a single API.

// When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM. 
// Effects are declared inside the component so they have access to its props and state. By default, React runs 
// the effects after every render — including the first render.

// Rules of Hooks?
// Hooks are JavaScript functions, but they impose two additional rules:
// Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
// Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.

import React, { useState, useEffect } from 'react';

function AboutHook() {
  // Declare a new state variable, which we'll call "count"

  // useState returns a pair: the current state value and a function that lets you update it.
  //You can call this function from an event handler or somewhere else. 
  //It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.

  const [counter, setCount] = useState(0); // The only argument to useState is the initial state. 0 is a initial value
  //You can use the State Hook more than once in a single component

    // Declare multiple state variables!
    const [age, setAge] = useState(50);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);



    // Effectc Hook
    //import React, { useState, useEffect } from 'react';

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API, after React updates the DOM
      document.title = `You clicked ${counter} times`;
    }); 
    
    //Just like with useState, you can use more than a single effect in a component

    // The state of these components is completely independent. 
    // Hooks are a way to reuse stateful logic, not state itself. In fact, 
    // each call to a Hook has a completely isolated state — so you can even use the same custom Hook twice in one component.

  // Custom Hooks are more of a convention than a feature. If a function’s name starts with ”use” and it calls other Hooks, 
  // we say it is a custom Hook. The useSomething naming convention is how our linter plugin is able to find bugs in the code 
  // using Hooks.
  // You can write custom Hooks that cover a wide range of use cases like form handling, animation, declarative subscriptions,
  // timers, and probably many more we haven’t considered. We are excited to see what custom Hooks the React community will 
  // come up with.

  // Other Hooks?
  // There are a few less commonly used built-in Hooks that you might find useful. 
  // For example, useContext lets you subscribe to React context without introducing nesting.
  // function Example() {
  //   const locale = useContext(LocaleContext);
  //   const theme = useContext(ThemeContext);
  //   // ...
  // }
  // And useReducer lets you manage local state of complex components with a reducer
  // function Todos() {
  //   const [todos, dispatch] = useReducer(todosReducer);
  //   // ...


  return (
    <div>
      <span>You clicked {counter} times</span>
      <button onClick={() => setCount(counter + 1)}>
        Click me
      </button>

      <span>You are {age} Years Old</span>
      <button onClick={() => setAge(age + 1)}>
        Increase Age
      </button>      
    </div>
  );
}

export default AboutHook;

