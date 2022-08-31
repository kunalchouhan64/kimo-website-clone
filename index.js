const indivual = document.getElementById('indivdual')
const company = document.getElementById('company')


indivual.addEventListener('click', () => {
    indivual.classList.add('add')
    company.classList.remove('add')

    indivual.classList.add('color-black')
    company.classList.remove('color-white')
    company.classList.add('color-white')
    indivual.style.transition = 'all 0.3s linear'

    const allpara1 = document.getElementById('para1')
    const allpara2 = document.getElementById('para2')
    const allpara3 = document.getElementById('para3')
    const allpara4 = document.getElementById('para4')

    allpara1.innerHTML = "Access to the best best knowledge content"
    allpara2.innerHTML = "Live webinars from industry experts"
    allpara3.innerHTML = "Personal content recommendations"
    allpara4.innerHTML = "Top 10 lists from thought leaders"

    const para = document.querySelectorAll('.para')
    para.style.transition = 'all 0.7s linear'

})
company.addEventListener('click', () => {
    company.classList.add('add')
    indivual.classList.remove('add')

    indivual.classList.add('color-white')
    indivual.classList.remove('color-black')
    company.classList.remove('color-white')
    company.style.transition = 'all 0.3s linear'

    const allpara1 = document.getElementById('para1')
    const allpara2 = document.getElementById('para2')
    const allpara3 = document.getElementById('para3')
    const allpara4 = document.getElementById('para4')

    allpara1.innerHTML = "Personalised platform for each employee"
    allpara2.innerHTML = "Access to millions of tech content items"
    allpara3.innerHTML = "Reporting to understand employee usage"
    allpara4.innerHTML = "Access to industry experts in live webinars"

    const para = document.querySelectorAll('.para')
    para.style.transition = 'all 0.7s linear'
})
