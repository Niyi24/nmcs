import React, { useEffect, useState } from 'react';

const MinutesPage = () => {
  const [minutes, setMinutes] = useState([]);

  useEffect(() => {
    const fetchMinutes = async () => {
      const response = await fetch('/api/minutes');
      const data = await response.json();
      setMinutes(data);
    };

    fetchMinutes();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Monthly Minutes</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Details</th>
          </tr>
        </thead>
        <tbody>
          {minutes.map((minute) => (
            <tr key={minute.id}>
              <td className="py-2 px-4 border-b">{minute.date}</td>
              <td className="py-2 px-4 border-b">{minute.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MinutesPage;