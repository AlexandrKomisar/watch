let watch = document.querySelector('.watch');
function time() {

    let date = new Date();
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let min = date.getMinutes() < 10 ? '0' + getMinutes() : date.getMinutes();
    let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    watch.innerHTML = `${hours}:${min}:${sec}`;
}

setInterval(time,1000);