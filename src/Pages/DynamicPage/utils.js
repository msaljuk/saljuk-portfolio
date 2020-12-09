import ColorDropletsModule from "../../Components/DynamicPageModules/ColorDropletsModule/ColorDropletsModule";
import ImageCarouselModule from "../../Components/DynamicPageModules/ImageCarouselModule/ImageCarouselModule";
import PageTitleModule from "../../Components/DynamicPageModules/PageTitleModule/PageTitleModule";
import PageSectionModule from "../../Components/DynamicPageModules/PageSectionModule/PageSectionModule";
import LongTextCardModule from "../../Components/DynamicPageModules/LongTextCardModule/LongTextCardModule";
import StepByStepCardModule from "../../Components/DynamicPageModules/StepByStepCardModule/StepByStepCardModule";

export const routeToPageEntry = {
  "/design/cardinal-labs": "6Jp41eiPdqTgrbVHgydMSW",
  "/design/kya-scope-hai": "5UTBDmJpIE3MoMmGG5RDdp",
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
  stepByStepModule: StepByStepCardModule,
};
