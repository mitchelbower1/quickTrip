import { useCallback, useMemo, useState } from "react";
import TitleBar from "./components/TitleBar";
import SetBudgetForm from "./components/SetBudgetForm";
// import "./fonts.css";

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

    if (!e.currentTarget.form.budget.value) return;
  };

  const handleSetHaveSpent = useCallback(
    (e) => {
      e.preventDefault();
      const newItem = {
        cost: Number(e.currentTarget.form.itemCost.value).toFixed(2),
        name: e.currentTarget.form.itemName.value,
      };

      if (
        !e.currentTarget.form.itemCost.value ||
        !e.currentTarget.form.itemName.value
      )
        return;

      setHaveSpent(haveSpent.concat([newItem]));
    },
    [haveSpent]
  );

  function deleteItem() {
    return haveSpent + budget;
  }

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
        <ItemList haveSpent={haveSpent} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

function ItemList({ haveSpent, deleteItem }) {
  return (
    <div className="item-list">
      <br />
      {haveSpent.map((item, index) => {
        return (
          <div className="items" key={item.name + index}>
            <p className="p">
              {item.name}: ${item.cost}
            </p>
            <button onClick={deleteItem} className="close">
              &times;
            </button>
          </div>
        );
      })}
    </div>
  );
}
