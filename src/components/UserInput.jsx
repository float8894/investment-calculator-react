import { getTitleCaseLabel, returnValByLabel } from '../util/investment.js';

const GROUPS = [
  ['Initial Investment', 'Annual Investment'],
  ['Expected Return', 'Duration'],
];

export default function UserInput({ onUserInput, userInput }) {
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
                      onUserInput(getTitleCaseLabel(label), event.target.value)
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
