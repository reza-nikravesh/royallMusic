import { v4 as uuidv4 } from "uuid";
export  function data() {
  return [
    {
      name: "Bell Tower",
      artist: "Mama Aiuto",
      cover: "https://i.scdn.co/image/ab67616d0000b2733055a0a3763c99f9557e4029",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21734",
      color: ["#FBB189", "#90ABB6"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Solar Cove",
      artist: "Mama Aiuto",
      cover: "https://i.scdn.co/image/ab67616d0000b27355265251b49ef66480c5b7b9",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16179",
      color: ["#FDAF85", "#D44847"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Mt. Elsewhere",
      artist: "Mama Aiuto",
      cover: "https://i.scdn.co/image/ab67616d0000b2731dc1cd60c7d66f661b9690c4",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12142",
      color: ["#FFEDC4", "#2E9F98"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Today Feels Like Everyday",
      artist: "Mama Aiuto",
      cover: "https://i.scdn.co/image/ab67616d0000b273d48d24735fd4af023ede3aa1",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12128",
      color: ["#314112", "#381D17"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "All In Good Spirit",
      artist: "Mama Aiuto",
      cover: "https://i.scdn.co/image/ab67616d0000b273ad6728c62a2f771a0c5af67d",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9261",
      color: ["#F2BFC2", "#DA514A"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Astronaut In The Ocean",
      artist: "Masked Wolf",
      cover: "https://www.36vibes.com.ng/wp-content/uploads/2021/05/1-214.jpg",
      audio:
        "https://dl2.hitseda.com/dl1/bm/masked%20wolf/1/01.Masked%20Wolf%20-%20Astronaut%20In%20The%20Ocean.mp3?_=1",
      color: ["#ADCAD2", "#607582"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Night Rider",
      artist: "Masked Wolf",
      cover: "https://m.media-amazon.com/images/I/81uDQVrzmoL._SS500_.jpg",
      audio:
        "https://dl2.hitseda.com/dl1/bm/masked%20wolf/1/03.Masked%20Wolf%20-%20Night%20Rider.mp3?_=3",
      color: ["#9A9A9A", "#333333"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Speed Racer",
      artist: "Masked Wolf",
      cover: "https://i1.sndcdn.com/artworks-000454374240-wvauj4-t500x500.jpg",
      audio:
        "https://dl2.hitseda.com/dl1/bm/masked%20wolf/1/08.Speed%20Racer%20CD%201%20TRACK%201%20%28320%29.mp3?_=8",
      color: ["#4B4B4B", "#191919"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Speed Racer",
      artist: "Masked Wolf",
      cover: "https://i1.sndcdn.com/artworks-000454374240-wvauj4-t500x500.jpg",
      audio:
        "https://dl2.hitseda.com/dl1/bm/masked%20wolf/1/08.Speed%20Racer%20CD%201%20TRACK%201%20%28320%29.mp3?_=8",
      color: ["#4B4B4B", "#191919"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Speed Racer",
      artist: "Masked Wolf",
      cover: "https://i1.sndcdn.com/artworks-000454374240-wvauj4-t500x500.jpg",
      audio:
        "https://dl2.hitseda.com/dl1/bm/masked%20wolf/1/08.Speed%20Racer%20CD%201%20TRACK%201%20%28320%29.mp3?_=8",
      color: ["#4B4B4B", "#191919"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Speed Racer",
      artist: "Masked Wolf",
      cover: "https://i1.sndcdn.com/artworks-000454374240-wvauj4-t500x500.jpg",
      audio:
        "https://dl2.hitseda.com/dl1/bm/masked%20wolf/1/08.Speed%20Racer%20CD%201%20TRACK%201%20%28320%29.mp3?_=8",
      color: ["#4B4B4B", "#191919"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Speed Racer",
      artist: "Masked Wolf",
      cover: "https://i1.sndcdn.com/artworks-000454374240-wvauj4-t500x500.jpg",
      audio:
        "https://dl2.hitseda.com/dl1/bm/masked%20wolf/1/08.Speed%20Racer%20CD%201%20TRACK%201%20%28320%29.mp3?_=8",
      color: ["#4B4B4B", "#191919"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Speed Racer",
      artist: "Masked Wolf",
      cover: "https://i1.sndcdn.com/artworks-000454374240-wvauj4-t500x500.jpg",
      audio:
        "https://dl2.hitseda.com/dl1/bm/masked%20wolf/1/08.Speed%20Racer%20CD%201%20TRACK%201%20%28320%29.mp3?_=8",
      color: ["#4B4B4B", "#191919"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export function secondToMinutes(time) {
  const sec = parseInt(time, 10); // convert value to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return  minutes + ":" + seconds; // Return is HH : MM : SS
}

