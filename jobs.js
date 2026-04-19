function sendData() {
    const jobItem = document.querySelector('.job-item');
    localStorage.setItem('jobData', jobItem.innerHTML);
    window.location.href = 'dashboard.html';
}