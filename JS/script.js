let allMusic = [{
        name: "Hold On",
        src: "Chord_Overstreet_Hold_On_Lyric_Video.mp3",
        img: "holdon.jpeg",
        artist: "Chord Overstreet",
        background_image: "holdon.jpeg"
    },
    {
        name: "Someone Like You",
        src: "Adele_Someone_Like_You_Official_Music_Video.mp3",
        img: "adele.png",
        artist: "Adele",
        background_image: "adele.jpeg"
    },
    {
        name: "Merry Christmas",
        src: "Ed_Sheeran_Elton_John_Merry_Christmas_Official_Video.mp3",
        img: "download.gif",
        artist: "Ed Sheeran ft.  Elton",
        background_image: "overpass.png"
    },

    {
        name: " overpass",
        src: "Ed_Sheeran_Overpass_Graffiti_Offical_Audio.mp3",
        img: "overpassimg.png",
        artist: "Ed Sheeran",
        background_image: "overpass.png"
    },
    {
        name: "Kenn Rogers",
        src: "Gambler-Kenn_Rogers.mp3",
        img: "kennyRodgers.jpeg",
        artist: "Gambler",
        background_image: "kennyRodgers.jpeg"
    },
    {
        name: " I Want It That Way",
        src: "../audio/I_Want_It_That_Way-Backstreet Boys.mp3",
        img: "download.jpeg",
        artist: "Backstreet Boys",
        background_image: "backstreet.jpeg"
    },

    {
        name: "Payphone",
        src: "MaroonPayphone.mp3",
        img: "payphone.jpeg",
        artist: "Maroon 5 ft Wiz Khalifa",
        background_image: "payphone.jpeg"
    }
];
const searchBtn = document.getElementById("search_icon"),
    search_input = document.getElementById("search_input"),
    search_list = document.querySelector("#search_list"),
    audio = document.querySelector("#audio-playing"),
    prevBtn = document.querySelectorAll("#bottom_song_play  i")[0],
    playBtn = document.querySelectorAll("#bottom_song_play  i")[1],
    nextBtn = document.querySelectorAll("#bottom_song_play  i")[2],
    repeat = document.querySelector("#repeat"),
    body = document.querySelector("body"),
    show_more = document.querySelector("#show_more"),
    progress_bar = document.querySelector("#progress_bar");
/* -------------------------- END -------------------------------------------------------- */
let currentIndex;
/* ------------------------------   ADD THE ROOT URL TO IMPORTANT FOLDERS REQUIRED IN THE CODE ---------- */
const bg_root = './wallpaper/',
    audio_root = './audio/',
    image_root = "./img/";


