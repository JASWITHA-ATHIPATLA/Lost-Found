import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BrowsePage from './components/BrowserPage';
import { dummyItems } from './data/dummyItems';
import Categories from './constants/categories.js'
// import { styles } from './styles/styles';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [items, setItems] = useState(dummyItems);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('');
  


  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesType = filterType === 'all' || item.type === filterType;
    const matchesLocation = !filterLocation || item.location.toLowerCase().includes(filterLocation.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });


   const styles = {
    container: {
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }
  };
  return (
    <div style={styles.container}>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setShowForm={setShowForm}
      />

      {currentPage === 'home' ? (
        <HomePage
          items={items}
          setCurrentPage={setCurrentPage}
          setShowForm={setShowForm}
        />
      ) : (
        <BrowsePage
          items={items}
          showForm={showForm}
          categories={Categories}
          setCurrentPage={setCurrentPage}
          setShowForm={setShowForm}
          setItems={setItems}
        />
      )}
    </div>
  );
}
