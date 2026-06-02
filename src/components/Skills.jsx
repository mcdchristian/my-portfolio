import React from 'react'
import { SiNodedotjs, SiNestjs, SiExpress, SiTypescript, SiPostgresql, SiMysql, SiDocker, SiJest, SiGraphql, SiSwagger, SiSocketdotio, SiGithubactions, SiLinux } from 'react-icons/si'
import { FiLock, FiDatabase } from 'react-icons/fi'

const skills = [
  { name: 'Node.js', level: 'Expert', icon: <SiNodedotjs />, color: '#83CD29' },
  { name: 'NestJS', level: 'Expert', icon: <SiNestjs />, color: '#E0234E' },
  { name: 'Express.js', level: 'Expert', icon: <SiExpress />, color: '#000000' },
  { name: 'TypeScript', level: 'Expert', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'PostgreSQL', level: 'Expert', icon: <SiPostgresql />, color: '#336791' },
  { name: 'MySQL', level: 'Avancé', icon: <SiMysql />, color: '#00758F' },
  { name: 'TypeORM', level: 'Expert', icon: <FiDatabase />, color: '#0EA5A4' },
  { name: 'JWT / OAuth2', level: 'Expert', icon: <FiLock />, color: '#F59E0B' },
  { name: 'Docker', level: 'Avancé', icon: <SiDocker />, color: '#2496ED' },
  { name: 'Jest', level: 'Avancé', icon: <SiJest />, color: '#C21361' },
  { name: 'REST API', level: 'Expert', icon: <SiGithubactions />, color: '#4F8EF7' },
  { name: 'GraphQL', level: 'Intermédiaire', icon: <SiGraphql />, color: '#E10098' },
  { name: 'CI/CD', level: 'Avancé', icon: <SiGithubactions />, color: '#2088FF' },
  { name: 'Linux', level: 'Avancé', icon: <SiLinux />, color: '#FCC624' },
  { name: 'Swagger', level: 'Expert', icon: <SiSwagger />, color: '#85EA2D' },
  { name: 'WebSockets', level: 'Avancé', icon: <SiSocketdotio />, color: '#4FC3F7' },
]

export default function Skills(){
  const levelClass = (lvl) => {
    if(lvl.toLowerCase().includes('expert')) return 'level-expert'
    if(lvl.toLowerCase().includes('avancé')) return 'level-advanced'
    return 'level-intermediate'
  }

  return (
    <div className="skills-grid">
      {skills.map(s => (
        <div className="skill-card" key={s.name}>
          <span className="skill-icon">{React.cloneElement(s.icon, { size:28, color: s.color || 'currentColor' })}</span>
          <div className="skill-name">{s.name}</div>
          <span className={`skill-level ${levelClass(s.level)}`}>{s.level}</span>
        </div>
      ))}
    </div>
  )
}
