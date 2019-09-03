import React from 'react';

const Icon = ({type = 'UnfilledHeart'}) => {
    const FilledHeart = () => (
            <svg 
                aria-label="좋아요" 
                width="35" 
                height="35" 
                stroke="#495057" 
                fill="#ff8787" 
                strokeWidth = "0.7px" 
                viewBox="0 0 24 24" 
                preserveAspectRatio="xMidYMid meet">
            <path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path>
            </svg>
    );

    const UnfilledHeart = () => (
            <svg class="icon" 
            aria-label="좋아요" 
            width="35" 
            height="35" 
            stroke="#343a40" 
            fill="white" 
            stroke-width = "0.8px" 
            viewBox="0 0 24 24" 
            preserveAspectRatio="xMidYMid meet">
            <path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path>
            </svg>
    );
    
    const Element = (type === 'filledHeart')? FilledHeart : UnfilledHeart;

    return(
        <Element>
        </Element>
    )

}

export default Icon;