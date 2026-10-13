const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const $target = $(".title");

setInterval(() => {
  $target.addClass(CLASSNAME);
  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT * 2);


// モーダルを開く関数
function openModal(element) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("fullImage");
  const modalCaption = document.getElementById("modalCaption");
  
  modal.style.display = "flex";
  modalImg.src = element.src; // 画像のURLをセット
  modalCaption.textContent = element.getAttribute("data-caption"); // ひとことをセット
}

// モーダルを閉じる関数
function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// ポップアップを開く関数
function openWorksModal(element) {
  const modal = document.getElementById("worksModal");
  const modalImg = document.getElementById("worksModalImage");
  const modalCaption = document.getElementById("worksModalCaption");
  
  modal.style.display = "flex";
  
  // サムネイル画像ではなく、data-fullに入っている「全体スクショ」を表示
  modalImg.src = element.getAttribute("data-full"); 
  
  // data-captionのテキスト（ひとこと）を表示
  modalCaption.textContent = element.getAttribute("data-caption");
}

// ポップアップを閉じる関数
function closeWorksModal() {
  const modal = document.getElementById("worksModal");
  modal.style.display = "none";
}
