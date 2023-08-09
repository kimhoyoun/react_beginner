import React from 'react';

function Hello({color, name, isSpecial}){
    return (
        <div style={{color}}> 
            { isSpecial && <b>*</b> }
            hello {name}

        </div>
    )
}

Hello.defaultProps = {
    name : 'no name'
}
export default Hello;