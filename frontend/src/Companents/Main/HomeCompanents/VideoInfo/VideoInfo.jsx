import './VideoInfo.scss'
import { FaPlay} from "react-icons/fa";
import VideoInfoBottom from './VideoInfoBottom';

const VideoInfo= () => {


  return (
    <>
 <section className="video-info">
  <div className="main-container">
    <div className="video-info-title">
      <h2>What Makes us Special?
</h2>
    </div>
<div className="video-info-wrapper">
<button className='video-btn'> <FaPlay><iframe src="https://www.youtube.com/shorts/-nPBWp_pCZQ" frameborder="0"></iframe></FaPlay></button>
<img className='video-image'  src="https://cdn.shopify.com/s/files/1/0436/0932/5722/files/vdo.jpg?v=1646644248" alt="video-info" />
</div>

  </div>

 </section>
 <VideoInfoBottom/>
</>
  )
}
 
export default VideoInfo
