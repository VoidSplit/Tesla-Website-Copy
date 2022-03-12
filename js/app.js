
const pageInformations = [
    {
        "title": "Model Y",
        "subtitle": null,
        "buttons": [
            {
                "color": "inverted",
                "content": "configuration personnalisée",
                "link": "#"
            },
            {
                "color": "normal",
                "content": "essais",
                "link": "#"
            }
        ],
        "sublink": {
            "content": "En savoir plus sur Tesla pour les entreprises",
            "link": "#",
            "underline": true
        },
        "caret": true
    },
    {
        "title": "Model 3",
        "subtitle": {
            "content": "Réservez un essai sans contact",
            "underline": true
        },
        "buttons": [
            {
                "color": "inverted",
                "content": "configuration personnalisée",
                "link": "#"
            },
            {
                "color": "normal",
                "content": "véhicules disponibles",
                "link": "#"
            }
        ],
        "sublink": {
            "content": "A reçu la note maximale de 5 étoiles par Euro NCAP",
            "link": "#",
            "underline": false
        },
        "caret": false
    },
    {
        "title": "Model S",
        "subtitle": null,
        "buttons": [
            {
                "color": "inverted",
                "content": "configuration personnalisée",
                "link": "#"
            },
            {
                "color": "normal",
                "content": "en savoir plus",
                "link": "#"
            }
        ],
        "sublink": null,
        "caret": false
    },
    {
        "title": "Model X",
        "subtitle": null,
        "buttons": [
            {
                "color": "inverted",
                "content": "configuration personnalisée",
                "link": "#"
            },
            {
                "color": "normal",
                "content": "en savoir plus",
                "link": "#"
            }
        ],
        "sublink": null,
        "caret": false
    },
    {
        "title": "Systèmes d'énergie solaire et Powerwalls",
        "subtitle": {
            "content": "De l’énergie pour tous vos besoins",
            "underline": false
        },
        "buttons": [
            {
                "color": "inverted",
                "content": "En savoir plus",
                "link": "#"
            }
        ],
        "sublink": null,
        "caret": false
    },
    {
        "title": "Accessoires",
        "subtitle": null,
        "buttons": [
            {
                "color": "inverted",
                "content": "commander maintenant",
                "link": "#"
            }
        ],
        "sublink": null,
        "caret": false
    }
]
let wrapper = document.getElementById('wrapper');
wrapper.addEventListener('scroll', () => {

    const getCoef = (x) => (Math.sin((2* x) * Math.PI + 1.25) + 1) / 2;

    let height = wrapper.clientHeight;
    let scrollHeight = wrapper.scrollHeight - height;
    let scrollTop = wrapper.scrollTop;
    let percent = Math.floor(scrollTop / scrollHeight * 100);
    document.querySelectorAll('.text-labels')[0].style.opacity = getCoef(percent/20)
    if(percent/20 > 0 && percent/20 < 0.5) changeInfos(0)
    if(percent/20 > 0.6 && percent/20 < 1.5) changeInfos(1)
    if(percent/20 > 1.6 && percent/20 < 2.5) changeInfos(2)
    if(percent/20 > 2.6 && percent/20 < 3.5) changeInfos(3)
    if(percent/20 > 3.6 && percent/20 < 4.5) changeInfos(4)
    if(percent/20 > 4.6 && percent/20 < 5) changeInfos(5)
})
function changeInfos(index) {
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const buttons = document.getElementById('buttons');
    const sublink = document.getElementById('sublink');
    const caret = document.getElementById('caret');

    title.innerHTML = "";
    buttons.innerHTML = "";
    subtitle.innerHTML = "";
    sublink.innerHTML = "";
    caret.innerHTML = "";

    if(pageInformations[index].title) title.innerText = pageInformations[index].title;
    if(pageInformations[index].subtitle) {
        if(pageInformations[index].subtitle.underline == true) {
            const subtitleElement = document.createElement('a')
            subtitleElement.textContent = pageInformations[index].subtitle.content;
            subtitle.appendChild(subtitleElement)
        }
        if(pageInformations[index].subtitle.underline == false) {
            const subtitleElement = document.createElement('p')
            subtitleElement.textContent = pageInformations[index].subtitle.content;
            subtitle.appendChild(subtitleElement)
        }
    }
    if(pageInformations[index].buttons.length != 0) {
        pageInformations[index].buttons.forEach(button => {
            const buttonElement = document.createElement('a');
            buttonElement.setAttribute('href', button.link);
            if(button.color == "inverted") buttonElement.setAttribute('class', 'inverted');
            buttonElement.innerHTML = `<span>${button.content}</span>`;
            buttons.appendChild(buttonElement);
        })
    }
    if(pageInformations[index].sublink) {
        if(pageInformations[index].sublink.underline == true) {
            const sublinkElement = document.createElement('a')
            sublinkElement.setAttribute('href', pageInformations[index].sublink.link);
            sublinkElement.textContent = pageInformations[index].sublink.content;
            sublink.appendChild(sublinkElement)
        }
        if(pageInformations[index].sublink.underline == false) {
            const sublinkElement = document.createElement('p')
            sublinkElement.textContent = pageInformations[index].sublink.content;
            sublink.appendChild(sublinkElement)
        }
    }
    if(pageInformations[index].caret == true) {
        caret.innerHTML = '<span></span><span></span>'
    }
}
changeInfos(0)
document.getElementById('menuButton').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('closed')
});
document.getElementById('closeMenu').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('closed')
});
document.getElementById('detector').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('closed')
});