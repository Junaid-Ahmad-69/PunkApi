import "./PunkTable.css";
const PunkTable = ({response, column}) => {
  return (
    <>
      <table className="punk-table">
        <thead>
          <tr>
            <th>{column.id}</th>
            <th>{column.name}</th>
            <th>{column.tagline}</th>
            <th>{column.firstBrewed}</th>
            <th>{column.description}</th>
            <th>{column.abv}</th>
            <th>{column.yeast}</th>
            <th>{column.image}</th>
          </tr>
        </thead>
        <tbody>
          {response.length > 0
            ? response.map((beers, index) => {
                return (
                  <tr key={index}>
                    <td>{beers.id}</td>
                    <td>{beers.name}</td>
                    <td>{beers.tagline}</td>
                    <td>{beers.first_brewed}</td>
                    <td>{beers.description}</td>
                    <td>{beers.abv}</td>
                    <td>{beers.ingredients.yeast}</td>
                    <td>
                      <img
                        src={beers.image_url}
                        alt="brewed_images"
                        className="brewed-image"
                      />
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
};

export default PunkTable;
