import '../styled-components/workExperienceSection.css';
import WorkExperienceSectionCard from "./WorkExperienceSectionCard";
import { getInterships } from '../services/getEnterprises';
const WorkExperienceSection = () => {
    const interships=getInterships();
    return (
        <section className="work-experience-section">
            <h2 className='font-text-important'>Work Experience</h2>
            <div className='container-work-experience'>
                {interships.map((intership,index)=>(
                <WorkExperienceSectionCard 
                    key={index}
                    intership={intership}
                />
                ))}
            </div>
        </section>
    );
};
export default WorkExperienceSection;