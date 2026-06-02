import React from 'react'
import Skills from './components/Skills'

export default function App(){
  return (
    <>
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <nav>
        <a href="#home" className="nav-logo">Del'or<span>.</span></a>
        <ul className="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#skills">Compétences</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#experience">Expérience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="mailto:mutalikodelor@gmail.com" className="nav-cta">Me contacter</a>
      </nav>

      <section id="home">
        <div className="hero-badge">Disponible pour des projets freelance & CDI</div>
        <h1 className="hero-name">CIBINDA<br/>MUTALIKO <span>Del'or</span></h1>
        <p className="hero-title">Backend Developer</p>
        <p className="hero-desc">Je conçois des APIs robustes, des architectures scalables et des systèmes backend
        haute performance — construits pour durer et pensés pour la croissance.</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn-ghost">Me contacter</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com" className="social-link" target="_blank" rel="noreferrer"> 
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
          <a href="https://linkedin.com" className="social-link" target="_blank" rel="noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:mutalikodelor@gmail.com" className="social-link">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            mutalikodelor@gmail.com
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat"><span className="stat-num">3<span>+</span></span><span className="stat-label">Années d'expérience</span></div>
          <div className="stat"><span className="stat-num">10<span>+</span></span><span className="stat-label">Projets livrés</span></div>
          <div className="stat"><span className="stat-num">3</span><span className="stat-label">Langues parlées</span></div>
          <div className="stat"><span className="stat-num">80<span>%+</span></span><span className="stat-label">Couverture de tests</span></div>
        </div>
      </section>

      <section id="about">
        <div className="sec-header">
          <span className="sec-tag">// 01. about</span>
          <h2 className="sec-title">À propos de moi</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>Je suis <strong>Cibinda Mutaliko Del'or</strong>, développeur backend basé entre <strong>Kigali (Rwanda)</strong> et <strong>Bukavu (RDC)</strong>, avec plus de 3 ans d'expérience dans la conception de systèmes backend robustes et d'APIs haute performance.</p>
            <p>Spécialisé dans l'écosystème <strong>Node.js</strong> (Express.js, NestJS) et <strong>TypeScript</strong>, je conçois des architectures propres, sécurisées et testées — en suivant les principes <strong>SOLID, Clean Architecture</strong> et les bonnes pratiques DevOps.</p>
            <p>Diplômé en Ingénierie des Télécommunications à l'<strong>Université Espoir d'Afrique</strong> (Bujumbura), j'ai développé une solide expertise en bases de données relationnelles, authentification JWT/OAuth2 et microservices.</p>
            <p>Trilingue <strong>(Anglais, Français, Swahili)</strong>, je m'adapte facilement à des équipes internationales et des environnements remote.</p>
          </div>

          <div className="about-card">
            <div className="about-info-item">
              <div className="info-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
              <div><div className="info-label">Localisation</div><div className="info-val">Kigali, Rwanda / Bukavu, RDC</div></div>
            </div>
            <div className="about-info-item">
              <div className="info-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
              <div><div className="info-label">Disponibilité</div><div className="info-val">Freelance & CDI — Remote OK</div></div>
            </div>
            <div className="about-info-item">
              <div className="info-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg></div>
              <div><div className="info-label">Formation</div><div className="info-val">Licence — Ingénierie Télécoms, 2025</div></div>
            </div>
            <div className="about-info-item">
              <div className="info-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg></div>
              <div><div className="info-label">Langues</div><div className="info-val">Swahili • Anglais (B2/C1) • Français</div></div>
            </div>
            <div className="about-info-item">
              <div className="info-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
              <div><div className="info-label">Email</div><div className="info-val">mutalikodelor@gmail.com</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="sec-header">
          <span className="sec-tag">// 02. skills</span>
          <h2 className="sec-title">Compétences</h2>
          <p className="sec-sub">Les technologies et outils avec lesquels je travaille au quotidien</p>
        </div>

        <Skills />

      </section>

      <section id="projects">
        <div className="sec-header">
          <span className="sec-tag">// 03. projects</span>
          <h2 className="sec-title">Projets</h2>
          <p className="sec-sub">Projets sélectionnés démontrant des solutions backend bien architecturées</p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-header">
              <div className="project-icon">🔐</div>
              <div className="project-links">
                <a href="#" className="project-link" title="GitHub"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></a>
              </div>
            </div>
            <h3 className="project-title">API Auth & User Management</h3>
            <p className="project-desc">Système complet d'authentification multi-rôles avec inscription, login, refresh tokens, gestion des sessions et protection des routes. Documentation Swagger complète.</p>
            <div className="project-tags">
              <span className="tag">NestJS</span><span className="tag">TypeScript</span>
              <span className="tag">PostgreSQL</span><span className="tag">JWT</span><span className="tag">Swagger</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-icon">🛒</div>
              <div className="project-links">
                <a href="#" className="project-link" title="GitHub"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></a>
              </div>
            </div>
            <h3 className="project-title">E-Commerce REST API</h3>
            <p className="project-desc">Backend complet pour une boutique en ligne : catalogue produits, commandes, panier, paiements Stripe et notifications. Requêtes optimisées pour 10 000+ produits.</p>
            <div className="project-tags">
              <span className="tag">Express.js</span><span className="tag">MySQL</span>
              <span className="tag">Sequelize</span><span className="tag">Stripe</span><span className="tag">JWT</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-icon">🏢</div>
              <div className="project-links">
                <a href="#" className="project-link" title="GitHub"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></a>
              </div>
            </div>
            <h3 className="project-title">ERP Interne (Gestion)</h3>
            <p className="project-desc">Backend modulaire pour la gestion des employés, des congés et des rapports. Architecture Clean Architecture avec séparation claire des responsabilités selon SOLID.</p>
            <div className="project-tags">
              <span className="tag">NestJS</span><span className="tag">TypeORM</span>
              <span className="tag">PostgreSQL</span><span className="tag">Clean Arch</span>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <div className="project-icon">⚙️</div>
              <div className="project-links">
                <a href="#" className="project-link" title="GitHub"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></a>
              </div>
            </div>
            <h3 className="project-title">Portfolio Admin Panel</h3>
            <p className="project-desc">Panel d'administration complet pour site vitrine avec gestion des projets, services, articles et messages. API REST sécurisée avec auth JWT et migrations PostgreSQL.</p>
            <div className="project-tags">
              <span className="tag">Express.js</span><span className="tag">PostgreSQL</span>
              <span className="tag">JWT</span><span className="tag">Docker</span><span className="tag">Swagger</span>
            </div>
          </div>

        </div>
      </section>

      <section id="experience">
        <div className="sec-header">
          <span className="sec-tag">// 04. experience</span>
          <h2 className="sec-title">Expérience</h2>
          <p className="sec-sub">Mon parcours professionnel dans la tech</p>
        </div>
        <div className="exp-timeline">

      <div className="exp-item">
        <span className="exp-period">2024 – 2025</span>
        <h3 className="exp-title">IT Assistant / Technicien Systèmes & Réseaux</h3>
        <div className="exp-company">
          <span className="exp-company-name">ISRD / GL</span>
          <span className="exp-location">Goma, RDC</span>
        </div>
        <ul className="exp-bullets">
          <li>Administration et maintenance des systèmes informatiques Windows & Linux.</li>
          <li>Configuration et dépannage des réseaux LAN, routeurs et commutateurs.</li>
          <li>Support technique niveau 1 & 2, formation des utilisateurs aux bonnes pratiques de sécurité.</li>
        </ul>
      </div>

      <div className="exp-item">
        <span className="exp-period">2023 – 2024</span>
        <h3 className="exp-title">Développeur Backend Mid-Level</h3>
        <div className="exp-company">
          <span className="exp-company-name">Tantor</span>
          <span className="exp-location">Remote</span>
          <span className="exp-remote">🇫🇷 France</span>
        </div>
        <ul className="exp-bullets">
          <li>Développement de modules backend complexes avec NestJS & TypeScript en architecture microservices.</li>
          <li>Optimisation SQL (indexation, pagination, caching) — réduction des temps de réponse de 60%.</li>
          <li>Tests automatisés Jest + Supertest avec couverture de code supérieure à 80%.</li>
          <li>Animation des revues de code, introduction des bonnes pratiques SOLID & Clean Code.</li>
          <li>Réduction du taux d'erreurs en production d'environ 40%.</li>
        </ul>
      </div>

      <div className="exp-item">
        <span className="exp-period">2022</span>
        <h3 className="exp-title">Développeur Backend</h3>
        <div className="exp-company">
          <span className="exp-company-name">NeuroHub</span>
          <span className="exp-location">Bukavu, RDC</span>
        </div>
        <ul className="exp-bullets">
          <li>Conception et développement d'APIs RESTful avec Node.js / Express.js.</li>
          <li>Authentification JWT avec gestion des rôles (RBAC) et modélisation PostgreSQL via TypeORM.</li>
          <li>Documentation technique Swagger/OpenAPI pour faciliter la consommation des APIs.</li>
        </ul>
      </div>

        </div>
      </section>

      <section id="contact">
        <div className="sec-header">
          <span className="sec-tag">// 05. contact</span>
          <h2 className="sec-title">Travaillons ensemble</h2>
          <p className="sec-sub">Disponible pour des projets freelance, des missions CDI ou des collaborations remote</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <a href="mailto:mutalikodelor@gmail.com" className="contact-item">
              <div className="contact-item-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
              <div><div className="contact-item-label">Email</div><div className="contact-item-val">mutalikodelor@gmail.com</div></div>
            </a>
            <a href="tel:+25767812653" className="contact-item">
              <div className="contact-item-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div>
              <div><div className="contact-item-label">Téléphone</div><div className="contact-item-val">+250 795 883 175 / +243 977 581 069</div></div>
            </a>

            <a href="https://github.com" className="contact-item">
              <div className="contact-item-icon"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg></div>
              <div><div className="contact-item-label">GitHub</div><div className="contact-item-val">github.com/delor</div></div>
            </a>

            <div className="contact-item" style={{cursor: 'default'}}>
              <div className="contact-item-icon"><svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
              <div><div className="contact-item-label">Disponibilité</div><div className="contact-item-val" style={{color: 'var(--green)'}}>● Ouvert aux projets</div></div>
            </div>
          </div>

          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group"><label>Nom</label><input type="text" placeholder="John Doe"/></div>
              <div className="form-group"><label>Email</label><input type="email" placeholder="john@exemple.com"/></div>
            </div>
            <div className="form-group"><label>Sujet</label><input type="text" placeholder="Projet freelance, collaboration..."/></div>
            <div className="form-group"><label>Message</label><textarea placeholder="Parlez-moi de votre projet..."></textarea></div>
            <button className="form-submit">Envoyer le message →</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-logo">Del'or<span>.</span></div>
        <p className="footer-copy">© 2025 Cibinda Mutaliko Del'or. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#experience">Expérience</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  )
}
