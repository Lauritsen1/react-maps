import { Link } from "react-router-dom";

import "./country-list.scss";

const CountryList = ({ countryList = [], filter }) => {

  let data = countryList.reduce((r, e) => {

    let alphabet = e.name[0];

    if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] }

    else r[alphabet].record.push(e);

    return r;
  }, {});

  let sortedCountryList = Object.values(data);

  return (
    <>
      {sortedCountryList.map((element, index) => {

        if (element.alphabet === filter) {
          return (
            <div key={index} className="country-list-container">

              <h2 className="country-list-container__heading">{element.alphabet}</h2>

              <ul className="country-list">


                {element.record.map(country => {

                  return (

                    <li key={country.numericCode} className="country-list__item">
                      <Link to={`/country/${country.name}`}>{country.name}</Link>
                    </li>

                  )

                })}
              </ul>
            </div>
          )
        }

        if (filter === 'All') {

          return (
            <div key={index} className="country-list-container">

              <h2 className="country-list-container__heading">{element.alphabet}</h2>

              <ul className="country-list">


                {element.record.map(country => {

                  return (

                    <li key={country.numericCode} className="country-list__item">
                      <Link to={`/country/${country.name}`}>{country.name}</Link>
                    </li>

                  )

                })}
              </ul>
            </div>
          )

        }

        return null;
      })}
    </>
  );
};

export default CountryList;
