import { v4 as uuidv4 } from "uuid";

function Songs() {
  return [
    {
      movie: "Animal",
      name: "Pehle Bhi Main",
      cover:
        "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_hungama/8902894362092_20231124231032/8902894362092/1700848809508/resources/8902894362092.jpg",
      artist: "Vishal Mishra",
      audio: "https://www.pagalworld.com.se/files/download/id/68446",
      id: uuidv4(),
      active: true,
    },
  ];
}

export default Songs;