$(function () {
    /* --------- loading the song to the ui table----------------- */
    function loadMusic(arg) {
        for (let i = 0; i < arg; i++) {
            tr_model = `   <tr>
                                        <td>${i + 1}</td>
                                        <td><i class="fa fa-play"></i></td>
                                        <td><img src="./img/${allMusic[i].img}" alt="" title="song cover"/></td>
                                        <td>${allMusic[i].name}</td>
                                        <td>${allMusic[i].artist}</td> 
                                        <td id = "id-${i}"
                                        class = "audio-duration" ><audio class="select-${i}" src="./audio/${allMusic[i].src}"></audio></td>
                                        <!--<td class="icons">
                                        <i class="fa fa-angle-up"></i>
                                        <i class="fa fa-angle-down"></i>
                                        <i class="fa fa-trash"></i>
                                        </td>-->
                                   </tr>`;

            const table_list = document.querySelector("#table_list tbody");
            table_list.insertAdjacentHTML("beforeend", tr_model);

            let liAudioTag = document.querySelector(`tbody .audio-duration .select-${i}`),
                liAudioDuration = document.querySelector(`tbody #id-${i}`);
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
        displayIcons()
        playButton()
    }

    window.addEventListener("load", loadMusic(3));
    /* --- END --------------------------------------------- */
    audio.addEventListener("ended", () => {
        let refreshBtn_ = document.querySelector("#refresh ");
        if (refreshBtn_.classList.contains("1")) {
            audio.currentTime = 0
            bottomBar(currentIndex)
        } else {
            nextMusic()
        }
    })

    /* ----- prevents repetition onto the ui table ------- */
    function clearObject(arg) {
        const tr = document.querySelectorAll(arg);
        tr.forEach((element) => {
            element.remove();
        });
    };

    /* --- show more function  ------------------------------- */
    show_more.addEventListener("click", () => {
        const showTrue = document.querySelector("#show_more i").classList.contains("fa-angle-down");
        switch (showTrue) {
            case true:
                clearObject("tbody tr");
                $("#show_more i").removeClass("fa-angle-down");
                loadMusic(allMusic.length);
                show_more.innerHTML = "show less <i class='fa fa-angle-up'></i>";
                break;
            case false:
                clearObject("tbody tr");
                loadMusic(3);
                show_more.innerHTML = "show more <i class='fa fa-angle-down'></i>";
                break;
        }
    })

    /* ---------- display icons on hover -------- */
    function displayIcons() {
        const tr_all = document.querySelectorAll("tbody tr");
        tr_all.forEach((element, i) => {
            $(element).mouseenter(function () {
                $(element.children[1].children[0]).css("display", "block");
                // $(element.children[6]).css("display", "flex");
            });
            $(element).mouseleave(function () {
                $(element.children[1].children[0]).css("display", "none");
                // $(element.children[6]).css("display", "none");
            });
        });
    }
    /* ------------ bottom bar display --------- */
    function bottomBar(i) {
        $("#bottom_song_play").css("display", "flex");
        let gradient = ` linear-gradient(180deg,rgba(0, 0, 0, 0) 40%,rgba(0, 0, 0, 0.52) 50%,rgb(0, 0, 0) 70%)  0 0/cover no-repeat fixed,`;

        $(body).css("background", `${gradient} url("${bg_root}${allMusic[i].background_image}")  0 0/cover no-repeat fixed`);
        audio.src = `./audio/${allMusic[i].src}`;
        audio.play();
        isMusicPlay()
        bottom_song_display(i)

    }

    /* ---------adding the current song to the bottom bar ------- */
    function bottom_song_display(i) {
        let left_bar = document.querySelector("#bottom_song_play .left-bar"),
            song_details = document.querySelector(".song_wrapper .song_details");

        if (song_details.innerHTML == "") {
            const Display_song = ` <div class="img">
                                                <img src="${image_root}${allMusic[i].img}" alt="" title="artist" /></div>
                                            <div class="description">
                                                <h1 class="song" title="song title" id="songTitle">${allMusic[i].name}</h1>
                                                <hr />
                                                <h3 id="artist" title="artist">${allMusic[i].artist}</h3>
                                                <button class="repeat" id="backwardBtn">previous <i class="fa fa-step-backward"></i></button>
                                                <button class="repeat" id="refresh">refresh <i class="fa fa-random"></i></button>
                                                <button class="repeat"  id="forwardBtn">next <i class="fa fa-step-forward"></i></button>
                                            </div> 
                                            <div class="ex-button">x</div>`
            song_details.insertAdjacentHTML("beforeend", Display_song);
        } else {
            song_details.innerHTML = "";
        }
        if (left_bar.innerHTML == "") {
            const left_bar_data = `
                                            <img src="./img/${allMusic[i].img}" alt="" />
                                            <div class="desc">
                                                <h1 maxlength="13" class="song-title">${allMusic[i].name}</h1>
                                                <h5 class="artist">${allMusic[i].artist}</h5>
                                                <h5 class="time" id="duration"></h5>
                                            </div
                                          `;

            left_bar.insertAdjacentHTML("beforeend", left_bar_data);
        } else {
            left_bar.innerHTML = "";
            bottom_song_display(i);
        }
        let backwardBtn = document.querySelector("#backwardBtn"),
            refreshBtn = document.querySelector("#refresh"),
            forwardBtn = document.querySelector("#forwardBtn");

        if (backwardBtn) backwardBtn.addEventListener("click", previousMusic);
        if (forwardBtn) forwardBtn.addEventListener("click", nextMusic);
        if (refreshBtn) refreshBtn.addEventListener("click", repeatMusic);
        toggleXButton()


    }

    /* ------  give the list play button work on click ---------- */
    function playButton() {
        document.querySelectorAll("tbody .fa-play").forEach((e, i) => {
            e.addEventListener("click", () => {
                currentIndex = i;
                bottomBar(i);
                isMusicPlay();
            });
        });

    }

    function isMusicPlay() {
        let isMusicPlay = playBtn.classList.contains("fa-play");
        if (isMusicPlay) {
            $(playBtn).removeClass("fa-play")
            $(playBtn).addClass("fa-pause")
        }
    }
    /* --------  toggle visibility with the top x button -------------- */

    function toggleXButton() {
        if (document.querySelector(".ex-button")) {
            document.querySelector(".ex-button").addEventListener("click", () => {
                $(".song_details").css("display", "none");
            });
        }

    }
    /* ------ adding audio time duration bar ------------- */
    audio.addEventListener("timeupdate", e => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;

        let progressive_width = (currentTime / duration) * 100;
        progress_bar.style.width = `${progressive_width}%`;
        let musicCurrentTime = document.querySelector("#duration");

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

    /*  ------------  pause/play the music  ------------------------ */
    playBtn.addEventListener("click", () => {
        let isMusicPlay = playBtn.classList.contains("fa-pause");

        isMusicPlay ? playMusic() : pauseMusic();
    })

    function pauseMusic() {
        $(playBtn).removeClass("fa-play");
        $(playBtn).addClass("fa-pause");
        audio.play();
    }

    function playMusic() {
        $(playBtn).removeClass("fa-pause");
        $(playBtn).addClass("fa-play");
        audio.pause();
    }

    function nextMusic() {
        isMusicPlay()
        currentIndex++;
        currentIndex >= allMusic.length ? (currentIndex = 0) : (currentIndex = currentIndex);
        bottomBar(currentIndex)
    }

    function previousMusic() {
        isMusicPlay()
        currentIndex--;
        currentIndex < 0 ? (currentIndex = (allMusic.length - 1)) : (currentIndex = currentIndex);
        bottomBar(currentIndex)
        console.log("click");
    }
    nextBtn.addEventListener("click", nextMusic);
    prevBtn.addEventListener("click", previousMusic);

    function repeatMusic() {
        let refreshBtn_ = document.querySelector("#refresh ");
        refreshBtn_.classList.remove("repeat")
        refreshBtn_.classList.toggle("toggle");
        refreshBtn_.classList.toggle("1");
        //let refreshBtn = document.querySelector("#refresh i");

        // if (repeatBtn.classList.contains("fa-repeat")) {
        //     repeatBtn.setAttribute("title", "Song loop");
        //     repeatBtn_.innerHTML = `refresh <i class="fa fa-refresh"></i>`

        // } else if (repeatBtn.classList.contains("fa-refresh")) {
        //     repeatBtn_.innerHTML = `refresh <i class="fa fa-random"></i>`
        //     repeatBtn.setAttribute("title", "Playlist loop");

        // } else if (repeatBtn.classList.contains("fa-random")) {
        //     $(repeatBtn_).css({
        //         "background": "transparent",
        //         "color": "white"
        //     });
        //     repeatBtn_.innerHTML = `repeat <i class="fa fa-repeat"></i>`
        //     repeatBtn.setAttribute("title", "Playlist loop");
        // }
        audio.addEventListener("ended", () => {
            // if (repeatBtn.classList.contains("fa-repeat")) {
            //     nextMusic()
            // }
            // else 
            // if (refreshBtn.classList.contains("1")) {
            //     audio.currentTime = 0
            //     bottomBar(currentIndex)
            // }
            // else if (repeatBtn.classList.contains("fa-random")) {
            //     let randIndex = Math.floor(Math.random() * allMusic.length + 1);
            //     do {
            //         randIndex = Math.floor(Math.random() * allMusic.length + 1);
            //     } while (currentIndex == randIndex);
            //     currentIndex = randIndex;

            //     bottomBar(currentIndex);
            // }
        });
    }

    search_input.addEventListener("keyup", () => {
        clearObject("#search_list span");
        callListSelection(search_input.value);
    });
    const clearSearch = () => {
        search_input.value = "";
    };

    function callListSelection(result) {

        let list = [];
        allMusic.forEach((element, i) => {
            for (const key in element) {
                if (Object.hasOwnProperty.call(element, key)) {

                    if (
                        element[key] == element.name ||
                        element[key] == element.artist
                    ) {
                        if (
                            element[key].toLowerCase().match(result.toLowerCase()) != null) {
                            list.push({
                                item: `${element.name} - ${element.artist}`,
                                index: i
                            });
                        }
                    }
                }
            }
        });

        const newList = list.filter((value, index, self) =>
            index === self.findIndex((t) => (
                t.index === value.index
            ))
        )
        filterSearch(newList);
        $(search_list).css("display", "block");
    }
    //  searchBtn.addEventListener("click", () => {
    //     console.log(search_input.value);
    //     clearSearch();
    //  });
    document.addEventListener("click", event => {
        event.path.forEach(element => {
            if (
                !(event.path[element] == document.querySelector(".search_wrapper"))
            ) {
                $(search_list).css("display", "none");
            }
        });
    });
    const filterSearch = list => {
        list.forEach((element, i) => {
            search_list.insertAdjacentHTML("beforeend", `<span>${element.item}</span>`);

        });
        search_list.childNodes.forEach(e => {
            e.addEventListener("click", () => {
                search_input.value = e.innerHTML;
                console.log(e.innerHTML);

                for (let index = 0; index < list.length; index++) {

                    if (e.innerHTML == `${allMusic[list[index].index].name} - ${allMusic[list[index].index].artist}`) {
                        currentIndex = list[index].index;
                        bottomBar(currentIndex)
                    }
                }
            })
        })
    };
});