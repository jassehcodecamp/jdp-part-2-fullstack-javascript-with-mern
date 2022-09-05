function App() {

  const [counter, setCounter] = React.useState(1);

  function handleCounter() {
    if (counter >= 10) {
      alert('You have reached the max');
      return;
    }
    setCounter(counter + 1);
  }

  return <button className="btn" onClick={handleCounter}>Counter {counter}</button>
}

const app = document.querySelector('#app');

const element = React.createElement;
const root = ReactDOM.createRoot(app);

root.render(element(App))