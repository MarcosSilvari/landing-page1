# ☕ Aurora — café & afeto

Landing page de uma cafeteria fictícia, criada como projeto de estudo de front-end. O layout foi construído a partir de um protótipo no Figma, usando apenas **HTML, CSS e JavaScript puro**, sem frameworks nem bibliotecas.

**LINK SITE:**

link: https://cafeteria-amber-two.vercel.app/

> **Projeto demonstrativo.** A Aurora é uma marca fictícia: endereço, horários, cardápio, depoimentos e imagens são ilustrativos.

<img width="1919" height="928" alt="11" src="https://github.com/user-attachments/assets/e16c5a46-87dd-4ae2-bbac-ce73941b0eff" />
<img width="1920" height="910" alt="13" src="https://github.com/user-attachments/assets/94635b0b-edf6-4d31-845e-cb457b16f0f2" />
<img width="1920" height="920" alt="12" src="https://github.com/user-attachments/assets/b0c1aa88-ddf6-45c6-a0ba-b3b45cba7bff" />


## ✨ Funcionalidades

- Layout fiel ao protótipo do Figma, com 10 seções (do header ao rodapé)
- **Tema claro e escuro**, com botão para alternar e escolha salva no navegador
- Primeira visita segue o tema do sistema (`prefers-color-scheme`)
- **Responsivo**: adapta-se a desktop, tablet e celular
- Header fixo no topo e rolagem suave entre as seções
- Respeita a preferência de movimento reduzido (`prefers-reduced-motion`)
- Textos alternativos nas imagens e `aria-label` nos botões de ícone

## 🧱 Seções da página

1. **Header**: logo, menu de navegação e botão de chamada
2. **Hero**: título, texto de apresentação e botões de ação
3. **Nossa história**: foto, texto e frase de destaque
4. **Cardápio**: quatro itens com foto, descrição e preço
5. **Nosso jeito de fazer**: três pilares da marca sobre fundo escuro
6. **O espaço**: galeria de fotos e lista de comodidades
7. **Depoimentos**: três avaliações de clientes
8. **Visite a Aurora**: endereço, horários e foto da fachada
9. **Chamada final**: convite para visitar a cafeteria
10. **Rodapé**: links, contato e avisos

## 🛠️ Tecnologias

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura semântica (`header`, `main`, `section`, `article`, `figure`, `footer`) |
| CSS3 | Variáveis, Grid, Flexbox, `clamp()` e media queries |
| JavaScript | Alternância de tema, DOM e `localStorage` |
| Google Fonts | **Lora** (títulos) e **DM Sans** (textos) |

## 📁 Estrutura do projeto

```
aurora/
├── index.html
├── style.css
├── script.js
├── README.md
└── img/
    ├── hero.jpg
    ├── sobre-barista.jpg
    ├── cardapio-coado.jpg
    ├── cardapio-cappuccino.jpg
    ├── cardapio-pao-de-queijo.jpg
    ├── cardapio-bolo-de-laranja.jpg
    ├── cafeteria-salao.jpg
    ├── cafe-livro.jpg
    └── fachada.jpg
```

## 🚀 Como executar

Não é preciso instalar nada.

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/aurora.git
   ```
2. Abra a pasta do projeto.
3. Dê um duplo clique em `index.html` para abrir no navegador.

Se preferir, use a extensão **Live Server** do VS Code para ver as alterações em tempo real.

## 🎨 Design

### Paleta de cores

| Cor | Hexadecimal | Uso |
| --- | --- | --- |
| Creme | `#F7F2E9` | Fundo da página |
| Creme claro | `#FFFCF6` | Cards e cardápio |
| Bege | `#EDE3D5` | Seção de depoimentos |
| Marrom | `#34251F` | Textos e seções escuras |
| Terracota | `#A84F36` | Botões, destaques e rodapé de chamada |

No tema escuro, os fundos e o texto são redefinidos por variáveis CSS, e o terracota dos textos pequenos fica mais claro para manter o contraste.

### Tipografia

- **Lora**: títulos e citações
- **DM Sans**: textos, menu e botões

## 🌗 Como funciona o tema escuro

1. As cores do CSS ficam em variáveis (`--fundo`, `--texto`, `--acento`…) declaradas no `:root`.
2. O bloco `[data-tema="escuro"]` redefine essas variáveis com a paleta escura.
3. O `script.js` coloca ou remove `data-tema="escuro"` na tag `<html>` quando o botão é clicado.
4. A escolha é guardada no `localStorage` e reaplicada na próxima visita.

## 📱 Responsividade

| Largura | O que muda |
| --- | --- |
| até 1100px | Cardápio em 2 colunas; pilares da marca em 1 coluna |
| até 900px | Seções de 2 colunas viram 1; o menu de navegação é ocultado |
| até 600px | Cardápio em 1 coluna; botões ocupam a largura toda |

## 📚 O que pratiquei neste projeto

- Transformar um design do Figma em código
- Organizar o CSS em seções e variáveis reutilizáveis
- Criar layouts com CSS Grid e Flexbox
- Usar `clamp()` para tamanhos de fonte e espaçamentos fluidos
- Construir um layout responsivo com media queries
- Manipular o DOM e usar o `localStorage` com JavaScript

## 🔮 Ideias para evoluir

- [ ] Menu hambúrguer para telas pequenas
- [ ] Trocar os emojis por ícones (Bootstrap Icons ou SVG)
- [ ] Faixa de destaques e ícones da seção "Nosso jeito de fazer"
- [ ] Animações suaves ao rolar a página
- [ ] Formulário de reserva de mesa

## 👤 Autor

**Marcos Silvari** — estudante de Análise e Desenvolvimento de Sistemas.

---

Feito com café e afeto. ☕
