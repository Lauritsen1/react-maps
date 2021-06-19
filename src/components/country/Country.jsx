import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CountryDataTable from "../countrydatatable/country-data-table";
import Map from "../map/map";

import "./Country.scss";

const Country = () => {

  const [country, setCountry] = useState();

  const { id } = useParams();

  const fetchData = async () => {
    return await fetch(`https://restcountries.eu/rest/v2/name/${id}?fullText=true`)
      .then(response => response.json())
      .then(data => {
        setCountry(data[0]);
      });
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div>
      {country && <CountryDataTable countryData={country}/>}
      {country && <Map lat={country.latlng[0]} lng={country.latlng[1]}/>}
    </div>
  );
};

export default Country;
