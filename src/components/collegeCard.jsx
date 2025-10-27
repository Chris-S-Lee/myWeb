import React from "react";


function CollegeCard({ college, onSelect }) {
return (
<article className="card" onClick={onSelect} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onSelect()}>
<h3 className="card-title">{college.name}</h3>
<p className="card-sub">{college.location}</p>
<p className="card-snippet">Programs: {college.programs_of_interest.join(", ")}</p>
<div className="card-meta">
<span>{college.students_profile}</span>
</div>
</article>
);
}


export default CollegeCard;