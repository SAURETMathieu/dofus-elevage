export function updateType(element, type){
  const typeToUpdate = element.querySelector(".type");
  const lockIcon = typeToUpdate.querySelector(".lock-icon");
  lockIcon.classList.remove("fa-lock", "fa-lock-open");
  
  if (type === "private") {
    lockIcon.classList.add("fa-lock");
    lockIcon.style.color = "yellow";
  } else {
    lockIcon.classList.add("fa-lock-open");
    lockIcon.style.color = "green";
  }
}