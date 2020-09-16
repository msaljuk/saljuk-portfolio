const contentful = require("contentful");

const RESUME_ENTRY_ID = "2K2vFDibrKx8fzy1FCB9NZ";

export const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
});

export const getResume = async () => {
  return client
    .getEntry(RESUME_ENTRY_ID)
    .then((entry) => {
      return entry;
    })
    .catch((err) => console.log(err));
};
