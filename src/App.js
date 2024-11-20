import { useCallback, useMemo, useEffect, useState } from "react";
import TitleBar from "./components/TitleBar";
import SetBudgetForm from "./components/SetBudgetForm";
import ItemList from "./components/ItemList";
// import "./fonts.css";

export default function App() {
  const storedHaveSpent = JSON.parse(localStorage.getItem("spent"));
  const storedSpentBudget = JSON.parse(localStorage.getItem("budget"));

  const [budget, setBudget] = useState(storedSpentBudget);
  const [haveSpent, setHaveSpent] = useState(storedHaveSpent);

  const remainder = useMemo(() => {
    const totalSpent = haveSpent.reduce(
      (acc, cur) => Number(acc) + Number(cur.cost),
      0
    );
    return (Number(budget) - totalSpent).toFixed(2);
  }, [budget, haveSpent]);

  const handleReset = () => {
    setBudget(0);
    setHaveSpent([]);
  };

  const handleSetBudget = (e) => {
    e.preventDefault();
    const budgetValue = Number(e.currentTarget.form.budget.value);
    if (!budgetValue || budgetValue === "0") {
      return;
    }

    setBudget(budgetValue.toFixed(2));
  };

  // remove item from itemList function
  const deleteItem = useCallback(
    (index) => {
      // Create a new array without the item to be deleted
      setHaveSpent(structuredClone(haveSpent).filter((_, i) => i !== index));
    },
    [haveSpent]
  );

  const handleSetHaveSpent = useCallback(
    (e) => {
      e.preventDefault();
      const itemValue = Number(e.currentTarget.form.itemCost.value);
      const itemName = e.currentTarget.form.itemName.value;
      const newItem = {
        cost: itemValue.toFixed(2),
        name: itemName,
      };

      if (!itemValue || !itemName) return;

      setHaveSpent(haveSpent.concat([newItem]));
    },
    [haveSpent]
  );
  console.log(haveSpent[0]);

  useEffect(() => {
    localStorage.setItem("spent", JSON.stringify(haveSpent));
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [haveSpent, budget]);

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
          onHandleReset={handleReset}
        />
        <ItemList
          onSetHaveSpent={handleSetHaveSpent}
          haveSpent={haveSpent}
          deleteItem={deleteItem}
        />
      </div>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Mitchel Bower 2024</p>
      </footer>
    </div>
  );
};
