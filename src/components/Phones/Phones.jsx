import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    /* ----- Using 'fetch' ----- */
    //fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //.then((res) => res.json())
    //.then((data) => setPhones(data.data));
    //The 1st 'data' inside setPhones represents the 'response data' we got as reponse
    //The 2nd 'data' inside setPhones represents the 'array of data' inside of 'response data'

    /* ----- Using 'Axios' ----- */
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
            // Example : slug : "apple_iPhone_13_mini-11104"
            // slug.split("-") -> ["apple_iPhone_13_mini","11104"]
            // slug.split("-")[1] -> "11104"
            // parseInt(lug.split("-")[1]) -> 11104
          };
          return obj;
        });
        console.log(phonesWithFakeData);
        setPhones(phonesWithFakeData);
      });
  }, []);

  return (
    <div>
      <h2 className="text-5xl">Phone :{phones.length} </h2>
      <BarChart width={1000} height={300} data={phones}>
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <Bar dataKey="price" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};

export default Phones;
