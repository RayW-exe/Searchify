//function to add a job item to the pending applications section of the dashboard when the user clicks the apply button on the jobs page
function addJobItem() {
    const jobItem = document.querySelector('.job-item');
    const pendingApplications = document.querySelector('.pending')
    const newJobItem = document.createElement('div')
    newJobItem.classList.add('job-item')
    newJobItem.innerHTML = jobItem.innerHTML
    pendingApplications.appendChild(newJobItem)
}