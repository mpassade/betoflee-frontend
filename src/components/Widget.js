import React from 'react'

const Widget = (props) => {
    return (
        <button
            className='widget'
        >
            {props.text}
        </button>
    )
}

export default Widget
