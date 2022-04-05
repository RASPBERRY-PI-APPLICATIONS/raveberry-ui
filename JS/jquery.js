/* ----------------------  THIS IS A HARD CODED ARRAY THAT DISPLAYS THE SONGS ON THE UI ------------ */
let allMusic_untouched = [{
            name: "Someone Like You",
            src: "Adele_Someone_Like_You_Official_Music_Video.mp3",
            img: "a.jpg",
            artist: "Adele",
            background_image: "6925538-pink-butterfly-wallpaper.jpg"
        },
        {
            name: "Hold On",
            src: "Chord_Overstreet_Hold_On_Lyric_Video.mp3",
            img: "d.jpg",
            artist: "Chord Overstreet",
            background_image: "Abstract-Flowers-Wallpapers-for-Free-Download.jpg"
        },
        {
            name: "Merry Christmas",
            src: "Ed_Sheeran_Elton_John_Merry_Christmas_Official_Video.mp3",
            img: "y.jpg",
            artist: "Ed Sheeran ft.  Elton",
            background_image: "blog.jpg"
        },
        {
            name: "weakness in me",
            src: "Etana_Weakness_In_Me(1).mp3",
            img: "a.jpg",
            artist: "Adele",
            background_image: "raspberry-pi-logo-HD1.jpg"
        },
        {
            name: " overpass",
            src: "Ed_Sheeran_Overpass_Graffiti_Offical_Audio.mp3",
            img: "d.jpg",
            artist: "Chord Overstreet",
            background_image: "Screenshot_2019-12-20 Instagram.png"
        },
        {
            name: "El shaddai",
            src: "EL_SHADDAI-HART_THE_BAND_ft._CEDO_(OFFICIAL VIDEO)[SKIZA_DIAL_811343#].mp3",
            img: "x.jpg",
            artist: "Ed Sheeran ft.  Elton",
            background_image: "tumblr_o1n96vth4D1ufi43qo1_500.png"
        },
        {
            name: "Love Nwantiti",
            src: "ElGrandeToto_Love_Nwantiti_ft_Ckay.mp3",
            img: "a.jpg",
            artist: "ElGrandeToto",
            background_image: "graphics-music-notes-435227.jpg"
        },
        {
            name: "Kenn Rogers",
            src: "../audio/Gambler-Kenn_Rogers.mp3",
            img: "d.jpg",
            artist: "Gambler",
            background_image: ""
        },
        {
            name: "Gym Class Heroes",
            src: "../audio/Gym_Class_Heroes_Stereo_Hearts_ft_Adam_Levine_OFFICIAL_VIDEO.mp3",
            img: "y.jpg",
            artist: "Hearts ft Adam Levine",
            background_image: ""
        },
        {
            name: "How Long Will I Love You",
            src: "../audio/How_Long_Will_I_Love_You-Ellie_Goulding.mp3",
            img: "a.jpg",
            artist: "Ellie Goulding",
            background_image: ""
        },
        {
            name: " I Want It That Way",
            src: "../audio/I_Want_It_That_Way-Backstreet_Boys.mp3",
            img: "d.jpg",
            artist: "Backstreet Boys",
            background_image: ""
        },
        {
            name: "Good Life from The Fate of the Furious",
            src: "../audio/Kehlani_GEazy_Good_Life_from_The_Fate_of_the_Furious_The_Album_Official_Video.mp3",
            img: "x.jpg",
            artist: "Kehlani GEazy",
            background_image: ""
        },
        {
            name: "Leilah",
            src: "Leilah-Otile_Brown_X_Kidumu(Official_Music_Video).mp3",
            img: "a.jpg",
            artist: "Otile Brown ft Kidumu",
            background_image: ""
        },
        // stop --------------------------------------------------------------------
        {
            name: "Payphone",
            src: "../audio/Maroon_5_Payphone_ft_Wiz_Khalifa_Explicit_Official_Music_Video.mp3",
            img: "d.jpg",
            artist: "Maroon 5 ft Wiz Khalifa",
            background_image: ""
        },
        {
            name: "memories",
            src: "../audio/Maroon_5-Memories(720X1280).mp3",
            img: "y.jpg",
            artist: "maroon",
            background_image: ""
        },
        {
            name: "Still Into You",
            src: "Paramore_Still_Into_You_OFFICIAL_VIDEO.mp3",
            img: "y.jpg",
            artist: "paramount",
            background_image: ""
        }
    ],
    index_playing, audio_time, allMusic = allMusic_untouched,
    forwardBtn, pauseBtn = 0;

