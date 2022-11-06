import {IProgram} from "../model/IProgram";
import React from "react";

interface ProgramProps {
    programs: IProgram
}

export function Program(props: ProgramProps) {
    console.log(props)
    return (
        <div>
            <div>
                <h1> {props.programs.id} </h1>
            </div>
        </div>
    )
}