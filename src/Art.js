import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMusic, faAppleAlt, faAppleWhole, faHeadphones, faGuitar, faSpotify, faVideo } from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/'

function Art(){
    return(
        <section id="art">
            <div className="wrapper">
            <h2 class="sub-header">My Music</h2>
                
            <h3 className="music-title">Mary Elizabeth</h3>

                    {/* width: 560 height: 315 */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BW_-sO0QCCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



            <ul className="music-links" id="mary-elizabeth">
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
            </ul>

                {/* Subtle Nosebleed
                        Weight
                        Alteration 
                */}
                <h3 className="music-title">Subtle Nosebleed</h3>
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
                </ul>


                {/* <h2 class="sub-header">My Art</h2>
                
                <ul id="gallery">
                    <li><p>1</p></li>
                    <li><p>2</p></li>
                    <li><p>3</p></li>
                    <li><p>4</p></li>
                    <li><p>5</p></li>
                    <li><p>6</p></li>
                </ul> */}
            </div>
        </section>
    )
}

export default Art;