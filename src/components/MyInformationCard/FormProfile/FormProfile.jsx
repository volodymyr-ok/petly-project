import { useState } from "react";
import { Form } from "./FormProfile.styled";
import { InputItem } from "./InputItem";
import { PrivateApi } from "../../../http/http";
import { Notify } from "notiflix";

export const FormProfile = ({ user }) => {
  const [dataSend, setDataSend] = useState({});
  const [nameActivePancil, setNameActivePancil] = useState("");
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const inputsList = [
    {
      value: user?.name,
      name: "name",
      type: "text",
      mask: null,
      title: "Name",
    },
    {
      value: user?.email,
      name: "email",
      type: "text",
      mask: null,
      title: "Email",
    },
    {
      value: user?.birthday,
      name: "birthday",
      type: "text",
      mask: [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/],
      title: "Birthday",
    },
    {
      value: user?.phone,
      name: "phone",
      type: "text",
      mask: [
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
      ],
      title: "Phone",
    },

    {
      value: user?.city,
      name: "city",
      type: "text",
      mask: null,
      title: "City",
    },
  ];

  const updateUserData = async (dataSend) => {
    const data = await PrivateApi.patch("api/users", dataSend);

    return data;
  };

  // const onInputClose = () => {
  //   console.log("onBlu");
  //   setNameActivePancil("");
  // };
  const handleChange = ([key, val]) => {
    setDataSend((prevState) => {
      return { ...prevState, [key]: val };
    });
  };

  const handleInput = (e, nameBtn) => {
    e.preventDefault();

    if (nameActivePancil === "") {
      setNameActivePancil(nameBtn);
    }

    if (nameActivePancil === nameBtn && Object.keys(dataSend).length === 0) {
      setNameActivePancil("");
    }

    if (nameActivePancil === nameBtn && Object.keys(dataSend).length) {
      updateUserData(dataSend)
        .then((data) => {
          Notify.success(`You have successfully updated your data`);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsError(error);
          setIsLoading(false);
        });
      setNameActivePancil("");
    }
    if (nameActivePancil !== nameBtn) setNameActivePancil(nameBtn);
  };

  return (
    <Form>
      {inputsList.map(({ type, value, name, mask, title }, index) => (
        <InputItem
          key={`${title}-${index}`}
          type={type}
          value={value}
          name={name}
          mask={mask}
          title={title}
          dark={nameActivePancil !== "" ? "dark" : "ok"}
          disable={nameActivePancil !== name || nameActivePancil === ""}
          onClickPencil={(e) => handleInput(e, name)}
          onChange={(data) => handleChange(data)}
          // onBlur={onInputClose}
        />
      ))}
    </Form>
  );
};
