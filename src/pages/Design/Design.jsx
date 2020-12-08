import { useEffect } from "react";

import { getDesignPage } from "../../Network/contentful";

const Design = () => {
  useEffect(() => {
    const fetchData = async () => {
      const designPage = await getDesignPage();
      console.log(designPage);
    };
    fetchData();
  }, []);

  return null;
};

export default Design;
