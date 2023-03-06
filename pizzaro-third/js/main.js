let downcircle = document.getElementById('downcircleopen');
downcircle.addEventListener('mouseover', function () {
    let d = document.getElementById('opening');
    d.style.display = 'block'
    d.style.color = 'white'
    downcircle.style.color = '#eb830d'
    downcircle.addEventListener('mouseleave', function () {
        let d = document.getElementById('opening');
        d.style.display = 'none'
        downcircle.style.color = 'white'

    })
})
