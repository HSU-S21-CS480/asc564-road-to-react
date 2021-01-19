import logo from './logo.svg';
import './App.css';

const welcome = {
  greeting: 'Hey',
  title: 'React'
};

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

//tutorial from https://github.com/the-road-to-learn-react/the-road-to-react/blob/master/manuscript/react-modern/jsx.md
const data = ["a", "b", "c", "d"];

function App() {
  let name = "Adam";
  let pi = 3.14;
  pi = "pi";


  //never use VAR
  var some_other_var = "sdfsdf";

  return (
    <div className="App">
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      {list.map((item) => {
        return (<div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </div>);
      })}
    </div>
  );
}

export default App;
