import React, { useState, useEffect, useCallback } from 'react';
import {
    useParams,
    useNavigate,
  } from "react-router-dom";
import './styles.css';

function UserScreen() {

    const [userInfo, setUserInfo] = useState<any>();
    const [userRepos, setUserRepos] = useState<any>();
    const [shouldShowError, setShouldShowError] = useState(false);

    let userName = useParams();
    const navigate = useNavigate();

    const handleFetchPublicRepos = useCallback(() => {
            fetch(`https://api.github.com/users/${userName.id}/repos`)
            .then(response => response.json())
            .then(data => {
                setUserRepos(data)});
    }, [userName.id]);

    const handleGoBack = () => {
        navigate(-1);
    }
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${userName.id}`)
        .then(response => response.json())
        .then(data => {
            if (!data.login) {
                setShouldShowError(true);
            }
            setUserInfo(data)
            handleFetchPublicRepos();
        });
      }, [handleFetchPublicRepos, userName.id]);

    

  return (
    <>
        <div className="user-wrapper">
            <h3 className="user-title">
            {`Here's some info about the user: ${userName.id}`}
            </h3>
            <button onClick={handleGoBack} className='back-button'>
                Search another user
            </button>
            <div className='user-section'>
                {!shouldShowError ? 
                <>
                    <img 
                        alt='user avatar'
                        src={userInfo?.avatar_url}
                        className='img-style'
                    />
                    <p className='description-text'>
                        {userName.id} has {userInfo?.public_repos} public repositories on his github account. See more about them below!
                    </p>
                    {userRepos?.map((repo: any, i: number) => (
                        <div key={i} className='repo-section'>
                            <p className='repo-name'>
                                Repo {++i}: {repo.name}
                            </p>
                            <p className='repo-description'>
                                Description: {repo.description}
                            </p>
                        </div>
                    ))}
                </> : <p className='error-message'>user {userName.id} not found </p>
                 
                }
            </div>
        </div>
        
    </>
  );
}

export default UserScreen;
