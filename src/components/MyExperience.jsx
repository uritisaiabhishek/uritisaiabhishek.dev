import React, { useState } from 'react';

function MyExperience() {
    const [experiences, setExperiences] = useState([
        {
            id: 1,
            company: "Keka HR Payroll Software",
            role: "Web Developer",
            location: "Hyderabad, India",
            duration: {
                from: "Oct 2023",
                to: null
            },
            logo: "/images/experience/Keka.svg"
        },
        {
            id: 2,
            company: "Msrcosmos",
            role: "Software Engineer Trainee",
            location: "Hyderabad, India",
            duration: {
                from: "Feb 2022",
                to: "Sept 2023"
            },
            logo: "/images/experience/msrcosmos.svg"
        },
        {
            id: 3,
            company: "Freelance",
            role: "Front End Developer",
            location: "Remote",
            duration: {
                from: "May 2017",
                to: "Feb 2022"
            }
        },
        {
            id: 4,
            company: "Intuily Inc",
            role: "Software Engineer Intern",
            location: "Remote",
            duration: {
                from: "Aug 2021",
                to: "Dec 2021"
            },
            logo: "/images/experience/intuily.webp"
        }
    ]);

    return (
        <>
            {/* <!-- experience --> */}
            <section className="section">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title">Experience</h2>
                        </div>
                        {
                            experiences.map(experience => (
                                <div key={experience.id} className="col-lg-3 col-md-4 text-center">
                                    <img src={ experience.logo ? experience.logo : `images/experience/icon-1.png`} className='experience_logo' alt={experience.company} />
                                    <p className="mb-0">{experience.duration.from} - {experience.duration.to ? experience.duration.to: "Current"}</p>
                                    <h4>{experience.role}</h4>
                                    <h6 className="text-light">{experience.company}, {experience.location}</h6>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* <!-- ./experience --> */}
        </>
    );
}

export default MyExperience;
