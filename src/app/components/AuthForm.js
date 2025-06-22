import { useState } from "react";
import { useRouter } from "next/router";

const AuthForm = ({ isLogin }) => {
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

  const router = useRouter();

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
    const url = isLogin ? "/api/auth/login" : "/api/auth/register";
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    const response = await fetch(url, {
      method: "POST",
      body: formDataToSend,
    });

    if (response.ok) {
      const data = await response.json();
      // Handle successful login/registration (e.g., store token, redirect)
      router.push("/dashboard");
    } else {
      // Handle error (e.g., show error message)
      const errorData = await response.json();
      alert(errorData.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isLogin && (
        <>
          <input
            type="text"
            name="memberId"
            placeholder="Member ID"
            value={formData.memberId}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="text"
            name="nin"
            placeholder="NIN"
            value={formData.nin}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="text"
            name="nepaBill"
            placeholder="NEPA Bill"
            value={formData.nepaBill}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="file"
            name="profilePicture"
            onChange={handleFileChange}
            required
            className="input"
          />
          <input
            type="text"
            name="bvn"
            placeholder="BVN"
            value={formData.bvn}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="text"
            name="nextOfKin"
            placeholder="Next of Kin"
            value={formData.nextOfKin}
            onChange={handleChange}
            required
            className="input"
          />
        </>
      )}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="input"
      />
      <button type="submit" className="btn">
        {isLogin ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;