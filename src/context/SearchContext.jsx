import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchContext = createContext(undefined);

function SearchContextProvider({ children }) {
  const base_URL = 'https://autoapi.dezinfeksiyatashkent.uz/api';
  const [datasCar, setDatasCar] = useState([]);
  const [searchCar, setSearchCar] = useState('');
  const navigate = useNavigate();

  const handleSearchCar = (e) => {
    if (e.key === 'Enter') {
      navigate('/cars'); // Navigate to the CarsAll component when Enter is pressed
    } else {
      setSearchCar(e.target.value);
    }
  };

  const getFetch = async (url) => {
    const response = await fetch(url, { method: 'GET' });
    return await response.json();
  };

  useEffect(() => {
    getFetch(`${base_URL}/cars`).then((data) => {
      setDatasCar(data?.data);
      console.log(data?.data);
    });
  }, []);

  const value = {
    datasCar,
    searchCar,
    handleSearchCar,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchContextProvider');
  }
  return context;
};

export { SearchContextProvider, useSearchContext };
