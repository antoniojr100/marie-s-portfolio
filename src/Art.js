import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faMusic, faAppleAlt, faAppleWhole, faHeadphones, faGuitar, faSpotify, faVideo } from '@fortawesome/free-solid-svg-icons'
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
            </div>
        </section>
    );
}

export default Art;