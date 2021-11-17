import React from 'react'
import Video from '../Video360.mp4'

 export const  IframePage = () => {
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg"
        allowfullscreen ></iframe>
    </div>
  )
}



export default IframePage;