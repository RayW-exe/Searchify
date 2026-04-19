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