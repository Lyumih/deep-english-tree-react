import React from 'react'

const Node = ({ rus="no russian word", eng="no english word"}) => {
    return (
        <div className="React">
            <button>
                <div>{rus}</div>
                <div>{eng}</div>
            </button>
        </div>
    )
}

export default Node