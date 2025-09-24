import React from "react";
// import { useRef } from "react";
import SetBudgetFormstyles from "./setBudgetFormStyles";
// import BasicModal from "../Modal.js/Modal";
import BasicModal from "../Modal/Modal";

const SetBudgetForm = ({
  remainder,
  onSetBudget,
  onSetHaveSpent,
  budget,
  onHandleReset,
  setBudget,
  setHaveSpent,
  itemValueRef,
  itemNameRef,
}) => {
  return (
    <SetBudgetFormstyles>
      <span id={!budget ? "hidden" : "span"}>
        <p className={remainder > 0 ? "positive" : "negative"}>${remainder}</p>
        <p className="total-spent">
          total ammt. spent: ${(budget - remainder).toFixed(2)}
        </p>
      </span>
      <form className="form">
        <input
          id="set-input"
          className={budget > 0 ? "hidden" : ""}
          placeholder="Set a budget..."
          type="number"
          name="budget"
        />

        <button
          onClick={onSetBudget}
          className={budget > 0 ? "hidden" : "set-button"}
        >
          Set
        </button>

        <input
          className="spent-input"
          type="number"
          name="itemCost"
          ref={itemValueRef}
          placeholder="How much have you spent?"
        />

        <input
          type="text"
          name="itemName"
          ref={itemNameRef}
          placeholder="What did you spend it on?"
        />
        <button
          className={budget === "" ? "hidden" : "update-button"}
          onClick={onSetHaveSpent}
        >
          Update
        </button>
      </form>
      <button className="reset-button" onClick={onHandleReset}>
        <BasicModal
          // handleReset={onHandleReset}
          setBudget={setBudget}
          setHaveSpent={setHaveSpent}
        />
      </button>
    </SetBudgetFormstyles>
  );
};

export default SetBudgetForm;
