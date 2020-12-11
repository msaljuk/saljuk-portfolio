import BeforeAfterModule from "../../Components/DynamicPageModules/BeforeAfterModule/BeforeAfterModule";
import ColorDropletsModule from "../../Components/DynamicPageModules/ColorDropletsModule/ColorDropletsModule";
import ImageCarouselModule from "../../Components/DynamicPageModules/ImageCarouselModule/ImageCarouselModule";
import PageTitleModule from "../../Components/DynamicPageModules/PageTitleModule/PageTitleModule";
import PageSectionModule from "../../Components/DynamicPageModules/PageSectionModule/PageSectionModule";
import ProjectHeaderModule from "../../Components/DynamicPageModules/ProjectHeaderModule/ProjectHeaderModule";
import LongTextCardModule from "../../Components/DynamicPageModules/LongTextCardModule/LongTextCardModule";
import SplitMaxCardModule from "../../Components/DynamicPageModules/SplitMaxCardModule/SplitMaxCardModule";
import StepByStepCardModule from "../../Components/DynamicPageModules/StepByStepCardModule/StepByStepCardModule";
import StepCardModule from "../../Components/DynamicPageModules/StepCardModule/StepCardModule";
import TypographyCardModule from "../../Components/DynamicPageModules/TypographyCardModule/TypographyCardModule";
import VideoCardModule from "../../Components/DynamicPageModules/VideoCardModule/VideoCardModule";

export const getContentType = (content) => {
  return content.sys.contentType.sys.id;
};

export const contentTypeToModule = {
  beforeAfterModule: BeforeAfterModule,
  colorDropletsModule: ColorDropletsModule,
  imageCarouselModule: ImageCarouselModule,
  pageTitleModule: PageTitleModule,
  pageSectionModule: PageSectionModule,
  projectHeaderModule: ProjectHeaderModule,
  longTextCardModule: LongTextCardModule,
  splitMaxCardModule: SplitMaxCardModule,
  stepByStepModule: StepByStepCardModule,
  stepModule: StepCardModule,
  typographyModule: TypographyCardModule,
  videoCardModule: VideoCardModule,
};
