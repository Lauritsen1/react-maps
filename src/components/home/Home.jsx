import { useState, useEffect } from "react";

import IndexFilter from "../indexfilter/index-filter";
import CountryList from "../countrylist/country-list";
import SearchBar from "../searchbar/searchbar";

import "./Home.scss";

const Home = () => {

  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();
  const [filter, setFilter] = useState('All');

  const fetchData = async () => {
    return await fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountryList(data);
        setCountryListDefault(data);
      });
  }

  const getClickedIndex = (e) => {
    setFilter(e.target.dataset.letter);
    setInput('');
    setCountryList(countryListDefault);
  }

  const updateInput = async (input) => {
    const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setCountryList(filtered);
    setFilter('All');
  }

  useEffect(() => { fetchData() }, []);

  return (
    <div className="home-wrapper">
      <SearchBar input={input} onChange={updateInput} />
      <IndexFilter getClickedIndex={getClickedIndex} />
      <CountryList filter={filter} countryList={countryList} />
    </div>
  );
};

export default Home;