/* -------------------------- END -------------------------------------------------------- */

/*   -----------------------------   CONSTANT GLOBAL ELEMENTS WITHIN THE JS FILE       -------------------- */
const searchBtn = document.getElementById("search_icon"),
    search_input = document.getElementById("search_input"),
    search_list = document.querySelector("#search_list"),
    audio = document.querySelector("#audio-playing"),
    prevBtn = document.querySelectorAll("#bottom_song_play  i")[0],
    playBtn = document.querySelectorAll("#bottom_song_play  i")[1],
    nextBtn = document.querySelectorAll("#bottom_song_play  i")[2],
    backwardBtn = document.querySelector("#backwardBtn"),
    repeat = document.querySelector("#repeat"),
    body = document.querySelector("body"),
    show_more = document.querySelector("#show_more"),
    progress_bar = document.querySelector("#progress_bar"),

    /* -------------------------- END -------------------------------------------------------- */

    /* -------------------------------------   ADD THE ROOT URL TO IMPORTANT FOLDERS REQUIRED IN THE CODE ---------- */

    bg_root = '../wallpaper/',
    audio_root = '../audio/',
    image_root = "../img/";

/* -------------------------- END -------------------------------------------------------- */

/* ------------------------------   USING JQUERY WITHIN THE FILE ------- JQUERY START ----------------- */
$(function () {

    /*  --------------------  FUNCTION TO CLEAR THE SEARCH INPUT WHEN CLICKED, OR AFTER SEARCH  ------ */
    const clearSearch = () => {
        search_input.value = "";
    };
    /* -------------------------- END -------------------------------------------------------- */

    /*  ------------------------ EVENT LISTENER FOR SEARCH INPUT WHEN A LETTER IS ADDED  ---------------- */

    search_input.addEventListener("keyup", () => {
        clearObject("#search_list span");
        callListSelection(search_input.value);
    });
    /* -------------------------- END -------------------------------------------------------- */

    /*  ------------------------ EVENT LISTENER TO REMOVE THE SEARCH RESULT ELEMENT WHEN THE USER CLICKS OUT OF THE SEARCH  ---------------- */

    document.addEventListener("click", (event) => {
        event.path.forEach((element) => {
            if (
                !(event.path[element] == document.querySelector(".search_wrapper"))
            ) {
                $(search_list).css("display", "none");
            }
        });
    });

    /* -------------------------- END -------------------------------------------------------- */

    /*  --------------------  FUNCTION TO FILTER THE WORDS ADDED TO THE SEARCH AND COMPARE WITH THE SONGS AVAILABLE  ------ */

    const filterSearch = list => {
        //  list.reduce((arg, current) => {
        //      let newlist = []
        //         return arg == current ? ' ': arg;
        //     })

        // console.log(list);
        list.forEach((element, i) => {
            // console.log(element);
            search_list.insertAdjacentHTML("beforeend", `<span>${element.item}</span>`);

        });
        // console.log(search_list.childNodes);
        search_list.childNodes.forEach(e => {
            e.addEventListener("click", () => {
                search_input.value = e.innerHTML;
                console.log(e.innerHTML);

                for (let index = 0; index < list.length; index++) {

                    if (e.innerHTML == `${allMusic[list[index].index].name} - ${allMusic[list[index].index].artist}`) {
                        console.log(list[index].index);
                        bottom_bar_display(list[index].index)
                    }
                }
            })
        })
    };
    /* -------------------------- END -------------------------------------------------------- */

    /*  --------------------  FUNCTION THAT GETS THE SEARCH WORD AND SEARCHES FOR THE WORD ITSELF ON THE LIST OF SONGS ON THE TABLE'S UI --------- */

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

        filterSearch(list);

        $(search_list).css("display", "block");
    }
    /* -------------------------- END -------------------------------------------------------- */

    /*  --------------------  FUNCTION THAT CLEARS THE TABLE PREVENTING REPETITION OF SONGS APPEARING --------- */


    const clearObject = arg => {
        const tr = document.querySelectorAll(arg);
        tr.forEach((element) => {
            element.remove();
            //    console.log(tr);
        });
    };
    /* -------------------------- END -------------------------------------------------------- */

    /*  ------------------- FUNCTION THAT DISPLAYS THE RESULTS THAT MATCH ONTO THE SEARCH LIST ELEMENT ----- */
    const loadMusic = auto => {
        if (auto) {
            allMusic.forEach((e, i) => {
                if (i < 3) {
                    const tr_model = `   <tr>
                                        <td>${i + 1}</td>
                                        <td><i class="fa fa-play"></i></td>
                                        <td><img src="./img/${e.img}" alt="" title="song cover"/></td>
                                        <td>${e.name}</td>
                                        <td>${e.artist}</td>
                                     
                                        <td class="icons">
                                        <i class="fa fa-angle-up"></i>
                                        <i class="fa fa-angle-down"></i>
                                        <i class="fa fa-trash"></i>
                                        </td>
                                    </tr>`;

                    const table_list = document.querySelector("#table_list tbody");
                    table_list.insertAdjacentHTML("beforeend", tr_model);
                }
            });
        }

        if (!auto) {
            allMusic.forEach((e, i) => {
                const tr_model = `   <tr class="body">
                                                <td>${i + 1}</td>
                                                <td><i class="fa fa-play"></i></td>
                                                <td><img src="./img/${e.img }" alt="" title="song cover"/></td>
                                                <td class="lengthen">${e.name}</td>
                                                <td  class="lengthen">${e.artist }</td>
                                        
                                                <td class="icons">
                                                <i class="fa fa-angle-up"></i>
                                                <i class="fa fa-angle-down"></i>
                                                <i class="fa fa-trash"></i>
                                                </td>
                                            </tr>`;
                const table_list = document.querySelector("#table_list tbody");
                table_list.insertAdjacentHTML("beforeend", tr_model);
            });
        }
        displayIcons();
    };

    /* -------------------------- END -------------------------------------------------------- */

    /*  ------------------- SEARCH BUTTON FUNCTION BUT MOSTLY ITS NOT ACTIVE ----- */

    searchBtn.addEventListener("click", () => {
        console.log(search_input.value);
        clearSearch();
    });
    /* -------------------------- END -------------------------------------------------------- */

    /* -------------------  song list ---------------------------------------------------------- */
    window.addEventListener("load", loadMusic(true));

    /* -------------------THE BOTTOM PART THAT DISPLAYS THE PLAYING SONG ------ */

    const bottom_bar_display = (arg = 0) => {

        if (arg) {
            $("#bottom_song_play").css("display", "flex");
            bottom_song_display(arg);
            index_playing = arg;
            audio.src = `./audio/${allMusic[arg].src}`;
            let gradient = ` linear-gradient(180deg,rgba(0, 0, 0, 0) 40%,rgba(0, 0, 0, 0.52) 50%,rgb(0, 0, 0) 70%)  0 0/cover no-repeat fixed,`
            $(body).css("background", `${gradient} url("${bg_root}${allMusic[arg].background_image}")  0 0/cover no-repeat fixed`);
            console.log(pauseBtn);

            if (!pauseBtn) pauseMusic()
            previous_and_next_Music(index_playing)
        } else {
            document.querySelectorAll("tbody .fa-play").forEach((e, i) => {

                e.addEventListener("click", () => {
                    $("#bottom_song_play").css("display", "flex");
                    index_playing = i;
                    bottom_song_display(i);
                    audio.src = `./audio/${allMusic[i].src}`;
                    let gradient = ` linear-gradient(180deg,rgba(0, 0, 0, 0) 40%,rgba(0, 0, 0, 0.52) 50%,rgb(0, 0, 0) 70%)  0 0/cover no-repeat fixed,`
                    $(body).css("background", `${gradient} url("${bg_root}${allMusic[i].background_image}")  0 0/cover no-repeat fixed`);
                    $(playBtn).removeClass("fa-play");
                    $(playBtn).addClass("fa-pause");
                    audio.play();
                    if (!pauseBtn) pauseMusic()
                    previous_and_next_Music(index_playing)
                    pauseBtn = 1;
                });
            });
        }


    };
    bottom_bar_display();
    /* -------------------------- END -------------------------------------------------------- */

    /* ----------------- THIS FUNCTION FETCHES THE SONG CLICKED FROM THE TABLE AND PLAYS IT ----------- */
    function bottom_song_display(i) {
        let left_bar = document.querySelector("#bottom_song_play .left-bar"),
            song_details = document.querySelector(".song_wrapper .song_details");
        if (song_details.innerHTML == "") {
            const Display_song = ` <div class="img">
            <img src="${image_root}${allMusic[i].img}" alt="" title="artist" />
         </div>
         <div class="description">
            <h1 class="song" title="song title" id="songTitle">${allMusic[i].name}</h1>
            <hr />
            <h3 id="artist" title="artist">${allMusic[i].artist}</h3>
            <button class="repeat" id="backwardBtn">previous <i class="fa fa-step-backward"></i></button>
            <button class="repeat" id="repeat">repeat <i class="fa fa-repeat"></i></button>
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
        revealX()
        previous_and_next_Music()
    }
    /* -------------------------- END -------------------------------------------------------- */

    /* ------------------  SHOW MORE BUTTON ON THE TABLE'S UI ------------------------------- */

    show_more.addEventListener("click", () => {
        if (document.querySelector("tr")) clearObject("tbody tr");

        if ($("#show_more i").hasClass("fa fa-angle-down")) {
            $("#show_more i").removeClass("fa-angle-down");
            loadMusic(false);
            bottom_bar_display();
            show_more.innerHTML = "show less <i class='fa fa-angle-up'></i>";
        } else {
            clearObject("tbody tr");
            loadMusic(true);
            bottom_bar_display();
            show_more.innerHTML = "show more <i class='fa fa-angle-down'></i>";
        }
    });
    /* -------------------------- END -------------------------------------------------------- */

    /* ------------------  FUNCTION DISPLAYING ICONS ON HOVER ------------------------------- */

    function displayIcons() {
        const tr_all = document.querySelectorAll("tbody tr");
        tr_all.forEach((element, i) => {
            $(element).mouseenter(function () {
                $(element.children[1].children[0]).css("display", "block");
                $(element.children[5]).css("display", "flex");
            });
            $(element).mouseleave(function () {
                $(element.children[1].children[0]).css("display", "none");
                $(element.children[5]).css("display", "none");
            });
        });
    }
    /* -------------------------- END -------------------------------------------------------- */

    /* ------------------  FUNCTION THAT CLEARS ON PRESS THE X BUTTON ------------------------------- */
    function revealX() {
        if (document.querySelector(".ex-button")) {
            document.querySelector(".ex-button").addEventListener("click", () => {
                $(".song_details").css("display", "none");
            });
        }
    }
    revealX()
    /* -------------------------- END -------------------------------------------------------- */



    /* ------------------  PLAY / PAUSE TOGGLE FUNCTION ------------------------------- */
    function pauseMusic() {
        $(playBtn).removeClass("fa-play");
        $(playBtn).addClass("fa-pause");
        audio.play();
        playBtn.addEventListener("click", () => {
            switch ($(playBtn).hasClass("fa-play")) {
                case true:
                    audio.play()
                    $(playBtn).removeClass("fa-play");
                    $(playBtn).addClass("fa-pause");

                    break;
                case false:
                    audio.pause()
                    $(playBtn).removeClass("fa-pause");
                    $(playBtn).addClass("fa-play");
                    break;
                default:
                    break;
            }
        })
    }
    /* -------------------------- END -------------------------------------------------------- */

    /* ------------------ PREVIOUS PLAY  FUNCTION ------------------------------- */

    function previous_and_next_Music() {
        if ((document.querySelector("#forwardBtn")) && (document.querySelector("#backwardBtn"))) {
            ForwardBtns(document.querySelector("#forwardBtn"));
            BackBtns(document.querySelector("#backwardBtn"));

        }

        ForwardBtns(nextBtn);
        BackBtns(prevBtn);
    }

    function ForwardBtns(btnPlus) {
        btnPlus.addEventListener("click", () => {
            console.log("clicked");
            $("#bottom_song_play").css("display", "flex");
            index_playing++;
            if (!(index_playing > allMusic.length)) {
                bottom_song_display(index_playing);
                audio.src = `${audio_root}${allMusic[index_playing].src}`;
                let gradient = ` linear-gradient(180deg,rgba(0, 0, 0, 0) 40%,rgba(0, 0, 0, 0.52) 50%,rgb(0, 0, 0) 70%)  0 0/cover no-repeat fixed,`
                $(body).css("background", `${gradient} url("${bg_root}${allMusic[index_playing].background_image}")  0 0/cover no-repeat fixed`);
                pauseMusic()
            } else {
                index_playing = 0
                console.log(index_playing);
                index_playing++;
                bottom_song_display(index_playing);
                audio.src = `${audio_root}${allMusic[index_playing].src}`;
                let gradient = ` linear-gradient(180deg,rgba(0, 0, 0, 0) 40%,rgba(0, 0, 0, 0.52) 50%,rgb(0, 0, 0) 70%)  0 0/cover no-repeat fixed,`
                $(body).css("background", `${gradient} url("${bg_root}${allMusic[index_playing].background_image}")  0 0/cover no-repeat fixed`);
                pauseMusic()
            }
        })
    }
     
  
    function BackBtns(btnMinus) {
        btnMinus.addEventListener("click", () => {
            $("#bottom_song_play").css("display", "flex");
            index_playing--;
            if (!(index_playing < 0)) {
                bottom_song_display(index_playing);
                audio.src = `${audio_root}${allMusic[index_playing].src}`;
                let gradient = ` linear-gradient(180deg,rgba(0, 0, 0, 0) 40%,rgba(0, 0, 0, 0.52) 50%,rgb(0, 0, 0) 70%)  0 0/cover no-repeat fixed,`
                $(body).css("background", `${gradient} url("${bg_root}${allMusic[index_playing].background_image}")  0 0/cover no-repeat fixed`);
                pauseMusic()
            } else {
                index_playing = allMusic.length;
                index_playing--;
                // if (!(index_playing < 0)) {
                bottom_song_display(index_playing);
                audio.src = `${audio_root}${allMusic[index_playing].src}`;
                let gradient = ` linear-gradient(180deg,rgba(0, 0, 0, 0) 40%,rgba(0, 0, 0, 0.52) 50%,rgb(0, 0, 0) 70%)  0 0/cover no-repeat fixed,`
                $(body).css("background", `${gradient} url("${bg_root}${allMusic[index_playing].background_image}")  0 0/cover no-repeat fixed`);
                pauseMusic()
            }
        })
    }

    audio.addEventListener("timeupdate", (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;

        let progressive_width = (currentTime / duration) * 100;
        progress_bar.style.width = `${progressive_width}%`;
        // console.log(progressive_width);
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

    document.querySelectorAll(".icons i").forEach((e, i) => {
        e.addEventListener("click", () => {
            let element_html = e.parentElement.parentElement;
            console.log(element_html, e, i);
            if ($(e).hasClass("fa-angle-up")) {
                allMusic.map(e => {
                    allMusic.splice(allMusic.indexOf(element_html), 1)
                    console.log(allMusic);
                    return allMusic;
                })
            }
            if ($(e).hasClass("fa-angle-down")) {
                allMusic.map(e => {
                    allMusic.splice(allMusic.indexOf(element_html), 1)
                    console.log(allMusic);
                    return allMusic;
                })
            }

            // }
        })
    })
});


/* -------------------------- END -------------------------------------------------------- */