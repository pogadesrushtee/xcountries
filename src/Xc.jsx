import { useEffect, useState } from "react";
import "./App.css";
const Card = ({name, flag, abbr}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                border: "1px solid grey",
                borderRadius: "10px",
                width: "200px",
                height: "200px",
                textAlign: "center"
            }}
        >
            <img src={flag} alt={"flag of India"} className="hlo" />
            <h2>{name}</h2>
        </div>
    );
};

const ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

export default function Xc() {
 

    const [apiData, setapiData] = useState([]);

    useEffect(() => {
        fetch(ENDPOINT)
            .then((response) => response.json())
            .then((data) => {
                setapiData(data)
            }).catch(error => console.error("Error fetching data: ",error));
    }, []);

    return (
        <div className="cou">
            {apiData.map(({name, flag, abbr}) => (
                <Card key={abbr} name={name} flag={flag}/>
            ))}
        </div>
    );
}