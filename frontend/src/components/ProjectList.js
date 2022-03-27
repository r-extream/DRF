import ProjectItem from "./ProjectItem";

const ProjectList = ({projects}) => {
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Repository</th>
      </tr>
      </thead>
      <tbody>
      {projects.map(project =>
        <ProjectItem project={project} key={project.name}/>)
      }
      </tbody>
    </table>
  )
};

export default ProjectList