import React from "react";

import "/src/style/common/profileicon.css"


function ProfileIcon() {

    const [modalActive, setModalActive] = React.useState(false);

    function activeModel() {


        setModalActive(true)

    }
    return (

        <>
            <div onClick={activeModel} id="PF-icon" className="profile-icon">
                <img src="https://cdn.pixabay.com/photo/2021/02/03/09/44/portrait-5977311_1280.jpg" height="40px" width="40px" alt="" />
            </div>
           

        </>

    )
}

export default ProfileIcon;