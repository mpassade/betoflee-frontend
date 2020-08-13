import React from 'react'
import PropTypes from 'prop-types'

const Option = (props) => {
    return (
        <div className='option'>
            <span>{props.text}</span>
        </div>
    )
}

Option.propTypes = {
    text: PropTypes.string
}

export default Option
