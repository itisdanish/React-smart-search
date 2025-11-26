import React, { useEffect, useState } from 'react';
import './styles.css'; // if not needed, remove this

const SearchApp = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  // Debounce → fetch after 300 ms
  useEffect(() => {
    const timer = setTimeout(fetchData, 300);
    return () => clearTimeout(timer);
  }, [input]);

  const fetchData = async () => {
    // If input exists in cache → use cached data
    if (cache[input]) {
      console.log('Cache :', input);
      setResults(cache[input]);
      return;
    }

    console.log('API :', input);
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const json = await data.json();
    setResults(json?.recipes);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
  };

  return (
    <div
      className='min-h-screen flex flex-col items-center p-6 bg-gray-100'
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22300%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23e5e7eb%22 stroke-width=%221.5%22><path d=%22M12 2C10 4 8 5 6 5C4 5 2 4 2 2C4 2 5 4 5 6C5 8 4 10 2 12C4 12 6 11 6 9C6 7 7 5 9 5C11 5 13 7 13 9C13 11 15 12 17 12C19 12 22 11 22 9C20 9 19 11 19 13C19 15 20 17 22 19C20 19 18 18 18 16C18 14 16 12 14 12C12 12 10 14 10 16C10 18 8 19 6 19C4 19 2 18 2 16C4 16 5 18 5 20C5 22 4 24 2 24%22/></svg>')",
        backgroundRepeat: 'repeat',
        backgroundSize: '180px',
      }}
    >
      <h1 className='text-3xl font-bold mb-6 text-gray-800'>Search App</h1>

      <div className='relative w-full max-w-md'>
        {/* Search Input */}
        <input
          className='w-full px-4 py-3 border rounded-xl shadow-sm outline-none 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     transition-all bg-white'
          placeholder='Search recipes...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
        />

        {/* Results Box */}
        {showResults && results.length > 0 && (
          <div
            className='absolute mt-2 w-full bg-white shadow-lg rounded-xl 
                       border p-3 max-h-64 overflow-auto z-10'
          >
            {results.map((res) => (
              <span
                key={res.id}
                className='block px-3 py-2 cursor-pointer rounded-lg 
                           hover:bg-gray-100 transition text-gray-700'
              >
                {res.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchApp;
