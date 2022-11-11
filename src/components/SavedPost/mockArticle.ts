export type Article = {
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
  Saved: {userId: string},
  isSaved?: boolean
};
