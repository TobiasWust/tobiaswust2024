import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import { Project, screenshotCrop } from '../data/projects';
import ProjectPlaceholder from './ProjectPlaceholder';

// a screenshot starting with "/" is a local file in public/ (already 5:3); anything else is a Cloudinary id
export default function ProjectScreenshot({ project, draggable }: { project: Project; draggable?: boolean }) {
  if (!project.screenshot) return <ProjectPlaceholder label={project.label} />;

  if (project.screenshot.startsWith('/')) {
    return (
      <Image
        src={project.screenshot}
        width={500}
        height={300}
        sizes='(max-width: 700px) 100vw, 600px'
        alt={project.label}
        draggable={draggable}
      />
    );
  }

  return (
    <CldImage
      src={project.screenshot}
      width='500'
      height='300'
      alt={project.label}
      draggable={draggable}
      crop={screenshotCrop(project)}
    />
  );
}
