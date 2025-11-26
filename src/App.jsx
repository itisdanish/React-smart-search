import React, { useEffect, useState } from 'react';
import './styles.css';

const App = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    // fetchData();
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const fetchData = async () => {
    if (cache[input]) {
      console.log('Cache : ', input);
      setResults(cache[input]);
      return;
    }
    console.log('API : ', input);
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await data.json();
    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };

  return (
    <div className='App'>
      <h1>Search App</h1>
      <div>
        <input
          className='search-input'
          placeholder='Search'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />
        {showResults && (
          <div className='results-container'>
            {results.map((res) => (
              <span key={res.id} className='result'>
                {res.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
