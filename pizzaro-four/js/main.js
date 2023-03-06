// let button = document.getElementById('fb');
// button.addEventListener('mouseover', function () {
//     let a = document.getElementById('para');
//     a.style.display = 'block'
//     button.addEventListener('mouseleave', function () {
//         let a = document.getElementById('para')
//         a.style.display = "none"
//     })
// })

// let buttonsecond = document.getElementById('twit');
// buttonsecond.addEventListener('mouseover', function () {
//     let b = document.getElementById('para-two');
//     b.style.display = 'block'
//     buttonsecond.addEventListener('mouseleave', function () {
//         let b = document.getElementById('para-two');
//         b.style.display = 'none'
//     })
// })
// let buttonthird = document.getElementById('g');
// buttonthird.addEventListener('mouseover', function () {
//     let b = document.getElementById('para-third');
//     b.style.display = 'block'
//     buttonthird.addEventListener('mouseleave', function () {
//         let b = document.getElementById('para-third');
//            b.style.display = 'none'

//     })
// })
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


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))