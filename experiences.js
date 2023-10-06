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
            "Reduced professor complaints to technical department by testing audio, visual, and wireless capabilities to ensure quick and reliable connection to classroom iMacs, PCs and tablets for 20 professors and speaking guests.",
            "Ensured smooth conduction of 3 public speaking engagements and performances by offering stand-by technical support."
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

// for ( let i = 0; i <= professionalExperiences.length; i += i) {
for ( let i = 0; i <= 1; i += i) {
    let curJob = professionalExperiences[i];

    let curJobInHTML = "";
    let listOfActs = "";

    let curCompany = curJob.company;
    let curRole = curJob.role;
    let curLoc = "(" + curJob.location + ")";
    let curDate = curJob.dateRange;
    let curAct = curJob.activities;

    let titleLine = curCompany + " - " + curRole + " | " + curDate;

    // curJobInHTML += 
    curJobInHTML += `<h3>${titleLine}</h3>`;
    curJobInHTML += `<p>${curLoc}</p>`;


    for (let j = 0; j < curAct.length; ++j)
    {
        listOfActs += `<li>${curAct[j]}</li>`;
    }

    curJobInHTML += `<p>${listOfActs}</p>`;

    htmlString += curJobInHTML;
}

listedexperiences.innerHTML = htmlString; 
// console.log(htmlString);