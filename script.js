const shareButton = document.getElementsByClassName("share-button")[0];
const shareOptions = document.getElementsByClassName("share_options")[0];
const shareIcon = document.getElementsByClassName('share_icon')[0];
shareButton.addEventListener("click", (event) => {
  event.stopPropagation();
  shareButton.classList.toggle("active");
  shareOptions.classList.toggle("active");
});
const clickHandler = () => {
  console.log("clicked");
  shareButton.classList.remove("active");
  shareOptions.classList.remove("active");
 
};

document.addEventListener("click",clickHandler);

