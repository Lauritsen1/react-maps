import React from "react";

import "./country-data-table.scss";

const Country = ({ countryData }) => {

    return (
        <div>
            <div className="flag">
                <img src={countryData.flag} alt={`${countryData.name} flag`} />
            </div>
            <div className="table">
                <div className="table__row">
                    <div className="table__heading">Name</div>
                    <div className="table__data">
                        {countryData.name} ({countryData.alpha2Code})
                    </div>
                </div>
                <div className="table__row">
                    <div className="table__heading">Region</div>
                    <div className="table__data">{countryData.region}</div>
                </div>
                <div className="table__row">
                    <div className="table__heading">Capital</div>
                    <div className="table__data">{countryData.capital}</div>
                </div>
                <div className="table__row">
                    <div className="table__heading">Language</div>
                    <div className="table__data">{countryData.languages[0].name}</div>
                </div>
                <div className="table__row">
                    <div className="table__heading">Currency</div>
                    <div className="table__data">
                        {countryData.currencies[0].name} ({countryData.currencies[0].code})
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;
