let allMusic = [{
        name: "Hold On",
        src: "Chord_Overstreet_Hold_On_Lyric_Video.mp3",
        img: "holdon.jpeg",
        artist: "Chord Overstreet",
    },
    {
        name: "Someone Like You",
        src: "Adele_Someone_Like_You_Official_Music_Video.mp3",
        img: "adele.png",
        artist: "Adele",
    },
    {
        name: "Merry Christmas",
        src: "Ed_Sheeran_Elton_John_Merry_Christmas_Official_Video.mp3",
        img: "download.gif",
        artist: "Ed Sheeran ft.  Elton",
    },

    {
        name: " overpass",
        src: "Ed_Sheeran_Overpass_Graffiti_Offical_Audio.mp3",
        img: "overpassimg.png",
        artist: "Ed Sheeran",
    },
    {
        name: "Kenn Rogers",
        src: "Gambler-Kenn_Rogers.mp3",
        img: "kennyRodgers.jpeg",
        artist: "Gambler",
    },
    {
        name: " I Want It That Way",
        src: "../audio/I_Want_It_That_Way-Backstreet Boys.mp3",
        img: "download.jpeg",
        artist: "Backstreet Boys",
    },
    {
        name: "Payphone",
        src: "MaroonPayphone.mp3",
        img: "payphone.jpeg",
        artist: "Maroon 5 ft Wiz Khalifa",
    }
];
const searchBtn = document.getElementById("search_icon"),
    audio = document.querySelector("#audio-playing"),
    playBtn = document.querySelector("#toggle_play"),
    playImg = document.querySelector("#songPlaying"),
    progress_bar = document.querySelector("#progress_bar");
/* -------------------------- END -------------------------------------------------------- */
let currentIndex;
/* ------------------------------   ADD THE ROOT URL TO IMPORTANT FOLDERS REQUIRED IN THE CODE ---------- */
const bg_root = './wallpaper/',
    audio_root = './audio/',
    image_root = "./img/";

$(function () {

    window.addEventListener("load", loadMusic());
    window.addEventListener("load", initialMusic());

    function loadMusic() {
        const content2 = document.querySelector(".content2");
        for (let index = 1; index < 7; index++) {

            let listModel = `<div class="content-wrapper">
                                    <div class="img-wrapper">
                                        <img title="Song Cover" src="./img/${allMusic[index].img}" alt="" id="songList">
                                        <div title="Vote Count" id="overlay">0</div>
                                    </div>
                                    <h3 title="Song Title" id="title">${allMusic[index].name}</h3>
                                    <p title="Artist" id="artist">${allMusic[index].artist} - <span id = "id-${index}"
                                    class = "audio-duration" ><audio class="select-${index}" src="./audio/${allMusic[index].src}"></audio></span></p>
                                    
                                </div>`
            content2.insertAdjacentHTML("beforeend", listModel);
            let liAudioTag = document.querySelector(` .audio-duration .select-${index}`),
                liAudioDuration = document.querySelector(` #id-${index}`);
            liAudioTag.addEventListener("loadeddata", () => {
                let audioDuration = liAudioTag.duration,
                    totalMin = Math.floor(audioDuration / 60),
                    totalSec = Math.floor(audioDuration % 60);

                if (totalSec < 10) {
                    totalSec = `0${totalSec}`;
                }
                liAudioDuration.innerText = `${totalMin}:${totalSec}`;
            });
        }
    }
    playBtn.addEventListener("click", isMusicPlay)

    function isMusicPlay() {
        let isMusicPlay = playBtn.classList.contains("fa-pause");
        if (isMusicPlay) {
            $(playBtn).removeAttr("title");
            $(playBtn).attr("title", "play Music");
            $(playBtn).removeClass("fa-pause")
            $(playBtn).addClass("fa-play")
            audio.play()
        } else {
            audio.pause()
            $(playBtn).removeAttr("title");
            $(playBtn).attr("title", "Pause Music");
            $(playBtn).removeClass("fa-play")
            $(playBtn).addClass("fa-pause")
        }
    }

    function initialMusic() {
        $(playImg).attr("src", `${image_root}${allMusic[0].img}`);
        $("#title").html(`${allMusic[0].name}`);
        $("#artist").html(`${allMusic[0].artist} -  <span id = "id-${0}"
class = "audio-duration" ><audio class="select-${0}" src="./audio/${allMusic[0].src}"></audio></span>`);
        let liAudioTag = document.querySelector(` .audio-duration .select-${0}`),
            liAudioDuration = document.querySelector(` #id-${0}`);
        liAudioTag.addEventListener("loadeddata", () => {
            let audioDuration = liAudioTag.duration,
                totalMin = Math.floor(audioDuration / 60),
                totalSec = Math.floor(audioDuration % 60);

            if (totalSec < 10) {
                totalSec = `0${totalSec}`;
            }
            liAudioDuration.innerText = `${totalMin}:${totalSec}`;
        });
        playMusic(0)
    }

    function playMusic(arg) {
        audio.src = `${audio_root}${allMusic[arg].src}`;
        // audio.play();
    }
    audio.addEventListener("timeupdate", e => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;

        let progressive_width = (currentTime / duration) * 100;
        progress_bar.style.width = `${progressive_width}%`;
        let musicCurrentTime = document.querySelector("#artist span");

        audio.addEventListener("loadeddata", () => {
            let audioDuration = audio.duration,
                totalMin = Math.floor(audioDuration / 60),
                totalSec = Math.floor(audioDuration % 60);
            if (totalSec < 10) {
                totalSec = `0${totalSec}`;
            }
        })

        currentMin = Math.floor(currentTime / 60),
            currentSec = Math.floor(currentTime % 60);
        if (currentSec < 10) {
            currentSec = `0${currentSec}`;
        }
        if (musicCurrentTime) musicCurrentTime.innerHTML = `${currentMin}:${currentSec}`
    })
});