import { useState } from "react";

export const RegisterUserGoogle = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
      />
      <input
        type="text"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        placeholder="Birthdate"
      />
      <input
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        placeholder="Gender"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />
      <input
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height"
      />
      <input
        type="text"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder="Weight"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
