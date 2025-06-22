'use client';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function ProfilePage() {
  const [member, setMember] = useState(null);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    if (!id) {
      setError('No member ID provided.');
      return;
    }
    fetch(`/api/members/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Member not found');
        return response.json();
      })
      .then((data) => setMember(data))
      .catch((error) => setError(error.message));
  }, [id]);

  if (error) {
    return <div className="text-orange-600 p-8">{error}</div>;
  }

  if (!member) {
    return <div className="text-emerald-700 p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-emerald-700">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2 text-emerald-700">
          {member.firstName} {member.lastName}
        </h2>
        <p className="text-emerald-700"><strong>Email:</strong> {member.email}</p>
        <p className="text-emerald-700"><strong>Phone Number:</strong> {member.phoneNumber}</p>
        <p className="text-emerald-700"><strong>Address:</strong> {member.address}</p>
        <p className="text-emerald-700"><strong>Date of Birth:</strong> {member.dateOfBirth}</p>
        <p className="text-emerald-700"><strong>NIN:</strong> {member.nin}</p>
        <p className="text-emerald-700"><strong>NEPA Bill:</strong> {member.nepaBill}</p>
        <p className="text-emerald-700"><strong>BVN:</strong> {member.bvn}</p>
        {member.profilePicture && (
          <Image
            src={member.profilePicture}
            alt="Profile Picture"
            className="mt-4 rounded-full"
            width={128}
            height={128}
          />
        )}
      </div>
    </div>
  );
}