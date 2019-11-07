import React from 'react';

const ValidationComponent = (props) => {
    return (
        <div>
            {props.textLength > 5 ? 'The text is long enough!' : 'Text too short!! Keep typing.'}
            <p>
              { props.textLength }  
            </p>
        </div>
    )
}

export default ValidationComponent;
