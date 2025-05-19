import {RevealOnScroll} from '../RevealOnScroll'
export const About = () => {
  const frontendSkills = ["Html", "Css", "React", "JavaScript"];
  const backendSills = ["Python", "MongoDB", "PHP"];
  const otherSkills = ["Teaching", "Educational Robotics"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
          <p className="text-gray-300 mb-6">
            Passionate, dedicated, and inquisitive, I’m Juan Diego. My love for
            technology and steadfast belief in the power of continuous learning
            guide my professional journey. I constantly strive to reach new
            horizons—personally and professionally—cultivating my skills and
            knowledge to add value to every project. My persistence and knack
            for finding effective solutions drive my performance in any setting.
            With a clear vision and unwavering commitment, I’m ready to tackle
            challenges and achieve even greater goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px-rgba(59,130,2246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px-rgba(59,130,246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px-rgba(59,130,2246,0.2)] transition
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 ">🎓 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ">
              <li>
                <strong>Systems Technician</strong> - SENA (Servicio Nacional de
                Aprendizaje) (2019-2020)
              </li>
              <li>
                <strong>Software Analysis and Development Technologist</strong>{" "}
                - SENA (Servicio Nacional de Aprendizaje) (2023-2025)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4 ">💼 Work Experience</h3>
            <div className="space-y-4 text-gray-300 ">
              <div>
                <h4 className="font-semibold">
                  Technical Support Specialist - Procesos y Servicios (PYS)
                  (August until February - 2025)
                </h4>
                <p>
                  Managed over 600 support tickets and 100–200 equipment repairs
                  monthly, optimizing processes and documentation while ensuring
                  system stability.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  ANALISTA NOC (NETWORK OPERATION CENTER) - Gopass (January
                  until May - 2024)
                </h4>
                <p>
                  Monitored network and application servers in real time,
                  generated performance graphs, gathered live readings via
                  Remote/Putty, and leveraged Zebra and Zabbix to quickly detect
                  and resolve issues.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  IT Support Specialist - JMV Construktora (May until August -
                  2024)
                </h4>
                <p>
                  Implemented GLPI for IT inventory, built VPN and PBX
                  infrastructure, created backup and remote-management
                  protocols, ensured system reliability with proactive
                  maintenance, and provided onsite support to many 200
                  employees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
