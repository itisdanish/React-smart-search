import { useEffect, useState } from 'react';
import './styles.css';

const App = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const fetchData = async () => {
    console.log('API : ', input);
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await data.json();
    setResults(json?.recipes);
    // console.log(json?.recipes);
  };

  return (
    <div className='App'>
      <h1>Search App</h1>
      <div className=''>
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
        {showResults && (
          <div className='results-container'>
            {results.map((item) => (
              <span className='result' key={item.id}>
                {item.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
