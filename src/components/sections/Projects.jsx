import {RevealOnScroll} from '../RevealOnScroll'
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        {/* Grid contenedor para los proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Proyecto 1: Oscar 2.0 - AI Educational Robot */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Oscar 2.0 - AI Educational Robot</h3>
            <p className="text-gray-400 mb-4">
              Developed Oscar 2.0, an advanced AI-powered educational robot recognized by
              Microsoft Mentor Schools LATAM. Integrated natural language processing for
              interactive student–teacher conversations, system for projecting interactive
              lessons, and a user-friendly interface for seamless classroom integration.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['AI', 'NLP', 'React', 'Projection'].map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="https://www.youtube.com/watch?v=1FYU6BhAkuI"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Project →
            </a>
          </div>

          {/* Proyecto 2: Kinect-Based Adaptive Learning */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(16,185,129,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Kinect-Based Adaptive Learning</h3>
            <p className="text-gray-400 mb-4">
              Led the development of a Kinect-based interactive learning system for students with
              special needs. Modified source code to create accessible interfaces, designed
              gamified experiences, and achieved measurable improvements in engagement and outcomes.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Kinect', 'Accessibility', 'Gamification'].map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
              View Project →
            </a>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
