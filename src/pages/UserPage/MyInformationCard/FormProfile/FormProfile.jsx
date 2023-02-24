import { useState } from "react";
import { BtnProfileForm } from "./BtnProfileForm/BtnProfileForm";
import { BoxInput, Form, NameInput } from "./FormProfile.styled";

export const FormProfile = () => {
  const [name, setName] = useState("Anna");
  const [email, setEmail] = useState("anna00@gmail.com");
  const [birthday, setBirthday] = useState("2018-01-01");
  const [phone, setPhone] = useState("+380000000000");
  const [city, setCity] = useState("Kyiv");

  return (
    <Form>
      <BoxInput>
        <NameInput>Name:</NameInput>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled
        />
        <BtnProfileForm />
      </BoxInput>
      <BoxInput>
        <NameInput>Email:</NameInput>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled
        />
        <BtnProfileForm />
      </BoxInput>
      <BoxInput>
        <NameInput>Birthday:</NameInput>
        <input
          type="date"
          value={birthday}
          min="2018-01-01"
          max="2018-12-31"
          onChange={(e) => setBirthday(String(e.target.value))}
          disabled
        />
        <BtnProfileForm />
      </BoxInput>
      <BoxInput>
        <NameInput>Phone:</NameInput>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled
        />
        <BtnProfileForm />
      </BoxInput>
      <BoxInput>
        <NameInput>City:</NameInput>
        <input
          type="Text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled
        />

        <BtnProfileForm />
      </BoxInput>
    </Form>
  );
};
