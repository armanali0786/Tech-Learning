import React, { useState } from 'react';
import Poll from './Poll';
import Button from '../components/Button';
import pollDatas from '../data/polldb';

const DynamicPoll = () => {
  const [pollData, setPollData] = useState(pollDatas);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [voted, setVoted] = useState(false);

  const handleVote = () => {
    if (!voted) {
      setVoted(true);
      const updatedPollData = pollData.map(poll => {
        const selectedOption = selectedOptions[poll.id];
        const updatedResults = {};
        poll.options.forEach(option => {
          updatedResults[option.id] = option.id === selectedOption ? 1 : 0;
        });
        return { ...poll, results: updatedResults };
      });
      setPollData(updatedPollData);
      console.log(updatedPollData);
      setSelectedOptions({});
    }
  };

  const handleOptionSelect = (pollId, optionId) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [pollId]: optionId,
    }));
  };

  return (
    <div className="bg-light pt-7 pl-7 row" style={{minHeight:"100vh"}}>
      {pollData.map(poll => (
        <Poll
          key={poll.id}
          poll={poll}
          handleVote={() => handleVote(poll.id)}
          handleOptionSelect={optionId => handleOptionSelect(poll.id, optionId)}
          disabled={voted}
        />
      ))}
      {!voted && (
        <div className="ml-5">
          <Button
            text="Vote"
            className='btn-primary text-xs'
            onClick={handleVote}
          />
        </div>
      )}
    </div>
  );
};

export default DynamicPoll;
