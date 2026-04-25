const products = [
    { id: 1, name: "SOLX OSINT", price: 1000, desc: "أداة متقدمة لجمع المعلومات واختراق المصادر المفتوحة.", type: "py" },
    { id: 2, name: "WebAnalyzer Pro", price: 800, desc: "تحليل شامل للسيرفرات واكتشاف الثغرات الأمنية.", type: "py" },
    { id: 3, name: "CyberShield Toolkit", price: 500, desc: "حقيبة أدوات لتشفير وفك تشفير كلمات المرور.", type: "py" },
    { id: 4, name: "Trading Course Zero", price: 2500, desc: "كورس احترافي للتداول من الصفر حتى استراتيجيات الحيتان.", type: "pdf" },
    { id: 5, name: "Network Security Pro", price: 1500, desc: "تعلم حماية الشبكات وصد هجمات الـ DDoS باحترافية.", type: "pdf" }
];

let coins = localStorage.getItem('coins') || 0;
document.getElementById('userCoins').innerText = coins;

function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="price">${p.price} عملة</div>
            <button onclick="buyProduct(${p.id})">شراء الآن</button>
        </div>
    `).join('');
}

function buyProduct(id) {
    const p = products.find(prod => prod.id === id);
    if (coins >= p.price) {
        const token = prompt("أدخل توكن بوت التليجرام الخاص بك:");
        const chatId = prompt("أدخل Chat ID الخاص بك:");
        const cardSecret = prompt("أدخل الكود السري للبطاقة:");
        
        // هنا يتم إرسال الطلب للسيرفر لإرسال الملف
        alert(`جاري معالجة الطلب... سيصلك ملف ${p.name} على التليجرام قريباً!`);
        coins -= p.price;
        updateCoins();
    } else {
        alert("رصيدك غير كافٍ! استخدم رابط الإحالة أو الهدية اليومية.");
    }
}

function changeCardColor() {
    const colors = ['#00ff41', '#ff003c', '#00d4ff', '#d4af37'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('mainCard').style.borderColor = randomColor;
    document.getElementById('mainCard').style.boxShadow = `0 0 20px ${randomColor}`;
}

function claimDailyGift() {
    coins = parseInt(coins) + 70;
    updateCoins();
    alert("مبروك! حصلت على 70 عملة هدية.");
}

function updateCoins() {
    localStorage.setItem('coins', coins);
    document.getElementById('userCoins').innerText = coins;
}

renderProducts();
