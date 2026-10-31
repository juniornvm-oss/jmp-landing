(() => {
  'use strict';

  // Preencher com um arquivo MP4/WebM da apresentação. Vazio mantém a reserva,
  // sem player falso nem requisição de vídeo inexistente. Legendas VTT opcionais.
  const apresentacao = { video: '', poster: '', legendas: '' };
  const telas = {
    lista: {
      arquivo: '/conhecendo/assets/app-lista-de-exercicios.webp',
      alternativa: 'Lista de exercícios da sessão no JM Treino.',
      legenda: 'Seu treino organizado, exercício por exercício.',
      altura: 1148,
    },
    execucao: {
      arquivo: '/conhecendo/assets/app-execucao-guiada.webp',
      alternativa: 'Tela de execução da cadeira flexora, com imagem do exercício, repetições e carga da sessão.',
      legenda: 'Consulte o exercício e as orientações da sua sessão.',
      altura: 1148,
    },
    registro: {
      arquivo: '/conhecendo/assets/app-registro-de-carga.webp',
      alternativa: 'Tela para confirmar a carga utilizada ao concluir uma série no JM Treino.',
      legenda: 'Registre sua carga e leve essa referência para o próximo treino.',
      altura: 1149,
    },
  };
  const imagem = document.getElementById('imagem-app');
  const descricao = document.getElementById('descricao-app');
  const botoes = document.querySelectorAll('[data-tela]');

  botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
      const tela = telas[botao.dataset.tela];
      if (!tela || !imagem || !descricao) return;
      imagem.src = tela.arquivo;
      imagem.alt = tela.alternativa;
      imagem.height = tela.altura;
      descricao.textContent = tela.legenda;
      botoes.forEach((item) => item.setAttribute('aria-pressed', String(item === botao)));
    });
  });

  if (apresentacao.video) {
    const espaco = document.getElementById('espaco-video');
    const video = document.createElement('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'none';
    video.src = apresentacao.video;
    video.setAttribute('aria-label', 'Apresentação do JM Treino com Junior Mello');
    if (apresentacao.poster) video.poster = apresentacao.poster;
    if (apresentacao.legendas) {
      const faixa = document.createElement('track');
      faixa.kind = 'captions';
      faixa.src = apresentacao.legendas;
      faixa.srclang = 'pt-BR';
      faixa.label = 'Português';
      faixa.default = true;
      video.append(faixa);
    }
    const reserva = espaco.querySelector('.video-reserva');
    video.addEventListener('error', () => espaco.replaceChildren(reserva), { once: true });
    espaco.replaceChildren(video);
  }
})();
