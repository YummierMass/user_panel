import React from 'react';

function MyPayments(props) {
    return (
        <div className="header rounded col-md-12">
            <h1>To jest strona moich płatności</h1>
            Hej: {props.user}
        </div>
    )
}
export default MyPayments;