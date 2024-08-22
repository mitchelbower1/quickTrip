const SetBudgetForm = ({ budget, haveSpent, onSetBudget, setHaveSpent }) => {
  return (
    <div className="set-budget-form">
      <form className="form">
        <label>Set budget</label>
        <input
          className={haveSpent > budget ? "negative" : ""}
          type="text"
          name="budget"
        />
        <button onClick={onSetBudget}>Set</button>
        <label>How much have you spent?</label>
        <input
          type="text"
          value={haveSpent}
          onChange={(e) => setHaveSpent(Number(e.target.value))}
        />
        <button>Update</button>
        <label>remainder</label>
        <input
          type="text"
          disabled
          className={haveSpent > budget ? "negative" : "green"}
        />
      </form>
    </div>
  );
};

export default SetBudgetForm;
