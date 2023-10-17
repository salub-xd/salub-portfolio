import React, { useState } from 'react'

const Contact: React.FC = () => {
    const [dcHref, setDcHref] = useState<boolean>(false);
    return (
        <div className='mx-15 flex flex-wrap justify-around items-center sm:mx-20 md:mx-32'>
            <div className='flex items-center'>
                <a href="https://github.com/salub-xd" target='_blank' rel="noreferrer"><img className='w-8 h-8 rounded-full hover:border-4 border-sky-600 transition-all duration-100 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDTKV4IUyFOpFh5_we4BJxAbFl9GaHYL5SRLfovXmuG0DpGXUPglO6d7CQwCE0X4tDRA&usqp=CAU" alt="" /></a>
                <a className='p-4 font-mono text-xl text-white hover:text-sky-600 transition-all duration-100 sm:p-8 sm:text-2xl' href='mailto:salub-xd@gmail.com' target='_blank' rel="noreferrer">salub-xd@gmail.com</a>
                <p onClick={() => { setDcHref(!dcHref) }}>
                    <img className='w-8 h-8 rounded-full hover:border-4 border-sky-600 transition-all duration-100 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXxSNEyHGcxbVbZGhgN1wfE44boAww04OQqvMsvYDPverdMAa8kykl4Rfq3dqYJh8WN4&usqp=CAU" alt="" />
                </p>
                <small className={`${dcHref ? 'block relative bottom-9 right-9 text-white bg-slate-500 p-1 rounded-md' : 'hidden'}`}>Salub</small>
            </div>
        </div >
    )
}

export default Contact
