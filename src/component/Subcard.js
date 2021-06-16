import React from 'react';
import "./subcard.css";
function Subcard(props) {
    return (
        <a className="subcard">
            <div className="events">
                <div className="subcardheader">
                    <img src={props.imgurl} />
                </div>
                <div className="main">
                    <p>{props.about}</p>
                    <div className="details">
                        <div className="details-item">
                              <p><b>STARTS ON</b></p>
                              <p> 09:00 PM, 19 Jun 2021 </p>
                        </div>
                        <div className="details-item">
                          <p><b>Entry Fee</b></p>
                          <p>INR {props.fees}</p>
                        </div>
                       <div className="details-item">
                          <p><b>Venue</b></p>
                          <p>{props.venue}</p>
                        </div>
                    </div>
                    <div className="subcard-des"> {props.desc} </div>
                    <div className="tags-container" >
                        {props.cardtags.map(cardtag => (
                            <div className="subcardtag"> {cardtag} </div>
                        ))}
                    </div>
                </div>
                <div className="s-footer">
                   <div className="users">
                       <div className="img-section">
                         {props.users.top_users.map((user) => (
                            <div>
                              <img src={user.image_url}/>
                           </div>
                         ))}
                           
                       </div>
                       <p className="count"> and <b>{props.users.other_users_count}</b>others</p>
                   </div>
                    {props.category=="Upcoming"&&(<div className="status">
                      <img src="https://files.codingninjas.in/0000000000001272.png" height="30px" alt="" />
                   </div>)}  
                </div>
            </div>
        </a>   
    )
}

export default Subcard;
