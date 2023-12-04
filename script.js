 // Sample music playlist
 const allMusic = [
    {
        name: "Nanu_Nandini",
        artist: "VICKY",
        src: "assets/song/naanu_nandini___bengaluru_bandini___kannada_full_song_2023___comedy_song___alfiya_media(256k).mp3",
        img: "assets/image/nanu nadini.jpeg",
    },
    {
        name: "Bhajarangi 2 - Nee Sigoovaregu",
        artist: "Sid Sriram",
        src: "assets/song/Bhajarangi_2___Nee_Sigoovaregu__Dr.Shivarajkumar_Sid_Sriram_Bhavana__Arjun_Janya__K.Kalyan__A.Harsha(256k).mp3",
        img: "assets/image/nee.jpg",
    },
    {
        name: "Lokada Kalaji (2019) - Raghu Dixit",
        artist: "Raghu Dixit",
        src: "assets/song/Lokada_Kalaji__2019____Raghu_Dixit___Courtyard_Jam_Sessions(256k).mp3",
        img: "assets/image/lokada.jpeg",
    },
    {
        name: "GHOST__OGM",
        artist: "Aishwarya Rangarajan, Jithin Raj, and MC Chetan ",
        src: "assets/song/GHOST__OGM___Dr_Shivarajkumar___Anupam_Kher___Jayaram___Prashant_Narayanan___Srini___Sandesh(256k).mp3",
        img: "assets/image/ghost.jpeg",
    },
    {
        name: "The_Monster_Song",
        artist: "Adithi_Sagar___Ravi_Basrur_",
        src: "assets/song/The_Monster_Song_-_KGF_Chapter_2___Adithi_Sagar___Ravi_Basrur___Yash___Sanjay_Dutt___Prashanth_Neel(256k).mp3",
        img: "assets/image/monster).jpeg",
    },
    {
        name: "Malnad_Adike_-_Simhadriya_Simha",
        artist: "Rajesh Krishnan, S. P. Balasubrahmanyam, and Sangeeta Gururaj",
        src: "assets/song/Malnad_Adike_-_Simhadriya_Simha_-_HD_Video_Song_-_Dr.Vishnuvardhan_-_Bhanupriya_-_Deva(256k).mp3",
        img: "assets/image/shima.jpg",
    },
    {
        name: "Ulidavaru_Kandante___Gatiya_Ilidu_",
        artist: "Vijay prakash_Ajaneesh",
        src: "assets/song/Ulidavaru_Kandante___Gatiya_Ilidu___Video_Song___Vijay_Prakash___Rakshit_Shetty___Kishore___Ajaneesh(256k).mp3",
        img: "assets/image/gatiya .jpg",
    },
    {
        name: "Alemaariye_-_Rathnan_Prapancha",
        artist: "Sanjith_Hegde,Ajaneesh",
        src: "assets/song/Alemaariye_-_Rathnan_Prapancha__Dhananjaya_Sanjith_Hegde,Ajaneesh_Lokanath_Rohit_Padaki_KRG_Studios(256k).mp3",
        img: "assets/image/ratna.jpg",
    },
    {
        name: "Geethanjali",
        artist: "SPB____Shankar_Nag_",
        src: "assets/song/Geethanjali_____C_B_I_Shankar_Kannada_Old__Movie____SPB____Shankar_Nag_Hit_Songs_HD(256k).mp3",
        img: "assets/image/getanjali.jpeg",
    },

    {
        name: "Kantara_Varaha Roopam",
        artist: "__Ajaneesh_Loknath  and Sai Vignesh ",
        src: "assets/song/Kantara_-_Varaha_Roopam_Lyric_Video___Sai_Vignesh___Rishab_Shetty___Ajaneesh_Loknath___Hombale_Films(256k).mp3",
        img: "assets/image/kantara29102022_1c.avif",
    },
    {
        name: "Yajamana_",
        artist: "Vijay Prakash",
        src: "assets/song/Yajamana_Title_Track_4K_Video_Song___Darshan___V_Harikishna___Media_House_Studio(256k).mp3",
        img: "assets/image/yajamana.jpg",
    },
    {
        name: "Maathu_Nannavalu",
        artist: "Sonu_Nigam___V_Harikrishna",
        src: "assets/song/Gaja_Movie_Songs___Maathu_Nannavalu_Video_Song___Darshan___Navya_Nair___Sonu_Nigam___V_Harikrishna(256k).mp3",
        img: "assets/image/mathu.jpg",
    },
    {
        name: "Singara_Siriye",
        artist: "_Vijay_Prakash_Ananya_Bhat__Ajaneesh_Loknath",
        src: "assets/song/Kantara_-_Singara_Siriye__Vijay_Prakash_Ananya_Bhat__Ajaneesh_Loknath__Rishab_Shetty_Hombale_Films(256k).mp3",
        img: "assets/image/singars.jpeg",
    },
    {
        name: "Jackie___Jackie_",
        artist: "Yogaraj_Bhat",
        src: "assets/song/Jackie___Jackie_Jackie_HD_Video_Song___Puneeth_Rajkumar___Bhavana_Menon___Yogaraj_Bhat(256k).mp3",
        img: "assets/image/jacki.jpg",
    },
     {
        name: "Sakatthagavle",
        artist: "V._Harikrishna___Nagendra_Prasad",
        src: "assets/song/Sakatthagavle_Video_Song___Porki___V._Harikrishna___Nagendra_Prasad(256k).mp3",
        img: "assets/image/Porki-Kannada-2014-500x500.jpg ",
    },

    {
        name: "Pushpavati_Kannada_Song",
        artist: "Darshan__V_Harikrishna",
        src: "assets/song/Kranti___Pushpavati_Kannada_Song___Darshan__V_Harikrishna_Shylaja_Nag,_B_Suresha__Media_House_Studio(256k).mp3",
        img: "assets/image/pusp.jpg",
    },
    {
        name: "Munjane_Manjalli",
        artist: "Raghu_Dixit",
        src: "assets/song/Munjane_Manjalli___Audio_Song___Just_Maath_Maathali___Kiccha_Sudeep___Ramya___Raghu_Dixit__(256k).mp3",
        img: "assets/image/unjane_Manjalli.jpeg",
    },
    {
        name: "Navagraha___Ambari_Oorinalli",
        artist: "Soumya___Shankar_Mahadevan",
        src: "assets/song/Navagraha___Ambari_Oorinalli___HD_Video_Song___Soumya___Shankar_Mahadevan___Darshan___V.Harikrishna(256k).mp3",
        img: "assets/image/navagraha.jpeg",
    },
    {
        name: "NENNE_TANAKA",
        artist: "Sanjith_Hegde",
        src: "assets/song/NENNE_TANAKA_-_Video_Song___Trivikrama___Vikram_Ravichandran___Akansha___Sanjith_Hegde___A2_Music(256k).mp3",
        img: "assets/image/Nenne-Tanaka-From-Trivikrama-Kannada-2022-20220620173603-500x500.jpg",
    },
    {
        name: "Paramaathma___Paravashanadenu",
        artist: " Sonu Nigam",
        src: "assets/song/Paramaathma___Paravashanadenu_Video_song___Puneeth_Rajkumar,_Deepa_Sannidhi(256k).mp3",
        img: "assets/image/yavaing.jpg",
    },
    {
        name: "Sojugada_Soojumallige",
        artist: "Chaitra Achar and Midhun Mukundan",
        src: "assets/song/Sojugada_Soojumallige_Video_Song_-_GGVV_I_Raj_B_Shetty_I_Midhun_Mukundan_I_Chaithra_J_Achar(256k).mp3",
        img: "assets/image/Sojugada-Soojumallige-From-Garuda-Gamana-Vrishabha-Vahana--Kannada-2021-20211126190144-500x500.jpg",
    },
    

  

    // Add more songs...
];

