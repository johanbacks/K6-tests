// carga variada
// permite que seu sistema aqueça ou redimensione automaticamente para lidar com oo trafego
// permite que você compare o tempo de resposta entre os estagios de carga baixa e carga normal
export  const options = {
  stages: [
    {duration: '5m', target: 100},
    {duration: '10m', target: 100},
    {duration: '5m', target: 0},
  ],}


