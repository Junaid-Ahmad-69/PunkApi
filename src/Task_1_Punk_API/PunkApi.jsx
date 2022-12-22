import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "../Task_1_Punk_API/PunkApi.css";

const PunkApi = () => {
  const [response, setResponse] = useState([]);
  const [name, setName] = useState("");
  const [punks, setPunks] = useState({
    data: "",
    punks: [],
  });

  useEffect(() => {
    const dataFetch = async () => {
      const result = await fetch(
        "https://api.punkapi.com/v2/beers?page=1&per_page=80"
      ).then((result) => result.json());
      setResponse(result);
    };
    dataFetch();
    return () => {
      // clean not working
    };
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const changeHandler = (e) => {
    const results = response.filter((res) => {
      if (e.target.value === " ") return response;
      return res.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setName(e.target.value);
    setPunks({
      data: e.target.value,
      punks: results,
    });
  };

  // const IdHandler = (e) => {
  //   const results = response.filter((res) => {
  //     if (res.id === e.target.value) return results;
  //   });
  //   setName(e.target.value);
  //   setPunks({
  //     data: e.target.value,
  //     punks: results,
  //   });
  // };

  return (
    <>
      <main>
        <h1>Punk Brewed</h1>
        <form action="#" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="punk-name">Search By Name</label>
            <input type="text" value={name} onChange={changeHandler} />
          </div>

          <div className="form-control">
            <label htmlFor="punk-name">Search By Id</label>
            <input type="number" value={name} />
          </div>

          <div className="form-control">
            <label htmlFor="punk-name">Search By Tagline</label>
            <input type="text" id="punk-name" name="punk-name" />
          </div>

          <div className="form-control">
            <label htmlFor="punk-name">Search By First Brewed</label>
            <input type="text" id="punk-name" name="punk-name" />
          </div>

          <div className="form-control">
            <label htmlFor="punk-name">Search By Abv</label>
            <input type="text" id="punk-name" name="punk-name" />
          </div>
        </form>

        <table className="punk-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Tagline</th>
              <th>First Brewed</th>
              <th>Description</th>
              <th>Abv</th>
              <th>Yeast</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {punks.data == ""
              ? response?.map(
                  ({
                    id,
                    name,
                    tagline,
                    first_brewed,
                    description,
                    abv,
                    yeast,
                    image_url,
                  }) => {
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{tagline}</td>
                        <td>{first_brewed}</td>
                        <td>{description}</td>
                        <td>{abv}</td>
                        <td>{yeast}</td>
                        <td>
                          <img
                            src={image_url}
                            alt="brewed_images"
                            className="brewed-image"
                          />
                        </td>
                      </tr>
                    );
                  }
                )
              : punks.punks.map(
                  ({
                    id,
                    name,
                    tagline,
                    first_brewed,
                    description,
                    abv,
                    yeast,
                    image_url,
                  }) => {
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{tagline}</td>
                        <td>{first_brewed}</td>
                        <td>{description}</td>
                        <td>{abv}</td>
                        <td>{yeast}</td>
                        <td>
                          <img
                            src={image_url}
                            alt="brewed_images"
                            className="brewed-image"
                          />
                        </td>
                      </tr>
                    );
                  }
                )}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default PunkApi;
