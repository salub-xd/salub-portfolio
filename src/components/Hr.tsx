import React from 'react'
interface HrProps {
    title: string,
    _id: string,
}
const Hr: React.FC<HrProps> = ({ title, _id}) => {

    return (
        <div id={_id} className='flex justify-center items-center mx-12 my-4 sm:mx-16 sm:my-8 md:mx-24 md:my-12 lg:my-14'>
            <p className='text-white text-2xl font-medium font-Pixelify mr-4 border-b-2 border-sky-600 w-auto md:text-3xl lg:text-4xl'>{title}</p>
            <div className=' border-gray-600 border-b-2 w-full p-2 px-4 items-center '></div>
        </div>
    )
}

export default Hr;
