import { useCallback, useMemo, useEffect, useState } from "react";
import TitleBar from "./components/title-bar/TitleBar";
import SetBudgetForm from "./components/set-budget-form/SetBudgetForm";
import ItemList from "./components/item-list/ItemList";
import Footer from "./components/footer/Footer";
import BasicModal from "./components/Modal.js/Modal";

// import "./fonts.css";

export default function App() {
  const [budget, setBudget] = useState("");
  const [haveSpent, setHaveSpent] = useState([]);

  // retrieves local storage states
  useEffect(() => {
    const haveSpentRes = localStorage.getItem("spent");
    const budgetRes = localStorage.getItem("budget");

    if (budgetRes) setBudget(JSON.parse(budgetRes));
    if (haveSpentRes) setHaveSpent(JSON.parse(haveSpentRes));
  }, []);

  const remainder = useMemo(() => {
    const totalSpent = haveSpent?.reduce(
      (acc, cur) => Number(acc) + Number(cur.cost),
      0
    );
    return (Number(budget) - totalSpent).toFixed(2);
  }, [budget, haveSpent]);

  const handleSetBudget = (e) => {
    e.preventDefault();
    const budgetValue = Number(e.currentTarget.form.budget.value);
    if (!budgetValue || budgetValue === "0") {
      return;
    }

    const setNewBudgetRes = budgetValue.toFixed(2);

    localStorage.setItem("budget", JSON.stringify(setNewBudgetRes));

    setBudget(setNewBudgetRes);
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
      console.log(haveSpent);

      const newHaveSpent = haveSpent.concat([newItem]);

      localStorage.setItem("spent", JSON.stringify(newHaveSpent));

      setHaveSpent(newHaveSpent);
    },
    [haveSpent]
  );

  const handleReset = () => {
    if (window.confirm("Are you sure you want to erase all of your inputs?")) {
      setBudget(0);
      setHaveSpent([]);
      localStorage.removeItem("budget");
      localStorage.removeItem("spent");
      window.location.reload();
    } else {
      return;
    }
  };

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
