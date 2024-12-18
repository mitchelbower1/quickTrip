import ItemListStyles from "./ItemListSyles";

const ItemList = ({ haveSpent, deleteItem }) => {
  return (
    <ItemListStyles>
      <br />
      {haveSpent?.map((item, index) => {
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
    </ItemListStyles>
  );
};

export default ItemList;
