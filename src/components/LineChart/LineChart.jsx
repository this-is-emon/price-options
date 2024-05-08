import {
  CartesianGrid,
  LineChart as LChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineChart = () => {
  // You can use this array of objects with the added 'id' property for your React charts or other data visualization tasks.

  const studentMarksWithId = [
    { id: 1, name: "Alice", math: 88, science: 35 },
    { id: 2, name: "Bob", math: 92, science: 79 },
    { id: 3, name: "Charlie", math: 80, science: 79 },
    { id: 4, name: "David", math: 89, science: 48 },
    { id: 5, name: "Eve", math: 100, science: 100 },
    { id: 6, name: "Frank", math: 80, science: 88 },
    { id: 7, name: "Grace", math: 60, science: 32 },
    { id: 8, name: "Henry", math: 100, science: 45 },
    { id: 9, name: "Ivy", math: 80, science: 20 },
    { id: 10, name: "Jack", math: 34, science: 30 },
  ];

  return (
    <div className="m-12 border-solid border-2 rounded-md border-sky-500 ">
      {/* <h1 className="text-5xl text-center m-5 text-white ">
        Line chart Component
      </h1> */}
      <LChart width={600} height={300} data={studentMarksWithId}>
        <Line type="monotone" dataKey="math" stroke="#000000" />
        <Line type="polytone" dataKey="science" stroke="#FFFFFF" />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
      </LChart>
      {/* <Line type="polytone" dataKey="science" stroke="#FFFFFF" />
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip /> */}
    </div>
  );
};

export default LineChart;
