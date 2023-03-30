import React from 'react';

const SelectWithRandomOptions = () => {
  const options = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

  return (
    <select>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectWithRandomOptions;