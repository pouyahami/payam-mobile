(() => {
  const products = window.PAYAM_PRODUCTS || [];
  const grid = document.querySelector("#productGrid");
  const emptyBox = document.querySelector("#emptyBox");
  const resultLabel = document.querySelector("#resultLabel");
  const brandRow = document.querySelector("#brandRow");
  const searchPanel = document.querySelector("#searchPanel");
  const liveSearch = document.querySelector("#liveSearch");
  const menuBtn = document.querySelector("#menuBtn");
  const nav = document.querySelector("#nav");
  const overlay = document.querySelector("#overlay");
  const modal = document.querySelector("#modal");
  const modalContent = document.querySelector("#modalContent");
  const year = document.querySelector("#year");

  let brand = "all";
  let query = "";

  const fa = (n) => String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
  if (year) year.textContent = fa(new Date().getFullYear() - 621);

  function filtered() {
    return products.filter((p) => {
      const okBrand = brand === "all" || p.brand === brand;
      const hay = `${p.name} ${p.nameFa} ${p.brand} ${p.chip}`.toLowerCase();
      const okQ = !query || hay.includes(query);
      return okBrand && okQ;
    });
  }

  function render() {
    const list = filtered();
    if (resultLabel) resultLabel.textContent = fa(list.length) + " مدل نمایش داده شده · قیمت روز با تماس";
    if (emptyBox) emptyBox.hidden = list.length > 0;
    if (!grid) return;
    grid.innerHTML = list.map((p) => `
      <article class="card" data-id="${p.id}">
        <div class="card-img">
          ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.opacity=.25">
        </div>
        <div class="card-body">
          <div class="card-brand">${p.brand.toUpperCase()}</div>
          <h3>${p.name}</h3>
          <p class="card-spec">${p.ram} رم · ${p.storage} · ${p.chip}</p>
          <div class="card-foot">
            <span class="price">تماس بگیرید</span>
            <button class="card-btn" type="button" data-detail="${p.id}">جزئیات</button>
          </div>
        </div>
      </article>
    `).join("");
  }

  function openModal(p) {
    modalContent.innerHTML = `
      <div class="modal-top">
        <div class="modal-img"><img src="${p.img}" alt="${p.name}" onerror="this.style.opacity=.25"></div>
        <div>
          <div class="muted">${p.brand.toUpperCase()}</div>
          <h3>${p.name}</h3>
          <div class="muted">${p.nameFa}</div>
          <p class="price" style="margin-top:10px">قیمت روز: تماس بگیرید</p>
        </div>
      </div>
      <div class="specs">
        <div class="spec"><span>پردازنده</span><b>${p.chip}</b></div>
        <div class="spec"><span>رم</span><b>${p.ram}</b></div>
        <div class="spec"><span>حافظه</span><b>${p.storage}</b></div>
        <div class="spec"><span>صفحه</span><b>${p.screen}</b></div>
        <div class="spec"><span>دوربین</span><b>${p.camera} مگاپیکسل</b></div>
        <div class="spec"><span>باتری</span><b>${p.battery} میلی‌آمپر</b></div>
        <div class="spec"><span>سیستم‌عامل</span><b>${p.os}</b></div>
        <div class="spec"><span>موجودی</span><b>استعلام تلفنی</b></div>
      </div>
      <div class="modal-actions">
        <a class="btn btn-primary" href="tel:09127144988">تماس ۰۹۱۲۷۱۴۴۹۸۸</a>
        <a class="btn btn-outline" href="https://wa.me/989127144988?text=${encodeURIComponent("سلام، درباره " + p.name + " سوال داشتم")}" target="_blank" rel="noopener">واتساپ</a>
      </div>
    `;
    modal.hidden = false;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    overlay.hidden = true;
    document.body.style.overflow = "";
  }

  brandRow?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-brand]");
    if (!btn) return;
    brand = btn.dataset.brand;
    brandRow.querySelectorAll(".brand-chip").forEach((c) => c.classList.toggle("active", c === btn));
    render();
  });

  document.querySelector("#searchBtn")?.addEventListener("click", () => {
    const open = searchPanel.hidden;
    searchPanel.hidden = !open;
    if (open) liveSearch?.focus();
  });

  liveSearch?.addEventListener("input", () => {
    query = liveSearch.value.trim().toLowerCase();
    render();
  });

  grid?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-detail]");
    const card = e.target.closest("[data-id]");
    const id = btn?.dataset.detail || card?.dataset.id;
    const p = products.find((x) => x.id === id);
    if (p) openModal(p);
  });

  document.querySelector("#modalClose")?.addEventListener("click", closeModal);
  overlay?.addEventListener("click", closeModal);

  menuBtn?.addEventListener("click", () => nav?.classList.toggle("open"));
  nav?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

  render();
})();
