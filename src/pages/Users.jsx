import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function Users() {
  const [url, setUrl] = useState("https://reqres.in/api/users?page=1");
  const { data, loading } = useFetch(url);
  return (
    <div className="flex gap-2">
       {loading && <div>loading...</div>}
      <ul>
        {data &&
          data.data.map((item) => (
            <li key={item.id}>
              <img src={item.avatar} alt={item.first_name} />
              <h2>{item.first_name}</h2>
            </li>
          ))}
      </ul>

      <div className="flex gap-2 mt-2">
        <button
          className="px-5 py-2 bg-fuchsia-600 text-white rounded h-12"
          onClick={() => {
            setUrl("https://reqres.in/api/users?page=1");
          }}>
          Prev page
        </button>
        <button
          className="px-5 py-2 bg-fuchsia-600 text-white rounded h-12"
          onClick={() => {
            setUrl("https://reqres.in/api/users?page=2");
          }}>
          Next page
        </button>
      </div>
    </div>
  );
}
