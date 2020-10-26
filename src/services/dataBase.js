import Dexie from "dexie";

const databaseName = "inditex";

function setData(data) {
  const db = createDataBase();
  db.items.bulkPut(data);
  db.sessions.put({ id: 1, date: new Date() });
}

function setDataCart(count) {
  const currenCount = parseInt(localStorage.getItem("cartCount"));
  let counter = (currenCount ? currenCount : 0) + count;
  localStorage.setItem("cartCount", counter);
}

function getDataCart() {
  return localStorage.getItem("cartCount");
}

async function getData() {
  const db = new Dexie(databaseName);
  db.version(1).stores({
    items: "id, brand, model, price, imgUrl",
    sessions: "id, date",
    cart: "id, count",
  });

  const items = await db.items.toArray();
  const session = await db.sessions.get(1);

  const getNew = (await deteleData()) || items.length <= 0;

  return { session, items, getNew };
}

function createDataBase() {
  const db = new Dexie(databaseName);
  db.version(1).stores({
    items: "id, brand, model, price, imgUrl",
    sessions: "id, date",
  });
  return db;
}

async function deteleData() {
  let pass = false;
  const db = new Dexie(databaseName);
  db.version(1).stores({
    items: "id, brand, model, price, imgUrl",
    sessions: "id, date",
  });

  const session = await db.sessions.get(1);

  if (session) {
    const sessionDate = Date.parse(session.date);

    const currentTime = Date.now();

    if (currentTime - sessionDate <= 0) {
      db.delete();
      localStorage.removeItem("cartCount");
      pass = true;
    }
  } else {
    pass = true;
  }
  return pass;
}

export { setData, getData, setDataCart, getDataCart };
