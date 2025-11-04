"use client";
import React from "react";
import Image from "next/image";
// import  profile from "../public/profile.jpeg";
export default function PortfolioPage() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // place your resume in public/
    link.download = "Mohammed_Sahir_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-slate-50 to-white text-slate-900 antialiased">
      {/* HEADER */}
      <header className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-4 min-w-[240px]">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200">
            <Image
              src={require("/profile.jpeg")}
              alt="Mohammed Sahir"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Mohammed Sahir
            </h1>
            <p className="text-sm text-slate-600">
              Frontend / MERN Stack Developer • React.js Specialist • Team Lead
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-4 mt-4 sm:mt-0">
          <a href="#projects" className="text-sm hover:underline">
            Projects
          </a>
          <a href="#skills" className="text-sm hover:underline">
            Skills
          </a>
          <a href="#experience" className="text-sm hover:underline">
            Experience
          </a>
          <a
            href="#contact"
            className="text-sm border border-amber-600 px-3 py-1 rounded-md text-amber-600 hover:bg-amber-50"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center my-6 sm:my-10">
          <div className="lg:col-span-2">
            <p className="text-sm text-amber-600 font-semibold">
              MERN • React • Node • AWS • Azure • CI/CD
            </p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-extrabold leading-tight">
              I build fast, scalable web experiences for enterprise products.
            </h2>
            <p className="mt-4 text-lg text-slate-700">
              Results-oriented MERN Stack Developer with 6+ years of experience
              creating high-performance, cloud-native applications. Delivered
              performance improvements up to <strong>40%</strong> and accelerated
              release cycles by <strong>50%</strong> through platform
              architecture, reusable UI systems, and CI/CD automation.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={handleDownloadResume}
                className="inline-block bg-amber-600 text-white px-5 py-3 rounded-lg font-medium shadow hover:shadow-lg"
              >
                Download Resume (PDF)
              </button>
              <a
                href="#contact"
                className="inline-block border border-amber-600 text-amber-600 px-5 py-3 rounded-lg font-medium hover:bg-amber-50"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat label="Years" value="6+" />
              <Stat label="Enterprise Clients" value="3+" />
              <Stat label="Deploy Speed" value="50% faster" />
              <Stat label="Performance" value="40% improvement" />
            </div>
          </div>

          {/* CONTACT SIDE CARD */}
          <div className="hidden lg:block bg-white rounded-2xl p-6 shadow-md border border-slate-100">
            <div className="bg-gradient-to-tr from-sky-50 to-white rounded-xl p-6 break-all">
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border border-slate-200 mb-4">
                <Image
                 src={("/profile.jpeg")}
                  alt="Mohammed Sahir"
                  fill
                  className="object-cover"
                  sizes="96px"
                  priority
                />
              </div>
              <h3 className="text-lg font-semibold text-center">
                Mohammed Sahir
              </h3>
              <p className="text-sm text-slate-600 text-center">
                Delhi, India
              </p>
              <p className="text-sm text-slate-600 text-center mt-1">
                +91 9318304518
              </p>
              <a
                className="text-sm text-amber-600 mt-2 inline-block text-center w-full break-all"
                href="mailto:sahir.engg@gmail.com"
              >
                sahir.engg@gmail.com
              </a>

              <div className="mt-4 text-center">
                <a href="#projects" className="text-xs text-slate-500">
                  View Projects →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="my-10 sm:my-12">
          <h3 className="text-2xl font-bold">Selected Projects</h3>
          <p className="text-slate-600 mt-2">
            Enterprise-grade solutions with measurable impact, cloud scalability
            and clean UI architecture.
          </p>

          <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
            <ProjectCard
              title="Coca-Cola – Audience Library (Infosys)"
              tech="React, Node.js, Express.js, Azure Functions, Cosmos DB, Contentful, AWS RDS"
              summary="Developed a marketing automation and content platform for Coca-Cola’s marketing team to plan personalized campaigns, track referrals, and manage brand tie-ups."
              metrics={[
                "35% faster content publishing",
                "Reusable UI components",
                "Blue/Green deployments",
              ]}
            />

            <ProjectCard
              title="Axis Bank – Retail Services Dashboard (Xebia)"
              tech="React, Node.js, AWS Lambda, CloudFormation, Apigee, Splunk"
              summary="Developed a real-time incident management dashboard for Axis Bank’s support teams."
              metrics={[
                "45% reduction in triage time",
                "50% higher productivity",
                "Real-time monitoring dashboards",
              ]}
            />

            <ProjectCard
              title="Flying Colors – B2B Real Estate Platform (All Web Solutions)"
              tech="React, Redux, Node.js, Express, Apigee, Material UI"
              summary="Led frontend development for a 10k+ user B2B real estate marketplace."
              metrics={[
                "30% faster UI rendering",
                "25% reduced code duplication",
                "Team leadership (5 developers)",
              ]}
            />

            <ProjectCard
              title="Godrej Interio – E-commerce Storefront (Solveda India)"
              tech="React.js, Node.js, MongoDB"
              summary="Developed a responsive e-commerce platform for furniture and home products."
              metrics={[
                "25% faster checkout",
                "Refactored APIs",
                "Unit-tested flows",
              ]}
            />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="my-10 sm:my-12">
          <h3 className="text-2xl font-bold">Core Skills</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              "React.js",
              "Next.js",
              "Redux Toolkit",
              "TypeScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "PostgreSQL",
              "AWS",
              "Azure",
              "Docker",
              "CI/CD (Bamboo/GitLab/Jenkins)",
            ].map((s) => (
              <span
                key={s}
                className="inline-flex items-center justify-center text-center px-3 py-2 bg-white border border-slate-100 rounded-md text-sm font-medium shadow-sm break-all whitespace-normal leading-tight"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <SkillProgress name="Frontend Performance" percent={90} />
            <SkillProgress name="API Design & Scalability" percent={85} />
            <SkillProgress name="CI/CD & Cloud Ops" percent={80} />
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="my-10 sm:my-12">
          <h3 className="text-2xl font-bold">Experience</h3>

          <TimelineItem
            yearRange="2023 – Present"
            title="Technology Lead, Infosys"
            description="Led frontend & backend initiatives for Coca-Cola and Microsoft projects."
          />
          <TimelineItem
            yearRange="2022 – 2023"
            title="Frontend Lead, All Web Solutions"
            description="Handled complete frontend delivery and client interactions for Flying Colors B2B platform."
          />
          <TimelineItem
            yearRange="2019 – 2022"
            title="Consultant, Xebia"
            description="Developed monitoring dashboards for Axis Bank, automated incident triaging, and improved support productivity."
          />
          <TimelineItem
            yearRange="2018 – 2019"
            title="MERN Developer, Solveda"
            description="Built optimized React.js storefront for Godrej Interio."
          />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="my-10 sm:my-12 bg-gradient-to-r from-slate-50 to-white p-6 sm:p-8 rounded-2xl border border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="break-all">
              <h3 className="text-2xl font-bold">Let's build something great</h3>
              <p className="mt-2 text-slate-600">
                I'm available for senior frontend, MERN stack, and team lead
                roles. Open to remote and EU relocation.
              </p>

              <ul className="mt-4 text-sm space-y-2 text-slate-700">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    className="text-amber-600 break-all"
                    href="mailto:sahir.engg@gmail.com"
                  >
                    sahir.engg@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +91 9318304518
                </li>
                <li>
                  <strong>Location:</strong> Delhi, India • Open to EU relocation
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:sahir.engg@gmail.com?subject=Opportunity"
                  className="inline-block bg-amber-600 text-white px-4 py-2 rounded-md"
                >
                  Email Me
                </a>
                <button
                  onClick={handleDownloadResume}
                  className="inline-block border border-amber-600 text-amber-600 px-4 py-2 rounded-md"
                >
                  Download Resume
                </button>
              </div>
            </div>

            {/* CONTACT FORM */}
            <form className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <label className="block text-sm font-medium">Name</label>
              <input
                className="mt-1 block w-full rounded-md border-slate-200 p-2 text-sm"
                placeholder="Your name"
              />
              <label className="block text-sm font-medium mt-3">Email</label>
              <input
                className="mt-1 block w-full rounded-md border-slate-200 p-2 text-sm"
                placeholder="you@company.com"
              />
              <label className="block text-sm font-medium mt-3">Message</label>
              <textarea
                className="mt-1 block w-full rounded-md border-slate-200 p-2 text-sm h-24 resize-none"
                placeholder="A short message..."
              />
              <div className="mt-4 text-right">
                <button
                  type="button"
                  className="bg-amber-600 text-white px-4 py-2 rounded-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center text-sm text-slate-500 space-y-2">
          <div>
            © {new Date().getFullYear()} Crafted with precision and passion by
            Mohammed Sahir — Frontend Developer
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-amber-600">
            <a
              href="https://www.linkedin.com/in/mohammad-sahir-956a52b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-all"
            >
              🔗 LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ---------- Reusable Components ---------- */
function Stat({ label, value }) {
  return (
    <div className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm text-center break-words">
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}

function ProjectCard({ title, tech, summary, metrics = [] }) {
  return (
    <article className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition text-left break-words">
      <h4 className="text-lg font-semibold break-all">{title}</h4>
      <div className="text-xs text-slate-500 mt-1 break-all">{tech}</div>
      <p className="mt-3 text-slate-700 text-sm leading-relaxed whitespace-normal break-words">
        {summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {metrics.map((m) => (
          <span
            key={m}
            className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs border border-amber-100 break-all whitespace-normal"
          >
            {m}
          </span>
        ))}
      </div>
    </article>
  );
}

function SkillProgress({ name, percent }) {
  return (
    <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium break-all whitespace-normal">
          {name}
        </div>
        <div className="text-xs text-slate-500">{percent}%</div>
      </div>
      <div className="mt-3 bg-slate-100 rounded-full h-2 overflow-hidden">
        <div
          className="h-2 rounded-full bg-amber-600"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function TimelineItem({ yearRange, title, description }) {
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      <div className="w-28 text-xs text-slate-500 shrink-0">{yearRange}</div>
      <div className="flex-1 min-w-[250px] break-all whitespace-normal">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-sm text-slate-600 mt-1 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}
