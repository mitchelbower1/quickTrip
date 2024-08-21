import { useState } from "react";
import TitleBar from "./components/TitleBar";
import SetBudgetForm from "./components/SetBudgetForm";

export default function App() {
  const [budget, setBudget] = useState("");
  const [haveSpent, setHaveSpent] = useState("");
  const [remainder, setRemainder] = useState("");

  const handleSetRemainder = (e) => {
    e.preventDefault();
    if (!budget) return;
    setRemainder(budget - haveSpent);
  };

  return (
    <div className="main-app">
      <TitleBar />
      <SetBudgetForm
        budget={budget}
        haveSpent={haveSpent}
        remainder={remainder}
        onSetRemainder={handleSetRemainder}
        setBudget={setBudget}
        setHaveSpent={setHaveSpent}
      />
    </div>
  );
}
