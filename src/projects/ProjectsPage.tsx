import { MOCK_PROJECTS } from './MockProjects';

const ProjectsPage = () => {
  return (
    <>
     <h1>Keeptrack</h1>
    <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
   </>
  )
}

export default ProjectsPage