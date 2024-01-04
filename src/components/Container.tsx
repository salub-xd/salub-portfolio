import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className='mx-6 sm:mx-16 md:mx-24 lg:mx-32'>
            {children}
        </div>
    )
}

export default Container
