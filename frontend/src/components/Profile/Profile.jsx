import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../providers/AuthProvider';
import { Link } from "react-router-dom";
import './Profile.css'

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    console.log(user)
    return (
        user == null ?
            <div className="profile-empty-container">
                <div className="string">
                    <Link className="link" to='/login'>
                        Login
                    </Link>
                    <h1 className="text">
                        to checkout with an existing account.
                    </h1>
                </div>
                <div className="string">
                    <h1 className="text">
                        Don't have an account yet?
                    </h1>
                    <Link className="link" to='/register'>
                        Create a new account.
                    </Link>
                </div>
            </div> :
            <div className="profile-container">
                <div className="top">
                    <h1 className="profile-title">
                        Profile
                    </h1>
                    <button className="order-button">
                        Orders history
                    </button>
                </div>

                <div className="line">
                    <p>
                        First Name
                    </p>
                    <h2>
                        {user.firstName}
                    </h2>
                </div>
                <div className="line">
                    <p>
                        Last Name
                    </p>
                    <h2>
                        {user.lastName}
                    </h2>
                </div>
                <div className="line">
                    <p>
                        Email
                    </p>
                    <h2>
                        {user.email}
                    </h2>
                </div>

            </div>
    );
};

export default Profile;
