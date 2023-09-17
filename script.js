bar = document.getElementById('bar')
cross = document.getElementById('cross')
function myFunction() {
    document.getElementById('bar_nav').style.display = 'block'
    bar.style.display = 'none'
    cross.style.display = 'block'
}
function closeFunction() {
    document.getElementById('bar_nav').style.display = 'none'
    cross.style.display = 'none'
    bar.style.display = 'block'
} 