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
  const [disableInput, setDisabelInput] = useState({
    name: true,
    email: true,
    birthday: true,
    phone: true,
    city: true,
  });

  const disableTrue = {
    name: true,
    email: true,
    birthday: true,
    phone: true,
    city: true,
  };

  const onInputClose = () => {
    setDisabelInput({ ...disableTrue });
  };

  return (
    <Form>
      <BoxInput>
        <NameInput>Name:</NameInput>
        <input
          type="text"
          value={name}
          onBlur={onInputClose}
          onChange={(e) => setName(e.target.value)}
          disabled={disableInput.name}
        />
        <BtnProfileForm
          onClick={setDisabelInput}
          disableInput={disableInput}
          disableTrue={disableTrue}
          activeImg={disableInput.name}
          name="name"
        />
      </BoxInput>
      <BoxInput>
        <NameInput>Email:</NameInput>
        <input
          type="email"
          value={email}
          onBlur={onInputClose}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disableInput.email}
        />
        <BtnProfileForm
          onClick={setDisabelInput}
          disableInput={disableInput}
          disableTrue={disableTrue}
          activeImg={disableInput.email}
          name="email"
        />
      </BoxInput>
      <BoxInput>
        <NameInput>Birthday:</NameInput>
        <MaskedInput
          mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
          value={birthday}
          disabled={disableInput.birthday}
          onBlur={onInputClose}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <BtnProfileForm
          onClick={setDisabelInput}
          disableInput={disableInput}
          disableTrue={disableTrue}
          activeImg={disableInput.birthday}
          name="birthday"
        />
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
          disabled={disableInput.phone}
          onBlur={onInputClose}
          onChange={(e) => setPhone(e.target.value)}
        />
        <BtnProfileForm
          onClick={setDisabelInput}
          disableInput={disableInput}
          disableTrue={disableTrue}
          activeImg={disableInput.phone}
          name="phone"
        />
      </BoxInput>
      <BoxInput>
        <NameInput>City:</NameInput>
        <input
          type="Text"
          value={city}
          onBlur={onInputClose}
          onChange={(e) => setCity(e.target.value)}
          disabled={disableInput.city}
        />

        <BtnProfileForm
          onClick={setDisabelInput}
          disableInput={disableInput}
          disableTrue={disableTrue}
          activeImg={disableInput.city}
          name="city"
        />
      </BoxInput>
    </Form>
  );
};
