import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

//firebase 초기화
const app = initializeApp(firebaseConfig);
// Google 공급자 개체를 사용하여 Firebase에 인증합니다.
// 팝업 창을 열거나 로그인 페이지로 리디렉션하여 사용자에게 Google 계정으로
// 로그인하도록 요청할 수 있습니다. 리디렉션 방법은 모바일 장치에서 선호됩니다
const auth = getAuth();
// google 공급자 개체의 인스턴스 만들기
const provider = new GoogleAuthProvider();
// firebase 실시간 데이터베이스 사용, admin관련 작업 전에 필요
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider);
}

export function logout() {
  signOut(auth);
}

// 인증 상태 관찰자 설정 및 사용자 데이터 가져오기
export function onUserStateChange(callback) {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

// firebase db에 있는 user 데이터 한번 읽어오기
async function adminUser(user) {
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log('1', snapshot.val());
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

// 클라우디너리에 이미지 등록 후 url과 product 받아와 firebase에 업데이트
export async function addNewProduct(product, imageUrl) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    imageUrl,
    options: product.options.split(","),
  });
}

// firebase db에 있는 데이터 가져오기.
export async function getProducts() {
  return get(ref(database, "products")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return [];
    });
}

// cart 제품 정보 가져오기
export async function getCart(userId) {
  return get(ref(database, `cart/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

// cart에 제품 추가하기
export async function addOrUpdateCart(userId, product) {
  return set(ref(database, `cart/${userId}/${product.id}`), product);
}

// cart에 제품 삭제하기
export async function removeCart(userId, productId) {
  return remove(ref(database, `cart/${userId}/${productId}`));
}
