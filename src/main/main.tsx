import './main.scss';

import { SiAngular, SiCss3, SiDocker, SiGithub, SiHtml5, SiJava, SiJavascript, SiLinkedin, SiMongodb, SiMysql, SiNestjs, SiNotion, SiPostgresql, SiReact, SiSass, SiTypescript, SiVite } from 'react-icons/si'
import { BsCodeSlash } from 'react-icons/bs'

export default function Main() {
  return(<>
    <header>
      <div className="content">
        <div>
          <div className="frame">
            <img src="https://www.github.com/diogozdev.png" alt="" />
          </div>
        </div>
        <div className="info">
          <h1>Diogo Lara</h1>
          <h2>&lt;Desenvolvedor/&gt;</h2>
        </div>
      </div>
      <div className="links">
      <a target="_blank" href="https://www.linkedin.com/in/diogo-lara"><SiLinkedin/><span>LinkedIn</span></a>
      <a target="_blank" href="https://www.github.com/diogozdev"><SiGithub/><span>GitHub</span></a>
      <a target="_blank" href="https://diogo-lara.notion.site/diogo-lara/Diogo-Dev-07d85b8ef6da45048992a23748ff2f55"><SiNotion/><span>Notion / Anotações de estudo</span></a>
      </div>
      
    </header>

    <main>
      <div className="content">

        <div className="tech">
          <a href="https://html.spec.whatwg.org/" target="_blank"><SiHtml5/></a>
          <p>Html5</p>
        </div>

        <div className="tech">
          <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank"><SiCss3/></a>
          <p>Css3</p>
        </div>

        <div className="tech">
          <a href="https://sass-lang.com/" target="_blank"><SiSass/></a>
          <p>Sass</p>
        </div>
        
        <div className="tech">
          <a href="https://nestjs.com" target="_blank"><SiNestjs/></a>
          <p>NestJS</p>
        </div>

        <div className="tech">
          <a href="https://angular.io" target="_blank"><SiAngular/></a>
          <p>Angular2+</p>
        </div>
            
        <div className="tech">
          <a href="https://reactjs.org" target="_blank"><SiReact/></a>
          <p>ReactJS</p>
        </div>

        <div className="tech">
          <a href="https://www.java.com/pt-BR/" target="_blank"><SiJava/></a>
          <p>Java</p>
        </div>

        <div className="tech">
          <a href="https://www.javascript.com" target="_blank"><SiJavascript/></a>
          <p>JavaScript</p>
        </div>
        
        <div className="tech">
          <a href="https://www.typescriptlang.org/" target="_blank"><SiTypescript/></a>
          <p>Typescript</p>
        </div>

        <div className="tech">
          <a href="https://www.docker.com/" target="_blank"><SiDocker/></a>
          <p>Docker</p>
        </div>

        <div className="tech">
          <a href="https://www.mongodb.com/" target="_blank"><SiMongodb/></a>
          <p>MongoDB</p>
        </div>

        <div className="tech">
          <a href="https://www.mysql.com" target="_blank"><SiMysql/></a>
          <p>MySQL</p>
        </div>

        <div className="tech">
          <a href="https://www.postgresql.org" target="_blank"><SiPostgresql/></a>
          <p>PostgreSQL</p>
        </div>
      </div>
    </main>

    <section>

      <article>
        <h1>BankMe</h1>
        <h2>2022 -&gt;</h2>
        <p>
        Ver as coisas acontecendo de forma dinâmica, extremamente colaborativa em um negócio tão inovador tem sido incrível.
        </p>
        <p>
        É desafiador participar de uma startup com um negócio sem precedentes: desenvoler e operar mini-bancos para empresas, visando a saúde financeira da mesma.
        </p>
      </article>

      <article>
        <h1>Maptriz</h1>
        <h2>2021 - 2022</h2>
        <p>
        Onde iniciei minha jornada como desenvolvedor, profissionalmente falando. De um amante do design e desenvolvimento front-end para desenvolvedor fullstack.
        </p>
        <p>
          Foi um grande aprendizados desenvolver com um ótimo time um sistema para gestão de cidades inteligentes, utilizados por prefeituras pelo Brasil.
        </p>
        <p>
        Pude apoiar o time com a revisão e padronização da tradução do sistema para o inglês e espanhol, participar da construção de novos módulos do sistema, elaborar telas para que os usuários tivessem uma boa experiência de uso e adicionar funcionalidades construindo a parte visual e implementando a interação com os bacos de dados.
        </p>
      </article>

      <article>
        <h1>Atos</h1>
        <h2>2019 - 2021</h2>
        <p>
          Em 2019 foi minha entrada profissional no mundo de TI. Iniciei com suporte técnico a usuários de várias partes do mundo, incluindo Brasil, EUA, México, Itália, Rússia e outros. Foi uma grande oportunidade de amadurecer meus planos, trabalhar com um público internacional e colocar em prática os idiomas inglês e espanhol.
        </p>
        <p>
          Depois de pouco mais de um ano, atuei no setor de qualidade, preparando treinamentos, apoiando os times de suporte. Continuei tendo a oportunidade de falar inglês e espanhol com equipes globais
        </p>
      </article>

    </section>
    <footer>
      <p><SiVite/> vite + <SiReact/> reactjs</p>
    </footer>
    </>
  );
}

