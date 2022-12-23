import React, { useState, useEffect } from "react";
import PunkForm from "../PunkForm/PunkForm";
import "../Task_1_Punk_API/PunkApi.css";
import PunkTable from "../PunkTable/PunkTable";

const PunkApi = () => {
  const [response, setResponse] = useState([]);
  const [nameBeer, setNameBeer] = useState("arcade");
  const [nameId, setNameId] = useState("");
  const [searchapi, setSearchApi] = useState([]);
  const [nameTagline, setNameSearch] = useState("");
  const [nameBrewed, setNameBrewed] = useState("");
  const [nameAbv, setNameAbv] = useState("");

  useEffect(() => {
    const dataFetch = async () => {
      const result = await fetch(
        `https://api.punkapi.com/v2/beers?beer_name=${nameBeer}`
      ).then((result) => result.json());

      setResponse(result);
      setSearchApi(result);
    };
    dataFetch();
  }, [nameBeer]);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const changeHandler = (e) => {
    if (e.target.value === " ") {
      setResponse(searchapi);
    } else {
      const result = searchapi.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResponse(result);
    }
    setNameBeer(e.target.value);
  };

  const idHandler = (e) => {
    if (e.target.value === " ") {
      setResponse(searchapi);
    } else {
      const results = searchapi.filter((item) =>
        item.id.toString().includes(e.target.value.toString())
      );
      setResponse(results);
    }
    setNameId(e.target.value);
  };

  const tagHandler = (e) => {
    if (e.target.value === " ") {
      setResponse(searchapi);
    } else {
      const tag = searchapi.filter((item) =>
        item.tagline.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setResponse(tag);
    }
    setNameSearch(e.target.value);
  };

  const brewedHandler = (e) => {
    if (e.target.value === " ") {
      setResponse(searchapi);
    } else {
      const tag = searchapi.filter((item) =>
        item.first_brewed
          .toString()
          .slice(0, 2)
          .includes(e.target.value.toString())
      );
      setResponse(tag);
    }
    setNameBrewed(e.target.value);
  };

  const abvHandler = (e) => {
    if (e.target.value === " ") {
      setResponse(searchapi);
    } else {
      const tag = searchapi.filter((item) =>
        item.abv.toString().slice(0, 2).includes(e.target.value.toString())
      );
      setResponse(tag);
    }
    setNameAbv(e.target.value);
  };

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
        <div className="search-controler" onSubmit={submitHandler}>
          <PunkForm
            name="Search By Name"
            value={nameBeer}
            type="text"
            handler={changeHandler}
          />
          <PunkForm
            name="Search By Id"
            value={nameId}
            type="number"
            handler={idHandler}
          />
          <PunkForm
            name="Search By Tagline"
            value={nameTagline}
            type="text"
            handler={tagHandler}
          />
          <PunkForm
            name="Search By First Brewed"
            value={nameBrewed}
            type="number"
            handler={brewedHandler}
          />
          <PunkForm
            name="Search By Abv"
            value={nameAbv}
            type="number"
            handler={abvHandler}
          />
        </div>

        <PunkTable response={response} column={column} />
      </main>
    </>
  );
};

export default PunkApi;
