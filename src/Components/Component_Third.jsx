import { useState, useEffect } from "react";

const Component_Third = () => {
  const [count, setCounter] = useState({ counter: 4, theme: "blue" });
  const [title, setTitle] = useState("Click Button to Change Title");
  const [resourceType, setResource] = useState("posts");
  const [item, setItem] = useState([]);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const counter = count.counter;
  const theme = count.theme;

  const ResizeHandler = () => {
    setwindowWidth(window.innerWidth);
  };

  // UseEffect Example No 2
  useEffect(() => {
    window.addEventListener("resize", ResizeHandler);

    return () => {
      window.removeEventListener("resize");
    };
  }, []);
  // UseEffect Example No 1
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [resourceType]);

  const counterIncrement = () => {
    setCounter((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter + 1,
      };
    });
  };

  const deleteHandler = (id) => {
    const newItem = item.filter((items) => items.id !== id);
    setItem(newItem);
  };

  return (
    <>
      <h1>Hey there</h1>
      <button onClick={() => counterIncrement()}>Increment</button>
      <br />
      <p>
        {count.counter} {count.theme}
      </p>
      <p>{title}</p>
      <button onClick={() => setTitle("Title Change")}>Click me </button>

      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("users")}>Users</button>
      <button onClick={() => setResource("comm ents")}>Comments</button>
      <p>{resourceType}</p>
      <p>Window Width Size{windowWidth}</p>

      <ul>
        {/* {item.map(({ id, title, name }) => {
          return (
            <li
              key={id}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <small>{id}) </small>
              <p style={{ textTransform: "capitalize" }}>{title}</p>
              <p>{name}</p>
              <button onClick={() => deleteHandler(id)}>Delete</button>
            </li>
          );
        })} */}
      </ul>
    </>
  );
};

export default Component_Third;
