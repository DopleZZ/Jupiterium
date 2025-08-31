import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './components/header/header'
import ContentTab from './components/ContentTab/ContentTab'
import HotTab from './components/HotTab/HotTab'

function App() {
  const [post, setPost] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  const [userFilter, setUserFilter] = useState(null);
  const [search, setSearch] = useState('');

  async function fetchPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPost(data);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') setUserFilter(null);
    if (tab === 'events') setUserFilter(1);
    if (tab === 'news') setUserFilter(2);
  };

  return (
    <>
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      <input
        type="text"
        placeholder="Поиск по заголовку..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
        style={{margin: '40px 0 20px 0', padding: '8px', width: '100%', fontSize: '1rem', boxSizing: 'border-box'}}
      />
      <div className="app-main">
        <ContentTab post={post} userFilter={userFilter} activeTab={activeTab} search={search} />
      </div>
    </>
  );
}

export default App
