import React from 'react';

function MyPoints(props) {
    return (
        <div className="header rounded col-md-12">
            <h1>To jest strona moich punktów</h1>
            Hej: {props.user}
        </div>
    )
}
export default MyPoints;