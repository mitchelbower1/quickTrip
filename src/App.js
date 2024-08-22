import { useMemo, useState } from "react";
import TitleBar from "./components/TitleBar";
import SetBudgetForm from "./components/SetBudgetForm";

export default function App() {
  const [budget, setBudget] = useState("");
  const [haveSpent, setHaveSpent] = useState([]);

  const remainder = useMemo(() => {
    const totalSpent = haveSpent.reduce((acc, cur) => acc + cur, 0);
    return budget - totalSpent;
  }, [budget, haveSpent]);

  const handleSetBudget = (e) => {
    e.preventDefault();
    setBudget(e.currentTarget.form.budget.value);
  };

  return (
    <div className="main-app">
      <p>Initial budget: {budget ?? ""}</p>
      <p>Remainder: {remainder}</p>
      <TitleBar />
      <SetBudgetForm
        budget={budget}
        haveSpent={haveSpent}
        onSetBudget={handleSetBudget}
        setHaveSpent={setHaveSpent}
      />
    </div>
  );
}
