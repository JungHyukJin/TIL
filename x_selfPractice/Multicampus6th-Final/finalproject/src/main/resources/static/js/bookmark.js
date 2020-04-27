const mainContents = document.getElementById("main__contents");

// 레시피 리스트 우측 사진 별표 모양 북마크 기능
function addBookmark(event) {
  bookmarkDeleteModal();
  event.stopPropagation();
  const addBm = event.target;
  if (addBm.getAttribute("src") == "images/bm-logo.png") {
    addBm.setAttribute("src", "images/bm-logo-checked.png");
  } else if (addBm.getAttribute("src") == "images/bm-logo-checked.png") {
    addBm.setAttribute("src", "images/bm-logo.png");
  }
}

// 북마크 클릭 시 북마크한 레시피가 저장되어 있는 모달창을 띄움
const bookmarkOpenModal = () => {
  // 왼쪽 네비바에서 북마크 클릭 시 네비바 닫고 북마크 모달 열기
  closeNav();

  let bookmarkContents = document.createElement("div");
  bookmarkContents.className = "bookmark__modal";

  let bookmarkCloseModalOverlay = document.createElement("div");
  bookmarkCloseModalOverlay.className = "modal__overlay";
  bookmarkCloseModalOverlay.setAttribute("onclick", "bookmarkCloseModal()");

  let bookmarkContentLists = document.createElement("div");
  bookmarkContentLists.className = "bookmark-content-lists"



  let bmc = document.createElement("ul");
  bmc.className = "bookmark-modal-content";

  let bookmarkCloseModal = document.createElement("button");
  bookmarkCloseModal.innerHTML = "X";
  bookmarkCloseModal.id = "bookmark-modal__close";
  bookmarkCloseModal.setAttribute("onclick", "bookmarkCloseModal()");

  bookmarkContents.appendChild(bookmarkCloseModalOverlay);
  bookmarkContents.appendChild(bookmarkContentLists);
  bookmarkContentLists.appendChild(bmc);
  bmc.appendChild(bookmarkCloseModal);

  let frag = document.createDocumentFragment();
  frag.appendChild(bookmarkContents)
  mainContents.appendChild(frag);



  const odj = {
    //권한 설정이 되어 있을때만 fetch실행
    credentials: "same-origin",
  };
  fetch("http://localhost:8080/loadBookmark", odj).then((res) => {
    //정상 응답이 왔을 때 로직 실행
    if (res.status == 200) {
      res
        .json()
        .then((json) => printJsonList(json.recommandList));
    }
  });
}

function printJsonList(bookmarkList) {
  //json의 list를 출력하기 위한 for문
  for (i in bookmarkList) {
    //메뉴 리스트 전체적인 틀 만들기
    let menuList = document.createElement("li");
    menuList.className = "menu__list";

    //리스트 안에 각각의 레시피 틀 만들기
    let aboutMenu = document.createElement("div");
    aboutMenu.className = "about__menu";

    //제목 
    let recipeTitle = document.createElement("h1");
    //타이틀 찍어보기
    console.log(bookmarkList[i]["title"])
    recipeTitle.innerHTML = bookmarkList[i]["title"];

    //주재료
    let recipeMain = document.createElement("span");
    recipeMain.id = "recipe-main-ingredients";
    console.log(bookmarkList[i]["main"])
    recipeMain.innerHTML = `<span style="font-weight:bold";>ㅇ주재료:<br></span>` + bookmarkList[i]["main"].replace("[", "").replace("]", "");

    //부재료
    let recipeMinor = document.createElement("span");
    recipeMinor.id = "recipe-minor-ingredients";
    console.log(bookmarkList[i]["minor"])
    recipeMinor.innerHTML = `<span style="font-weight:bold";>ㅇ부재료:<br></span>` + bookmarkList[i]["minor"].replace("[", "").replace("]", "");

    //레시피 리스트 우측에 완성 이미지 틀, 내용
    let recipeImgContainer = document.createElement("div")
    recipeImgContainer.className = "recipe-img-container"
    let recipeImgCover = document.createElement("div")
    recipeImgCover.className = "recipe-img-cover"
    let recipeImg = document.createElement("img");
    recipeImgContainer.appendChild(recipeImgCover);
    recipeImgCover.appendChild(recipeImg)
    recipeImg.src = bookmarkList[i]["img_complete"];
    recipeImg.className = "menu__list-image";

    //북마크 별표 틀 만들기
    let bmImgCover = document.createElement("div");
    bmImgCover.className = "bm-img-cover"
    let bmImg = document.createElement("img");
    bmImgCover.appendChild(bmImg);
    bmImg.className = "bookmark-image"
    bmImg.src = "/images/bm-logo-checked.png";
    bmImg.value = bookmarkList[i]["id"];
    bmImg.addEventListener("click", addBookmark_);
    recipeImgContainer.appendChild(bmImgCover);

    //함수 안에서 생성한 각각의 틀을 전체를 포함하는 틀에 추가

    aboutMenu.appendChild(recipeTitle);
    aboutMenu.appendChild(recipeMain);
    aboutMenu.appendChild(recipeMinor);
    menuList.appendChild(aboutMenu);
    menuList.appendChild(recipeImgContainer);

    //만든 전체적인 HTML요소들을 가상 공간에 저장
    let frag = document.createDocumentFragment();
    frag.appendChild(menuList);

    //가상 공간에 저장된 것을 한번에 페이지에 뿌린다
    let bmc = document.querySelector(".bookmark-modal-content")
    bmc.appendChild(frag);

    //리스트에서 메뉴 클릭시 레시피결과 페이지로 이동
    menuList.href = "/recipe" + "/" + bookmarkList[i]["id"].toString();
    menuList.addEventListener("click", function event() {
      location.href = this.href;
    });
  };
}

function addBookmark_(event) {
  event.stopPropagation();

  const odj = {
    method: 'POST',
    body: JSON.stringify({
      userID: 0,
      recipeID: this.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    credentials: 'same-origin'
  };
  //fetch를 사용할때 url과 odj로 GET ,POST 메서드를 설정해 준다.
  fetch("http://localhost:8080/insertBookmark", odj)
    //reponse를 가져와서
    .then(res => {
      //status가 200이라면
      if (res.status == 200) {
        //servlet에서 return된 json값을 가져 온다.
        res
          .json()
          .then(json => console.log(json.recipeIDList));
        // .then(loadBookmark(event));
      }
    })
  bookmarkDeleteModal(event);
}

//오버레이, X버튼 누르면 북마크 닫기
const bookmarkCloseModal = () => {
  let bookmarkContents = document.querySelector(".bookmark__modal");
  mainContents.removeChild(bookmarkContents);
};

function bookmarkDeleteModal(e) {
  let aa = e.target
  let pn = aa.parentNode.parentNode.parentNode;
  pn.remove();
  let bmc = document.getElementsByTagName("ul");
  bmc = "";
}