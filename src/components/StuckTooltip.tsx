import React from 'react'

interface StuckTooltipProps {
  imageUrl: string;
  hrefLink?: string,
}

const StuckTooltip: React.FC<StuckTooltipProps> = ({
  hrefLink,
  imageUrl
}) => {
  return (
    <div className="tooltip-container">
      <span className="tooltip-text">
        <a href={hrefLink} target='_blank' rel="noreferrer">
          <img className=' cursor-pointer w-6 h-6 rounded-lg hover:border-4 hover:border-double border-sky-600 transition-all duration-100 md:w-8 md:h-8' src={imageUrl} alt="" />
        </a>
      </span>
      <span className="tooltip z-10 group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-900 to-black text-white text-xs font-normal hover:translate-y-3 hover:rounded-full transition-all duration-500 hover:from-[#070206] hover:to-[#17080d] md:text-sm md:font-semibold md:justify-center">{hrefLink}</span>
    </div>
  )
}

export default StuckTooltip;
