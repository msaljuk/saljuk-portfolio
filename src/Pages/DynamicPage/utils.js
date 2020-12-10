import BeforeAfterModule from "../../Components/DynamicPageModules/BeforeAfterModule/BeforeAfterModule";
import ColorDropletsModule from "../../Components/DynamicPageModules/ColorDropletsModule/ColorDropletsModule";
import ImageCarouselModule from "../../Components/DynamicPageModules/ImageCarouselModule/ImageCarouselModule";
import PageTitleModule from "../../Components/DynamicPageModules/PageTitleModule/PageTitleModule";
import PageSectionModule from "../../Components/DynamicPageModules/PageSectionModule/PageSectionModule";
import LongTextCardModule from "../../Components/DynamicPageModules/LongTextCardModule/LongTextCardModule";
import StepByStepCardModule from "../../Components/DynamicPageModules/StepByStepCardModule/StepByStepCardModule";
import TypographyCardModule from "../../Components/DynamicPageModules/TypographyCardModule/TypographyCardModule";
import VideoCardModule from "../../Components/DynamicPageModules/VideoCardModule/VideoCardModule";

export const routeToPageEntry = {
  "/design/cardinal-labs": "6Jp41eiPdqTgrbVHgydMSW",
  "/design/kya-scope-hai": "5UTBDmJpIE3MoMmGG5RDdp",
  "/design/assu-summer-mailer": "2iPAoRfQfHIJix6pYXxFhW",
  "/design/sse-welcome-packet": "48En51KgS1ggs52sIIsvgp",
  "/design/stanford-map": "4zh7KTjq3QSFRHxi00t7L9",
};

export const getContentType = (content) => {
  return content.sys.contentType.sys.id;
};

export const contentTypeToModule = {
  beforeAfterModule: BeforeAfterModule,
  colorDropletsModule: ColorDropletsModule,
  imageCarouselModule: ImageCarouselModule,
  pageTitleModule: PageTitleModule,
  pageSectionModule: PageSectionModule,
  longTextCardModule: LongTextCardModule,
  stepByStepModule: StepByStepCardModule,
  typographyModule: TypographyCardModule,
  videoCardModule: VideoCardModule,
};
