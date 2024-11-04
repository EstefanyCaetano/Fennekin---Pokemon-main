//Variaveis---------------------------------------------------------- 
var img1 = "./img/img1.png"; 
var img2 = "./img/img5 (1).png";
var img3 = "./img/img6.png";
var currentImage = img1; // Variável para armazenar a imagem atual

// Função que realiza as alternações ---------------------------------------
function trocar() {
    const imageElement = document.getElementById("fenneki");
    const titleElement = document.querySelector(".title--text");
    const titleTranparenteElement = document.querySelector(".title--transparent");

    // Alterna as imagens e o título conforme a imagem atual
    if (currentImage === img1) {
        imageElement.src = img2;     // Exibe a imagem 2
        titleElement.textContent = "Braixen"; // Altera o título para Braixen
        titleTranparenteElement.textContent = "Braixen";// Altera a sombra do título para Braixen
        currentImage = img2;
    } else if (currentImage === img2) {
        imageElement.src = img3;     // Exibe a imagem 3
        titleElement.textContent = "Delphox"; // Altera o título para Delphox
        titleTranparenteElement.textContent = "Delphox";// Altera a sombra do título para Delphox
        currentImage = img3;
    } else {
        imageElement.src = img1;     // Volta para a imagem 1
        titleElement.textContent = "Fennekin"; // Volta para a primeira imagem
        titleTranparenteElement.textContent = "Fennekin";// Altera a sombra do título para Fennekin
        currentImage = img1;
    }
}