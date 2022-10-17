import React from "react";
import Post from "./components/Post/";
const oggetto = {
  userImage: "https://miro.medium.com/1*W0wM9xIeeIR3_Oo0E_thaA.png",
  username: "Alex",
  publishedAt: "20/10/2022",
  title: "Ciccio si è fatto grande",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A architecto commodi ut nihil non. Magni aspernatur repellat, dicta quibusdam voluptatibus numquam velit officia quam sed et corrupti doloremque quas quos.",
  imageUrl: "https://miro.medium.com/1*W0wM9xIeeIR3_Oo0E_thaA.png",
  topic: "Non so",
  readingTime: "5min",
};

function App() {
  return (
   <Post article = {oggetto} />
  );
}

export default App;
