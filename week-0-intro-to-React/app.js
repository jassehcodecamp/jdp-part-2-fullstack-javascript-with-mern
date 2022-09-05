function App() {

  // const counterState = React.useState(1);

  // const counter = counterState[0];
  // const setCounter = counterState[1];

  const [counter, setCounter] = React.useState(1);

  return React.createElement(
    'button',
    {className: 'btn', onClick: () => setCounter(counter + 1)},
    // 'Counter ' + counter
    React.createElement(
      "span",
      null,
      "I am span on a button"
    )
  )
}

const app = document.querySelector('#app');

const root = ReactDOM.createRoot(app);

root.render(React.createElement(App))


ReactDOM.createRoot(document.querySelector('#app')).render(React.createElement(App));