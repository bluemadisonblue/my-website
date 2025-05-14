"use client";
import Image from 'next/image';

const experiences = [
  {
    company: 'ThinkFlow',
    logo: '/images/thinkflow-logo.png',
    logoLink: '',
    title: 'CEO & Founder',
    period: 'Apr 2025 - Present',
    location: 'London, United Kingdom',
    description: 'ThinkFlow is a web-based AI workflow builder for structured thinking, reflection, decision-making, journaling, and content processing.'
  },
  {
    company: 'YCX',
    logo: '/images/YCX.jpeg',
    logoLink: 'https://www.ycx.ai/',
    title: 'Artificial Intelligence Intern',
    period: 'Mar 2025 – Apr 2025',
    location: 'London, United Kingdom',
    description: 'Worked on algorithms and AI projects, gaining hands-on experience in a hybrid environment.'
  },
  {
    company: 'Upwork',
    logo: '/images/freelance.jpeg',
    logoLink: 'https://www.upwork.com/',
    title: 'Software Developer',
    period: 'Apr 2022 – Jun 2024',
    location: 'Atyrau, Kazakhstan (Remote)',
    description: 'Worked on various freelance software projects, focusing on web and mobile development.'
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-transparent">
      <section className="w-full max-w-2xl mx-auto flex flex-row items-center justify-between gap-6 mt-12 mb-8 px-4">
        <div className="flex-1 text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Hi, I&apos;m Enes <span className="inline-block align-middle">👋</span></h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-4 font-semibold">Software Engineer &amp; AI Enthusiast</p>
          <p className="text-sm italic text-gray-400 mb-2">Currently in 🇬🇧</p>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center">
        <Image
            src="/images/me.jpg"
            alt="Enes Talip Chelik"
            width={140}
            height={140}
            className="rounded-full object-cover border-2 border-gray-700"
          priority
        />
        </div>
      </section>

      <section className="w-full max-w-2xl mx-auto mb-8 px-4">
        <h2 className="text-2xl font-bold text-white mb-2">My Story</h2>
        <p className="text-gray-300 mb-2">
          I&apos;m a software engineer with several years of experience in mobile development, now focused on integrating artificial intelligence into product design to build solutions that can truly make a difference. Recently completed professional program from <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-white font-semibold underline hover:text-blue-300">Google</a>, where I deepened my expertise in mobile application development. I thrive in diverse, collaborative teams and constantly seek opportunities to grow — both as a developer and as a person.
        </p>
        <p className="text-blue-400 italic">&quot;Always learning, always building.&quot;</p>
      </section>

      <section className="w-full max-w-2xl mx-auto mb-8 px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.company + exp.title} className="flex items-start gap-4">
              {exp.logo ? (
                <a href={exp.logoLink || '#'} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <Image 
                    src={exp.logo} 
                    alt={exp.company} 
                    width={48} 
                    height={48} 
                    className="rounded-full object-contain"
                    onError={(e) => {
                      console.error(`Error loading image for ${exp.company}:`, e);
                      e.currentTarget.src = '/images/freelance.jpeg'; // Fallback image
                    }}
                  />
                </a>
              ) : (
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {exp.company[0]}
                </div>
              )}
              <div className="flex-1">
                <div className="w-full text-left font-semibold text-white text-lg flex items-center gap-2 py-1 px-0 rounded">
                  <span>{exp.company}</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-400 text-sm mt-1">
                  <span className="font-medium text-gray-300">{exp.title}</span>
                  <span className="text-gray-500">|</span>
                  <span>{exp.period}</span>
                  <span className="text-gray-500">|</span>
                  <span>{exp.location}</span>
                </div>
                <div className="text-gray-300 text-base leading-relaxed mt-2">
                  {exp.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-2xl mx-auto mb-8 px-4">
        <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <a href="https://www.birmingham.ac.uk/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/university.jpg" alt="University of Birmingham" width={56} height={56} className="rounded-full object-cover border-2 border-gray-700" />
            </a>
            <div className="flex-1">
              <div className="font-semibold text-white">University of Birmingham</div>
              <div className="text-gray-400 text-sm">BSc AI and Computer Science • Sep 2024 – Jun 2028</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.nis.edu.kz/en/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/school.jpg" alt="Nazarbayev Intellectual Schools" width={56} height={56} className="rounded-full object-cover border-2 border-gray-700" />
            </a>
            <div className="flex-1">
              <div className="font-semibold text-white">Nazarbayev Intellectual Schools</div>
              <div className="text-gray-400 text-sm">High School Diploma • Sep 2018 – May 2024</div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-2xl mx-auto mb-24 px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Let&apos;s Connect</h2>
        <p className="text-gray-300 mb-4">Feel free to reach out via any platform below!</p>
        <div className="flex justify-center gap-6">
          <a href="https://t.me/tyuiqak" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-2xl" aria-label="Telegram">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" />
            </svg>
          </a>
          <a href="https://uk.linkedin.com/in/enes-talip-chelik-7b27bb242" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-2xl" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          </a>
          <a href="https://github.com/bluemadisonblue" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-2xl" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.563.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
