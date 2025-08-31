import './Header.css';

export default function Header({ activeTab, onTabChange }) {
  return (
    <header>
      <h1>Jupiterium</h1>
      <nav>
  <h2 className={activeTab === 'home' ? 'active' : ''} onClick={() => onTabChange('home')}>Home</h2>
  <h2 className={activeTab === 'events' ? 'active' : ''} onClick={() => onTabChange('events')}>Events</h2>
  <h2 className={activeTab === 'news' ? 'active' : ''} onClick={() => onTabChange('news')}>News</h2>
      </nav>
    </header>
  );
}