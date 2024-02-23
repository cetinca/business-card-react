import picture from "../assets/profile-picture.jpg"

function ProfilePicture () {
    return (
        <img src={picture} className="profile-picture" alt="Profile picture" />
    )
}

export default ProfilePicture
