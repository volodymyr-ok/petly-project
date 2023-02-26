import { useState } from "react";
import { BtnProfileForm } from "./BtnProfileForm/BtnProfileForm";
import { BoxInput, Form, NameInput } from "./FormProfile.styled";
import MaskedInput from "react-text-mask";

export const FormProfile = () => {
  const [name, setName] = useState("Anna");
  const [email, setEmail] = useState("anna00@gmail.com");
  const [birthday, setBirthday] = useState("2018-01-01");
  const [phone, setPhone] = useState("+380000000000");
  const [city, setCity] = useState("Kyiv");
  const [disableInput, setDisabelInput] = useState(true);

  return (
    <Form>
      <BoxInput>
        <NameInput>Name:</NameInput>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disableInput}
        />
        <BtnProfileForm
          onClick={setDisabelInput}
          disableInput={disableInput}
          name={name}
        />
      </BoxInput>
      <BoxInput>
        <NameInput>Email:</NameInput>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disableInput}
        />
        <BtnProfileForm
          onClick={setDisabelInput}
          disableInput={disableInput}
          name={email}
        />
      </BoxInput>
      <BoxInput>
        <NameInput>Birthday:</NameInput>
        <MaskedInput
          mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
          value={birthday}
          disabled={disableInput}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <BtnProfileForm />
      </BoxInput>
      <BoxInput>
        <NameInput>Phone:</NameInput>
        <MaskedInput
          mask={[
            "+",
            /[3]/,
            /[8]/,
            /[0]/,
            " ",
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            " ",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          value={phone}
          disabled={disableInput}
          onChange={(e) => setPhone(e.target.value)}
        />
        <BtnProfileForm />
      </BoxInput>
      <BoxInput>
        <NameInput>City:</NameInput>
        <input
          type="Text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={disableInput}
        />

        <BtnProfileForm />
      </BoxInput>
    </Form>
  );
};
