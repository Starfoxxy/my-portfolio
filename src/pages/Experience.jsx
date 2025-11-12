import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "Prometheus",
    location: "Remote, NY",
    period: "2025 - Present",
    description: "Collaborating with Prometheus and the Teacher Accelerator Program (TAP) team to design and develop TAP's Events page, implementing dynamic filtering, responsive UI, and API integrations using Next.js, React, and Tailwind CSS.",
    highlights: [
      "Integrating HubSpot to manage event registrations and automate user engagement tracking, improving functionality and CRM data flow",
      "Engineering advanced event filtering and upcoming events functionality, ensuring full cross-browser and mobile compatibility while enhancing event discoverability, responsiveness, and accessibility"
    ],
    color: "#00ffff"
  },
  {
    title: "Innovation Fellowship - Web Development Track",
    company: "The Knowledge House",
    location: "Remote, NY",
    period: "2025 (900+ hrs)",
    description: "Completed intensive full-stack development training in JavaScript, TypeScript, React, Next.js, Node.js/Express, and databases (PostgreSQL, Prisma, SQLite). Built and deployed 5 production-ready applications.",
    highlights: [
      "Applied Agile/Scrum methodologies: daily standups, code reviews, PR workflows, and cross-functional collaboration using Jira, Notion, Slack",
      "Attended workshops by senior engineers from Google, Microsoft, and IBM on system design, scalable architecture, and cloud deployment (Vercel, Netlify)"
    ],
    color: "#00ff00"
  },
  {
    title: "Digital Strategy Lead",
    company: "ECHO5 Digital",
    location: "Remote, TX",
    period: "2023 - 2025",
    description: "Utilized Google Analytics to track, analyze, and report on website performance, identifying trends and key metrics to inform data-driven marketing strategies for 100+ clients.",
    highlights: [
      "Created and managed Google Ads campaigns, performing in-depth keyword research and bid management, resulting in a 20% increase in ROI within the first quarter",
      "Enhanced on-page SEO, optimizing meta descriptions, page titles, header tags, alt texts, and URL structures, leading to a 35% improvement in search rankings and a 40% increase in organic traffic",
      "Developed and executed targeted email marketing campaigns via Mailchimp and HubSpot, segmenting audiences and optimizing send times, resulting in a 15% increase in email open rates and a 10% boost in conversions"
    ],
    color: "#ff006e"
  },
  {
    title: "Office Manager",
    company: "Bashir MD PLLC",
    location: "Centereach, NY",
    period: "2021 - 2023",
    description: "Coordinated professional correspondence on behalf of doctor and specialists, negotiating partnership agreements and service contracts with leading medical technology companies.",
    highlights: [
      "Boosted profits 30% annually by leveraging HEDIS software through partnerships with Catholic Health",
      "Reduced patient wait time, referral processing, records retrieval, and medication approval time by 75% by designing new systems",
      "Processed and reviewed over 1,000 insurance claims using ICD codes, reducing errors by 20%",
      "Managed financial operations for a $5M budget, improving cash flow efficiency by 60%"
    ],
    color: "#ff00ff"
  },
  {
    title: "Archivist",
    company: "Algonquian Revitalization Project",
    location: "Stony Brook, NY",
    period: "2021 - 2022",
    description: "Supported recovery, preservation, and digitization of 500+ historical texts central to Algonquian language revitalization.",
    highlights: [
      "Recovered, cleaned, and preserved over 400 damaged historical texts, preventing 80% loss of archival materials",
      "Designed custom digital database cataloging 500+ resources, improving retrieval efficiency by 60%",
      "Contributed to 15% increase in community engagement through accessible materials"
    ],
    color: "#ff6b35"
  },
  {
    title: "Certified Medication Aide",
    company: "Young Adult Institute",
    location: "Medford, NY",
    period: "2019 - 2021",
    description: "Provided daily care for 8 adult residents with developmental and physical disabilities, administering medications and performing health assessments.",
    highlights: [
      "Managed seizures using VNS system, reducing intensity and duration in 90% of cases",
      "Maintained 100% accurate medical records ensuring seamless continuity of care",
      "Prepared meals tailored to dietary restrictions, reducing choking incidents by 25%",
      "Increased resident engagement by 50% through interactive enrichment activities"
    ],
    color: "#9900ff"
  },
  {
    title: "Community & Volunteer Engagement",
    company: "Various Programs & Organizations",
    location: "Stony Brook, NY / Local Community",
    period: "2014 - Present",
    description: "Actively engaged in community outreach, volunteer programs, and mentorship, contributing to education, social causes, and event support.",
    highlights: [
      <span className="text-gray-300 font-mono text-sm flex items-start gap-2">
        <span className="text-green-400 flex-shrink-0">▸</span>
        <span>
          <span className="text-cyan-400">Essay Mentor:</span> Guided aspiring healthcare professionals in gaining admission to <span className="text-pink-400">Master's</span> and <span className="text-pink-400">Nursing programs</span> through personalized coaching, editing, and strategic revision
        </span>
      </span>,
  
      <span className="text-gray-300 font-mono text-sm flex items-start gap-2">
        <span className="text-green-400 flex-shrink-0">▸</span>
        <span>
          <span className="text-cyan-400">Big Brother Big Sister Program:</span> Mentored youth at <span className="text-pink-400">Stony Brook University</span>, providing academic and personal guidance
        </span>
      </span>,
  
      <span className="text-gray-300 font-mono text-sm flex items-start gap-2">
        <span className="text-green-400 flex-shrink-0">▸</span>
        <span>
          <span className="text-cyan-400">International Peer Mentor:</span> Assisted new undergraduate international students in navigating university life, fostering cross-cultural connections
        </span>
      </span>,
  
      <span className="text-gray-300 font-mono text-sm flex items-start gap-2">
        <span className="text-green-400 flex-shrink-0">▸</span>
        <span>
          <span className="text-cyan-400">Campaigning & Community Outreach:</span> Conducted presentations, made calls, and went door-to-door to raise awareness for local initiatives
        </span>
      </span>,
  
      <span className="text-gray-300 font-mono text-sm flex items-start gap-2">
        <span className="text-green-400 flex-shrink-0">▸</span>
        <span>
          <span className="text-cyan-400">Special Olympics Volunteer:</span> Assisted with event setup, guided participants to stations, timed competitions, and ensured smooth operations
        </span>
      </span>,
  
      <span className="text-gray-300 font-mono text-sm flex items-start gap-2">
        <span className="text-green-400 flex-shrink-0">▸</span>
        <span>
          <span className="text-cyan-400">Helping Honduras & Thrift Shop Events:</span> Collected donations, tagged and sorted clothes, coordinated bake sales, and supported fundraising efforts via <span className="text-pink-400">onethousandschools.com</span>
        </span>
      </span>,
  
      <span className="text-gray-300 font-mono text-sm flex items-start gap-2">
        <span className="text-green-400 flex-shrink-0">▸</span>
        <span>
          <span className="text-cyan-400">Circle K Volunteering:</span> Prepared snack packs, lunches, and hygiene kits for homeless populations, wrote letters to veterans, coordinated toy drives and UNICEF donation boxes, and promoted mental health awareness via <span className="text-pink-400">circlek.org</span>
        </span>
      </span>,
  
      <span className="text-gray-300 font-mono text-sm flex items-start gap-2">
        <span className="text-green-400 flex-shrink-0">▸</span>
        <span>
          <span className="text-cyan-400">Community Cleanup:</span> Participated in environmental and camp cleanup initiatives to improve local spaces
        </span>
      </span>
    ],
    color: "#ccff00"
  }  
];

