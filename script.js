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
      const dish = dishInput ? dishInput.value : "Order";
      const subject = `Order for ${dish}`;
      const body = `I would like to order: ${dish}%0D%0A%0D%0APlease contact me to confirm.`;
      // open default mail client with prefilled subject/body
      window.location.href = `mailto:medhanitmedi344@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
});
