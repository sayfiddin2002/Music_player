const songs = [
  {
    name: "Kel Layli",
    link: "./musik/UZmir - Kel layli (Music 2022).mp3",
    artists: "Uzmir",
    image: "./image/photo_2023-02-25_18-32-27.jpg"
  },
  {
    name: "Odamlar nima deydi",
    link: "./musik/Konsta & Timur Alixonov - Odamlar nima deydi.mp3",
    artists: "Konsta & Timur Alixanov",
    image: "./image/photo_2023-03-13_18-20-33.jpg"
  },
  {
    name: "Astrum",
    link: "./musik/konsta-astrum_(uzxit.net).mp3",
    artists: "Konsta",
    image: "./image/photo_2023-03-15_09-08-44.jpg"
  },
  {
    name: "Sen meniki emassan",
    link: "./musik/new_7005_uzdodacom.mp3",
    artists: "Ummon",
    image: "./image/photo_2022-10-06_02-50-21.jpg"
  },
  {
    name: "Mening dostim",
    link: "./musik/Tohir Sodiqov - Mening Dostim.mp3",
    artists: "Tohir Sodiqov",
    image: "./image/tohir.jpg"
  },
  {
    name: "Yaxshi korsam nim qipti",
    link: "./musik/Xamdam Sobirov - Yaxshi ko'rsam nima qipti.mp3",
    artists: "Xamdam Sobirov",
    image: "./image/hamdam.jpg"
  },
];

var progress = document.querySelector("#progress");
var song = document.querySelector("#song");
var playBtn = document.querySelector("#play i");
var index = 0;
var img = document.querySelector(".img img");

var title = document.querySelector("#title");
var thumb = document.querySelector("#thumb");
var artist = document.querySelector("#musician");

var start = document.querySelector("#start");
var end = document.querySelector("#end");

song.src = songs[index].link;

title.innerHTML = songs[index].name;
artist.innerHTML = songs[index].artists;
thumb.src = songs[index].image;

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;

  setInterval(() => {
    var min = Math.floor(song.duration / 60);
    var sec = Math.floor(song.duration % 60);

    var curMin = Math.floor(song.currentTime / 60);
    var curSec = Math.floor(song.currentTime % 60);

    if (sec < 10) {
      sec = "0" + sec;
    }
    if (curSec < 10) {
      curSec = "0" + curSec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (curMin < 10) {
      curMin = "0" + curMin;
    }

    end.innerHTML = min + ":" + sec;
    start.innerHTML = curMin + ":" + curSec;
  }, 1000);
};

function playPause() {
  if (playBtn.classList.contains("bx-pause")) {
    song.pause();
    playBtn.classList.remove("bx-pause");
    playBtn.classList.add("bx-play");
    img.classList.remove("play");
  } else {
    song.play();
    playBtn.classList.remove("bx-play");
    playBtn.classList.add("bx-pause");
    img.classList.add("play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
    if (song.currentTime == song.duration) {
      nextPlay();
    }
  }, 1000);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  playBtn.classList.remove("bx-play");
  playBtn.classList.add("bx-pause");
  img.classList.add("play");
};

function nextPlay() {
  index = index + 1;
  // playBtn.classList.remove("bx-pause");
  // playBtn.classList.add("bx-play");
  if (index > songs.length) {
    index = 0;
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    // song.play();
    song.pause();
  } else {
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    // song.play();
    song.pause();
  }
}

function prevPlay() {
  index = index - 1;
  if (index < 0) {
    index = songs.length;
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    // song.play();
    song.pause();
  } else {
    song.src = songs[index].link;
    title.innerHTML = songs[index].name;
    artist.innerHTML = songs[index].artists;
    thumb.src = songs[index].image;
    // song.play();
    song.pause();
  }
}
