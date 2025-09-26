function createCard(title, cName, views, monthsOld, duration, thumbnail){
    const card = document.getElementById('container');
    card.style.display = 'flex';
    card.style.flexDirection = 'coloumn';

    const thumb = document.createElement('img')

    thumb.src = thumbnail;
    thumb.style.height = '200px'
    thumb.style.width = '350px'
    card.appendChild(thumb)

    const cardTitle = document.createElement('div')

    cardTitle.textContent = title;
    card.appendChild(cardTitle)

    const period = document.createElement('div')

    period.textContent = duration;
    card.appendChild(period)

    const impress = document.createElement('div')

    impress.textContent = views;
    card.appendChild(impress)

    const channel = document.createElement('div')

    channel.textContent = cName;
    card.appendChild(channel)

    const age = document.createElement('div')

    age.textContent = `${monthsOld} year old`
    card.appendChild(age)

}


createCard("Wedding Ka Season - Stand up Comedy By Harsh Gujral", "Harsh Gujral", 1300000, 1, "17:13", "https://img.youtube.com/vi/OGjHGDEixAQ/hqdefault.jpg")