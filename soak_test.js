// teste de imensão ou soak test --> confiabilidade em longos periodos de tempo (dias em poucas horas)+

/*
- o sistema não sofre de bugs ou vazamentos de memoria
- verifique se as reinicializações inesperadas do aplicativo não perdem solicitações
- encontre bugs relacionados a condições de corrida que aparecem esporadicamente
- certificar que seu banco de dados não esgote
- certificar que os logs não esgote o armazenamento **
- certificar que os serviços ecternos dos quais você depende não parem de funcionar
*/


export  const options = {
  stages: [
    {duration: '2m', target: 500},
    {duration: '3h56m', target: 500},
    {duration: '2m', target: 0},
  ],}

