import React, {useState, useEffect} from "react";
import PunkForm from "../PunkForm/PunkForm";
import "../Task_1_Punk_API/PunkApi.css";
import PunkTable from "../PunkTable/PunkTable";
import axios from "axios";

const PunkApi = () => {
    const [response, setResponse] = useState([]);
    const [beer, setBeer] = useState(1);
    const [perBeer, setPerBeer] = useState(25);
    const [search, setSearch] = useState({
        id: "",
        name: "",
        abv_gt: "",
        yeast: "",
        brewed_after: "",
    });
    useEffect(() => {
        const dataFetch = () => {
            let url;
            if (search.id !== "" || search.name !== "" || search.abv_gt !== "" || search.yeast !== "" || search.brewed_after !== "") {
                url = `${process.env.REACT_APP_PUNK_API}/beers?`;
                if (search.id !== "") url += `ids=${search.id}&`;
                if (search.name !== "") url += `beer_name=${search.name}&`;
                if (search.abv_gt !== "") url += `abv_gt=${search.abv_gt}&`;
                if (search.brewed_after !== "") url += `brewed_after=${search.brewed_after}&`;
                if (search.yeast !== "") url += `yeast=${search.yeast}&`;
                url = url.slice(0, -1);
            } else {
                url = `${process.env.REACT_APP_PUNK_API}/beers?page=${beer}&per_page=${perBeer}`;
            }

            axios.get(url).then((res) => {
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
    const handleChange = (event) => {
        setPerBeer(event.target.value);
    }

    return (
        <>
            <main>
                <h1>Punk Beers Filters</h1>
                <div className="search-controller">
                    {/*<PunkForm*/}
                    {/*    search={beer}*/}
                    {/*    type={"text"}*/}
                    {/*    name={"per_page"}*/}
                    {/*    // inputEvent={}*/}
                    {/*    onChange={setPerBeer(e => (e.target.value))}*/}
                    {/*    label={"Pagination Range"}*/}
                    {/*/>*/}


                    <input type="text" value={perBeer} onChange={handleChange}/>
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
