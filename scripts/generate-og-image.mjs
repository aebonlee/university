import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

const WIDTH = 1200;
const HEIGHT = 630;

// University green theme colors
const BG_TOP = '#0D3B0E';
const BG_BOTTOM = '#1B5E20';
const ACCENT = '#4CAF50';
const WHITE = '#FFFFFF';

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BG_TOP}"/>
      <stop offset="100%" stop-color="${BG_BOTTOM}"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${ACCENT}"/>
      <stop offset="100%" stop-color="#81C784"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Subtle grid pattern -->
  <g opacity="0.06">
    ${Array.from({ length: 25 }, (_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="${HEIGHT}" stroke="${WHITE}" stroke-width="0.5"/>`).join('')}
    ${Array.from({ length: 14 }, (_, i) => `<line x1="0" y1="${i * 50}" x2="${WIDTH}" y2="${i * 50}" stroke="${WHITE}" stroke-width="0.5"/>`).join('')}
  </g>

  <!-- Decorative circles -->
  <circle cx="100" cy="100" r="200" fill="${ACCENT}" opacity="0.05"/>
  <circle cx="1100" cy="530" r="250" fill="${ACCENT}" opacity="0.05"/>
  <circle cx="900" cy="80" r="120" fill="#81C784" opacity="0.04"/>

  <!-- Top left badge -->
  <rect x="60" y="50" width="200" height="40" rx="20" fill="url(#accent)" opacity="0.9"/>
  <text x="160" y="76" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${WHITE}" text-anchor="middle">University AI</text>

  <!-- AI icon (brain) -->
  <g transform="translate(540, 140)" filter="url(#glow)">
    <circle cx="60" cy="60" r="55" fill="none" stroke="url(#accent)" stroke-width="2.5" opacity="0.8"/>
    <circle cx="60" cy="60" r="40" fill="${ACCENT}" opacity="0.15"/>
    <!-- Simplified brain icon -->
    <g fill="none" stroke="${WHITE}" stroke-width="2" stroke-linecap="round" opacity="0.9">
      <path d="M45,55 C42,45 48,38 55,38 C58,32 67,32 70,38 C77,38 82,45 78,55"/>
      <path d="M45,65 C42,75 48,82 55,82 C58,88 67,88 70,82 C77,82 82,75 78,65"/>
      <line x1="60" y1="38" x2="60" y2="82"/>
      <path d="M48,50 Q55,55 48,65"/>
      <path d="M72,50 Q65,55 72,65"/>
    </g>
  </g>

  <!-- Main title -->
  <text x="600" y="300" font-family="Arial, sans-serif" font-size="42" font-weight="800" fill="${WHITE}" text-anchor="middle" letter-spacing="1">
    생성형 AI 기반
  </text>
  <text x="600" y="360" font-family="Arial, sans-serif" font-size="42" font-weight="800" fill="${WHITE}" text-anchor="middle" letter-spacing="1">
    문서·인사행정 실무 자동화
  </text>

  <!-- Accent line -->
  <rect x="400" y="385" width="400" height="3" rx="1.5" fill="url(#accent)" opacity="0.8"/>

  <!-- Subtitle -->
  <text x="600" y="425" font-family="Arial, sans-serif" font-size="20" fill="#A5D6A7" text-anchor="middle" letter-spacing="0.5">
    전남대학교 직원·조교 대상  |  2일 과정(16교시)
  </text>

  <!-- Tags -->
  <g transform="translate(240, 460)">
    ${['ChatGPT', 'Gemini', 'Claude', 'PPT', 'Excel', 'HWP'].map((tag, i) => `
      <g transform="translate(${i * 120}, 0)">
        <rect width="110" height="34" rx="17" fill="${WHITE}" opacity="0.12"/>
        <text x="55" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="${WHITE}" text-anchor="middle" opacity="0.9">${tag}</text>
      </g>
    `).join('')}
  </g>

  <!-- Bottom bar -->
  <rect x="0" y="${HEIGHT - 60}" width="${WIDTH}" height="60" fill="#0A2E0B" opacity="0.6"/>
  <text x="60" y="${HEIGHT - 28}" font-family="Arial, sans-serif" font-size="15" fill="#A5D6A7" font-weight="600">
    DreamIT Biz
  </text>
  <text x="200" y="${HEIGHT - 28}" font-family="Arial, sans-serif" font-size="14" fill="#81C784" opacity="0.7">
    university.dreamitbiz.com
  </text>
  <text x="${WIDTH - 60}" y="${HEIGHT - 28}" font-family="Arial, sans-serif" font-size="13" fill="#81C784" opacity="0.6" text-anchor="end">
    Designed by Ph.D Aebon Lee
  </text>
</svg>`;

async function generate() {
  await sharp(Buffer.from(svg))
    .png({ quality: 95 })
    .toFile(outputPath);
  console.log(`OG image generated: ${outputPath}`);
  console.log(`Size: 1200x630`);
}

generate().catch(console.error);
