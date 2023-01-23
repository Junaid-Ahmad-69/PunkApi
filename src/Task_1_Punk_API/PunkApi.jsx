import React, {useState, useEffect} from "react";
import PunkForm from "../PunkForm/PunkForm";
import "../Task_1_Punk_API/PunkApi.css";
import PunkTable from "../PunkTable/PunkTable";
import axios from "axios";
import {DebounceInput} from "react-debounce-input";

const PunkApi = () => {
    const [response, setResponse] = useState([]);
    const [beer, setBeer] = useState(1);
    const [perBeer, setPerBeer] = useState();
    const [search, setSearch] = useState({
        id: "",
        name: "",
        abv_gt: "",
        yeast: "",
        brewed_after: "",
    });
    const defaultPerBeer = 25;
    useEffect(() => {
        const dataFetch = async function () {
            const queryParam = {}
            if (search.id !== "") queryParam.ids = search.id;
            if (search.name !== "") queryParam.beer_name = search.name;
            if (search.abv_gt !== "") queryParam.abv_gt = search.abv_gt;
            if (search.brewed_after !== "") queryParam.brewed_after = search.brewed_after;
            if (search.yeast !== "") queryParam.yeast = search.yeast;
            queryParam.page = beer;
            queryParam.per_page = perBeer || defaultPerBeer;

            await axios.get(`${process.env.REACT_APP_PUNK_API}/beers`, {
                params: queryParam
            }).then((res) => {
                const result = res.data;
                setResponse(result);
            });
        };
        dataFetch();
    }, [search, beer, perBeer]);

    const inputEvent = (event) => {
        const {value, name} = event.target;
        setSearch({...search, [name]: value});
    };

    const setData = () => {
        setResponse((prevItem) => {
            return prevItem.filter(({id, name, abv_gt, yeast, brewed_after}) => {
                return (
                    !search.id ||
                    id === search.id ||
                    !search.name ||
                    name.toLowerCase().includes(search.name.toLowerCase()) ||
                    !search.abv_gt ||
                    abv_gt !== search.abv_gt ||
                    !search.yeast || yeast.toLocaleString().includes(yeast.toLocaleString()) ||
                    !search.brewed_after || brewed_after === search.brewed_after
                );
            });
        });
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setData();
        }, 800);
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
    const handleChange = (event) => {
        setPerBeer(event.target.value);
    }

    return (
        <>
            <main>
                <h1>Punk Beers Filters</h1>
                <div className="search-controller">
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
                        label={"Beer"}
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

                </div>
                <PunkTable response={response} column={column}/>
            </main>

            <div className="buttons-group">
                <button
                    className="paginate-buttons"
                    disabled={beer === 1}
                    onClick={() => {
                        setBeer((beer) => beer - 1);
                    }}
                >
                    Previous
                </button>
                <span className="page-number">{beer}</span>
                <button
                    className="paginate-buttons"
                    onClick={() => {
                        setBeer((beer) => beer + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default PunkApi;
