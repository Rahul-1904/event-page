import React,{useState,useEffect} from 'react';
import axios from './axios';
import "./card.css";
import Subcard from "./Subcard";
import DateRangeIcon from '@material-ui/icons/DateRange';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import VideocamIcon from '@material-ui/icons/Videocam';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import Tagbutton from './Tagbutton';
function Card() {
    const [eventcategory,seteventcategory] = useState("All Events");
    const [subeventcategory,setsubeventcategory] = useState("Upcoming");
    const [taglist,settaglist] = useState("");
    const [offset,setoffset] = useState(0);
    const [events,setevents] = useState([]);
    const [eventtags,seteventtags] = useState([]);
    
    const activeevent = {
        color: "#fa7328",
        fontWeight: "700"
    }
    const fetchURL = "https://api.codingninjas.com/api/v3/events?event_category=${eventcategory}&event_sub_category=Upcoming&tag_list=Career Guidance,Coding Concepts,Competitive Programming,Futuristic Tech&offset=0";
   
    
   useEffect(() => {
       async function fetchdata(){
            const res = await axios.get("https://api.codingninjas.com/api/v3/events",{
                params: {
                    event_category: eventcategory,
                    event_sub_category: subeventcategory,
                    tag_list: taglist,
                    offset: offset
                }
            });
            const res2 = await axios.get("https://api.codingninjas.com/api/v3/event_tags")
            setevents(res.data.data.events);
            seteventtags(res2.data.data.tags);
       }
       fetchdata();
   
   }, [eventcategory,subeventcategory,taglist,offset])

   const handleeventclick = (e) => {
       seteventcategory(e.target.value);
      
   }
    const handlesubeventclick = (e) => {
         setsubeventcategory(e.target.value);
    }
   
    return (
        <div className="card">   
            <div className="card-main">
                <div className="card-header">
                     <button value="All Events" onClick={handleeventclick} style={eventcategory=="All Events"?activeevent:null}>
                          <DateRangeIcon />
                         All Events 
                     </button>
                     <button value=" Coding Events"  onClick={handleeventclick} style={eventcategory==" Coding Events"?activeevent:null}>
                        <DesktopWindowsIcon />
                         Coding Events
                     </button>
                     <button value="Webinar" onClick={handleeventclick} style={eventcategory=="Webinar"?activeevent:null}>
                         <AspectRatioIcon />
                         Webinar 
                     </button>
                     <button value="Bootcamp Events" onClick={handleeventclick} style={eventcategory=="Bootcamp Events"?activeevent:null}>
                        <OndemandVideoIcon />
                        Bootcamp Events
                     </button> 
                     <button value="Workshop" onClick={handleeventclick} style={eventcategory=="Workshop"?activeevent:null}>
                        <VideocamIcon />
                         Workshop
                     </button>
                </div>
                <div className="card-subheader">
                      <button value="Upcoming"  onClick={handlesubeventclick} style={subeventcategory=="Upcoming"?activeevent:null}>
                             Upcoming
                      </button>
                      <button value="Archived"  onClick={handlesubeventclick} style={subeventcategory=="Archived"?activeevent:null}>
                             Archived
                      </button>
                </div>
                <div className="card-container">
                    <div className="card-list">
                    {events.map(event => (
                        <Subcard category={event.event_sub_category} imgurl={event.cover_picture} about={event.name} fees={event.fees} venue={event.venue} desc={event.short_desc} cardtags={event.card_tags} users={event.registered_users}/>
                    ))} 
                         
                    </div>
                    <div className="card-taglist">
                          <div className="taglist-heading">Tags</div>
                          <div>
                              {eventtags.map((event,index) => (
                                  <Tagbutton id={index} key={index}   text={event} />
                              ))} 
                          </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Card;
//Career Guidance,Coding Concepts,Competitive Programming,Futuristic Tech
// <div id={index} index={index} onClick={handletagclick} className="tag"><p className="text">{event}</p> </div>