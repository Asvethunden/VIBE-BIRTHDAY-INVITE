// Interactive invitation and mobile navigation
document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const openButton = document.getElementById("openInvite");
  const closeButton = document.getElementById("closeInvite");
  const card = document.getElementById("mainInvite");
  const hint = document.getElementById("envelopeHint");
  const stage = document.getElementById("envelopeWrap");

  function openInvitation() {
    if (!envelope || !card) return;
    envelope.classList.add("open");
    if (hint) hint.style.opacity = "0";
    window.setTimeout(() => {
      card.classList.add("visible");
      card.setAttribute("aria-hidden", "false");
    }, 450);
  }
  function closeInvitation() {
    if (!envelope || !card) return;
    card.classList.remove("visible");
    card.setAttribute("aria-hidden", "true");
    window.setTimeout(() => {
      envelope.classList.remove("open");
      if (hint) hint.style.opacity = "1";
    }, 250);
  }
  if (openButton) openButton.addEventListener("click", openInvitation);
  if (closeButton) closeButton.addEventListener("click", closeInvitation);
  if (stage) stage.addEventListener("keydown", event => {
    if (event.key === "Escape") closeInvitation();
  });

  const rsvp = document.getElementById("rsvpButton");
  if (rsvp) rsvp.addEventListener("click", () => {
    window.alert("Thank you! We look forward to celebrating with you.");
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.textContent = isOpen ? "×" : "☰";
    });
  }
});
