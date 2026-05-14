import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSass,
  SiNextdotjs,
  SiRedux,
  SiEslint,
  SiVite,
  SiGraphql,
  SiJest,
  SiGit,
  SiFigma,
  SiJira,
  SiClaude,
  SiReactrouter,
  SiNpm,
  SiNewrelic,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import styles from './TechSkills.module.css';

function TechSkills() {
  const skills: { name: string; icon: IconType }[] = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'React', icon: SiReact },
    { name: 'Redux', icon: SiRedux },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'Git', icon: SiGit },

    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Vite', icon: SiVite },
    { name: 'ESLint', icon: SiEslint },
    { name: 'Claude Code', icon: SiClaude },
    { name: 'CSS3', icon: SiCss },
    { name: 'React Router', icon: SiReactrouter },

    { name: 'HTML5', icon: SiHtml5 },
    { name: 'npm', icon: SiNpm },
    { name: 'Figma', icon: SiFigma },
    { name: 'Jira', icon: SiJira },
    { name: 'Jest', icon: SiJest },
    { name: 'Sass', icon: SiSass },
    { name: 'New Relic', icon: SiNewrelic },
  ];

  return (
    <>
      <h2 className="text-center text-3xl pb-5">Technical Skills</h2>
      <ul className={`${styles.grid} grid grid-cols-10 lg:grid-cols-14 gap-2 pr-5 pl-5`}>
        {skills.map(({ name, icon: Icon }) => (
          <li key={name} className="flex flex-col items-center gap-1">
            <Icon className="w-10 h-10 text-light-blue" />
            <p className="text-sm text-center">{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TechSkills;
