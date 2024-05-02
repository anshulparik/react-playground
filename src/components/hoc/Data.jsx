import axios from "axios";
import { useState, useEffect } from "react";

export const Data = (Component, extraProp) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");

      if (Array.isArray(res?.data)) {
        setData(res.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <Component data={data} extraProp={extraProp} />
    </div>
  );
};
