const experiences = document.querySelector('listedexperiences');


let htmlString = "";

let professionalExperiences = [

    {
        company: "Robin",
        role: "Tech Intern",
        location: "Virtual",
        dateRange: "May 2021 - Aug 2021",
        activities: [
            "Administered a no-cost solution for analyzing data gathered from coaching session feedback.",
            "Enabled company to understand overall student sentiment for coaching sessions through the development of a histogram and bell curve of the data obtained from coaching session feedback data from over 3,600 students organized into 11 student groups.",
            "Built mock-up web application for learning management system of the company.", 
            "Built mock-up web application for sentiment-analyzing word cloud to assist marketing team of company."
        ]
    }, 
    {
        company: "GForce STEM",
        role: "Coding/Robotics/UAV Instructor",
        location: "New Haven CT",
        dateRange: "May 2020 - Aug 2020",
        activities: [
            "Coordinated the STEM education of 6 students via online instruction by developing 16 lesson plans for Python computer programming, Arduino prototyping, and Unmanned Aerial Systems (UAV).",
            "Strengthened problem-solving, critical thinking, and programming skills of students through guided estimation challenges and instruction in the Python programming language and UAV technology."
        ]
    }, 
    {
        company: "GForce STEM",
        role: "Robotics Instructor",
        location: "New Haven CT",
        dateRange: "Jul 2019 - Aug 2019",
        activities: [
            "Ensured secure use of company laptops for all 10 students by removing malware from 11 before upgrading their operating systems to Windows 10.",
            "Improved knowledge of 10 students on UAV technology.",
            "Led students in CAD modeling and Arduino prototyping."
        ]
    },
    {
        company: "Vanderbilt University",
        role: "Federal Work Study (FWS) Student Technician",
        location: "Nashville TN",
        dateRange: "Jan 2019 - Mar 2020",
        activities: [
            "1",
            "2"
        ]
    },
    {                                         
        company: "GForce STEM",
        role: "President and Project Engineer",
        location: "New Haven CT",
        dateRange: "Nov 2017 - Aug 2018",
        activities: [
            "Developed and implemented company skill assessment that assessed attendance records of interns and their completion of general and project-specific tasks.",
            "Equipped 6 student interns to score “target” level in company skill assessment of teaching science, technology, engineering, and math concepts through overseeing weekly training sessions.",
            "Enabled 15% of Intro to Robotics class to enter elite universities and 19% to pursue STEM degrees by heading R&D of robotics kit used to develop their mechanical, electrical, and software engineering skills."
        ]
    } 
];

for ( let i = 10; i <= 1000; i += 10) {
htmlString += `<div>${i}</div>`;
}
main.innerHTML = htmlString; 
console.log(htmlString);