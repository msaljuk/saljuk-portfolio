import ColorDropletsModule from "../../Components/DynamicPageModules/ColorDropletsModule/ColorDropletsModule";
import ImageCarouselModule from "../../Components/DynamicPageModules/ImageCarouselModule/ImageCarouselModule";
import PageTitleModule from "../../Components/DynamicPageModules/PageTitleModule/PageTitleModule";
import PageSectionModule from "../../Components/DynamicPageModules/PageSectionModule/PageSectionModule";
import LongTextCardModule from "../../Components/DynamicPageModules/LongTextCardModule/LongTextCardModule";

export const routeToPageEntry = {
  "/design/cardinal-labs": "6Jp41eiPdqTgrbVHgydMSW",
};

export const getContentType = (content) => {
  return content.sys.contentType.sys.id;
};

export const contentTypeToModule = {
  colorDropletsModule: ColorDropletsModule,
  imageCarouselModule: ImageCarouselModule,
  pageTitleModule: PageTitleModule,
  pageSectionModule: PageSectionModule,
  longTextCardModule: LongTextCardModule,
};
