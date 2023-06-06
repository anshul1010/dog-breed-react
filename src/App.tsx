import BaseSearch from "./components/base/BaseSearch";
import BaseSpinner from "./components/base/BaseSpinner";
import ListGroup from "./components/ListGroup";
import { useState, useEffect } from "react";
import { APIService } from "./service/index";
import { GET_SORTED_VALUES } from "./utils/constant";
import BaseSort from "./components/base/BaseSort";
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoadingState] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [sort, setSort] = useState({});

  const handleChange = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (!!searchValue) {
      setLoadingState(true);
      APIService(`breeds/search?q=${searchValue}`).then((res) => {
        setSearchResults(res);
        setLoadingState(false);
      });
    }
  }, [searchValue]);
  useEffect(() => {
    const sortedResults = GET_SORTED_VALUES(searchResults, sort);
    setSearchResults(sortedResults);
  }, [sort]);
  return (
    <>
      <div
        className={
          "w-100 pt-8 bg-gray-100 mx-auto " +
          (searchResults.length > 3 ? "h-full" : "h-screen")
        }
      >
        <section>
          <BaseSearch handleChange={handleChange} />
          <BaseSort sort={sort} onSort={setSort} />
          {loading ? (
            <BaseSpinner />
          ) : searchResults.length ? (
            <ListGroup items={searchResults} />
          ) : (
            <div className="flex justify-center py-4">
              Please search with breeds to see dogs results !!!
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
