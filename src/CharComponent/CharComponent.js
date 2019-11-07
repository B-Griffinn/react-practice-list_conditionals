import React from 'react';

const CharComponent = () => {

    const style = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid #eee',
        backgroundColor: 'pink'
    }
    return (
        <div 
            style={style}
        >
            <p>
                Hello this is a paragraph styled by me.
            </p>
        </div>
    )
};

export default CharComponent;
