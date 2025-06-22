import { useState } from "react";

const MemberForm = () => {
  const [formData, setFormData] = useState({
    memberId: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    dateOfBirth: "",
    nin: "",
    nepaBill: "",
    profilePicture: null,
    password: "",
    bvn: "",
    nextOfKin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="memberId"
        placeholder="Member ID"
        value={formData.memberId}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="date"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="nin"
        placeholder="NIN"
        value={formData.nin}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="nepaBill"
        placeholder="NEPA Bill"
        value={formData.nepaBill}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="file"
        name="profilePicture"
        onChange={handleFileChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="bvn"
        placeholder="BVN"
        value={formData.bvn}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <input
        type="text"
        name="nextOfKin"
        placeholder="Next of Kin"
        value={formData.nextOfKin}
        onChange={handleChange}
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Register
      </button>
    </form>
  );
};

export default MemberForm;