let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const slideContent = [
    {
        title: "Creatina: Energia para o Músculo",
        paragraph: 'Descubra como a Creatina impulsiona a performance atlética, oferecendo energia extra para seus músculos durante treinos intensos. Ideal para quem busca ganhos em força e resistência, a Creatina é um aliado fundamental para superar limites e alcançar novos patamares de desempenho.'
    },
    {
        title: "Pré-Treino: Turbine Seus Treinos",
        paragraph:  "Maximize seu potencial de treino com suplementos de Pré-Treino. Com uma mistura única de ingredientes para energia e foco, estes suplementos são projetados para preparar seu corpo e mente para treinos desafiadores, elevando sua capacidade de alcançar objetivos ambiciosos."
    },
    {
        title: "Whey: O Poder da Proteína",
        paragraph: "Explore o impacto transformador da proteína Whey na recuperação muscular e construção de massa magra. Rico em nutrientes essenciais, o Whey é a escolha perfeita para atletas e entusiastas do fitness visando uma nutrição otimizada e resultados impressionantes."
    },
    {
        title:  "Acessórios: Aprimorando Seu Treino",
        paragraph: 'Eleve sua experiência de treino com acessórios essenciais. De luvas de levantamento de peso a cordas de pular, cada acessório é projetado para melhorar a segurança e eficiência do seu treino, garantindo que cada sessão seja tão produtiva quanto possível.'
    },
    // Adicione mais objetos conforme o número de slides
];

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.display = "none";
    });

    slides[index].classList.add('active', 'slide-anim');
    slides[index].style.display = "block";

    // Atualiza o conteúdo da descrição
    const descriptionDiv = document.getElementById("description");
    if (descriptionDiv && slideContent[index]) {
        descriptionDiv.innerHTML = `
            <h1>${slideContent[index].title}</h1>
            <p>${slideContent[index].paragraph}</p>
        `;
    }
}

slides.forEach(slide => {
    slide.addEventListener('animationend', function() {
        this.classList.remove("slide-anim");
    });
});

let slideInterval;

function startSlideShow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 6000);
}

function resetSlideShow() {
    clearInterval(slideInterval);
    startSlideShow();
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    showSlide(currentSlide);
    resetSlideShow();
}

var input = document.querySelector('.search-box input[type="text"]');
var resetButton = document.querySelector('.search-box button[type="reset"]');

function customSearch() {
    var input = document.getElementById('searchBar');
    var searchText = input.value.toLowerCase();
    var graphDiv = document.getElementById('grafico');

    if (searchText === 'whey') {
        graphDiv.style.display = 'block';
        graphDiv.classList.add('fade-in');
    } else {
        graphDiv.style.display = 'none';
        graphDiv.classList.remove('fade-in');
    }

    // Resetar o valor do campo de pesquisa
    input.value = '';
}

document.getElementById('searchBar').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        customSearch();
    }
});

// Inicializa o primeiro slide e o texto do cabeçalho
document.addEventListener('DOMContentLoaded', (event) => {
    showSlide(currentSlide);
    startSlideShow();
});