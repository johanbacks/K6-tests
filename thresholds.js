// limites

import http from "k6/http";
import { check } from "k6";


export const options = {
  vus: 1,
  duration: "3s",
  thresholds: {
    http_req_failed: ["rate<0.01"],
    // quando você precisa que o teste para quando um threshold falhe
    http_req_duration: [{threshold: "p(95)<200", abortOnFail: true}],
    // caso execulte em algum provedor clound/pipeline delayAbortEval
    // http_req_duration: [{threshold: "p(95)<200", abortOnFail: true, delayAbortEval: "10s"}],
    http_req_duration: ["p(95)<200"],
    checks: ["rate<0.99"],
  }
}

export default function () {
 const req =  http.get("http://test.k6.io");

 check(req, {
    "status is 200": (r) => r.status === 200
 })
}
