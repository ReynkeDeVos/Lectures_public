import { useEffect, useState } from "react";

import React from "react";

function DataFetcher() {
  const [data, setData] = useState("Lade...");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setData("Daten sind da!");
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return <p className="border roudned p3">{data}</p>;
}

export default DataFetcher;
