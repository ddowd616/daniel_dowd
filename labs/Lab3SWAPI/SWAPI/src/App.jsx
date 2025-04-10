import Table from "./components/Table.jsx";
import axios from "axios";
import {useState} from "react";
import './App.css'

export default function App() {
    const [data,setData] = useState([]);
    const [showTable,setShowTable] = useState(false);
    const [page,setPage] = useState(null)
    const STYLE = {
        display: "flex",
        flexDirection: "column", /* Stack elements vertically */
        justifyContent: "center", /* Center vertically */
        alignItems: "center",/* Center horizontally */
        height: "100vh", /* Full viewport height */
        gap: "10px",
        color: "white"
    }


    const loadTable = async () =>{

        const randomPage = Math.floor(Math.random() * 9) + 1;
        try {
            const response = await axios.get(`http://swapi.dev/api/people?page=${randomPage}`)
            setData(response.data.results);
            setShowTable(true);
        }catch (error){
            console.error('Error Fetching data: ', error)
        }
        setPage(randomPage)
    };

    function resetTable() {
        setData([]);
        setShowTable(false);
        setPage(null)

    }
    const stars = Array.from({ length: 100 }).map((_, index) => ({
        id: index,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        delay: `${Math.random()}s`,
        duration: `${Math.random() + 0.5}s`
    }));
    return (
        <div style={STYLE}>
            <div className="lightspeed">
                {stars.map(star => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            animationDelay: star.delay,
                            animationDuration: star.duration
                        }}
                    />
                ))}
            </div>
            <h1>SWAPI</h1>
            <button onClick={loadTable}>Submit</button>
            <button onClick={resetTable}>Reset</button>
            {showTable && <Table people={data}/> }
            {page && <p id="page">Page: {page}</p>}
        </div>
    )
}
