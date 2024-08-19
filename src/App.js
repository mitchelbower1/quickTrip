import { useState } from "react";

export default function App() {
  return (
    <div>
      <SetBudgetForm />
    </div>
  );
}

function SetBudgetForm() {
  const [budget, setBudget] = useState("");
  const [haveSpent, setHaveSpent] = useState("");
  const [remainder, setRemainder] = useState("");

  function handleSetRemainder(e) {
    e.preventDefault();
    setRemainder(budget - haveSpent);
  }

  return (
    <div className="set-budget-form">
      <form className="form">
        <label>Set budget</label>
        <input
          className={haveSpent > budget ? "negative" : ""}
          type="text"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
        <button onClick={handleSetRemainder}>Set</button>
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
          value={remainder}
          className={haveSpent > budget ? "negative" : "green"}
        />
      </form>
    </div>
  );
}
