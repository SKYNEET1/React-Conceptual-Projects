import React from 'react'
import { FaStar } from 'react-icons/fa6'

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = React.useState(0)
    const [hover, setHover] = React.useState(0)
  const handleClick = (index) => {
    console.log('Click:', index)
    if(rating == index){
        setRating(0)
    }else{
    setRating(index)
    }
  }

  const handleMouseEnter = (index) => {
    console.log('Mouse Enter:', index)
    setHover(index)
  }

  const handleMouseLeave = () => {
    setHover(rating)
  }

  return (
    <div className='flex flex-wrap bg-black items-center justify-center min-w-[100vw] min-h-[100vh] gap-5'>
      {
        [...Array(noOfStars)].map((_, index) => (
          <div
            key={index}
            className={`min-w-[60px] min-h-[60px] bg-gray-700 p-2 rounded border border-amber-500 flex items-center justify-center cursor-pointer`}
            onClick={() => handleClick(index + 1)}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={() => handleMouseLeave()}

          >
            <FaStar className={`text-3xl ${(hover || rating) > index ? 'text-amber-300' : 'text-white' }`} />
          </div>
        ))
      } 
    </div>
  )
}

export default StarRating
