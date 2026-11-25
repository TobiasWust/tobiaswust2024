import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import { Project, screenshotCrop } from '../data/projects';
import ProjectPlaceholder from './ProjectPlaceholder';

// a screenshot starting with "/" is a local file in public/ (already 5:3); anything else is a Cloudinary id
// src picks one of the project's images (default: the first one)
export default function ProjectScreenshot({
  project,
  src = project.screenshot,
  alt = project.label,
  draggable,
}: {
  project: Project;
  src?: string;
  alt?: string;
  draggable?: boolean;
}) {
  if (!src) return <ProjectPlaceholder label={project.label} />;

  if (src.startsWith('/')) {
    return (
      <Image
        src={src}
        width={500}
        height={300}
        sizes='(max-width: 700px) 100vw, 600px'
        alt={alt}
        draggable={draggable}
      />
    );
  }

  return (
    <CldImage
      src={src}
      width='500'
      height='300'
      alt={alt}
      draggable={draggable}
      crop={screenshotCrop(project)}
    />
  );
}
