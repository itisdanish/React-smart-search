import { useEffect, useState } from 'react';
import MOCK_DATA from '../src/utils/MOCK_DATA';
import './practStyles.css';

const PracticeSearch = () => {
  const [results, SetResults] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    SetResults(MOCK_DATA);
    setFilterRes(MOCK_DATA);
  }, []);

  //    const handleSearch = () => {
  //      const filtered = results.filter((res) =>
  //        res.name.toLowerCase().includes(input.toLowerCase())
  //      );
  //      setFilterRes(filtered);
  //    };

  const handleFilter = () => {
    const search = input.toLowerCase().trim();

    const filtered = results.filter((res) => {
      return (
        res.name.toLowerCase().includes(search) ||
        res.email.toLowerCase().includes(search) ||
        String(res.age).includes(search) // age number ko string me convert kiya
      );
    });

    setFilterRes(filtered);
  };

  //   console.log(filterRes);
  return (
    <div className='App'>
      <div>
        <h1>Search Users</h1>
      </div>
      <div>
        <input
          placeholder='search user'
          className='search-input'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={handleFilter}
        />

        <div className='user-container'>
          {filterRes.map((user) => (
            <div key={user.name} className='user-result'>
              <h2>
                Name: <b>{user.name}</b>
              </h2>
              <h2>
                Age: <b>{user.age}</b>
              </h2>
              <h2>
                Email: <b>{user.email}</b>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeSearch;
