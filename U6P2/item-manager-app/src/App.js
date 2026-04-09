import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]); // store all data
  const [filterData, setFilterData] = useState([]); // filtered data
  const [search, setSearch] = useState(""); // search query
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null); // error state

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setData(data);
        setFilterData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle Search
  const handleSearch = (query) => {
    setSearch(query);

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilterData(filtered);
  };

  // Loading & Error UI
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <h1>Data Driven ReactJS Application</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* Data List */}
      {filterData.length > 0 ? (
        <ul>
          {filterData.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}