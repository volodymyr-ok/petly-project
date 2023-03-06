import React, {useEffect, useState} from 'react';
import {Country, State, City} from 'country-state-city';
import {LocationBtn, LocationSelectWrapper, LocationWrapper, StyledSelect} from "./LocationPicker.styled";

const LocationPicker = ({disabled, onChange, value}) => {
    let countryData = Country.getAllCountries().map(country => {
        return {value: country.name, label: country.name, isoCode: country.isoCode}
    });
    const [stateData, setStateData] = useState();
    const [cityData, setCityData] = useState();

    const [country, setCountry] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();

    useEffect(() => {
        setStateData(State.getStatesOfCountry(country?.isoCode).map(state => {
            return {value: state.name, label: state.name, isoCode: state.isoCode}
        }));
    }, [country]);

    useEffect(() => {
        setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode).map(city => {
            return {value: city.name, label: city.name}
        }));
    }, [state]);

    // useEffect(() => {
    //     stateData && setState(stateData[0]);
    // }, [stateData]);
    //
    // useEffect(() => {
    //     cityData && setCity(cityData[0]);
    // }, [cityData]);

    useEffect(() => {
        city !== undefined && onChange(`${city?.value}, ${state?.value}`)
    }, [city]);

    return (
        <LocationWrapper>
            <LocationBtn disabled={disabled}>{value}</LocationBtn>
            {!disabled && <LocationSelectWrapper>
                <StyledSelect
                    styles={{
                        // control: (baseStyles, state) => ({
                        //     ...baseStyles,
                        //     // borderColor: state.isFocused ? 'grey' : 'red',
                        //     borderColor: `red`,
                        //     paddingTop: '0',
                        //     minHeight: '10px',
                        //     borderRadius: '50px'
                        // }),
                        // menu: (baseStyles, state) => ({
                        //     ...baseStyles,
                        //     // borderColor: state.isFocused ? 'grey' : 'red',
                        //     // borderColor: `${colors.darkOrange}`,
                        //     borderRadius: '50px',
                        //     // backgroundColor: 'orange'
                        // }),
                        // option: (baseStyles, state) => ({
                        //     ...baseStyles,
                        //     borderColor: `${colors.darkOrange}`,
                        //     // borderColor: state.isFocused ? 'grey' : 'red',
                        //     // borderColor: state.isFocused ? `${colors.darkOrange}` : `${colors.accentOrange}`,
                        //     color: state.isFocused ? `${colors.white}` : `${colors.black}`,
                        //     backgroundColor: state.isFocused ? `${colors.accentOrange}` : '#FDF7F2'
                        // }),
                    }}
                    defaultValue={country}
                    onChange={setCountry}
                    options={countryData}
                    placeholder={'Select country'}
                />
                {country &&
                    <StyledSelect
                        defaultValue={state}
                        onChange={setState}
                        options={stateData}
                        placeholder={'Select state'}
                    />}
                {state &&
                    <StyledSelect
                        defaultValue={city}
                        onChange={setCity}
                        options={cityData}
                        placeholder={'Select city'}
                    />}
            </LocationSelectWrapper>}
        </LocationWrapper>
    );
};

export default LocationPicker;