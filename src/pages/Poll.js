import React, { useState } from 'react';
import Button from '../components/Button';

const Poll = ({ poll, handleVote }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [voted, setVoted] = useState(false);

  const handleOptionClick = (optionId) => {
    if (!voted) {
      if (poll.optionsType === 'single') {
        setSelectedOptions([optionId]);
      } else {
        const index = selectedOptions.indexOf(optionId);
        if (index === -1) {
          setSelectedOptions([...selectedOptions, optionId]);
        } else {
          const updatedOptions = [...selectedOptions];
          updatedOptions.splice(index, 1);
          setSelectedOptions(updatedOptions);
        }
      }
    }
  };

  const isOptionSelected = (optionId) => {
    return selectedOptions.includes(optionId);
  };

  return (
    <div className="poll pb-2 col-6">
      <div className=''>
          <h4>{poll.id}. {poll.question}</h4>
          {poll.options.map(option => (
          <li key={option.id} >
            {poll.optionsType === 'single' ? (
              <input
                type="radio"
                id={option.id}
                name={`option_${poll.id}`}
                checked={isOptionSelected(option.id)}
                onChange={() => handleOptionClick(option.id)}
                style={{cursor:"pointer"}}
              />
            ) : (
              <input
                type="checkbox"
                id={option.id}
                checked={isOptionSelected(option.id)}
                onChange={() => handleOptionClick(option.id)}
                style={{cursor:"pointer"}}
              />
            )}
            <label className='text-sm pl-2 text-gray-700'>{option.text}</label>
          </li>
        ))}
      </div>

     {/* <h4>{poll.id}. {poll.question}</h4>
      <ul>
        {poll.options.map(option => (
          <li key={option.id} >
            {poll.optionsType === 'single' ? (
              <input
                type="radio"
                id={option.id}
                name={`option_${poll.id}`}
                checked={isOptionSelected(option.id)}
                onChange={() => handleOptionClick(option.id)}
                style={{cursor:"pointer"}}
              />
            ) : (
              <input
                type="checkbox"
                id={option.id}
                checked={isOptionSelected(option.id)}
                onChange={() => handleOptionClick(option.id)}
                style={{cursor:"pointer"}}
              />
            )}
            <label className='text-sm pl-2 text-gray-700'>{option.text}</label>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Poll;
