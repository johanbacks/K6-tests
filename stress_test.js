/* perguntas para o sistema ?
 * 1. como seus sistema se comporta me condições extremas?
  2. qual é a capacidade maxima do seu sistema em termos de usuarios ou taxa de trnsferencia?
  3. o ponto de roptura do seu sistema ?
  4. o sistem se recupera sem intervencao manual apos o termino do teste de estresse ?
 */

  // oq o teste de stress consegue validar
  // rapidez com ques os mencanismos de dimensionamento automatico reage
  // se houver alguma falha durante os eventos do dimensionamento

export  const options = {
  stages: [
    {duration: '2m', target: 100},
    {duration: '5m', target: 500},
    {duration: '2m', target: 600},
    {duration: '5m', target: 300},
    {duration: '2m', target: 100},
    {duration: '5m', target: 500},
    {duration: '2m', target: 600},
    {duration: '5m', target: 300},
  ],}


