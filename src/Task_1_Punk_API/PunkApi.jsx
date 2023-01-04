import React, { useState, useEffect } from "react";
import PunkForm from "../PunkForm/PunkForm";
import "../Task_1_Punk_API/PunkApi.css";
import PunkTable from "../PunkTable/PunkTable";
import axios from "axios";

const PunkApi = () => {
  const [response, setResponse] = useState([]);
  const [punks, setPunks] = useState([]);
  const [search, setSearch] = useState({
    id: "",
    name: "",
    abv_gt: "",
  });
  useEffect(() => {
    const dataFetch = async () => {
      let url;
      if (search.id !== "") {
        url = `//api.punkapi.com/v2/beers?ids=${search.id}`;
      } else if (search.name !== "") {
        url = `//api.punkapi.com/v2/beers?beer_name=${search.name}`;
      } else if (search.abv_gt !== "") {
        url = `//api.punkapi.com/v2/beers?abv_gt=${search.abv_gt}`;
      } else {
        url = `//api.punkapi.com/v2/beers`;
      }
      axios.get(url).then((res) => {
        const result = res.data;
        setPunks(result);
        setResponse(result);
      });
    };
    dataFetch();
  }, [search]);

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setSearch({ ...search, [name]: value });
  };

  const setData = () => {
    setPunks((previtem) => {
      return previtem.filter((item) => {
        return (
          (!search.name ||
            item.name.toLowerCase().includes(search.name.toLowerCase())) &&
          (!search.id || item.id == search.id)
        );
      });
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setData();
    }, 100);
    return () => clearTimeout(timer);
  }, [search]);

  const column = {
    name: "Name",
    id: "Id",
    tagline: "Tagline",
    firstBrewed: "First Brewed",
    description: "Description",
    abv: "Abv",
    yeast: "Yeast",
    image: "image",
  };

  return (
    <>
      <main>
        <h1>Punk Brewed</h1>
        <div className="search-controler">
          <PunkForm
            search={search.id}
            type={"number"}
            name={"id"}
            inputEvent={inputEvent}
            label={"Search By Id"}
          />
          <PunkForm
            search={search.name}
            type={"text"}
            name={"name"}
            inputEvent={inputEvent}
            label={"Search By Name"}
          />
          <PunkForm
            search={search.abv_gt}
            type={"number"}
            name={"abv_gt"}
            inputEvent={inputEvent}
            label={"Search By Above Average"}
          />
        </div>
        <PunkTable response={response} column={column} />
      </main>
    </>
  );
};

export default PunkApi;
