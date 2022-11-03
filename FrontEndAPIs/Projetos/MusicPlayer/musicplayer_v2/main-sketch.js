//Selecionar elemento principal que encapsula o leitor

//Selecionar o elemento onde mostra o nome da música

//Selecionar o elemento onde mostra o nome do autor

//Selecionar o elemento de audio que está escondido

//Selecionar o elemento onde mostra a imagem da capa

//Selecionar o elemento que agrupa os elementos que controlam o volume

//Selecionar o botão de "mute" através do elemento que agrupa os elementos de volume
//Selecionar o botão de "unmute" através do elemento que agrupa os elementos de volume

//Selecionar elementos da barra de volume
//Selecionar elementos o fundo da barra de volume

//Selecionar elementos da barra de progresso da música
//Selecionar elementos o fundo da barra de progresso do audio

//Selecionar botão de play
//Selecionar botão de pause
//Selecionar botão de avançar para a próxima música
//Selecionar botão de retroceder uma música

//Variável para controlar se estamos em modo de play ou pause (Inicializa em pause)
//Variável para guardar a música em que estamos da lista de músicas (Inicializa na primeira)

//Inicializar o reprodutor de música com informação através de uma função (Por exemplo: setAudioPlayerInfo)

//Pintar a barra de volume completa, ou seja a 100% 

//Adicionar evento de scroll para alterar o volume na barra de volume

//Adicionar evento de click no botão de mute e unmute

//Adicionar evento de click no botão de play

//Adicionar evento de click no botão de pause


//Adicionar evento de click no botão de música seguinte

//Adicionar evento de click no botão de música anterior

//Adicionar eventos no elemento Audio, nomeadamente
//timeupdate - Sempre que a música avança no tempo
//durationchange - Sempre que a duração da música muda

//volumechange - Sempre que o volume muda
    //Atualizar o comprimento da barra de volume


//Função que inicializa o reprodutor de música desenhado no ecrã recebendo o indice da música a carregar
    //Escrever no ecrã o nome da música
    //Escrever no ecrã o nome do artista
    //Adicionar a imagem de fundo no elemento do cd
    //Dar reset na duração do elemento de audio
    //Alterar a fonte (src) do elemento de audio
    //Bloquear o botão de avançar caso se esteja na ultima música da lista
    //Bloquear o botão de retroceder caso se esteja na primeira música
    //Carregar o elemento de audio


//Event Handler para o timeupdate e o durationchanged que pinta o progresso da barra de progresso da música

//Event Handler para passar para a música seguinte
  //Verificar se a música atual é inferior ao comprimento da nossa lista de músicas - 1
    //Alterar o estado de Play/Pause
    //Adicionar 1 na posição da música atual e atualizar o leitor com a função de inicialização 

//Event Handler para passar para a música anteriror
  //Verificar se a música atual é superior a 0 (primeira música)
    //Alterar o estado de Play/Pause
    //Subtrair 1 na posição da música atual e atualizar o leitor com a função de inicialização 

//Event Handler para alterar o volume ao rodar o scroll na barra de volume
  //Se rodar para cima aumentar o volume do elemento de audio
  //Senao reduzir ao volume do elemento de audio

//Event handler para alternar entre mute e unmuted
  //alternar a propriedade muted do elemento de audio
  //Esconder o elemento que agrupa os controlos de volume
  //Mostrar o botão de unmute

//Event handler para alternar entre play e pause
  //alternar a estado de play/pause da aplicação
  //parar animação do cd no ecrã
  //esconder or mostrar o botão de play
  //esconder or mostrar o botão de pause
  //alterar entre o invocar o método de pause ou play do elemento de audio