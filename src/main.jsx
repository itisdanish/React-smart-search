import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import SearchApp from './SearchApp.jsx';
import PracticeSearch from './PracticeSearch.jsx';
import Parent from './ChildToParent/Parent.jsx';
import PaginBody from './Pagination/PaginBody.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <SearchApp /> */}
    {/* <PracticeSearch /> */}
    {/* <Parent/> */}
    <PaginBody />
  </StrictMode>
);
