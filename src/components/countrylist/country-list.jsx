import { Link } from "react-router-dom";

import "./country-list.scss";

const CountryList = ({ countryList = [], filter }) => {

  let data = countryList.reduce((r, e) => {

    // get first letter of name of current element
    let alphabet = e.name[0];

    if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] }

    else r[alphabet].record.push(e);

    return r;
  }, {});

  let sortedCountryList = Object.values(data);

  return (
    <ul className="country-list">

      {sortedCountryList.map((element, index) => {

        return (
          <div key={index} className="country-list__inner-container">
            <h2 className="country-list__heading">{element.alphabet}</h2>
            {element.record.map(country => {

              if (country) {

                if (country.name.charAt(0) === filter) {

                  return (

                    <li key={country.numericCode} className="country-list__item">
                      <Link to={`/country/${country.name}`}>{country.name}</Link>
                    </li>

                  )
                }

                if (filter === 'All') {

                  return (

                    <li key={country.numericCode} className="country-list__item">
                      <Link to={`/country/${country.name}`}>{country.name}</Link>
                    </li>

                  )

                }

              }
              return null;

            })}
          </div>
        )
      })}
    </ul>

  );
};

export default CountryList;
