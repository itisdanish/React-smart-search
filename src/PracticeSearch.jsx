import { useEffect, useState } from 'react';
import MOCK_DATA from '../src/utils/MOCK_DATA';

const PracticeSearch = () => {
  const [results, SetResults] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    SetResults(MOCK_DATA);
    setFilterRes(MOCK_DATA);
  }, []);

  const handleFilter = () => {
    const search = input.toLowerCase().trim();

    const filtered = results.filter((res) => {
      return (
        res.name.toLowerCase().includes(search) ||
        res.email.toLowerCase().includes(search) ||
        String(res.age).includes(search)
      );
    });

    setFilterRes(filtered);
  };

  return (
    <div
      className='min-h-screen w-full flex flex-col items-center p-8
                    bg-gradient-to-br from-blue-50 to-purple-100'
    >
      <h1 className='text-4xl font-bold text-gray-800 mb-8 tracking-wide'>
        Search Users
      </h1>

      {/* Search Input */}
      <input
        placeholder='Search by name, email or age'
        className='w-full max-w-md px-4 py-3 rounded-xl shadow-lg 
                   border border-gray-300 bg-white 
                   focus:ring-2 focus:ring-blue-500 focus:outline-none 
                   transition-all text-gray-700'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleFilter}
      />

      {/* Users List */}
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                      gap-6 mt-8 w-full max-w-5xl'
      >
        {filterRes.map((user) => (
          <div
            key={user.email}
            className='p-5 rounded-2xl bg-white/70 backdrop-blur-md 
                       shadow-xl border border-white hover:scale-105 
                       transition-all cursor-pointer'
          >
            <h2 className='text-lg text-gray-700'>
              Name: <b className='text-gray-900'>{user.name}</b>
            </h2>
            <h2 className='text-lg text-gray-700'>
              Age: <b className='text-gray-900'>{user.age}</b>
            </h2>
            <h2 className='text-lg text-gray-700'>
              Email: <b className='text-gray-900'>{user.email}</b>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeSearch;
