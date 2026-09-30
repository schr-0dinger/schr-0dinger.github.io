// All site content lives here. Edit this file to update the portfolio.

export const person = {
  name: 'Dr Kailas Nath K M',
  shortName: 'Kailas Nath',
  role: 'Doctor building medical-education technology',
  location: 'Kozhikode, Kerala',
  email: 'kmkailasnath@gmail.com',
  site: 'https://schr-0dinger.github.io',
  description:
    'Dr Kailas Nath K M — MBBS doctor with three years of clinical work in Kerala, now building medical-education technology. CTO at MedMust.',
};

export const links = {
  github: 'https://github.com/schr-0dinger',
  linkedin: 'https://www.linkedin.com/in/dr-kailas-nath-146b81156/',
  youtube: 'https://www.youtube.com/@kmkailasnath',
  ecgPlaylist: 'https://www.youtube.com/playlist?list=PLeUjIoiLXiH7t8jqikVFqfA1JdEi8d8qU',
  medmust: 'https://medmust.in',
};

export const about = [
  'I am an MBBS doctor with three years of clinical work in Kerala — internship, a nephrology residency and two medical officer posts in public hospitals. Along the way I kept writing code, and I now work where the two meet: tools that help medical students learn.',
  'I teach ECG interpretation in Malayalam on YouTube, check AI-generated medical content for accuracy, and build software in Python and on the web. I am an AHA-certified BLS and ACLS provider.',
];

export const facts = [
  { value: '3 yrs', label: 'Clinical work in Kerala' },
  { value: 'MBBS', label: 'KUHS, 2022' },
  { value: 'CTO', label: 'MedMust, since 2026' },
];

export type Role = {
  title: string;
  org: string;
  orgUrl?: string;
  dates?: string;
  summary?: string;
  points?: string[];
};

export const experience: Role[] = [
  {
    title: 'Chief Technology Officer',
    org: 'MedMust',
    orgUrl: links.medmust,
    dates: '2026 – Present',
    summary: 'Handle the technical side of an upcoming medical-education platform.',
  },
  {
    title: 'Product Contributor (part-time)',
    org: 'GalenAI',
    points: [
      'Used the AI Tutor the way a student would and reported wrong answers, bugs and confusing screens to the team.',
      'Checked AI Tutor answers and flashcards for medical accuracy.',
      'Helped design the Flashcards section and suggested features for the AI Tutor.',
    ],
  },
];

export type Project = {
  name: string;
  kind: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  stars?: number;
  status?: string;
};

export const projects: Project[] = [
  {
    name: 'ECG Image Analyzer',
    kind: 'Medical imaging',
    status: 'Work in progress',
    description:
      'Reads scanned ECG images, straightens them, finds the grid, extracts the trace and estimates heart rate from R peaks.',
    tags: ['Python', 'OpenCV', 'Signal processing'],
    links: [{ label: 'Source', href: 'https://github.com/schr-0dinger/ECG-Image-Analyzer' }],
  },
  {
    name: 'ECG Interpretation Made Easy',
    kind: 'Teaching',
    description: 'Video series in Malayalam that teaches ECG reading step by step.',
    tags: ['YouTube', 'Malayalam', 'Cardiology'],
    links: [{ label: 'Watch playlist', href: links.ecgPlaylist }],
  },
  {
    name: 'Project Ahnali',
    kind: 'Compiler',
    status: 'Work in progress',
    description:
      'A restricted Python-like DSL that compiles straight to Smali bytecode and a signed APK — no Java, Kotlin or Gradle.',
    tags: ['Python', 'Android', 'Smali'],
    links: [{ label: 'Source', href: 'https://github.com/schr-0dinger/ProjectAhnali' }],
  },
  {
    name: 'Android & Linux',
    kind: 'Systems hobby',
    description:
      'Kernel and device-tree work for the Galaxy A9 2018, a TWRP recovery port for the Mi Max 2, and IMS patches for older Samsung phones.',
    tags: ['C', 'Linux kernel', 'AOSP'],
    links: [
      { label: 'IMS patches', href: 'https://github.com/schr-0dinger/samsung-ims-patches' },
      { label: 'Device tree', href: 'https://github.com/schr-0dinger/android_device_samsung_a9y18qlte' },
    ],
  },
  {
    name: 'Informed Consents in Malayalam',
    kind: 'Patient education',
    description:
      'Plain-language consent documents for medical and surgical procedures, written in Malayalam for patients.',
    tags: ['HTML', 'Malayalam'],
    links: [
      { label: 'Open site', href: 'https://schr-0dinger.github.io/informed-consents/' },
      { label: 'Source', href: 'https://github.com/schr-0dinger/informed-consents' },
    ],
  },
  {
    name: 'Edge TTS GUI',
    kind: 'Desktop app',
    description:
      'Desktop app for text-to-speech with voice, rate, pitch and volume controls, preview and export.',
    tags: ['Python', 'CustomTkinter'],
    stars: 26,
    links: [{ label: 'Source', href: 'https://github.com/schr-0dinger/edge_tts_gui' }],
  },
];

export const moreProjects = [
  {
    name: 'Google Dialer Mod',
    description: 'Magisk module that enables call recording in Google Dialer on custom ROMs.',
    href: 'https://github.com/schr-0dinger/google_dialer_mod',
    stars: 22,
  },
  {
    name: 'Noto',
    description: 'Minimal focus timer that tracks study hours with levels and streaks.',
    href: 'https://github.com/schr-0dinger/Noto',
  },
  {
    name: 'Moe',
    description: 'Terminal clock, written to learn Rust.',
    href: 'https://github.com/schr-0dinger/Moe',
  },
];

export const clinical: Role[] = [
  { title: 'Medical Officer', org: 'National Health Mission, Kozhikode', dates: 'Jun 2025 – Dec 2025' },
  { title: 'Medical Officer', org: 'Taluk Headquarters Hospital, Thamarassery', dates: 'May 2025 – Jun 2025' },
  {
    title: 'Junior Resident, Nephrology',
    org: 'KMCT Medical College Hospital, Kozhikode',
    dates: 'Jan 2024 – Jul 2024',
  },
  { title: 'House Surgeon (Internship)', org: 'Azeezia Medical College, Kollam', dates: 'Dec 2022 – Dec 2023' },
];

export const skills = [
  { group: 'Programming', items: ['Python', 'JavaScript', 'HTML/CSS', 'React', 'Next.js', 'Firebase'] },
  { group: 'Tools', items: ['Git', 'Linux', 'VS Code', 'AI coding assistants'] },
  { group: 'Clinical', items: ['ECG interpretation', 'Emergency care', 'Primary care', 'Nephrology'] },
];

export const education = [
  {
    title: 'MBBS',
    org: 'Azeezia Institute of Medical Sciences and Research, Kollam (KUHS)',
    dates: '2017 – 2022',
  },
  { title: 'ACLS and BLS Provider', org: 'American Heart Association' },
];

export const languages = ['English', 'Malayalam'];
