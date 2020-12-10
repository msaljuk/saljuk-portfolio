const contentful = require("contentful");

const DESIGN_PAGE_ENTRY_ID = "1ZT7h11Ph6COfhmKpAImTN";
const DESIGN_PAGE_ROUTES_ENTRY_ID = "6SNIiXtKpmseAihksgDvKP";
const CODE_PAGE_ROUTES_ENTRY_ID = "5XKctlJMvVKy7M9piGoZVj";
const PAGE_ROUTES_ENTRY_ID = "40mCWscQr74OUFX5VciAPe";
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

export const getDesignPage = async () => {
  return client
    .getEntry(DESIGN_PAGE_ENTRY_ID)
    .then((entry) => {
      return entry;
    })
    .catch((err) => console.log(err));
};

export const getDesignPageRoutes = async () => {
  return client
    .getEntry(DESIGN_PAGE_ROUTES_ENTRY_ID)
    .then((entry) => {
      return entry;
    })
    .catch((err) => console.log(err));
};

export const getPageRoutes = async () => {
  return client
    .getEntry(PAGE_ROUTES_ENTRY_ID)
    .then((entry) => {
      return entry;
    })
    .catch((err) => console.log(err));
};

export const getCodePageRoutes = async () => {
  return client
    .getEntry(CODE_PAGE_ROUTES_ENTRY_ID)
    .then((entry) => {
      return entry;
    })
    .catch((err) => console.log(err));
};

export const getContentFromEntry = async (entryId) => {
  return client
    .getEntry(entryId)
    .then((entry) => {
      return entry;
    })
    .catch((err) => console.log(err));
};
