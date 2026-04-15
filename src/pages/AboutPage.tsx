import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

export default function AboutPage() {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className="about-page">
      <SEOHead title={t('about.title')} />
      <div className="container">
        <div className="about-header">
          <h1>{t('about.title')}</h1>
          <p>{t('about.subtitle')}</p>
        </div>

        <div className="about-section">
          <h2>{isKo ? '교육 과정 소개' : 'Course Introduction'}</h2>
          <p>
            {isKo
              ? '"생성형 AI 기반 문서·인사행정 실무 자동화"는 전남대학교 직원 및 조교를 대상으로 한 2일 과정(16교시) 실무 중심 교육 프로그램입니다.'
              : '"Generative AI-Based Document & HR Administration Automation" is a 2-day (16 session) practice-oriented training program for Chonnam National University staff and assistants.'}
          </p>
          <p>
            {isKo
              ? 'ChatGPT, Gemini, Claude 등 최신 생성형 AI를 활용하여 공문서 작성, 보고서 제작, PPT 제작, Excel 데이터 분석, 인사·근태 관리 업무를 효율화하는 방법을 학습합니다.'
              : 'Learn to streamline official document writing, report creation, PPT production, Excel data analysis, and HR/attendance management using ChatGPT, Gemini, Claude and other generative AI tools.'}
          </p>
        </div>

        <div className="about-section">
          <h2>{isKo ? '교육 목표' : 'Learning Objectives'}</h2>
          <ul>
            <li>{isKo ? '생성형 AI의 원리와 주요 서비스를 이해합니다' : 'Understand generative AI principles and major services'}</li>
            <li>{isKo ? '프롬프트 엔지니어링의 핵심 기법을 습득합니다' : 'Master core prompt engineering techniques'}</li>
            <li>{isKo ? '공문서, 보고서, PPT를 AI로 빠르게 작성합니다' : 'Create documents, reports, and presentations quickly with AI'}</li>
            <li>{isKo ? 'Excel 데이터를 AI로 분석하고 시각화합니다' : 'Analyze and visualize Excel data with AI'}</li>
            <li>{isKo ? '인사·근태 업무에 AI를 적용합니다' : 'Apply AI to HR and attendance management'}</li>
            <li>{isKo ? '반복 업무 자동화 워크플로우를 설계합니다' : 'Design workflow automation for repetitive tasks'}</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>{isKo ? '강사 소개' : 'Instructor'}</h2>
          <p>
            <strong>Ph.D Aebon Lee ({isKo ? '이애본 박사' : 'Dr. Aebon Lee'})</strong>
          </p>
          <ul>
            <li>{isKo ? 'DreamIT Biz 대표' : 'CEO, DreamIT Biz'}</li>
            <li>{isKo ? 'AI 교육 전문가 (75개 교육 사이트 운영)' : 'AI Education Expert (Operating 75 education sites)'}</li>
            <li>{isKo ? '대학교·기업 AI 활용 교육 강사' : 'University & Corporate AI Training Instructor'}</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>{isKo ? 'DreamIT Biz' : 'DreamIT Biz'}</h2>
          <p>
            {isKo
              ? 'DreamIT Biz는 AI 교육 전문 기업으로, 75개 이상의 교육 사이트를 운영하며 대학교, 공공기관, 기업을 대상으로 AI 활용 역량 강화 교육을 제공합니다.'
              : 'DreamIT Biz is an AI education company operating 75+ educational sites, providing AI competency training for universities, public institutions, and corporations.'}
          </p>
          <p>
            <strong>{isKo ? '연락처' : 'Contact'}:</strong> aebon@dreamitbiz.com | 010-3700-0629
          </p>
          <p>
            <strong>{isKo ? '홈페이지' : 'Website'}:</strong>{' '}
            <a href="https://www.dreamitbiz.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-blue)' }}>
              www.dreamitbiz.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
