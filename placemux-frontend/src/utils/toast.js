export const toast = (msg) => {
  const el = document.createElement("div");

  el.innerText = msg;

  el.style.position = "fixed";
  el.style.bottom = "20px";
  el.style.right = "20px";
  el.style.padding = "12px 16px";
  el.style.background = "#111";
  el.style.color = "#fff";
  el.style.borderRadius = "10px";
  el.style.zIndex = 9999;
  el.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 2000);
};