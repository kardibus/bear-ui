import React, {useState} from 'react';
import {Switch} from "@mui/material";
import {Program} from "./components/Program";
import {programs} from "./data/programs";


const label = {inputProps: {'aria-label': 'Work'}};

function App() {
    const [work, setWork] = useState(true)
    const [pause, setPause] = useState(true)

    const handleClickWork = (event: any) => {
        setWork(!work)
        changeWork()
        console.log("work:" + event.valueOf())
    };
    const handleClickPause = (event: any) => {
        setPause(!pause)
        console.log("work:" + event.valueOf())
    };

    return (
        <div className="centered">
            <Program programs={programs[0]}></Program>
            <div className="marginDiv">
                <Switch {...label} value={work} onChange={handleClickWork} defaultChecked={programs[0].work}/>
                <label> work</label>
            </div>
            <div className="marginDiv">
                <Switch {...label} value={pause} onChange={handleClickPause}/>
                <label>pause</label>
            </div>
        </div>
    )
        ;

    async function changeWork() {
        try {
            const response = await fetch('https://kardibus-temp.herokuapp.com/beer/work', {
                method: 'POST',
                body: JSON.stringify({
                    work: work
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}

export default App;