function sendData1() {
    const jobItem = document.querySelector('.job-item1').innerHTML;
    localStorage.setItem('jobData', jobItem);
    localStorage.setItem('jobType', '1');
    window.location.href = 'dashboard.html';
}

function sendData2() {
    const jobItem = document.querySelector('.job-item2').innerHTML;
    localStorage.setItem('jobData', jobItem);
    localStorage.setItem('jobType', '2');
    window.location.href = 'dashboard.html';
}

function sendData3() {
    const jobItem = document.querySelector('.job-item3').innerHTML;
    localStorage.setItem('jobData', jobItem);
    localStorage.setItem('jobType', '3');
    window.location.href = 'dashboard.html';
}

const filterStatus = document.getElementById('filterstatus');
const filterLocation = document.getElementById('filterlocation');
const filterName = document.getElementById('filtername');

filterStatus.addEventListener('change', filterJobs);
filterLocation.addEventListener('change', filterJobs);
filterName.addEventListener('change', filterJobs);

function filterJobs() {
    const statusValue = filterStatus.value;
    const locationValue = filterLocation.value;
    const nameValue = filterName.value;

    const jobItems = document.querySelectorAll('.job-item1, .job-item2, .job-item3');

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