const wrapper = document.querySelector(".wrapper");
const musicImg = document.getElementById("musicImg");
const musicName = document.querySelector(".name");
const musicArtist = document.querySelector(".artist");
const playPauseBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const mainAudio = document.querySelector("#main-audio");
const progressArea = document.querySelector(".progress-area");
const progressBar = document.querySelector(".progress-bar");
const fileInput = document.querySelector("#file-input");
const maxDuration = document.querySelector(".max-duration");

let isMusicPaused = true;
let currentMusicIndex = 0;

function initialize() {
    loadMusic(allMusic[currentMusicIndex]);
    updatePlaylist();

    fileInput.addEventListener("change", handleFileChange);
    playPauseBtn.addEventListener("click", togglePlayPause);
    prevBtn.addEventListener("click", prevMusic);
    nextBtn.addEventListener("click", nextMusic);
    progressArea.addEventListener("click", handleProgressClick);
    mainAudio.addEventListener("timeupdate", handleTimeUpdate);
    mainAudio.addEventListener("ended", nextMusic);

    const backButton = document.getElementById("backButton");
    backButton.addEventListener("click", () => {
        console.log("Back button clicked");
        window.history.back(); // Simulate navigating back in the browser history
    });

    const menuButton = document.getElementById("menuButton");
    menuButton.addEventListener("click", showPlaylistModal);

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
        playlistModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === playlistModal) {
            playlistModal.style.display = "none";
        }
    });
}

