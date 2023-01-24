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
                    ? response.map(({
                                        id,
                                        name,
                                        tagline,
                                        first_brewed,
                                        description,
                                        abv,
                                        ingredients: {yeast},
                                        image_url
                                    }, index) => {
                        return (
                            <tr key={index}>
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
                    })
                    : null}
                </tbody>
            </table>
        </>
    );
};

export default PunkTable;
