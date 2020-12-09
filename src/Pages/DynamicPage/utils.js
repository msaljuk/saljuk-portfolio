import PageTitleModule from "../../Components/DynamicPageModules/PageTitleModule/PageTitleModule";
import PageSectionModule from "../../Components/DynamicPageModules/PageSectionModule/PageSectionModule";

export const routeToPageEntry = {
  "/design/cardinal-labs": "6Jp41eiPdqTgrbVHgydMSW",
};

export const getContentType = (content) => {
  return content.sys.contentType.sys.id;
};

export const contentTypeToModule = {
  pageTitleModule: PageTitleModule,
  pageSectionModule: PageSectionModule,
};
