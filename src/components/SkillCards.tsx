import React from 'react'
import { Skills } from '../constants/constants'

const SkillCards: React.FC = () => {
    return (
        <div className='flex justify-center items-center flex-wrap mx-8 md:mx-12'>
            {Skills.map((skill, index) => (
                <div key={index} className="flex justify-center items-center rounded bg-slate-700 m-2 px-1 py-1 md:m-4 md:px-2 md:py-2 ">
                    <img className='w-6 md:w-8' src={skill.img} alt={skill.name} />
                    <p className='text-white px-2 text-md md:text-xl font-mono transition-all duration-300 hover:text-sky-500'>{skill.name}</p>
                </div>
            ))}
        </div >
    )
}

export default SkillCards;
