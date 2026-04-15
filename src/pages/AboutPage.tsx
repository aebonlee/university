import GuidePage from '../components/GuidePage';
import aboutSite from '../data/about-site';
import aboutCurriculum from '../data/about-curriculum';
import aboutInstructorAebon from '../data/about-instructor-aebon';
import aboutInstructorJdy from '../data/about-instructor-jdy';

const dataFiles = [aboutSite, aboutCurriculum, aboutInstructorAebon, aboutInstructorJdy];

export default function AboutPage() {
  return (
    <GuidePage
      seoTitle="About"
      seoTitleEn="About"
      seoDescription="생성형 AI 기반 문서·인사행정 실무 자동화 교육 프로그램 소개"
      path="/about"
      dataFiles={dataFiles}
    />
  );
}
