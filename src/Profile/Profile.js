import React from "react";
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";
import './ProfStyle.css'



function Profile({user,handleName,children}){
    return (
        <div className="tet" style={{color:"blue",textAlign:"center"}}>
<h1>{user.FullName}</h1>
<h2>{user.bio}</h2>
<h3>{user.profession}</h3>
<div className="pic">{children}</div>
<Button variant="primary" onClick={()=>handleName(user.FullName)}>Alert</Button>
</div>

    )
}

Profile.defaultProps={
    user:{
        FullName:"zied",
        bio: "I'am a FreeLancer",
        profession:"Web Developer" 
    },
    HandleName:()=>alert("Hello World")
}

Profile.propTypes={
    user:PropTypes.object.isRequired,
    HandleName:PropTypes.func

}
export default Profile;
