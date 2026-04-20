const jobContent = localStorage.getItem('jobData');
const jobNumber = localStorage.getItem('jobType');
if (jobContent && jobNumber) {
    if (jobNumber === '1') {
        addJobItem1();
    } else if (jobNumber === '2') {
        addJobItem2();
    } else if (jobNumber === '3') {
        addJobItem3();
    }
    localStorage.removeItem('jobData');
    localStorage.removeItem('jobType');
}

// the guidelines i used
// data is received and stored in variables. Then, passed to the new div and shown on screen. contact info becomes shown(summary)

function addJobItem1() {
    const jobItem = localStorage.getItem('jobContent');
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
    const jobItem = localStorage.getItem('jobContent');
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
    const jobItem = localStorage.getItem('jobContent');
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


