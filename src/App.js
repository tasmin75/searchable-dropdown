import Select from 'react-select';
import React, { useState } from 'react';
export default function App() {
  const options = [
    { value: 'react', label: 'React' },
    { value: 'npm', label: 'yarn' },
    { value: 'yarn', label: 'yarn' },
    { value: 'angular', label: 'Angular' },
    { value: 'Javascript', label: 'JavaScript' },
  ];

  const [getData, setGetData] = useState([]);

  const handleMultiSelectChange = (getData) => {
    setGetData(getData);
  };

  return (
    <div className="App">
      <h1>Search Here</h1>
      <div>
        <Select
          options={options}
          isMulti
          onChange={handleMultiSelectChange}
          value={getData}
        />
      </div>
    </div>
  );
}
