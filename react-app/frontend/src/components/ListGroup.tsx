import { useState } from "react";
// {items:{}, heading: string} to handle properties
interface Props {
  items: string[];
  heading: string;
  //function (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook allows to use React features
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //arr[0] is variable
  //arr[1] //updater function
  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
