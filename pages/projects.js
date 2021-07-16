import ArticleContainer from '../components/ArticleContainer';
import ProjectCard from '../components/ProjectCard';
import duncanbaindevProject from '../images/duncanbaindev.png';
import bugTrackerProject from '../images/bugtracker.png'

const ProjectsPage = () => {
  return (
    <ArticleContainer>
      <div className="flex flex-wrap flex-col lg:flex-row">
        <ProjectCard
          projectImgSrc={duncanbaindevProject}
          projectImgAlt="An image showing the website duncanbain.dev"
          projectTitle="Personal Blog and Portfolio"
          projectCaption="A personal website created using Gatsby, Tailwind CSS and Styled-Components. Hosted on Netlify."
          projectRepo="https://github.com/duncanjbain/duncanbain.dev"
          projectDemo="https://duncanbain.dev"
        />
        <ProjectCard
          projectImgSrc={bugTrackerProject}
          projectImgAlt="An image showing the website bugtracker.duncanbain.dev"
          projectTitle="Bug Tracker Application"
          projectCaption="A bug tracker created using React, GraphQL, MongoDB and Styled-Components. Hosted on Heroku and Netlify, continuously deployed using CircleCI."
          projectRepo="https://github.com/duncanjbain/bugtracker"
          projectDemo="https://bugtracker.duncanbain.dev"
        />
      </div>
    </ArticleContainer>
  );
};

export default ProjectsPage;
