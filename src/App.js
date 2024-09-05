import { useCallback, useMemo, useState } from "react";

import TitleBar from "./components/TitleBar";
import SetBudgetForm from "./components/SetBudgetForm";

export default function App() {
  const [budget, setBudget] = useState(0);
  const [haveSpent, setHaveSpent] = useState([]);

  const remainder = useMemo(() => {
    const totalSpent = haveSpent.reduce(
      (acc, cur) => Number(acc) + Number(cur.cost),
      0
    );
    return (Number(budget) - totalSpent).toFixed(2);
  }, [budget, haveSpent]);

  const handleSetBudget = (e) => {
    e.preventDefault();
    setBudget(Number(e.currentTarget.form.budget.value).toFixed(2));
  };

  const handleSetHaveSpent = useCallback(
    (e) => {
      e.preventDefault();
      const newItem = {
        cost: Number(e.currentTarget.form.itemCost.value).toFixed(2),
        name: e.currentTarget.form.itemName.value,
      };

      setHaveSpent(haveSpent.concat([newItem]));
    },
    [haveSpent]
  );

  return (
    <div className="main-app">
      <TitleBar />
      <div className="main-content">
        <SetBudgetForm
          budget={budget}
          remainder={remainder}
          haveSpent={haveSpent}
          onSetBudget={handleSetBudget}
          onSetHaveSpent={handleSetHaveSpent}
        />
        <ItemList haveSpent={haveSpent} />
      </div>
    </div>
  );
}

function ItemList({ haveSpent }) {
  return (
    <div className="item-list">
      <br />
      {haveSpent.map((item, index) => {
        return (
          <div className="items" key={item.name + index}>
            <p>
              {item.name}: ${item.cost}
            </p>
            <button className="close">&times;</button>
          </div>
        );
      })}
    </div>
  );
}
