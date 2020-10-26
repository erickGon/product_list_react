const serverUrl = "https://front-test-api.herokuapp.com/api";

async function getList() {
  const res = await fetch(`${serverUrl}/product`, {
    method: "GET",
  });
  const body = await res.json();
  return body;
}

async function getDetail(id) {
  const res = await fetch(`${serverUrl}/product/${id}`, {
    method: "GET",
  });
  const body = await res.json();
  return body;
}

async function addProductToCart(product) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const res = await fetch(`${serverUrl}/cart`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: myHeaders,
  });
  const body = await res.json();
  return body;
}

export { getList, getDetail, addProductToCart };
