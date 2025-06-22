import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';

const MemberDashboard = () => {
  const [memberData, setMemberData] = useState(null);
  const memberId = '12345'; // Replace with actual member ID logic

  useEffect(() => {
    const fetchMemberData = async () => {
      const response = await fetch(`/api/members/${memberId}`);
      const data = await response.json();
      setMemberData(data);
    };

    fetchMemberData();
  }, [memberId]);

  if (!memberData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Member Dashboard</h1>
      <div className="mt-4">
        <h2 className="text-xl">Welcome, {memberData.firstName} {memberData.lastName}</h2>
        <p>Email: {memberData.email}</p>
        <p>Phone: {memberData.phone}</p>
        <p>Address: {memberData.address}</p>
        <p>Date of Birth: {memberData.dateOfBirth}</p>
        <p>NIN: {memberData.nin}</p>
        <p>NEPA Bill: {memberData.nepaBill}</p>
        <p>BVN: {memberData.bvn}</p>
        <p>Next of Kin: {memberData.nextOfKin}</p>
      </div>
      <Dashboard />
    </div>
  );
};

export default MemberDashboard;