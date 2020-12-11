export const getCurrentEntry = (entries, location) => {
  if (location === "/code") {
    return { pageName: "Select a project from the dropdown" };
  }

  for (let i = 0; i < entries.length; i++) {
    if (entries[i].pageRoute === location) {
      return entries[i];
    }
  }

  return null;
};

export const sortEntriesByType = (entries) => {
  const entriesByType = {};

  for (let i = 0; i < entries.length; i++) {
    if (entriesByType[entries[i].pageType] === undefined) {
      entriesByType[entries[i].pageType] = [];
    }

    entriesByType[entries[i].pageType].push(entries[i]);
  }

  return entriesByType;
};