const education = [
  {
    school: "Stony Brook University",
    degree: "Bachelor of Arts",
    period: "Completed",
    details: "Major: Psychology | Minor: Linguistics",
    color: "#ff00ff",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-20 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #330066 0%, #ff006e 40%, #ff6b35 70%, #4d0099 100%)'
      }}
    >
      {/* Pixel grid */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: `
            linear-gradient(#ff00ff 1px, transparent 1px),
            linear-gradient(90deg, #ff00ff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          height: '100%'
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block border-4 border-pink-500 px-8 py-4"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              boxShadow: '0 0 30px rgba(255, 0, 110, 0.6)',
              clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
            }}
          >
            <h2 className="text-5xl font-extrabold text-white font-mono mb-2"
              style={{
                textShadow: '3px 3px 0 #ff006e'
              }}
            >
              [QUEST LOG]
            </h2>
            <p className="text-pink-400 font-mono text-sm">
              ▸ COMPLETED MISSIONS ▸
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 mb-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 border-l-4"
              style={{
                borderColor: exp.color
              }}
            >
              {/* Timeline dot - game level marker */}
              <div 
                className="absolute -left-4 top-0 w-8 h-8 border-4 flex items-center justify-center font-mono font-bold text-xs"
                style={{
                  borderColor: exp.color,
                  background: '#000',
                  color: exp.color,
                  clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
                }}
              >
                {i + 1}
              </div>

              <div className="border-4 bg-black p-6"
                style={{
                  borderColor: exp.color,
                  boxShadow: `0 0 20px ${exp.color}40, 0 6px 0 rgba(0, 0, 0, 0.5)`,
                  clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
                }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 border-b-2 pb-3"
                  style={{ borderColor: `${exp.color}40` }}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-white font-mono mb-1">{exp.title}</h3>
                    <p className="text-lg font-mono font-bold mb-1" style={{ color: exp.color }}>
                      {exp.company}
                    </p>
                    <p className="text-gray-500 text-sm font-mono">{exp.location}</p>
                  </div>
                  <div className="border-2 px-4 py-2 mt-2 md:mt-0"
                    style={{
                      borderColor: exp.color,
                      background: `${exp.color}20`,
                      clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'
                    }}
                  >
                    <span className="font-mono font-bold text-sm" style={{ color: exp.color }}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 font-mono text-sm">{exp.description}</p>

                {/* Highlights */}
                <div className="space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="font-mono mt-1" style={{ color: exp.color }}>▸</span>
                      <span className="text-gray-300 text-sm font-mono leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* XP bar */}
                <div className="mt-4 pt-4 border-t-2" style={{ borderColor: `${exp.color}40` }}>
                  <div className="h-3 bg-gray-900 border-2 border-gray-700 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full"
                      style={{
                        background: `linear-gradient(90deg, ${exp.color}, ${exp.color}80)`
                      }}
                    ></motion.div>
                  </div>
                  <p className="text-xs font-mono mt-1" style={{ color: exp.color }}>
                    EXPERIENCE GAINED: MAX
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education - Power-Up Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <div className="inline-block border-4 border-cyan-400 px-6 py-3"
              style={{
                background: 'rgba(0, 0, 0, 0.8)',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
              }}
            >
              <h3 className="text-3xl font-bold text-white font-mono"
                style={{ textShadow: '2px 2px 0 #00ffff' }}
              >
                [POWER-UPS]
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-4 bg-black p-6"
                style={{
                  borderColor: edu.color,
                  boxShadow: `0 0 20px ${i === 0 ? 'rgba(0, 255, 255, 0.3)' : 'rgba(255, 0, 255, 0.3)'}, 0 6px 0 rgba(0, 0, 0, 0.5)`,
                  clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-white font-mono">{edu.school}</h4>
                  <span className="text-xs font-mono px-2 py-1 border-2"
                    style={{
                      borderColor: edu.color ,
                      color: edu.color 
                    }}
                  >
                    {edu.period}
                  </span>
                </div>
                <p className="font-mono font-bold mb-2" style={{ color: edu.color }}>
                  {edu.degree}
                </p>
                <div className="space-y-2">
                  {edu.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-xs font-mono mt-1" style={{ color: edu.color }}>▸</span>
                      <span className="text-gray-300 text-sm font-mono leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}