function loadMusic(music) {
    musicImg.src = music.img;
    musicName.innerText = music.name;
    musicArtist.innerText = music.artist;
    mainAudio.src = music.src;
}

function playMusic() {
wrapper.classList.add("paused");
musicImg.classList.add("rotate");
playPauseBtn.innerHTML = '<i class="fi fi-sr-pause"></i>';
mainAudio.play().then(() => {
isMusicPaused = false;
}).catch((error) => {
console.error("Error playing music:", error);
isMusicPaused = true;
});
}



function pauseMusic() {
    wrapper.classList.remove("paused");
    musicImg.classList.remove("rotate");
    playPauseBtn.innerHTML = '<i class="fi fi-sr-play"></i>';
    mainAudio.pause();
}

function togglePlayPause() {
    isMusicPaused ? playMusic() : pauseMusic();
    isMusicPaused = !isMusicPaused;
}

function prevMusic() {
    currentMusicIndex = (currentMusicIndex - 1 + allMusic.length) % allMusic.length;
    loadMusic(allMusic[currentMusicIndex]);
    playMusic();
}

function nextMusic() {
    currentMusicIndex = (currentMusicIndex + 1) % allMusic.length;
    loadMusic(allMusic[currentMusicIndex]);
    playMusic();
}

function handleFileChange() {
    const selectedFile = fileInput.files[0];

    if (selectedFile) {
        const newMusic = {
            name: selectedFile.name.split(".")[0],
            artist: "Unknown Artist",
            src: URL.createObjectURL(selectedFile),
            img: "assets/image/images.png",
        };

        allMusic.push(newMusic);
        currentMusicIndex = allMusic.length - 1;
        loadMusic(newMusic);
        playMusic();
        updatePlaylist();
    }
}

function handleProgressClick(e) {
    const progressWidth = progressArea.clientWidth;
    const clickedOffsetX = e.offsetX;
    const songDuration = mainAudio.duration;

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
}

function handleTimeUpdate(e) {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    const musicCurrentTime = document.querySelector(".current-time");

    const currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;

    const durationMin = Math.floor(duration / 60);
    let durationSec = Math.floor(duration % 60);
    if (durationSec < 10) {
        durationSec = `0${durationSec}`;
    }
    maxDuration.innerText = `${durationMin}:${durationSec}`;
}

function updatePlaylist() {
    const playlistContent = document.getElementById("playlist");
    playlistContent.innerHTML = "";

    allMusic.forEach((music, index) => {
        const listItem = document.createElement("li");
        listItem.innerText = `${index + 1}. ${music.name}`;
        playlistContent.appendChild(listItem);
    });
}

function showPlaylistModal() {
    updatePlaylist();
    playlistModal.style.display = "block";
}

initialize();