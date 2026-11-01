(() => {
  const products = window.PAYAM_PRODUCTS || [];
  const grid = document.querySelector("#productGrid");
  const emptyBox = document.querySelector("#emptyBox");
  const resultLabel = document.querySelector("#resultLabel");
  const brandRow = document.querySelector("#brandRow");
  const liveSearch = document.querySelector("#liveSearch");
  const sortSelect = document.querySelector("#sortSelect");
  const totalCount = document.querySelector("#totalCount");
  const brandCount = document.querySelector("#brandCount");
  const pagination = document.querySelector("#pagination");
  const PER = 24;
  const urlBrand = new URLSearchParams(location.search).get("brand");
  let brand = urlBrand || "all";
  let query = "";
  let page = 1;
  let filtered = [];
  const fa = (n) => String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
  const brandNames = {apple:"Apple",samsung:"Samsung",xiaomi:"Xiaomi",honor:"Honor",nothing:"Nothing",google:"Google",oneplus:"OnePlus",realme:"realme",oppo:"OPPO",vivo:"vivo",motorola:"Motorola",nokia:"Nokia",tecno:"Tecno",infinix:"Infinix"};
  function buildBrands() {
    const brands = [...new Set(products.map((p) => p.brand))].sort();
    if (brandCount) brandCount.textContent = fa(brands.length);
    if (totalCount) totalCount.textContent = fa(products.length);
    brandRow.innerHTML = `<button class="brand-chip active" data-brand="all">همه</button>` +
      brands.map((b) => `<button class="brand-chip${brand===b?" active":""}" data-brand="${b}">${brandNames[b]||b}</button>`).join("");
    if (brand !== "all") brandRow.querySelectorAll(".brand-chip").forEach(c => c.classList.toggle("active", c.dataset.brand===brand));
  }
  function apply() {
    const q = query.toLowerCase();
    filtered = products.filter((p) => {
      const okB = brand === "all" || p.brand === brand;
      const hay = `${p.name} ${p.nameFa} ${p.brand} ${p.chip}`.toLowerCase();
      return okB && (!q || hay.includes(q));
    });
    const sort = sortSelect?.value || "name";
    filtered.sort((a, b) => {
      if (sort === "brand") return a.brand.localeCompare(b.brand) || a.name.localeCompare(b.name);
      if (sort === "ram") return parseInt(b.ram) - parseInt(a.ram);
      return a.name.localeCompare(b.name);
    });
    const maxPage = Math.max(1, Math.ceil(filtered.length / PER));
    if (page > maxPage) page = maxPage;
    render();
  }
  function imgTag(p) {
    return `<img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async" onerror="this.style.display='none';this.parentNode.insertAdjacentHTML('beforeend','<div class=img-fallback>📱</div>')">`;
  }
  function render() {
    if (resultLabel) resultLabel.textContent = fa(filtered.length) + " محصول";
    if (emptyBox) emptyBox.hidden = filtered.length > 0;
    const start = (page - 1) * PER;
    const slice = filtered.slice(start, start + PER);
    grid.innerHTML = slice.map((p) => `
      <a class="card" href="product.html?id=${p.id}" style="text-decoration:none;color:inherit">
        <div class="card-img">${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}${imgTag(p)}</div>
        <div class="card-body">
          <div class="card-brand">${(p.brand || "").toUpperCase()}</div>
          <h3>${p.name}</h3>
          <p class="card-spec">${p.ram} · ${p.storage} · ${p.chip}</p>
          <div class="card-foot"><span class="price">تماس بگیرید</span><span class="card-btn">جزئیات</span></div>
        </div>
      </a>`).join("");
    const totalPages = Math.max(1, Math.ceil(filtered.length / PER));
    let html = `<button class="page-btn" data-page="prev" ${page <= 1 ? "disabled" : ""}>قبلی</button>`;
    let from = Math.max(1, page - 2);
    let to = Math.min(totalPages, from + 5);
    from = Math.max(1, to - 5);
    for (let i = from; i <= to; i++) html += `<button class="page-btn ${i === page ? "active" : ""}" data-page="${i}">${fa(i)}</button>`;
    html += `<button class="page-btn" data-page="next" ${page >= totalPages ? "disabled" : ""}>بعدی</button>`;
    pagination.innerHTML = html;
  }
  brandRow?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-brand]");
    if (!btn) return;
    brand = btn.dataset.brand;
    brandRow.querySelectorAll(".brand-chip").forEach((c) => c.classList.toggle("active", c === btn));
    page = 1; apply();
  });
  liveSearch?.addEventListener("input", () => { query = liveSearch.value.trim(); page = 1; apply(); });
  sortSelect?.addEventListener("change", () => { page = 1; apply(); });
  document.querySelector("#resetBtn")?.addEventListener("click", () => {
    brand = "all"; query = ""; if (liveSearch) liveSearch.value = "";
    brandRow.querySelectorAll(".brand-chip").forEach((c, i) => c.classList.toggle("active", i === 0));
    page = 1; apply();
  });
  pagination?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-page]");
    if (!btn || btn.disabled) return;
    const v = btn.dataset.page;
    if (v === "prev") page--; else if (v === "next") page++; else page = Number(v);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.querySelector("#menuBtn")?.addEventListener("click", () => document.querySelector("#nav")?.classList.toggle("open"));
  buildBrands();
  apply();
})();
