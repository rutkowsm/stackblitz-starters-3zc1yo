import React, { useState, useEffect } from 'react';
import './style.css';

const App = () => {
  const FilteredList = () => {
    const [inputText, setInputText] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const items = ['Armenia', 'Belgia', 'Chorwacja', 'Dania', 'Ekwador'];

    useEffect(() => {
      setFilteredItems(
        items.filter((item) =>
          item.toLowerCase().includes(inputText.toLowerCase())
        )
      );
    }, [inputText]);

    const handleInputChange = (e) => {
      setInputText(e.target.value);
    };

    return (
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Filter items"
        />
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, []);

    return <div>{time.toLocaleTimeString()}</div>;
  };

  const ColorSwitcher = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }, []);

    const currentColor = colors[currentColorIndex];

    return (
      <div style={{ backgroundColor: currentColor, height: '100vh' }}>
        <h1>Color Switcher</h1>
      </div>
    );
  };

  return (
    <div>
      <h1>FilteredList</h1>
      <FilteredList />

      <h1>DigitalClock</h1>
      <DigitalClock />

      <h1></h1>
      <ColorSwitcher />
    </div>
  );
};

export default App;
