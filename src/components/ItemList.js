const ItemList = ({ haveSpent, deleteItem }) => {
  return (
    <div className="item-list">
      <br />
      {haveSpent.map((item, index) => {
        return (
          <div className="items" key={item.name + index}>
            <p className="p">
              {index + 1}. {item.name}: ${item.cost}
            </p>
            <button
              key={index}
              onClick={() => deleteItem(index)}
              className="close"
            >
              &times;
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
