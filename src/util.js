import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "chillhop beat tapes: El Train",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
      artist: "El Train",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51078",
      color: ["#E3C07F", "#414945"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "chillhop beat tapes: Evil Needle x Misha",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg",
      artist: "Evil Needle, Misha",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51078",
      color: ["#E9EBDF", "#584177"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "chillhop beat tapes: Mr Slipz x illiterate",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/8c2eab8525ace609b0c68b7564eb085d2244ee09-1024x1024.jpg",
      artist: "Mr Slipz, illiterate",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51078",
      color: ["#B8C8A9", "#A68842"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "The Loveliest Dream",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/10/8b7ba4cdad98f47e0411cfe94c50cce4a68cb848-1024x1024.jpg",
      artist: "Sofasound",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51078",
      color: ["#DEB9CE", "#5B84CE"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "chillhop beat tapes: less.people",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/10/41619d032f80a089e2c99e98953d441fd061ef12-1024x1024.jpg",
      artist: "less.people",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51078",
      color: ["#4B4142", "#E8D2A6"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "chillhop beat tapes: J.Folk",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      artist: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=51078",
      color: ["#409A86", "#9E0706"],
      id: uuidv4(),
      active: false,
    },
  ];
}
export default chillHop;
