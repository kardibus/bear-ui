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
                <a>ID :</a>
                <a> {props.programs.id} </a>
                <a> NAME :</a>
                <a> {props.programs.name} </a>
                <a>WORK :</a>
                <a> {props.programs.work.valueOf()} </a>
            </div>
        </div>
    )
}