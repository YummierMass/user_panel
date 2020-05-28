import React from 'react';

function EditProfile(props) {
    return (
        <div className="header rounded col-md-12">
            <h1>To jest strona edycji profilu</h1>
            Hej: {props.user}
        </div>
    )
}
export default EditProfile;