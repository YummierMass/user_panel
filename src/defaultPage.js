import React from 'react';

function DefaultPage(props) {
    return (
        <div className="header rounded col-md-12">
            <h1>To jest strona domyślna</h1>
            Hej: {props.user}
        </div>
    )
}
export default DefaultPage;