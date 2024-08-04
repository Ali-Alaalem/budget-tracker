// src/App.jsx
import './App.css';

const App = () => {
  const items = [
    { name: 'Cost 1', budget : true },
    { name: 'Cost 2', budget : false },
    { name: 'Cost 3', budget : true },
  ];

  return (
    <>
      <h1>expenses List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.budget ? ' within-budget' : 'over-budget'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
