import React from 'react';
import './Rightbar.scss';
import userData from '../../data.json';

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          {userData.suggestionUser.map((user) => (
            <div className="user">
              <div className="userInfo">
                <div>
                  <img
                    src={user.picture}
                    alt=""
                  />
                </div>
                
                <span>{user.name}</span>
              </div>
              <div className="buttons">
                <button>follow</button>
                <button>dismiss</button>
              </div>
            </div>
          ))}
        </div>
        <div className="item">
          <span>Latest Activities</span>

          {userData.users.map((user) => (
            <div className="user">
              <div className="userInfo">
                <div className='userImage'>
                  <img
                    src={user.picture}
                    alt=""
                  />
                </div>
                <p>
                  <span>{user.name} </span>{user.last_activity}
                </p>
              </div>
              <span>1 min ago</span>
            </div>
          ))}
        </div>
        <div className="item">
          <span>Online Friends</span>

          {userData.users.map((user) => (
            <div className="user">
              <div className="userInfo">
                <div className='userImage'>
                  <img
                    src={user.picture}
                    alt=""
                  />
                </div>

                <div className="online"></div>
                <span>{user.name}</span>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
