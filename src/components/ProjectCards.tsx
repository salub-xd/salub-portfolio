import React from 'react'
import { Projects } from '../constants/constants';
import StuckTooltip from './StuckTooltip';
import linkImg from '../assets/link.svg'

const ProjectCards: React.FC = () => {
  return (
    <div className='flex flex-wrap justify-around items-center '>
      {Projects.map((val) => (
        <div className='p-8 my-5 mx-5 h-min shadow-2xl hover:shadow-lg rounded-md flex flex-col items-center'>
          <div className='py-3'>
            <img className='rounded-md w-52 h-32 sm:w-64 sm:h-52 md:w-80 md:h-64' src={val.img} alt="" />
          </div>
          <div className='text-white w-52 h-30 py-3 sm:w-64 sm:h-32 md:w-80 md:h-38'>
            <div className='flex flex-wrap justify-between sm:flex-row'>
              <big className='text-xl font-bold font-Roboto md:text-2xl'>{val.name}</big>
              <div className='flex justify-end items-center sm:py-0'>
                {val.githubLink &&
                  <a href={val.githubLink} target='_blank' rel="noreferrer"><img className='w-6 h-6 mx-1 rounded-full hover:border-4 border-sky-600 transition-all duration-100 md:w-8 md:h-8 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDTKV4IUyFOpFh5_we4BJxAbFl9GaHYL5SRLfovXmuG0DpGXUPglO6d7CQwCE0X4tDRA&usqp=CAU" alt="" /></a>
                }
                {val.siteLink &&
                  <StuckTooltip hrefLink={val.siteLink} imageUrl={linkImg} />
                }
              </div>
            </div>
            <p className='pt-1 text-sm md:text-md md:py-2'>{val.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCards;
