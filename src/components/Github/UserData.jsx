import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot'
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase'
import { faX } from '@fortawesome/free-solid-svg-icons/faX'

const UserData = ({ user }) => {

    function convertDate(datetime) {
        const date = new Date(datetime);
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    function displayCompany(company) {
        if (!company) {
            return <p>Not Available</p>
        } else if (company.includes("@")) {
            return <a href={`https://github.com/${company.slice(1)}`} target="_blank" rel="noreferrer">{company}</a>
        } else {
            return <p>{company}</p>
        };
    };

    const joinDate = convertDate(user.created_at);

    return (
        <>
            <div className="user-card md:mx-auto md:max-w-2xl bg-white rounded-xl mx-3 my-6 py-4 px-4 shadow-xl">
                <div className="user-top flex justify-center">
                    <img className="rounded-full w-[40%]" src={user.avatar_url} alt={user.name} />
                    <div className="user-info ml-5">
                        <h2 className="name font-semibold">{user.name ? user.name : user.login}</h2>
                        <a href={`https://github.com/${user.login}`} className="login text-blue-400">@{user.login}</a>
                        <p className="joined">Joined {joinDate}</p>
                    </div>
                </div>
                <div className="user-middle py-3">
                    <p className="bio py-3">{user.bio ? user.bio : "This profile has no bio"}</p>
                    <div className="user-stats flex rounded-xl justify-between px-4 py-4 bg-slate-200">
                        <div className="stat">
                            <h3 className="title font-bold">Repo</h3>
                            <p className="stat-num">{user.public_repos}</p>
                        </div>
                        <div className="stat">
                            <h3 className="title font-bold">Followers</h3>
                            <p className="stat-num">{user.followers}</p>
                        </div>
                        <div className="stat">
                            <h3 className="title font-bold">Following</h3>
                            <p className="stat-num">{user.following}</p>
                        </div>
                    </div>
                </div>
                <div className="user-bottom md:grid md:grid-cols-2">
                    <div className="links flex">
                        <div className="location mr-5">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <p>{!user.location ? "Not Available" : user.location}</p>
                    </div>
                    <div className="links flex">
                        <div className="personal-link mr-5">
                            <FontAwesomeIcon icon={faLink} />
                        </div>
                        <p>{
                            !user.blog ?
                                <p>Not Available</p> :
                                <a href={user.blog} target="_blank" rel="noreferrer">{user.blog}</a>
                        }</p>
                    </div>
                    <div className="links flex">
                        <div className="twitter mr-5">
                            <FontAwesomeIcon icon={faX} />
                        </div>
                        <p>{
                            !user.twitter_username ?
                                <p>Not Available</p> :
                                <a href={`https://twitter.com/${user.twitter_username}`} target="_blank" rel="noreferrer">{user.twitter_username}</a>
                        }</p>
                    </div>
                    <div className="links flex">
                        <div className="office mr-5">
                            <FontAwesomeIcon icon={faBriefcase} /></div>
                        <p>{displayCompany(user.company)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserData