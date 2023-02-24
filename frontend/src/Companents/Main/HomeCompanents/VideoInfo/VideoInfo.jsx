import './VideoInfo.scss'
import VideoInfoBottom from './VideoInfoBottom';
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
const VideoInfo= () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <>



  <section className="video-info">
  <div className="main-container">
    <div className="video-info-title">
      <h2>What Makes us Special?
</h2>
    </div>
<div className="video-player-container">
<button onClick={openModal} className="play-btn video-btn " >
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/j-pxjVyeVcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </button>
</div>

</div>

 </section> 

 <VideoInfoBottom/>
</>
  )
}
 
export default VideoInfo
