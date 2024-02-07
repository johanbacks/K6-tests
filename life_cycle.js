// 1.Inicialização
import sleep from 'k6';

// 2.configuração
export const option = {
  vus: 1,
  duration: '1m',
}

// 3.execução // codigo vu
export default function () {
  console.log( 'teste' );
  sleep(1);
}

// 4.desmontagem

export function teardown(data) {
  console.log( 'desmontando' );
}