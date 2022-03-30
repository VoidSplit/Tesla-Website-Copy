const videoInfos = [
    {
        link: "https://tesla-cdn.thron.com/delivery/public/video/tesla/537cfaca-9a4a-4370-b122-8b46d37762c1/bvlatuR/WEBHD/MS-Interior-Carousel-1-Cinematic-Display-Desktop",
        title: "Une expérience cinématographique",
        description: "Un écran tactile 17\" offre une résolution de 2200x1300, des couleurs authentiques et une réactivité exceptionnelle pour l'affichage de jeux, de films et bien plus encore."
    },
    {
        link: "https://tesla-cdn.thron.com/delivery/public/video/tesla/c39b1f9b-dfe6-4e45-a0d7-0156ff7d2706/bvlatuR/WEBHD/MS-Interior-Carousel-2-Yoke-Desktop",
        title: "Volant Yoke",
        description: "Une nouvelle approche audacieuse vous donne une véritable connexion avec la Model S, offrant une meilleure sensation de maîtrise et une vue dégagée sur votre tableau de bord et sur la route. Appuyez sur le frein : la Model S sélectionne automatiquement la bonne direction pour commencer votre voyage."
    },
    {
        link: "https://tesla-cdn.thron.com/delivery/public/video/tesla/ac921a72-b7e7-404b-9acc-373a02ef2869/bvlatuR/WEBHD/MS-Interior-Carousel-3-Environment-Desktop",
        title: "Environnement parfait",
        description: "Les ouïes de ventilation sont dissimulées dans tout l'habitacle, tandis que le contrôle de la température tri-zone, les sièges ventilés et le système de filtration HEPA offrent un environnement idéal."
    },
    {
        link: "https://tesla-cdn.thron.com/delivery/public/video/tesla/ce17484f-f941-4040-92b3-cc2a1564a6ff/bvlatuR/WEBHD/MS-Interior-Carousel-4-Rear-Seats-Desktop",
        title: "Deuxième rangée redessinée",
        description: "De la place pour trois adultes, avec de l'espace supplémentaire aux jambes, en hauteur ainsi qu'un accoudoir escamotable intégrant un espace de rangement et un système de recharge par induction."
    },
    {
        link: "https://tesla-cdn.thron.com/delivery/public/video/tesla/a45a269f-1acf-4022-aa69-0d25518350e2/bvlatuR/WEBHD/MS-Interior-Carousel-5-Gaming-Desktop",
        title: "Des jeux équivalents à ceux d'une console",
        description: "Jusqu'à 10 téraflops de puissance de calcul, pour des jeux embarqués de qualité comparable à ceux des consoles les plus récentes. Jouez depuis n'importe quel siège grâce à la compatibilité avec les manettes et les casques sans fil."
    }
]

const rightButton = document.getElementById('carousel-right')
const leftButton = document.getElementById('carousel-left')
const videoInner = document.getElementById('video-inner')
rightButton.addEventListener('click', () => {
    let video = document.getElementById('demo-video')
    let index = video.getAttribute('data-index')
    increaseVideo(index)
})
leftButton.addEventListener('click', () => {
    let video = document.getElementById('demo-video')
    let index = video.getAttribute('data-index')
    decreaseVideo(index)
})
function displayVideo(index) {
    function generateVideoElement(videosrc, index) {
        let video = document.createElement('video')
        video.setAttribute('onended', `increaseVideo(${index})`)
        video.setAttribute('data-index', index)
        video.setAttribute('id', 'demo-video')
        video.setAttribute('muted', '')
        video.setAttribute('autoplay', '')
        video.setAttribute('src', videosrc)
        return video
    }
    function generateInformationElement(infos, index) {
        let content = document.createElement('div')
        let counter = document.createElement('div')
        let text = document.createElement('div')
        let textTitle = document.createElement('h1')
        let textDescription = document.createElement('p')
        content.setAttribute('class', 'content')
        counter.setAttribute('class', 'counter')
        text.setAttribute('class', 'text')
        for(let i = 0; i < 5; i++) {
            let span = document.createElement('span')
            if(i == index) span.setAttribute('class', 'active')
            counter.append(span)
        }
        textTitle.innerText = `${infos.title}`
        textDescription.innerText = `${infos.description}`
        content.append(counter, text)
        text.append(textTitle,textDescription)
        return content
    }

    if(index >= 5) {
        index = 0
    }
    let wrapper = document.getElementById('video-inner');
    wrapper.innerHTML = ''

    let link = videoInfos[index].link
    wrapper.append(generateVideoElement(link, index))
    wrapper.append(generateInformationElement(videoInfos[index], index))
}
function increaseVideo(index) {
    displayVideo(parseInt(index)+1)
}
function decreaseVideo(index) {
    if(index == 0) displayVideo(parseInt(4))
    else {
        displayVideo(parseInt(index)-1)
    }
}
displayVideo(0)