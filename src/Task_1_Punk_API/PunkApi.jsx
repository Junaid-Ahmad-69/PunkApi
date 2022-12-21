import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "../Task_1_Punk_API/PunkApi.css";

const PunkApi = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      const result = await fetch(
        "https://api.punkapi.com/v2/beers?page=1"
      ).then((result) => result.json());
      setResponse(result);
    };
    dataFetch();
  }, [response]);

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <main>
        <h1>Punk Brewed</h1>
        <form action="#" onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="punk-name">Search By Id</label>
            <input type="text" id="punk-name" name="punk-name" />
            <Button name={"Search"}></Button>
          </div>

          <div className="form-control">
            <label htmlFor="punk-name">Search By Name</label>
            <input type="text" id="punk-name" name="punk-name" />
            <Button name={"Search"}></Button>
          </div>

          <div className="form-control">
            <label htmlFor="punk-name">Search By Tagline</label>
            <input type="text" id="punk-name" name="punk-name" />
            <Button name={"Search"}></Button>
          </div>

          <div className="form-control">
            <label htmlFor="punk-name">Search By First Brewed</label>
            <input type="text" id="punk-name" name="punk-name" />
            <Button name={"Search"}></Button>
          </div>

          <div className="form-control">
            <label htmlFor="punk-name">Search By Abv</label>
            <input type="text" id="punk-name" name="punk-name" />
            <Button name={"Search"}></Button>
          </div>
        </form>

        <table className="punk-table">
          <thead className="ss">
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
          {response.map((data) => {
            return (
              <tbody>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.tagline}</td>
                  <td>{data.first_brewed}</td>
                  <td>{data.description}</td>
                  <td>{data.abv}</td>
                  <td>{data.yeast}</td>
                  <td>
                    <img
                      src={data.image_url}
                      alt="brewed_images"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </main>
    </>
  );
};

export default PunkApi;
