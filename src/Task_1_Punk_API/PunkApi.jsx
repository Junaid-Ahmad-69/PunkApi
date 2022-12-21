import React, { useState, useEffect } from "react";

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
  return (
    <>
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
                  <img src={data.image} alt="brewed_images" />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default PunkApi;
