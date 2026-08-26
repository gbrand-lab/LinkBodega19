# Bodega19 — Linktree em React

Projeto React (Vite) da página de links do Bodega19 Gastro Bar, com as
duas unidades (Vista Mar e Golden Shopping) e o cardápio abrindo direto
na página, sem sair para o Google Drive.

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 18 ou mais recente instalado.

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção (pronta para hospedar):

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist/` — é só subir o conteúdo dela em
qualquer hospedagem de site estático (Vercel, Netlify, GitHub Pages etc.).

## Estrutura de pastas

```
src/
  assets/            imagens (logo)
  data/
    units.js         todo o conteúdo editável: endereços, telefones,
                      links do iFood/WhatsApp e dos cardápios de cada unidade
  hooks/
    useMenuModal.js   controla a abertura/fechamento do visualizador de cardápio
  components/
    Background/       textura de pontinhos + brilhos do fundo
    Header/            logo, nome "Bodega19" e a frase de efeito
    AddressPill/        botão de endereço (abre no Google Maps)
    CtaButton/           botões grandes "iFood" e "WhatsApp"
    MenuCard/            cartão clicável de cada cardápio
    MenuModal/           janela que mostra o PDF do cardápio por cima da página
    icons/               todos os ícones SVG usados no site
  App.jsx              junta tudo: fundo, cabeçalho, as duas unidades e o modal
  index.css            cores, fontes e estilos globais
```

## Editar o conteúdo

Praticamente tudo que muda com frequência (endereço, WhatsApp, link do
iFood, qual PDF abre em cada cardápio) está em `src/data/units.js` — não
é necessário mexer em nenhum componente para atualizar essas informações.

Para trocar a logo, substitua o arquivo `src/assets/logo.png` por uma
imagem com o mesmo nome.
