import { useState } from 'react';
import { getTitleCaseLabel, returnValByLabel } from '../util/investment.js';

const GROUPS = [
  ['Initial Investment', 'Annual Investment'],
  ['Expected Return', 'Duration'],
];

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: newValue };
    });
  }
  return (
    <section id='user-input'>
      {GROUPS.map((group, groupIndex) => {
        return (
          <div key={groupIndex} className='input-group'>
            {group.map((label) => {
              return (
                <p key={label}>
                  <label>{label}</label>
                  <input
                    value={returnValByLabel(label, userInput)}
                    onChange={(event) =>
                      handleChange(getTitleCaseLabel(label), event.target.value)
                    }
                    type='number'
                    required
                  />
                </p>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
