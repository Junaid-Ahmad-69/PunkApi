import React, {useState, useEffect} from "react";
import PunkForm from "../PunkForm/PunkForm";
import "../Task_1_Punk_API/PunkApi.css";
import PunkTable from "../PunkTable/PunkTable";
import axios from "axios";

const PunkApi = () => {
    const [response, setResponse] = useState([]);
    const [beer, setBeer] = useState(1);
    const perBeer = 10;
    const [search, setSearch] = useState({
        id: "",
        name: "",
        abv_gt: "",
    });
    useEffect(() => {
        const dataFetch = async () => {
            let url;
            if (search.id !== "" || search.name !== "" || search.abv_gt !== "") {
                url = `//api.punkapi.com/v2/beers?`;
                if (search.id !== "") url += `ids=${search.id}&`;
                if (search.name !== "") url += `beer_name=${search.name}&`;
                if (search.abv_gt !== "") url += `abv_gt=${search.abv_gt}&`;
                url = url.slice(0, -1);
            } else {
                url = `//api.punkapi.com/v2/beers?page=${beer}&per_page=${perBeer}`;
            }

            axios.get(url).then((res) => {
                const result = res.data;
                setResponse(result);
            });
        };
        dataFetch();
    }, [search, beer]);

    const inputEvent = (event) => {
        const {value, name} = event.target;
        setSearch({...search, [name]: value});
    };

    const setData = () => {
        setResponse((prevItem) => {
            return prevItem.filter(({id, name, abv_gt}) => {
                return (
                    !search.id ||
                    id === search.id ||
                    !search.name ||
                    name.toLowerCase().includes(search.name.toLowerCase()) ||
                    !search.abv_gt ||
                    abv_gt !== search.abv_gt
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
                <div className="search-controller">
                    <PunkForm
                        search={search.id}
                        type={"number"}
                        name={"id"}
                        inputEvent={inputEvent}
                        label={"Search By ID"}
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
                <PunkTable response={response} column={column}/>
            </main>

            <div className="buttons-group">
                <button className="paginate-buttons" disabled={beer === 1} onClick={() => {
                    setBeer(beer => (beer - 1))
                }}>Previous
                </button>
                <button className="paginate-buttons" onClick={() => {
                    setBeer(beer => (beer + 1))
                }}>Next
                </button>
            </div>

        </>
    );
};

export default PunkApi;
