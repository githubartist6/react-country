import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../../api/postApi";
import { CountryCard } from "../layout/CountryCard";
import { Loading } from "../UI/Loading";
import { SearchFilter } from "../UI/SearchFilter";

export const Country = () => {

    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    // search filter
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData();
            setCountries(res.data);
        })
    }, []);

    // search filter
    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    };

    const filterRegion = (country) => {
        if (filter === "all") return country;
        return country.region === filter
    };

    // here is the main logic
    const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

    if (isPending) return <Loading />

    return (
        <section className="country-section">

            <SearchFilter
                search={search}
                setSearch={setSearch}
                filter={filter}
                setFilter={setFilter}
                countries={countries}
                setCountries={setCountries}
            />

            <ul className="grid grid-four-cols">
                {
                    filterCountries.map((curCountry) => {
                        return <CountryCard country={curCountry} />
                    })
                }
            </ul>
        </section>
    )
};