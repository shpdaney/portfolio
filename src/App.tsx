import React from "react";
import './App.css'
import '@/assets/styles/var.css'

import mainImage from "@/assets/images/prestupnik-s-tablichkoi-3.webp";
import bg from "@/assets/images/beton2.jpg";

// Logos Skills
import TsLogo from '@/assets/images/TypeScript.svg'
import ReactLogo from '@/assets/images/react.svg'
import ReduxLogo from '@/assets/images/redux.svg'
import SassLogo from '@/assets/images/Sass.svg'
import WebpackLogo from '@/assets/images/webpack.svg'
import ViteLogo from '@/assets/images/Vite.svg'


import {MainScreen} from "@/components/MainScreen";
import {Skill} from "@/components/Skill";

export interface ISkill {
    logo?: string | React.JSX.Element
    logo2?: string | React.JSX.Element
    text: string
    accept: string
}

const skills: ISkill[] = [
    {
        logo: TsLogo,
        text: 'with:',
        accept: 'any',
    },
    {
        logo: ReactLogo,
        text: 'without:',
        accept: 'keys',
    },
    {
        logo: ReduxLogo,
        text: 'and had:',
        accept: 'Two state',
    },
    {
        logo: SassLogo,
        text: 'not',
        accept: 'responsive',
    },
    {
        logo: WebpackLogo,
        logo2: ViteLogo,
        text: '&:',
        accept: 'together',
    },
]

const skillsProps = skills.map((skill) => {
    return (
        <Skill
            key={Math.random()}
            logo={
                <img
                    className={`skillLogo`}
                    src={skill.logo} alt='logo'
                />
            }
            logo2={
                skill.logo2
                ? <img
                    className={`skillLogo`}
                    src={skill.logo2} alt='logo'
                /> : undefined
            }
            text={skill.text}
            accept={skill.accept}
        />
    )
})


function App() {

    return (
        <>
            <MainScreen/>
            <div className={`app`}>
                <picture className={`mainImage`}>
                    <source srcSet={mainImage} type={`image/webp`}/>
                    <img src={bg} alt="bg"/>
                </picture>
                <div className="offer">
                    <h1 className="offerTitle">Arrested</h1>
                    <div className="offerSubTitle">
                        <span>for</span>
                        <h3>work</h3>
                    </div>
                </div>
                <section className={`skillsSet`}>
                    <aside className={`skillsSetImage`}>
                        <img src={mainImage} alt="Image"/>
                    </aside>
                    <div className={`skillsList`}>
                        {skillsProps}
                    </div>
                </section>
            </div>
        </>
    )
}

export default App