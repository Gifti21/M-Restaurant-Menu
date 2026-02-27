document.addEventListener("DOMContentLoaded", () => {
  // smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // intercept order forms and compose mailto with dish name
  document.querySelectorAll("form.order-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const dishInput = form.querySelector('input[name="dish"]');
      const dish = dishInput ? dishInput.value : "Item";
      const priceText = findPrice(form);
      let body = `I would like to order: ${dish}`;
      if (priceText) body += `\nPrice: ${priceText}`;
      body += `\n\nPlease contact me to confirm pickup/delivery and payment.`;
      const subject = `Order for ${dish}`;
      const mailto = `mailto:medhanitmedi344@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      showToast("Opening your mail app...");
      // open mail client
      window.location.href = mailto;
    });
  });

  // helper: find a price string near the form (look for .price or a paragraph containing 'price')
  function findPrice(form) {
    const container = form.closest("article, section, div");
    if (!container) return "";
    const priceEl = container.querySelector(".price");
    if (priceEl) return priceEl.textContent.trim();
    const ps = container.querySelectorAll("p");
    for (const p of ps) {
      if (/price/i.test(p.textContent)) return p.textContent.trim();
    }
    return "";
  }

  // small transient toast so users know the mail client will open
  function showToast(message, ms = 2200) {
    const toast = document.createElement("div");
    toast.textContent = message;
    Object.assign(toast.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(0,0,0,0.85)",
      color: "#fff",
      padding: "10px 14px",
      borderRadius: "6px",
      zIndex: 10000,
      fontSize: "14px",
      opacity: "0",
      transition: "opacity 160ms ease-in-out",
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => (toast.style.opacity = "1"));
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 200);
    }, ms);
  }

  // highlight active nav link while scrolling
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const navLinks = Array.from(document.querySelectorAll("nav ul li a"));
  function updateActiveLink() {
    const offset = window.scrollY + 120;
    let activeId = "";
    for (const sec of sections) {
      if (
        sec.offsetTop <= offset &&
        sec.offsetTop + sec.offsetHeight > offset
      ) {
        activeId = sec.id;
        break;
      }
    }
    navLinks.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === `#${activeId}`),
    );
  }
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
});
