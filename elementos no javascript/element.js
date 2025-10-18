// 1. Criar um novo elemento (por exemplo, um parágrafo)
const novoParagrafo = document.createElement('p');

// 2. Definir atributos, estilos ou conteúdo
novoParagrafo.textContent = 'Este é um novo parágrafo criado com JavaScript.';
novoParagrafo.style.color = 'blue';

// 3. Encontrar um elemento existente onde o novo elemento será inserido
const corpoDaPagina = document.body;

// 4. Inserir o novo elemento no DOM
corpoDaPagina.appendChild(novoParagrafo);