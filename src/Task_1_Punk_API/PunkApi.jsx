import React, { useState, useEffect } from "react";
import PunkForm from "../PunkForm/PunkForm";
import "../Task_1_Punk_API/PunkApi.css";
import PunkTable from "../PunkTable/PunkTable";

const PunkApi = () => {
  const [response, setResponse] = useState([]);
  const [punks, setPunks] = useState([]);
  const [search, setSearch] = useState({
    id: "",
    name: "",
    yeast: "",
    abv_gt: "",
    first_brewed: "",
  });

  useEffect(() => {
    const dataFetch = async () => {
      const result = await fetch(
        `https://api.punkapi.com/v2/beers?beer_name=${search.name}`
      ).then((res) => res.json());
      setResponse(result);
      setPunks(result);
    };
    dataFetch();
  }, [search]);

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setSearch({ ...search, [name]: value });
  };

  const setData = () => {
    let beer = punks;
    if (!search.name) {
      const filterResult = beer.filter(({ name }) =>
        name.toLowerCase().includes(search.name.toLowerCase())
      );
      beer = filterResult;
      setPunks(beer);
    }
    if (!search.id) {
      const filterResult = beer.filter(({ id }) => id == search.id);
      beer = filterResult;
      setPunks(beer);
    }
    if (!search.abv_gt) {
      const filterResult = beer.filter(({ abv_gt }) =>
        abv_gt.toLowerCase().includes(search.abv_gt.toLowerCase())
      );
      beer = filterResult;
      setPunks(beer);
    }
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
            search={search.first_brewed}
            type={"text"}
            name={"first_brewed"}
            inputEvent={inputEvent}
            label={"Search By First Brewed"}
          />
          <PunkForm
            search={search.abv}
            type={"text"}
            name={"abv"}
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
