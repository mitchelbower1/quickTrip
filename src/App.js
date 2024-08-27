import { useMemo, useState } from "react";

import TitleBar from "./components/TitleBar";
import SetBudgetForm from "./components/SetBudgetForm";

export default function App() {
  const [budget, setBudget] = useState(0);
  const [haveSpent, setHaveSpent] = useState([]);

  const remainder = useMemo(() => {
    const totalSpent = haveSpent.reduce(
      (acc, cur) => Number(acc.cost) + Number(cur.cost),
      0
    );
    return (Number(budget) - totalSpent).toFixed(2);
  }, [budget, haveSpent]);

  const handleSetBudget = (e) => {
    e.preventDefault();
    setBudget(Number(e.currentTarget.form.budget.value).toFixed(2));
  };

  const handleSetHaveSpent = (e) => {
    e.preventDefault();
    const newItem = {
      cost: Number(e.currentTarget.form.itemCost.value).toFixed(2),
      name: e.currentTarget.form.itemName.value,
    };

    setHaveSpent(haveSpent.concat([newItem]));
  };

  return (
    <div className="main-app">
      <p>Initial budget: {budget ?? ""}</p>
      <p>Remainder: {remainder}</p>
      <div>
        items <br />
        {haveSpent.map((item, index) => {
          return (
            <div key={item.name + index}>
              <p>💲{item.cost}</p>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>

      <TitleBar />
      <SetBudgetForm
        budget={budget}
        remainder={remainder}
        haveSpent={haveSpent}
        onSetBudget={handleSetBudget}
        onSetHaveSpent={handleSetHaveSpent}
      />
    </div>
  );
}
