import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CountryDataTable from "../countrydatatable/country-data-table";
import Map from "../map/map";

import "./Country.scss";

const Country = () => {

  const [country, setCountry] = useState();

  const { id } = useParams();

  useEffect(() => { 

    const fetchData = async () => {
      return await fetch(`https://restcountries.com/v2/name/${id}?fullText=true`)
        .then(res => res.json())
        .then(data => {
          setCountry(data[0]);
        });
    }
    
    fetchData(); 

  }, [id]);

  return (
    <div className="country-wrapper">
      {country && <Map lat={country.latlng[0]} lng={country.latlng[1]} />}
      {country && <CountryDataTable countryData={country} />}
    </div>
  );
};

export default Country;