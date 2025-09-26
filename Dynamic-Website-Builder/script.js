const card = document.getElementById('container');

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    const cardTitle = document.createElement('div')

    cardTitle.textContent = title;
    card.appendChild(cardTitle)

    const thumb = document.createElement('img')

    thumb.src = thumbnail;
    card.appendChild(thumb)

    const period = document.createElement('span')

    period.textContent = duration;
    card.appendChild(period)

    const impress = document.createElement('span')

    impress.textContent = views;
    card.appendChild(impress)

    const channel = document.createElement('span')

    channel.textContent = cName;
    card.appendChild(channel)

    const age = document.createElement('span')

    age.textContent = `${monthsOld} year old`
    card.appendChild(age)

}


createCard("Wedding Ka Season - Stand up Comedy By Harsh Gujral", "Harsh Gujral", 1300000, 1, "17:13", "https://img.youtube.com/vi/OGjHGDEixAQ/hqdefault.jpg")