import React, {useState, useEffect} from "react";
import PunkForm from "../PunkForm/PunkForm";
import "../Task_1_Punk_API/PunkApi.css";
import PunkTable from "../PunkTable/PunkTable";
import axios from "axios";

const PunkApi = () => {
    const [response, setResponse] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(25);
    const [search, setSearch] = useState({
        id: "",
        name: "",
        abv_gt: "",
        yeast: "",
        brewed_after: "",
    });
    const defaultPage = 25;
    useEffect(() => {
        const dataFetch = async function () {
            const queryParam = {}
            if (search.id !== "") queryParam.ids = search.id;
            if (search.name !== "") queryParam.beer_name = search.name;
            if (search.abv_gt !== "") queryParam.abv_gt = search.abv_gt;
            if (search.brewed_after !== "") queryParam.brewed_after = search.brewed_after;
            if (search.yeast !== "") queryParam.yeast = search.yeast;
            queryParam.page = page;
            queryParam.per_page = perPage || defaultPage;
            await axios.get(`${process.env.REACT_APP_PUNK_API}/beers`, {
                params: queryParam
            }).then((res) => {
                const result = res.data;
                setResponse(result);
            });
        };
        dataFetch();
    }, [search, page, perPage]);
    const inputEvent = (event) => {
        const {value, name} = event.target;
        setSearch({...search, [name]: value});
    };
    const column = {
        name: "Name",
        id: "Id",
        tagline: "Tagline",
        firstBrewed: "First Brewed",
        description: "Description",
        abv: "Abv",
        yeast: "Yeast",
        image: "Image",
    };
    const handleChange = (event) => {
        setPerPage(event.target.value);
    }


    let pages = [];
    for (let i = 0; i < 13; i++) {
        pages.push(i)
    }
    console.log(pages)
    return (
        <>
            <main>
                <h1>Punk Beers Filters</h1>
                <div className="search-controller">
                    <form>
                        <PunkForm
                            type={"number"}
                            name={"paginate"}
                            label={"Pagination Range"}
                            inputEvent={handleChange}

                        />
                        <PunkForm
                            search={search.id}
                            type={"number"}
                            name={"id"}
                            inputEvent={inputEvent}
                            label={"iD#"}
                        />
                        <PunkForm
                            search={search.brewed_after}
                            type={"text"}
                            name={"brewed_after"}
                            inputEvent={inputEvent}
                            label={"Brewed"}
                        />
                        <PunkForm
                            search={search.name}
                            type={"text"}
                            name={"name"}
                            inputEvent={inputEvent}
                            label={"Beer Name"}
                        />
                        <PunkForm
                            search={search.abv_gt}
                            type={"number"}
                            name={"abv_gt"}
                            inputEvent={inputEvent}
                            label={"ABV"}
                        />
                        <PunkForm
                            search={search.yeast}
                            type={"text"}
                            name={"yeast"}
                            inputEvent={inputEvent}
                            label={"Yeast"}
                        />
                    </form>
                </div>

                <PunkTable response={response} column={column}/>

                <nav>
                    <ul>
                        {pages.map((index) => (
                            <li key={index}>
                                <button className={`paginate-buttons ${index === 0} ? "disabled" : " "`}
                                        disabled={index === 0} onClick={() => setPage(index + 1)}>{index + 1}</button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </main>

        </>
    );
};

export default PunkApi;
