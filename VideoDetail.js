import React from 'react';

const VideoDetail=({video})=>{
    if(!video){
        return<div class="ui segment">
        <div class="ui active dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return( 
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc}/>
                </div>
                <div className="ui segment">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                </div>
                
            </div>
            )

};
export default VideoDetail;