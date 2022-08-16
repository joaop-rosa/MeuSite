import './section-projects.component.styles.css'
import { CardProject } from '../card-project/card-project.component'
import { useGitApi, usePagination } from '../../../hooks'
import { useEffect, useState } from 'react'
export function SectionProject() {
    const gitApi = useGitApi()
    const { page, handlePreviousPage, handleNextPage } = usePagination()
    const [projectList, setProjectList] = useState([])
    console.log(projectList);
    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await gitApi.repository(page)
                setProjectList(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        fetchProjects()
    }, [gitApi])

    return (
        <div className='div-section-project'>
            {
                projectList.map((project) => {
                    return <CardProject key={project.id} project={project} />
                })
            }
            <div className='project-pagination'>
                <button onClick={handlePreviousPage}>A</button>
                <p>{page}</p>
                <button onClick={handleNextPage}>D</button>
            </div>
        </div>
    )
}