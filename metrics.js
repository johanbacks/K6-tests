// k6 já possui metricas integradas
/* 4 tipos de metricas
  -Contador
  -Medidores
  -Taxas
  -Tendencias
*/

// http_req_tls_handshaking - quanto tempo esta demorando a conectar o servidor

import http from "k6/http";
import { check } from "k6";
import { Counter } from "k6/metrics";
import { Gauge } from "k6/metrics";
import { Rate } from "k6/metrics";
import { Trend } from "k6/metrics";


export const options = {
  vus: 1,
  duration: "3s",
}
//contatodor
const chamadas = new Counter('quantidade_de_chamadas');
//medidor
const myGauge = new Gauge('tempo_bloqueado');
//taxa
const myRate = new Rate('taxa_req_200');
//tendencia
const myTrend = new Trend('taxa_de_espera');

export default function () {
 const req =  http.get("http://test.k6.io");
 chamadas.add(1);
 // timings - impoformação sobre o tempo
 myGauge.add(req.timings.blocked);
 myRate.add(req.status === 200);
 myTrend.add(req.timings.waiting);
}
