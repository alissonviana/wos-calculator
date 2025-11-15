# Without Survival - Calculadora Confronto da Aliança

Calculadora especializada para o evento **Confronto da Aliança** do jogo **Without Survival**.

## 🎮 Sobre

Esta é uma ferramenta web desenvolvida em HTML, CSS e JavaScript puro que permite calcular quantos pontos você pode ganhar no evento Confronto da Aliança baseado nos recursos que possui. A calculadora usa um **algoritmo inteligente** para distribuir seus recursos de forma otimizada entre os 6 dias do evento.

## ✨ Características Principais

- ✅ **Distribuição inteligente**: Balanceia recursos por eficiência de pontos de aliança
- ✅ **Cálculo de pontos otimizado**: Maximiza pontos para todos os dias
- ✅ **Suporta todos os 6 dias** do evento com pontos de aliança variáveis
- ✅ **Interface responsiva e intuitiva** com paleta azul temática
- ✅ **Página estática**: Funciona sem servidor (GitHub Pages ready)
- ✅ **Compatível com todos os navegadores modernos**
- ✅ **Cálculo automático em tempo real** conforme você digita
- ✅ **Ícone do evento** com animação flutuante
- ✅ **Tooltips compactos** para melhor visualização

## 🎯 Estratégia de Distribuição

A calculadora não apenas divide seus recursos igualmente - ela é **inteligente**:

1. **Calcula eficiência** de cada dia: `Pontos de Aliança / Pontos Atuais`
2. **Prioriza dias com melhor retorno**: Dia 6 (4 pontos aliança) > Dias 3,4,5 (2 cada) > Dias 1,2 (1 cada)
3. **Equilibra a pontuação**: Garante que todos os 6 dias tenham pelo menos alguns pontos
4. **Nunca concentra tudo no último dia**: Evita perder se a aliança adversária vencer em quantidade de dias

**Exemplo:**
- Se você tem muitos Fragmentos Míticos (disponível dias 2 e 6):
  - Se Dia 2 tem poucos pontos e Dia 6 tem muitos → mais para o Dia 2
  - Se ambos têm pouco → distribui igualmente
  - Garante equilibrio na pontuação de aliança

## 📊 Recursos Suportados

A calculadora suporta cálculos para:
- 🔥 Cristais de Fogo (Refinado e Normal)
- ✨ Fragmentos de Cristal
- ⭐ Fragmentos de Herói (Raro, Épico, Mítico)
- ⏱️ Aceleradores
- 🔮 Sigilos de Especialista
- 📖 Livros do Conhecimento
- 🎁 Amuletos do Chefe
- 🐾 Marcas Selvagens (Comum e Avançada)
- 🐺 Avanços de Animal
- ⚡ Essências e Ferramentas de Equipamento de Herói
- ⚒️ Mithril
- 💎 Gemas
- 🥩 Carne, 🪵 Madeira, ♠️ Carvão, ⚒️ Ferro
- 🚚 Caminhões (automático: 4 escoltar + 4 atacar = 80.000 pontos/dia)

## 🚀 Como Usar

### Opção 1: Online (Recomendado)
Acesse diretamente:
`https://seu-usuario.github.io/wos`

### Opção 2: Localmente
1. **Clone o repositório** (ou baixe os arquivos)
   ```bash
   git clone https://github.com/seu-usuario/wos.git
   cd wos
   ```

2. **Abra o arquivo `index.html` no navegador**
   - Duplo clique em `index.html`, ou
   - Arraste o arquivo para o navegador

### Como Usar a Calculadora

1. **Digite o TOTAL** de cada recurso que você possui
2. **A calculadora recomenda automaticamente** como distribuir entre os dias
3. **Veja os pontos estimados** por dia e o total geral
4. **Hover sobre ícones** na distribuição para ver nomes completos (tooltips)

## 📦 Deploy no GitHub Pages

### Passo 1: Criar um repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em "New repository"
3. Nomeie como `wos` (ou outro nome de sua preferência)
4. Selecione "Public" para que qualquer um possa acessar
5. Clique em "Create repository"

### Passo 2: Fazer push do código

```bash
# Navegar até a pasta do projeto
cd D:\Repository\wos

# Inicializar git (se ainda não inicializou)
git init

# Adicionar todos os arquivos
git add .

# Fazer o commit inicial
git commit -m "Calculadora Confronto da Aliança v2.0"

# Adicionar o repositório remoto (substitua seu-usuario pelo seu usuário do GitHub)
git remote add origin https://github.com/seu-usuario/wos.git

# Enviar para o GitHub
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No repositório do GitHub, vá em **Settings**
2. Na seção lateral, clique em **Pages**
3. Em "Source", selecione **main** branch
4. Clique em **Save**
5. Aguarde alguns minutos
6. Seu site estará disponível em: `https://seu-usuario.github.io/wos`

## 📁 Estrutura do Projeto

```
wos/
├── index.html      # Estrutura HTML
├── style.css       # Estilos CSS
├── script.js       # Lógica JavaScript (algoritmo inteligente)
├── README.md       # Documentação
└── .gitignore      # Arquivos a ignorar
```

## 🎨 Customização

### Cores
Para customizar as cores, edite as variáveis de cor em `style.css`:

```css
/* Paleta azul (padrão) */
background: linear-gradient(135deg, #0d1b3a 0%, #051030 100%);
border: 2px solid #2196F3;
color: #64B5F6;
```

### Pontos de Aliança por Dia
Os pontos de aliança por dia estão definidos em `script.js`:

```javascript
const alliancePointsPerDay = { 1: 1, 2: 1, 3: 2, 4: 2, 5: 2, 6: 4 };
```

## 🐛 Troubleshooting

### A calculadora não funciona?
- Verifique se todos os 3 arquivos (index.html, style.css, script.js) estão na mesma pasta
- Limpe o cache do navegador (**Ctrl+Shift+Delete**)
- Tente em outro navegador
- Abra o Console (F12) e procure por erros

### Os números aparecem cortados na distribuição?
- Limpe o cache do navegador (**Ctrl+Shift+Delete**)
- Recarregue com **Ctrl+F5**
- Os tooltips mostram os valores completos ao passar o mouse

### GitHub Pages não está funcionando?
- Aguarde 5-10 minutos após ativar (tempo de propagação)
- Verifique se o arquivo `index.html` está na raiz do repositório
- Certifique-se de que o repositório está **público**
- Acesse `https://seu-usuario.github.io/wos` (não `https://seu-usuario.github.io/wos/`)

## 💡 Dicas de Uso

1. **Maximize pontos de aliança**: Priorize gastar em dias com mais valor de aliança quando possível
2. **Todos os dias importam**: A calculadora garante que você pontue em todos os 6 dias - isso é crucial para vencer
3. **Caminhões são automáticos**: Não precisa digitar - a calculadora já conta 80.000 pontos/dia (4 escoltar + 4 atacar)
4. **Use tooltips**: Passe o mouse sobre os ícones na distribuição para ver nomes completos dos recursos

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

## 👨‍💻 Autor

Desenvolvido para a comunidade de Without Survival.

---

**Divirta-se calculando seus recursos! 🏕️⚔️**
