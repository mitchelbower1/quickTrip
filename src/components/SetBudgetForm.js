import React from "react";

const SetBudgetForm = ({ remainder, onSetBudget, onSetHaveSpent }) => {
  return (
    <div className="set-budget-form">
      <form className="form">
        <input
          placeholder="Set a budget..."
          // className={haveSpent > budget ? "negative" : "green"}
          type="number"
          name="budget"
        />
        <button onClick={onSetBudget} className="set-button">
          Set
        </button>

        <input
          className="spent-input"
          type="number"
          name="itemCost"
          placeholder="How much have you spent?"
        />

        <input
          type="text"
          name="itemName"
          placeholder="What did you spent it on?"
        />
        <button className="update-button" onClick={onSetHaveSpent}>
          Update
        </button>
        <label>Ammount remaining:</label>
        <input
          className="remainder-field"
          type="text"
          value={remainder}
          disabled
          // className={haveSpent > budget ? "red" : "green"}
        />
      </form>
    </div>
  );
};

export default SetBudgetForm;
