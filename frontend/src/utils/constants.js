const PHOTO_URL =
  "https://images.unsplash.com/photo-1763674038996-c8bbad13b13b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

const IMG_CDN = "https://image.tmdb.org/t/p/w500/";
const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "chinese", name: "Chinese" },
];
export { PHOTO_URL, API_OPTIONS, IMG_CDN, SUPPORTED_LANGUAGES };
