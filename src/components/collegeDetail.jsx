import React from "react";

function CollegeDetail({ college }) {
return (
<div className="detail">
    <h2>{college.name}</h2>
    <p className="meta"><strong>Location:</strong> {college.location}</p>
    <p className="meta"><strong>Students:</strong> {college.students_profile}</p>

    <section>
        <h3>Campus & System</h3>
        <p>{college.campus}</p>
        <p><strong>Academic system:</strong> {college.system}</p>
    </section>

    <section>
        <h3>Strengths / Weaknesses</h3>
        <ul>
            {college.strengths.map((s, i) => (
            <li key={"s" + i}>{s}</li>
            ))}
            {college.weaknesses.map((w, i) => (
            <li key={"w" + i} className="weak">{w}</li>
            ))}
        </ul>
    </section>

    <section>
        <h3>Programs of Interest</h3>
        <p>{college.programs_of_interest.join(", ")}</p>
    </section>

    <section>
        <h3>Scholarship & Internship</h3>
        <p>{college.scholarships}</p>
        <p>{college.internships}</p>
    </section>

    <section>
        <h3>Admission Requirements</h3>
        <p>{college.admission_requirements}</p>
    </section>

    <section>
        <h3>Opportunities / Challenges</h3>
        <p>{college.opportunities_challenges}</p>
    </section>

    <div className="links">
        <a href={college.website} target="_blank" rel="noreferrer">Official website</a>
        <a href={`mailto:${college.contact}`}>Contact admissions</a>
    </div>
</div>
);
}

export default CollegeDetail;