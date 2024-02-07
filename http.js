import http from "k6/http";


export default function () {
  http.get("http://test.k6.io");
  /*   http.post("http://localhost:3000/", { name: "John Doe" });
  http.put("http://localhost:3000/");
  http.delete("http://localhost:3000/"); */
}



/* export default function () {
  const data = { username: 'username', password: 'password' }
  let res = http.post('https://myapi.com/login/', data)

  check(res, { 'success login': (r) => r.status === 200 })

  sleep(0.3)
} */