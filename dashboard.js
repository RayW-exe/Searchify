const jobData = localStorage.getItem('jobData');
const jobType = localStorage.getItem('jobType');
if (jobData && jobType) {
    if (jobType === '1') {
        addJobItem1();
    } else if (jobType === '2') {
        addJobItem2();
    } else if (jobType === '3') {
        addJobItem3();
    }
    localStorage.removeItem('jobData');
    localStorage.removeItem('jobType');
}

function addJobItem1() {
    const jobItem = localStorage.getItem('jobData');
    const newDiv = document.createElement('div');
    newDiv.classList.add('job-item1');
    newDiv.innerHTML = jobItem;
    const pendingJob = document.querySelector('.pending')
    pendingJob.appendChild(newDiv)
    const para = document.querySelector('.para')
    if (getComputedStyle(para).display !== 'none'){
        para.style.display = 'none'
    }
    const contactInfo = newDiv.querySelector('p[hidden]')
    if (contactInfo) {
        contactInfo.removeAttribute('hidden')
    }
}

function addJobItem2() {
    const jobItem = localStorage.getItem('jobData');
    const newDiv = document.createElement('div');
    newDiv.classList.add('job-item2');
    newDiv.innerHTML = jobItem;
    const pendingJob = document.querySelector('.pending')
    pendingJob.appendChild(newDiv)
    const para = document.querySelector('.para')
    if (getComputedStyle(para).display !== 'none'){
        para.style.display = 'none'
    }
    const contactInfo = newDiv.querySelector('p[hidden]')
    if (contactInfo) {
        contactInfo.removeAttribute('hidden')
    }
}

function addJobItem3() {
    const jobItem = localStorage.getItem('jobData');
    const newDiv = document.createElement('div');
    newDiv.classList.add('job-item3');
    newDiv.innerHTML = jobItem;
    const pendingJob = document.querySelector('.pending')
    pendingJob.appendChild(newDiv)
    const para = document.querySelector('.para')
    if (getComputedStyle(para).display !== 'none'){
        para.style.display = 'none'
    }
    const contactInfo = newDiv.querySelector('p[hidden]')
    if (contactInfo) {
        contactInfo.removeAttribute('hidden')
    }
}


