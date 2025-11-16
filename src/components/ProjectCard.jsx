import { Github, ExternalLink, Bluetooth } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div
      className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
      style={{ backgroundColor: '#ffffff', height: '100%' }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-52">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Project Info */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="font-bold mb-2"
          style={{ color: '#0f172a', fontSize: '1.25rem' }}
        >
          {project.title}
        </h3>

        <p
          className="mb-4 flex-grow"
          style={{ color: '#475569', fontSize: '0.95rem' }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="font-medium  rounded"
              style={{
                backgroundColor: '#38bdf8' ,
                color: 'white',
                fontSize: '0.8rem',
                padding: '0.25rem 0.5rem',
                
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-3 items-center mt-auto">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:scale-125 transition-all"
              style={{ color: '#334155' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github size={20} />
            </a>
          ) : (
            <span
              className="p-2 text-sm font-medium"
              style={{ color: '#9ca3af' }}
              title="GitHub Coming Soon"
            >
              N/A
            </span>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:scale-125  transition-all"
              style={{ color: 'blue' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#334155')}
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
