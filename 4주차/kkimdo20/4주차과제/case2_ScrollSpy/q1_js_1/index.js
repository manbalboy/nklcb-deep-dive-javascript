import "./style.css";

const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);
const offsetTops = contentItems.map((elem) => {
  const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
  return [ofs - clh / 2 , ofs + clh / 2]; // 어느 것이 더 큰지 확인하는 절차.
});
console.log(offsetTops)
var newIndex = 0;
window.addEventListener("scroll", (e) => {
  const { scrollTop } = e.target.scrollingElement;
  // do something

  const Index = offsetTops.findIndex(([a,b])=>{
    return(
    scrollTop >= a && scrollTop < b
    )
  })
  navItems.map((a,i)=>{
    (Index !== i)
    ? a.classList.remove('on')
    : a.classList.add('on');
  })


  // if(newIndex!=Index){ 
  //  contentItems[Index].scrollIntoView(true);
  // }
   
  // newIndex = Index;
});

navElem.addEventListener("click", (e) => {
  const targetElem = e.target;
  if (targetElem.tagName === "BUTTON") {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
});

