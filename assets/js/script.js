const acoes = [{ 
   icone: "📚",
    titulo: "Educar e Conscientizar",
    descricao: "Organizar palestras, workshops e campanhas de conscientização para informar a comunidade sobre os benefícios da energia solar e como ela pode ser adotada em residências e empresas."
}, {
    icone: "💡",
    titulo: "Incentivar a Instalação de Painéis Solares",
    descricao: "Promover programas de incentivo para a instalação de painéis solares, como descontos, financiamentos ou parcerias com empresas de energia solar para facilitar o acesso à tecnologia."
}, {
    icone: "🏛️",
    titulo: "Apoiar Políticas Públicas",
    descricao: "Engajar-se com representantes locais para apoiar políticas públicas que incentivem o uso de energia renovável, incluindo subsídios para energia solar e regulamentações favoráveis."
}, {
    icone: "🏘️",
    titulo: "Participar de Projetos Comunitários",
    descricao: "Participar ou organizar projetos comunitários de energia solar, como a instalação de painéis solares em escolas, centros comunitários ou áreas públicas para demonstrar os benefícios da tecnologia.",
}]

const container = document.querySelector('#container-acoes')

for (let i = 0; i < acoes.length; i++) {
    const item = acoes[i]
    const div = document.createElement('div')
    div.className = "acao-item"
    div.innerHTML = `
        <div class="acao-icone">${item.icone}</div>
        <h3 class="acao-titulo">${item.titulo}</h3>
        <p class= "acao-texto">${item.descricao}</p>
    </div>
    `
    container.appendChild(div)
}
const nav = document.querySelector('.menu-navegacao')

window.addEventListener('scroll',() => {
    if (window.scrollY > 10) {
        nav.style.opacity = '0.5'
    } else {
        nav.style.opacity = '1'
    }
})