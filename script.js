let joinbutton = window.document.getElementById("joinbutt");
let saints = window.document.getElementById("saintshidden");
let worship = window.document.getElementById("worshiphidden");
let saintsbutt = window.document.getElementById("saintsbutt");
let worshipbutt = window.document.getElementById("worshipbutt");

joinbutton.addEventListener("click", () => {
  // e.preventDefault()
  location.href = "contact.html";
});
saintsbutt.addEventListener("click", () => {
  saints.style.display = "block";
});
worshipbutt.addEventListener("click", () => {
  worship.style.display = "block";
});
