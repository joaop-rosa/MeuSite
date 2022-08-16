import './project.screen.styles.css'
import { SectionProject } from '../../components/section-projects/section-projects.component'
export function ProjectScreen({ id }) {
    return (
        <div id={id} className='div-screen-background'>
            <div className='container'>
                <div className='div-screen-content div-screen-content-project'>
                    <h1>Projetos</h1>
                    <SectionProject />
                </div>
            </div>
        </div>
    )
}