import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMusic, faAppleAlt, faAppleWhole, faHeadphones, faGuitar, faSpotify, faVideo } from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/'

function Art(){
    return(
        <section id="art">
            <div className="wrapper">
                <h2 class="sub-header">My Music</h2>

                <div className="single" id="lust-and-other-losses">
                    <h3 className="music-title">Lust and Other Losses</h3>
                    <div className="links">
                        <iframe width="560" height="352" src="https://www.youtube.com/embed/JjBsFLMDY1c?si=nRHxwjyb1Ivj4hz1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        <iframe src="https://open.spotify.com/embed/album/1U5wPo1378fTTdLolu7iqa?utm_source=generator" width="560" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify"></iframe>
                    </div>
                </div>

                <div className="single" id="the-thought-of-another-day">
                    <h3 className="music-title">The Thought of Another Day</h3>
                    <div className="links">
                        <iframe width="560" height="352" src="https://www.youtube.com/embed/Hdmtf3pmUyI?si=S6t-hq0X6Mwa36Z1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        <iframe src="https://open.spotify.com/embed/album/74keefX7g9XaGMIX7faXyy?utm_source=generator" width="560" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify"></iframe>
                    </div>
                </div>

                <div className="single" id="i-want-to-feel-again">
                    <h3 className="music-title">I Want To Feel Again</h3>
                    <div className="links">
                        <iframe width="560" height="352" src="https://www.youtube.com/embed/BW_-sO0QCCI?si=kxRQGcPaOaLPm9_j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        <iframe src="https://open.spotify.com/embed/album/1IZzpTadHOuYwzRMJDA4tu?utm_source=generator" width="560" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify"></iframe>
                    </div>
                </div>

                    {/* width: 560 height: 315 */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/BW_-sO0QCCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}



            {/* <ul className="music-links" id="mary-elizabeth">
                <li className="link-container">
                    <a href="https://open.spotify.com/artist/2t1Y3bw5KerpUeejGVQu2T"
                        target='_blank'
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faHeadphones} className="icon" />
                    </a>
                    <h4 className="icon-title">Spotify</h4>
                </li>
                <li className="link-container">
                    <a href="https://maryelizabeth1.bandcamp.com/"
                        target='_blank'
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGuitar} className="icon" />
                    </a>
                    <h4 className="icon-title">Bandcamp</h4>
                </li>
                <li className="link-container">
                    <a href="https://www.youtube.com/channel/UC7hW9jGNdHxBXLqQk90Sj3A"
                        target='_blank'
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faVideo} className="icon" />
                    </a>
                    <h4 className="icon-title">YouTube</h4>
                </li>
            </ul> */}

                {/* Subtle Nosebleed
                        Weight
                        Alteration 
                */}
                {/* <h3 className="music-title">Subtle Nosebleed</h3>
                <ul className="music-links" id="subtle-nosebleed">
                    <li className="link-container">
                        <a href="https://open.spotify.com/artist/2YUsSdjo4pEJHq81JGQHWR?si=Vd0OPpQARUG9uzQMrkJZfA&nd=1"
                            target='_blank'
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faHeadphones} className="icon" />
                        </a>
                        <h4 className="icon-title">Spotify</h4>
                    </li>
                    <li className="link-container">
                        <a href="https://music.apple.com/ca/artist/subtle-nosebleed/1495282605"
                            target='_blank'
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faMusic} className="icon" />
                        </a>
                        <h4 className="icon-title">Apple Music</h4>
                    </li>
                </ul> */}
            </div>
        </section>
    );
}

export default Art;