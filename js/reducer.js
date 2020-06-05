// Remember: action -> reducer -> new state
// Below is reducer function

// let state = {count: 0} will change to let state below

let state;
function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

// reducer({count: 0}, {type: 'INCREASE_COUNT'}); to test

// function dispatch(action) {
//   state = reducer(state, action);
// }

// dispatch({type: 'INCREASE_COUNT'}) to test should come back undefined
// state should equal 1

// refactored
function dispatch(action) {
  state = reducer(state, action);
  render();
}

//Next is to have it reflected in HTML

function render() {
  let container = document.getElementById("container");
  container.textContent = state.count;
}

// Needed for state to start at zero
dispatch({ type: "@@INIT" });

// Every time we click  we dispatch an action of type increase
let button = document.getElementById("button");

button.addEventListener("click", () => {
  dispatch({ type: "INCREASE_COUNT" });
});
