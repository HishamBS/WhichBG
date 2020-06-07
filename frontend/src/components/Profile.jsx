import React from 'react'
import './Profile.styles.scss'
import CustomButton from './custom-button/custom-button.component'
class Profile extends React.Component {

    render() {
        return (
            <div className="profile">
            <h1 className="myProfile">Personal Information</h1>
            <span  className="profile-name"><span>Nick Name :</span> {localStorage.user_nickname}</span>
            <span  className="profile-name">{localStorage.user_nickname}</span>
            <span  className="profile-name">{localStorage.user_nickname}</span>


            <div className="profile-button">
            <CustomButton >Save</CustomButton>
            <CustomButton >Edit</CustomButton>


            </div>
            </div>
        )
    }
}

export default  Profile;