const ProjectItem = ({project}) => {
  return (
    <tr>
      <td>{project.name}</td>
      <td>{project.repo}</td>
    </tr>
  )
};

export default ProjectItem;