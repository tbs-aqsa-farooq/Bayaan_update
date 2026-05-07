import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

import suno_cover from "../assets/playlist/suno_cover.png";
import azhik from "../assets/playlist/suno/azhik.png";
import bekhabar from "../assets/playlist/suno/bekhabar.png";
import daira from "../assets/playlist/suno/daira.png";

import safar from "../assets/safar.png";
import char_saal from "../assets/char_saal.png";

// const playlistVideos = [
//   {
//     id: 1,
//     title: "Suno_cover",
//     cover: suno_cover,
//     // youtubeId: "cyG6TDzAKcE",
//     songs: {
//       suno: {
//         id: 1,
//         title: "Azhik",
//         cover: azhik,
//         youtubeId: "cyG6TDzAKcE",
//       },
//       bekhabar: {
//         id: 2,
//         title: "Bekhabar",
//         cover: bekhabar,
//         youtubeId: "YOyqe88p1A8",
//       },
//       daira: {
//         id: 3,
//         title: "Daira",
//         cover: daira,
//         youtubeId: "DksgIGOPAPM",
//       },
//     },
//   },
//   {
//     id: 2,
//     title: "Safar",
//     cover: safar,
//     // youtubeId: "JVtKEX90SZ0",
//   },
//   {
//     id: 3,
//     title: "4 saal",
//     cover: char_saal,
//     // youtubeId: "h4g5AkMf_Bs",
//   },
// ];

function Playlists() {
  // const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="playlist-page">
      <div className="playlist-header">
        <p className="section-header">Featured Playlists</p>
        <p>
          Explore live performances, studio sessions, and exclusive music
          videos.
        </p>
      </div>
      <div className="playlist flex items-center justify-center m-auto">
        <div className="playlist-card">
          <div className="playlist-title">
            <h2 className="text-white-">SUNO</h2>
          </div>
          <div className="playlist-thumbnail">
            <a href="">
              <img src={suno_cover} alt="" />
            </a>
          </div>
        </div>
        <div className="playlist-card">
          <div className="playlist-title">
            <h2 className="text-white">SAFAR</h2>
          </div>

          <div className="playlist-thumbnail">
            <a href="">
              <img src={safar} alt="" />
            </a>
          </div>
        </div>
        <div className="playlist-card">
          <div className="playlist-title">
            <h2 className="text-white">4 SAAL</h2>
          </div>

          <div className="playlist-thumbnail">
            <a href="">
              <img src={char_saal} alt="" />
            </a>
          </div>
        </div>
      </div>

      {/* <div className="playlist">
        {playlistVideos.map((video) => (
          <div className="playlist-card" key={video.id}>
            {activeVideo === video.id ? (
              <div className="video-wrapper">
                <iframe
                  title={video.title}
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div
                className="playlist-thumbnail"
                onClick={() => setActiveVideo(video.id)}
              >
                <img src={video.cover} alt={video.title} />

                <div className="overlay">
                  <button className="play-button">
                    <FaPlay />
                  </button>
                </div>
              </div>
            )}

            <div className="playlist-info">
              <h3>{video.title}</h3>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Playlists;
