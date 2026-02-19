// ===== MENU DATA =====
const menuData = [
  // Indian
  { id:1, name:'Butter Chicken Bowl', cuisine:'indian', flag:'🍛', emoji:'🍗', img:'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80', price:13.50, cal:580, protein:34, tags:['popular'], color:'#3d2014', desc:'Tender chicken in aromatic tomato-cream sauce, basmati rice, pickled onions, cilantro chutney.' },
  { id:2, name:'Dal Makhani Bowl', cuisine:'indian', flag:'🍛', emoji:'🫘', img:'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80', price:11.50, cal:490, protein:22, tags:['popular','vegan'], color:'#3d2014', desc:'Slow-cooked black lentils with butter, cream, garam masala, over brown rice with raita.' },
  { id:3, name:'Paneer Tikka Bowl', cuisine:'indian', flag:'🍛', emoji:'🧀', img:'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80', price:12.50, cal:520, protein:28, tags:['spicy'], color:'#3d2014', desc:'Marinated paneer, charred bell peppers, mint raita, house chutney on fragrant saffron rice.' },
  // Japanese
  { id:4, name:'Teriyaki Chicken Bowl', cuisine:'japanese', flag:'🍱', emoji:'🍗', img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80', price:13.00, cal:560, protein:38, tags:['popular'], color:'#142040', desc:'Glazed teriyaki chicken, steamed rice, edamame, shredded cabbage, sesame-ginger dressing.' },
  { id:5, name:'Katsu Curry Bowl', cuisine:'japanese', flag:'🍱', emoji:'🍖', img:'https://images.unsplash.com/photo-1569899235701-6cf7da280fc8?w=600&q=80', price:14.00, cal:640, protein:32, tags:['popular'], color:'#142040', desc:'Crispy panko-breaded cutlet over Japanese curry sauce, steamed rice, pickled daikon.' },
  { id:6, name:'Tofu Miso Bowl', cuisine:'japanese', flag:'🍱', emoji:'🥢', img:'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', price:11.00, cal:420, protein:20, tags:['vegan'], color:'#142040', desc:'Silken tofu in miso broth, soba noodles, wakame, scallions, toasted sesame seeds.' },
  // Mexican
  { id:7, name:'Birria Rice Bowl', cuisine:'mexican', flag:'🥘', emoji:'🥩', img:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80', price:13.50, cal:610, protein:36, tags:['popular','spicy'], color:'#3d0f0f', desc:'Braised beef birria, Mexican rice, black beans, queso fresco, pico de gallo, consommé.' },
  { id:8, name:'Veggie Fajita Bowl', cuisine:'mexican', flag:'🥘', emoji:'🫑', img:'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&q=80', price:11.00, cal:470, protein:18, tags:['vegan'], color:'#3d0f0f', desc:'Grilled peppers & onions, cilantro rice, pinto beans, guacamole, salsa verde.' },
  { id:9, name:'Mole Chicken Bowl', cuisine:'mexican', flag:'🥘', emoji:'🍗', img:'https://images.unsplash.com/photo-1504544750208-dc0358ad5b62?w=600&q=80', price:13.00, cal:590, protein:34, tags:[], color:'#3d0f0f', desc:'Slow-cooked chicken in traditional dark mole sauce, rice, sesame seeds, pickled jalapeños.' },
  // Mediterranean
  { id:10, name:'Shawarma Bowl', cuisine:'mediterranean', flag:'🫕', emoji:'🥙', img:'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=80', price:13.50, cal:570, protein:35, tags:['popular'], color:'#3d3014', desc:'Spiced chicken shawarma, couscous, hummus, tabbouleh, tzatziki, warm pita strips.' },
  { id:11, name:'Falafel Bowl', cuisine:'mediterranean', flag:'🫕', emoji:'🧆', img:'https://images.unsplash.com/photo-1590577976322-3d2d6a2130f5?w=600&q=80', price:11.50, cal:510, protein:24, tags:['vegan','popular'], color:'#3d3014', desc:'Crispy herb falafel, quinoa, roasted eggplant, tahini dressing, pomegranate seeds.' },
  { id:12, name:'Lamb Kofta Bowl', cuisine:'mediterranean', flag:'🫕', emoji:'🍢', img:'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', price:14.50, cal:620, protein:40, tags:['spicy'], color:'#3d3014', desc:'Grilled lamb kofta, herbed rice, cucumber-mint salad, harissa yogurt, sumac onions.' },
  // Thai
  { id:13, name:'Pad Thai Bowl', cuisine:'thai', flag:'🍜', emoji:'🍝', img:'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=80', price:12.50, cal:530, protein:28, tags:['popular'], color:'#1a3014', desc:'Rice noodles in tamarind sauce, shrimp, bean sprouts, peanuts, lime, scallions.' },
  { id:14, name:'Green Curry Bowl', cuisine:'thai', flag:'🍜', emoji:'🌿', img:'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80', price:12.00, cal:490, protein:24, tags:['vegan','spicy'], color:'#1a3014', desc:'Fragrant green curry with tofu, Thai eggplant, bamboo shoots, jasmine rice, Thai basil.' },
  { id:15, name:'Mango Sticky Rice Bowl', cuisine:'thai', flag:'🍜', emoji:'🥭', img:'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80', price:10.50, cal:420, protein:12, tags:[], color:'#1a3014', desc:'Sticky jasmine rice, fresh mango, coconut cream drizzle, toasted sesame, mint.' },
  // Ethiopian
  { id:16, name:'Doro Wat Bowl', cuisine:'ethiopian', flag:'🥗', emoji:'🍳', img:'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=600&q=80', price:13.00, cal:580, protein:36, tags:['spicy','popular'], color:'#2d1a2d', desc:'Spiced chicken stew in berbere sauce, injera-style flatbread, lentils, ayib cheese.' },
  { id:17, name:'Misir Wat Bowl', cuisine:'ethiopian', flag:'🥗', emoji:'🫘', img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', price:11.00, cal:460, protein:22, tags:['vegan'], color:'#2d1a2d', desc:'Red lentil stew with niter kibbeh spice blend, served over teff grain, collard greens.' },
  { id:18, name:'Tibs Bowl', cuisine:'ethiopian', flag:'🥗', emoji:'🥩', img:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80', price:13.50, cal:550, protein:38, tags:[], color:'#2d1a2d', desc:'Sautéed beef with rosemary, jalapeño, onions, spiced rice, ayib cheese, gomen greens.' },
];

const cuisineNames = {
  indian:'Indian', japanese:'Japanese', mexican:'Mexican',
  mediterranean:'Mediterranean', thai:'Thai', ethiopian:'Ethiopian'
};

let cart = {};
let currentFilter = 'all';
let orderType = 'pickup';

function buildMenu(filter) {
  const body = document.getElementById('menu-body');
  const filteredData = filter === 'all' ? menuData : menuData.filter(item => {
    if (['indian','japanese','mexican','mediterranean','thai','ethiopian'].includes(filter)) return item.cuisine === filter;
    return item.tags.includes(filter);
  });

  // Group by cuisine
  const grouped = {};
  filteredData.forEach(item => {
    if (!grouped[item.cuisine]) grouped[item.cuisine] = [];
    grouped[item.cuisine].push(item);
  });

  body.innerHTML = '';
  if (Object.keys(grouped).length === 0) {
    body.innerHTML = '<p style="color:var(--light-text);text-align:center;padding:60px 0;">No items match that filter.</p>';
    return;
  }

  for (const [cuisine, items] of Object.entries(grouped)) {
    const sec = document.createElement('div');
    sec.className = 'cuisine-section';
    sec.innerHTML = `
      <div class="cuisine-section-header">
        <span class="cuisine-flag">${items[0].flag}</span>
        <div>
          <h2>${cuisineNames[cuisine]}</h2>
          <span>${items.length} bowl${items.length > 1 ? 's' : ''}</span>
        </div>
      </div>
      <div class="menu-grid">
        ${items.map(item => `
          <div class="menu-card" id="card-${item.id}">
            <div class="menu-card-img">
              <img src="${item.img}" alt="${item.name}" loading="lazy"
                onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
              <span class="img-fallback" style="display:none">${item.emoji}</span>
              <div class="img-overlay"></div>
              <div class="menu-card-badges">
                ${item.tags.includes('popular') ? '<span class="badge badge-popular">⭐ Popular</span>' : ''}
                ${item.tags.includes('vegan') ? '<span class="badge badge-vegan">🌱 Vegan</span>' : ''}
                ${item.tags.includes('spicy') ? '<span class="badge badge-spicy">🌶️ Spicy</span>' : ''}
              </div>
            </div>
            <div class="menu-card-body">
              <div class="menu-card-name">${item.name}</div>
              <div class="menu-card-desc">${item.desc}</div>
              <div class="menu-card-nutrition">
                <div class="nutrition-item"><div class="nutrition-val">${item.cal}</div><div class="nutrition-label">Calories</div></div>
                <div class="nutrition-item"><div class="nutrition-val">${item.protein}g</div><div class="nutrition-label">Protein</div></div>
              </div>
              <div class="menu-card-footer">
                <span class="menu-price">$${item.price.toFixed(2)}</span>
                <button class="add-btn" id="btn-${item.id}" onclick="addToCart(${item.id})">
                  + Add
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    body.appendChild(sec);
  }
}

function filterMenu(filter, el) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  buildMenu(filter);
}

function addToCart(id) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;
  if (!cart[id]) cart[id] = { ...item, qty: 0 };
  cart[id].qty++;
  updateCartCount();
  updateCartSidebar();

  // Button flash
  const btn = document.getElementById('btn-' + id);
  if (btn) {
    btn.textContent = '✓ Added';
    btn.classList.add('added');
    setTimeout(() => { btn.innerHTML = '+ Add'; btn.classList.remove('added'); }, 1200);
  }
  showToast(`${item.emoji} ${item.name} added!`);
}

function updateCartCount() {
  const total = Object.values(cart).reduce((s,i) => s + i.qty, 0);
  document.getElementById('cart-count').textContent = total;
}

function updateCartSidebar() {
  const container = document.getElementById('sidebar-cart');
  const summary = document.getElementById('cart-summary');
  const emptyMsg = document.getElementById('empty-cart-msg');
  const itemCountLabel = document.getElementById('item-count-label');

  const items = Object.values(cart).filter(i => i.qty > 0);
  const totalItems = items.reduce((s,i) => s + i.qty, 0);
  itemCountLabel.textContent = `${totalItems} item${totalItems !== 1 ? 's' : ''}`;

  if (items.length === 0) {
    container.innerHTML = '';
    summary.style.display = 'none';
    emptyMsg.style.display = 'block';
    return;
  }

  emptyMsg.style.display = 'none';
  summary.style.display = 'block';

  container.innerHTML = items.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-detail">${cuisineNames[item.cuisine]} · $${item.price.toFixed(2)} ea</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
          <button class="remove-btn" onclick="removeItem(${item.id})">✕</button>
        </div>
      </div>
      <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
    </div>
  `).join('');

  const subtotal = items.reduce((s,i) => s + i.price * i.qty, 0);
  const tax = subtotal * 0.0925;
  const deliveryFee = orderType === 'delivery' ? 2.99 : 0;
  const total = subtotal + tax + deliveryFee;

  document.getElementById('subtotal-val').textContent = '$' + subtotal.toFixed(2);
  document.getElementById('tax-val').textContent = '$' + tax.toFixed(2);
  document.getElementById('total-val').textContent = '$' + total.toFixed(2);
}

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartCount();
  updateCartSidebar();
}

function removeItem(id) {
  delete cart[id];
  updateCartCount();
  updateCartSidebar();
}

function setOrderType(type) {
  orderType = type;
  document.getElementById('btn-pickup').classList.toggle('active', type === 'pickup');
  document.getElementById('btn-delivery').classList.toggle('active', type === 'delivery');
  document.getElementById('delivery-address').style.display = type === 'delivery' ? 'block' : 'none';
  document.getElementById('pickup-info').style.display = type === 'pickup' ? 'block' : 'none';
  const deliveryLine = document.getElementById('delivery-fee-line');
  if (deliveryLine) deliveryLine.style.display = type === 'delivery' ? 'flex' : 'none';
  updateCartSidebar();
}

function selectPayment(el) {
  document.querySelectorAll('.payment-opt').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  const label = el.querySelector('.payment-opt-label').textContent;
  const cardFields = document.getElementById('card-fields');
  if (cardFields) cardFields.style.display = label === 'Credit Card' ? 'block' : 'none';
}

function formatCard(input) {
  let v = input.value.replace(/\D/g,'').substring(0,16);
  input.value = v.replace(/(.{4})/g,'$1 ').trim();
}

function formatExpiry(input) {
  let v = input.value.replace(/\D/g,'').substring(0,4);
  if (v.length > 2) v = v.substring(0,2) + ' / ' + v.substring(2);
  input.value = v;
}

function placeOrder() {
  const items = Object.values(cart).filter(i => i.qty > 0);
  if (items.length === 0) { showToast('Your cart is empty!'); return; }
  document.getElementById('success-overlay').classList.add('show');
}

function closeSuccess() {
  document.getElementById('success-overlay').classList.remove('show');
  cart = {};
  updateCartCount();
  updateCartSidebar();
  showPage('menu');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ===== PAGE ROUTING =====
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');

  window.scrollTo(0,0);

  if (page === 'menu') buildMenu(currentFilter);
  if (page === 'checkout') updateCartSidebar();
}

// Init
buildMenu('all');
updateCartSidebar();