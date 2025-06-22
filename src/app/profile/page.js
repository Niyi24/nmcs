import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ProfilePage = () => {
  const [member, setMember] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`/api/members/${id}`)
        .then((response) => response.json())
        .then((data) => setMember(data))
        .catch((error) => console.error("Error fetching member data:", error));
    }
  }, [id]);

  if (!member) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">
          {member.firstName} {member.lastName}
        </h2>
        <p><strong>Email:</strong> {member.email}</p>
        <p><strong>Phone Number:</strong> {member.phoneNumber}</p>
        <p><strong>Address:</strong> {member.address}</p>
        <p><strong>Date of Birth:</strong> {member.dateOfBirth}</p>
        <p><strong>NIN:</strong> {member.nin}</p>
        <p><strong>NEPA Bill:</strong> {member.nepaBill}</p>
        <p><strong>BVN:</strong> {member.bvn}</p>
        <p><strong>Next of Kin:</strong> {member.nextOfKin}</p>
        {member.profilePicture && (
          <img
            src={member.profilePicture}
            alt="Profile Picture"
            className="mt-4 rounded-full w-32 h-32"
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;