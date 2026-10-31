# LP — Seu treino com direção

Página estática independente em `/conhecendo/`. Não altera a home nem as campanhas existentes. HTML, CSS e JavaScript sem dependências, sem etapa de build, formulários ou coleta de dados. Os links de WhatsApp usam o contato já publicado no repositório. Abrir a conversa não envia a mensagem automaticamente.

## Imagens utilizadas

Três capturas já existentes em `outubrorosa/`, copiadas para `conhecendo/assets/` para tornar a LP independente da campanha: `app-lista-de-exercicios.webp`, `app-execucao-guiada.webp` e `app-registro-de-carga.webp`. Não são mockups gerados; são as mesmas capturas publicadas na LP da campanha. Não há garantia de que representem a versão mais recente. As imagens estão inteiras, com proporção preservada. A sessão com drop-set aparece como exemplo, sem prescrevê-la ao visitante.

Para atualizar, usar uma conta de demonstração, sem dados pessoais de alunos:

1. **Início do aluno:** depois do login, enquadrar saudação, treino de hoje e navegação. No código atual: `src/pages/Home.jsx`.
2. **Lista da sessão:** entrar no treino do dia e abrir o bloco Musculação/Resistido; mostrar a seleção dos exercícios.
3. **Execução:** abrir um exercício simples e capturar antes de iniciar, mostrando imagem/vídeo, repetições, carga e intervalo, sem avisos temporários cobrindo a imagem.
4. **Registro de série:** concluir uma série simples e abrir o registro de carga/repetições. Preferir um exemplo sem drop-set para facilitar a compreensão de iniciantes.
5. **Histórico/evolução:** abrir o histórico do aluno com sessões registradas e a evolução de um exercício. No código: `src/pages/client/HistoricoAluno.jsx`. Não inventar resultados para publicidade.

Priorizar capturas verticais completas, na resolução original, sem teclado ou notificações. As três imagens atuais bastam para esta versão. Início e histórico podem enriquecer uma próxima atualização após inspeção das capturas reais.

## Vídeo do Junior

Espaço pronto para vídeo curto, sem autoplay e sem controles falsos enquanto não houver arquivo. Em `pagina.js`, preencher `apresentacao.video` com a URL do MP4/WebM. `poster` aceita a imagem de capa e `legendas` um VTT em português. O player usa `controls`, `playsInline` e `preload="none"`. Em erro de carregamento volta à reserva visual.

Sugestão de gravação: 30–45 segundos, celular na horizontal (16:9), na academia, câmera na altura dos olhos e voz clara. O player também comporta gravação vertical sem cortar a imagem.

Fala sugerida:

> Você não precisa chegar à academia sabendo o que fazer. No JM Treino, você encontra seu programa, consulta cada exercício e registra o que fez. Assim, no próximo treino, tem uma referência e pode acompanhar sua evolução. E o professor continua aqui para orientar você. Quero que você tenha mais clareza para treinar e continuidade no acompanhamento. Converse com a equipe e venha conhecer na prática.

## Revisão e publicação

Conferir navegação por teclado, três escolhas da galeria, FAQ, links de WhatsApp e larguras de 320, 390, 768 e 1440 pixels. Sem JavaScript, a página e os CTAs continuam acessíveis, com links diretos às outras duas capturas.

A rota fica disponível quando esta pasta for publicada no mesmo servidor das demais LPs. O domínio canônico segue as páginas existentes (`www.jmtreino.com.br`). A inspeção do `app-treino` confirmou que as LPs são arquivos em `public/`, com entradas próprias em `vercel.json` e exclusões do service worker em `vite.config.js`. Para publicar neste domínio, sincronizar a pasta e os assets referenciados, adicionar as rotas `/conhecendo` e `/conhecendo/`, excluir `conhecendo/**` do precache e acrescentar o caminho ao `navigateFallbackDenylist`. Validar também `tests/lpsDeCampanha.test.js`. Esta entrega altera apenas `jmp-landing`; não modifica nem publica o app de produção. Criar a pasta no GitHub, por si só, não comprova o deploy.
