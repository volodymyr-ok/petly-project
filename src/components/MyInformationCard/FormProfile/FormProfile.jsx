import {useState} from "react";
import {Form} from "./FormProfile.styled";
import {InputItem} from "./InputItem";
import {PrivateApi} from "../../../http/http";
import {Notify} from "notiflix";
import moment from "moment";

export const FormProfile = ({user}) => {
    const [dataSend, setDataSend] = useState({});
    const [nameActivePencil, setNameActivePencil] = useState("");
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
        return await PrivateApi.patch("api/users", dataSend);
    };
    const handleChange = ([key, val]) => {
        if (key === 'birthday') {
            val = moment(val).format('DD.MM.YYYY')
        }
        setDataSend({[key]: val});
    };

    const handleInput = (e, nameBtn) => {
        e.preventDefault();

        if (nameActivePencil === "") {
            setNameActivePencil(nameBtn);
        }

        if (nameActivePencil === nameBtn && Object.keys(dataSend).length === 0) {
            setNameActivePencil("");
        }

        if (nameActivePencil === nameBtn && Object.keys(dataSend).length) {
            updateUserData(dataSend)
                .then(() => {
                    Notify.success(`You have successfully updated your data`);
                    setIsLoading(false);
                })
                .catch((error) => {
                    setIsError(error);
                    setIsLoading(false);
                });
            setNameActivePencil("");
        }
        if (nameActivePencil !== nameBtn) setNameActivePencil(nameBtn);
    };

    return (
        <Form>
            {inputsList.map(({type, value, name, mask, title}, index) => (
                <InputItem
                    key={`${title}-${index}`}
                    type={type}
                    value={value}
                    name={name}
                    mask={mask}
                    title={title}
                    dark={nameActivePencil !== "" ? "dark" : "ok"}
                    disable={nameActivePencil !== name || nameActivePencil === ""}
                    onClickPencil={(e) => handleInput(e, name)}
                    onChange={(data) => handleChange(data)}
                />
            ))}
        </Form>
    );
};
