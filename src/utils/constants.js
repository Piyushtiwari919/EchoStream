const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
const PHOTO_URL =
  "https://images.unsplash.com/photo-1763674038996-c8bbad13b13b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjg3YjQ4OTRmOGI5OGY1YjJjMDcwNTU4ZWMwMDU3YSIsIm5iZiI6MTc2NDg3OTM4My4zMjYwMDAyLCJzdWIiOiI2OTMxZWMxNzQ0M2EyMjA0MTU0MWU3OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.cF_2RRjTE0wJyCKVnS5hBPBa-l2E2CnTQrWtCKmqQLw",
  },
};

const IMG_CDN = "https://image.tmdb.org/t/p/w500/";
const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "chinese", name: "Chinese" },
];
export { LOGO, PHOTO_URL, API_OPTIONS, IMG_CDN, SUPPORTED_LANGUAGES };
