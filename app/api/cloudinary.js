import { v2 as Cloudinary } from "cloudinary";

const transformImage = (req, res) => {
  Cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
  });

  const { id } = req.query;

  const coffeeMug = Cloudinary.url("brand-visualizer/mockups/coffee-mug.png", {
    transformation: [
      {
        aspect_ratio: "1.0",
        gravity: "center",
        crop: "fill",
        width: "320",
        effect: "grayscale"
      },
      {
        overlay: `brand-visualizer:logos:${id}.png`,
        width: 80
      },
      { flags: "region_relative" },
      { flags: "layer_apply", gravity: "west", x: 100, y: -10 },
      {
        overlay: `brand-visualizer:logos:${id}.png`,
        width: 70
      },
      { flags: "region_relative", opacity: 20, angle: "vflip" },
      { flags: "layer_apply", gravity: "south", y: 50, x: -15 }
    ]
  });

  const notePad = Cloudinary.url("brand-visualizer/mockups/notepad.jpg", {
    transformation: [
      {
        background: "auto:predominant",
        width: 320,
        crop: "pad",
        effect: "grayscale"
      },
      {
        overlay: `brand-visualizer:logos:${id}.png`,
        width: 80,
        angle: -15
      },
      { flags: "layer_apply" }
    ]
  });

  const hoodie = Cloudinary.url("brand-visualizer/mockups/hoodie.jpg", {
    transformation: [
      {
        width: 320,
        effect: "grayscale"
      },
      {
        overlay: `brand-visualizer:logos:${id}.png`,
        width: 30
      },
      { flags: "layer_apply", gravity: "north_west", x: 120, y: 60 }
    ]
  });
  const card = Cloudinary.url("brand-visualizer/mockups/business-card.png", {
    transformation: [
      {
        width: 320,
        effect: "grayscale"
      },
      {
        overlay: `brand-visualizer:logos:${id}.png`,
        width: 100
      },
      { flags: "layer_apply", gravity: "center", y: -120 },
      {
        overlay: `brand-visualizer:logos:${id}.png`,
        width: 70
      },
      { flags: "layer_apply", gravity: "south_west", y: 80, x: 25 }
    ]
  });

  res.status(200).json({
    sucess: true,
    mug: coffeeMug,
    notepad: notePad,
    hoodie: hoodie,
    card: card
  });
};

export default transformImage;
