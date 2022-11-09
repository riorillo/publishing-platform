export type Article = {
  // title: string;
  id: string;
  username: string;
  createdAt: string;
  topic: string[];
  article: string;
  author : {
    username : string
    avatar : string,
  } 
  imageUrl: string;
  content: string;
  userImage: string;
  readingTime: string
  title: string;
};

// export const exampleArray: Article[] = [
//   {
//     id: "1",
//     title: "Article placeholder",
//     userImage: "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
//     username: "Alex",
//     publishedAt: "20-10-2022",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto commodi ut nihil non. Magni aspernatur repellat, dicta quibusdam voluptatibus numquam velit officia quam sed et corrupti doloremque quas quos.",
//     imageUrl: "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
//     readingTime: "5 min",
//     topic: "Data Science",
//     article:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
//   },
//   {
//     id: "2",
//     title: "Article placeholder",
//     userImage: "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
//     username: "Alex",
//     publishedAt: "20-10-2022",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto commodi ut nihil non. Magni aspernatur repellat, dicta quibusdam voluptatibus numquam velit officia quam sed et corrupti doloremque quas quos.",
//     imageUrl: "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
//     readingTime: "5 min",
//     topic: "Data Science",
//     article:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
//   },
//   {
//     id: "3",
//     title: "Article placeholder",
//     userImage: "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
//     username: "Alex",
//     publishedAt: "20-10-2022",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto commodi ut nihil non. Magni aspernatur repellat, dicta quibusdam voluptatibus numquam velit officia quam sed et corrupti doloremque quas quos.",
//     imageUrl: "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
//     readingTime: "5 min",
//     topic: "Technology",
//     article:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
//   },
//   {
//     id: "4",
//     title: "Article placeholder",
//     userImage: "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
//     username: "Alex",
//     publishedAt: "20-10-2022",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto commodi ut nihil non. Magni aspernatur repellat, dicta quibusdam voluptatibus numquam velit officia quam sed et corrupti doloremque quas quos.",
//     imageUrl: "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
//     readingTime: "5 min",
//     topic: "Technology",
//     article:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
//   },
//   {
//     id: "5",
//     title: "Article placeholder",
//     userImage: "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
//     username: "Alex",
//     publishedAt: "20-10-2022",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto commodi ut nihil non. Magni aspernatur repellat, dicta quibusdam voluptatibus numquam velit officia quam sed et corrupti doloremque quas quos.",
//     imageUrl: "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
//     readingTime: "5 min",
//     topic: "Programming",
//     article:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
//   },
//   {
//     id: "6",
//     title: "Article placeholder",
//     userImage: "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
//     username: "Alex",
//     publishedAt: "20-10-2022",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto commodi ut nihil non. Magni aspernatur repellat, dicta quibusdam voluptatibus numquam velit officia quam sed et corrupti doloremque quas quos.",
//     imageUrl: "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
//     readingTime: "5 min",
//     topic: "Machine Learning",
//     article:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
//   },
//   {
//     id: "7",
//     title: "Article placeholder",
//     userImage: "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
//     username: "Alex",
//     publishedAt: "20-10-2022",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto commodi ut nihil non. Magni aspernatur repellat, dicta quibusdam voluptatibus numquam velit officia quam sed et corrupti doloremque quas quos.",
//     imageUrl: "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
//     readingTime: "5 min",
//     topic: "Machine Learning",
//     article:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
//   },
//   {
//     id: "8",
//     title: "Article placeholder",
//     userImage: "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png",
//     username: "Alex",
//     publishedAt: "20-10-2022",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto commodi ut nihil non. Magni aspernatur repellat, dicta quibusdam voluptatibus numquam velit officia quam sed et corrupti doloremque quas quos.",
//     imageUrl: "https://www.creaideagraphics.it/wp-content/uploads/2019/04/placeholder-image.jpg",
//     readingTime: "5 min",
//     topic: "Programming",
//     article:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quasi aperiam quidem quibusdam, tenetur distinctio!}",
//   },
// ];

export const exampleTabs = ["Programming", "Technology", "Data Science"];

export const exampleTopicNotSelected = [
  "Inter",
  "Milan",
  "Juventus",
  "Napoli",
  "Catanzaro",
  "Palermo",
  "Roma",
  "Verona",
  "Acireale",
  "Latina",
  "Torino",
  "Bari",
  "Genova",
  "Bologna",
];
