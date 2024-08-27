import React from "react";

const SetBudgetForm = ({
  remainder,
  budget,
  haveSpent,
  onSetBudget,
  onSetHaveSpent,
}) => {
  return (
    <div className="set-budget-form">
      <form className="form">
        <label>Set budget</label>
        <input
          className={haveSpent > budget ? "negative" : "green"}
          value={budget}
          type="number"
          name="budget"
        />
        <button onClick={onSetBudget}>Set</button>
        <label>How much have you spent?</label>
        <input type="number" name="spent" />
        <button onClick={onSetHaveSpent}>Update</button>
        <label>remainder</label>
        <input
          type="text"
          value={remainder}
          disabled
          className={haveSpent > budget ? "negative" : "green"}
        />
      </form>
    </div>
  );
};

export default SetBudgetForm;
