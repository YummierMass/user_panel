import React from 'react';

function ActiveTickets(props) {
    return (
        <div className="header rounded col-md-12">
            <h1>To jest strona aktywnych biletów</h1>
            Hej: {props.user}
        </div>
    )
}
export default ActiveTickets;