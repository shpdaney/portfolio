// import styles from './index.module.scss'
import React from "react";
import {ISkill} from "@/App.tsx";

export const Skill: React.FC<ISkill> = (
    {
        logo,
        logo2,
        text,
        accept,
    }
) => {
    return (
        <div className={`skill`}>
            <p className={`skillText`}>Make use of</p>
            {logo}
            <p className={`skillText`}>{text}</p>
            {logo2 && logo2}
            <p className={`skillTextAccept`}>{accept}</p>
        </div>
    )
}