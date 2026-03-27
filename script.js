function generateResume() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let skills = document.getElementById("skills").value;
    let education = document.getElementById("education").value;
    let experience = document.getElementById("experience").value;
    let projects = document.getElementById("projects").value;

    document.getElementById("rName").innerText = name;
    document.getElementById("rEmail").innerText = email;
    document.getElementById("rSkills").innerText = skills;
    document.getElementById("rEducation").innerText = education;
    document.getElementById("rExperience").innerText = experience;
    document.getElementById("rProjects").innerText = projects;
}
function downloadPDF() {
    const element = document.getElementById("resumeContent");

    let options = {
        margin: 0.5,
        filename: "My_Resume.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
}
