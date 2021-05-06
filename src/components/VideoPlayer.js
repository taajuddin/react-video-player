import React, { useState } from "react";
import ReactPlayer from "react-player";
import { v4 as uuidv4 } from 'uuid';
const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);
  const [video,setVideo]=useState(null)
  const [title,setTitle] =useState('')
  const handleChange = (event) => {
    setVideo(URL.createObjectURL(event.target.files[0]));
  };

  const addVideo=()=>{
    setVideos([...videos,{
      title:title?title:'first video',
      id:uuidv4(),
      video:video
    }])
  }
  const onTitle=(event)=>{
    setTitle(event.target.value)
  }
  const submitTitle =(index) =>{
  const result= videos?.map(video =>{
    if(video.id===index){
      return {...video,title}
    }
    else return {...video}
  })
  setVideos(result)
  setTitle('')
  }
  return (
    <div>
      (
      <input type="file" onChange={handleChange} />
      <button onClick={addVideo}>+</button>
      <br />
      {videos && videos?.length>0 && videos?.map(video=>(
        <div key={video.id}>
          <h5>{video.title}</h5>
        <ReactPlayer
          url={video.video}
          width="500px"
          height="300px"
          controls={true}
          playing={false}
          style={{ padding: "20px", margin: "20px" }}
        />
          <div>
               <input type='text' name='title' value={title} placeholder="enter title" onChange={onTitle} /> 
                <button onClick={()=>submitTitle(video.id)}>Submit</button>
          </div>
        
        </div>
      ))}
      
     
    </div>
  );
};

export default VideoPlayer;
