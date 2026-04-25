// قائمة الأدوات المستخرجة من ملفاتك
const tools = [
    { id: 1, name: "SOLX OSINT", price: 1200, icon: "🔍", desc: "نظام استخباراتي متطور لسحب البيانات العامة." },
    { id: 2, name: "IPGRAM Pro", price: 850, icon: "🌐", desc: "أداة متخصصة في سحب وتحليل عناوين IP انستقرام." },
    { id: 3, name: "BLAK WINDOW", price: 1500, icon: "🕸️", desc: "فاحص ثغرات المواقع والسيرفرات الشامل." },
    { id: 4, name: "CyberShield Toolkit", price: 900, icon: "🛡️", desc: "مجموعة أدوات كسر وتشفير كلمات المرور." },
    { id: 5, name: "DDOS WXLE V2", price: 2000, icon: "⚡", desc: "إطار عمل متطور لاختبار قدرة تحمل السيرفرات." },
    { id: 6, name: "WebAnalyzer RUSS", price: 700, icon: "📊", desc: "تحليل معمق لهيكلة المواقع والبروتوكولات." },
    { id: 7, name: "كورس تداول (صفر إلى احتراف)", price: 3000, icon: "📈", desc: "تعلم استراتيجيات الحيتان وإدارة المخاطر." },
    { id: 8, name: "كورس أمن الشبكات", price: 2500, icon: "🔒", desc: "دليل عملي لاختراق وحماية الشبكات اللاسلكية." }
];

let userCoins = localStorage.getItem('userCoins') || 500; // رصيد تجريبي

function login() {
    const user = document.getElementById('username').value;
    if (user) {
        document.getElementById('auth-page').style.display = 'none';
        document.getElementById('store-page').style.display = 'block';
        updateUI();
        renderProducts();
    }
}

function renderProducts() {
    const container = document.getElementById('productContainer');
    container.innerHTML = tools.map(tool => `
        <div class="product-item">
            <div class="product-image">${tool.icon}</div>
            <h3>${tool.name}</h3>
            <p>${tool.desc}</p>
            <div class="price-tag">${tool.price} عملة</div>
            <button onclick="purchase(${tool.id})" class="btn-main">شراء عبر تليجرام</button>
        </div>
    `).join('');
}

function purchase(id) {
    const tool = tools.find(t => t.id === id);
    if (userCoins >= tool.price) {
        const botToken = prompt("أدخل توكن بوتك:");
        const chatId = prompt("أدخل ID تليجرام:");
        
        if (botToken && chatId) {
            alert(`تم إرسال ${tool.name} إلى بوتك بنجاح! الحقوق محفوظة لـ @wxl_e`);
            userCoins -= tool.price;
            updateUI();
        }
    } else {
        alert("عذراً، رصيدك غير كافٍ!");
    }
}

function updateUI() {
    document.getElementById('cardCoins').innerText = userCoins;
    localStorage.setItem('userCoins', userCoins);
}

function changeColor() {
    const card = document.getElementById('storeCard');
    const colors = [
        'linear-gradient(135deg, #121212 0%, #1a1a1a 100%)',
        'linear-gradient(135deg, #004e92 0%, #000428 100%)',
        'linear-gradient(135deg, #b91d1d 0%, #431407 100%)'
    ];
    card.style.background = colors[Math.floor(Math.random() * colors.length)];
}

function claimDaily() {
    userCoins = parseInt(userCoins) + 70;
    updateUI();
    alert("حصلت على 70 عملة!");
}
