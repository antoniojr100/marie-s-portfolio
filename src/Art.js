import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMusic, faAppleAlt, faAppleWhole, faHeadphones, faGuitar, faSpotify } from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/'

function Art(){
    return(
        <section id="art">
            <div className="wrapper">
            <h2 class="sub-header">My Music</h2>
                
            <h3 className="mary-elizabeth">Mary Elizabeth</h3>
            <ul className="music-links" id="mary-elizabeth">
                <li className="link-container">
                    <a href="https://open.spotify.com/artist/2t1Y3bw5KerpUeejGVQu2T"
                        target='_blank'
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faHeadphones} className="icon" />
                    </a>
                    <h3>Spotify</h3>
                </li>
                <li className="link-container">
                    <a href="https://maryelizabeth1.bandcamp.com/"
                        target='_blank'
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGuitar} className="icon" />
                    </a>
                    <h3>Bandcamp</h3>
                </li>
            </ul>

                {/* Subtle Nosebleed
                        Weight
                        Alteration 
                */}
                <h3 className="artist-name">Subtle Nosebleed</h3>
                <ul className="music-links" id="subtle-nosebleed">
                    <li className="link-container">
                        <a href="https://open.spotify.com/artist/2YUsSdjo4pEJHq81JGQHWR?si=Vd0OPpQARUG9uzQMrkJZfA&nd=1"
                            target='_blank'
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faHeadphones} className="icon" />
                        </a>
                        <h4>Spotify</h4>
                    </li>
                    <li className="link-container">
                        <a href="https://music.apple.com/ca/artist/subtle-nosebleed/1495282605"
                            target='_blank'
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faMusic} className="icon" />
                        </a>
                        <h4>Apple Music</h4>
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