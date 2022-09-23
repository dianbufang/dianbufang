let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo.png") {
    myImage.setAttribute("src", "images/ren.png");
  } else {
    myImage.setAttribute("src", "images/logo.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "欢迎来到小方凳的个人网站，" + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "欢迎来到小方凳的个人网站，" + storedName;
}
myButton.onclick = function () {
  setUserName();
};
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎来到小方凳的个人网站，" + myName;
  }
}
let mail = document.querySelector("dive");
mail.onclick = function () {
  fun();
};
function fun() {
  alert("邮箱：928977495@qq.com");
}
