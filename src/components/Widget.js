import React from 'react'
import PropTypes from 'prop-types'

const Widget = (props) => {
    return (
        <button
            className='widget'
        >
            {props.text}
        </button>
    )
}

Widget.propTypes = {
    text: PropTypes.string
}

export default Widget
