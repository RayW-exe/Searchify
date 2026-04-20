function sendDataForJob1() {
    const jobStoredContent = document.querySelector('.job:essaysector-1').innerHTML;
    localStorage.setItem('jobData', jobStoredContent);
    localStorage.setItem('jobType', '1');
    window.location.href = 'dashboard.html';
}

function sendDataForJob2() {
    const jobStoredContent = document.querySelector('.job:designsector-2').innerHTML;
    localStorage.setItem('jobData', jobStoredContent);
    localStorage.setItem('jobType', '2');
    window.location.href = 'dashboard.html';
}

function sendDataForJob3() {
    const jobStoredContent = document.querySelector('.job:developmentsector-3').innerHTML;
    localStorage.setItem('jobData', jobStoredContent);
    localStorage.setItem('jobType', '3');
    window.location.href = 'dashboard.html';
}

const filterStatusForDaJobs = document.getElementById('filterstatus');
const filterLocationForDaJobs = document.getElementById('filterlocation');
const filterNameForDaJobs = document.getElementById('filtername');

filterStatusForDaJobs.addEventListener('change', filterJobs);
filterLocationForDaJobs.addEventListener('change', filterJobs);
filterNameForDaJobs.addEventListener('change', filterJobs);

function filterJobs() {
    const statusValue = filterStatusForDaJobs.value;
    const locationValue = filterLocationForDaJobs.value;
    const nameValue = filterNameForDaJobs.value;

    const jobItems = document.querySelectorAll('.job-selection-item1, .job-selection-item2, .job-selection-item3');

    jobItems.forEach(job => {
        const jobStatus = job.querySelector('p:nth-child(2)').textContent.split(': ')[1].toLowerCase();
        const jobLocation = job.querySelector('p:nth-child(3)').textContent.split(': ')[1].toLowerCase();
        const jobName = job.querySelector('h2').textContent.toLowerCase();

        const statusMatch = (statusValue === 'all') || (jobStatus === statusValue);
        const locationMatch = (locationValue === 'all') || (jobLocation === locationValue);
        const nameMatch = (nameValue === 'all') || (jobName.includes(nameValue));

        if (statusMatch && locationMatch && nameMatch) {
            job.style.display = '';
        } else {
            job.style.display = 'none';
        }
    });
}