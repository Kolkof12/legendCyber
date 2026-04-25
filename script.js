const products = [
    { id: 1, name: "SOLX OSINT", price: 1000, icon: "🔍", desc: "أداة ذكية لجمع المعلومات الاستخباراتية." },
    { id: 2, name: "BLAK WINDOW", price: 1500, icon: "🕸️", desc: "محرك فحص الثغرات الأمنية المتقدم." },
    { id: 3, name: "DDOS WXLE V2", price: 2000, icon: "⚡", desc: "نظام اختبار تحمل السيرفرات القوي." },
    { id: 4, name: "CyberShield Pro", price: 800, icon: "🛡️", desc: "حقيبة أدوات التشفير وحماية كلمات المرور." },
    { id: 5, name: "IPGRAM Extractor", price: 700, icon: "🌐", desc: "استخراج بيانات الـ IP من انستقرام باحتراف." },
    { id: 6, name: "Trading Course (0-Hero)", price: 3000, icon: "📈", desc: "كورس التداول الاحترافي من الصفر." },
    { id: 7, name: "Network Master Course", price: 2500, icon: "🔒", desc: "احتراف أمن الشبكات والبروتوكولات." },
    { id: 8, name: "Python Automation", price: 1200, icon: "🐍", desc: "تعلم برمجة أدواتك الخاصة ببايثون." }
];

let balance = 500;

function enterStore() {
    const user = document.getElementById('username').value;
    if(user) {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('main-store').style.display = 'block';
        loadProducts();
    } else { alert("الرجاء إدخال اسم المستخدم"); }
}

function loadProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(p => `
        <div class="p-card">
            <div class="p-img">${p.icon}</div>
            <div class="p-info">
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                <div style="margin: 15px 0; color: #00ff9d; font-weight: bold;">السعر: ${p.price} عملة</div>
                <button onclick="buyNow(${p.id})" class="btn-buy">شراء الآن</button>
            </div>
        </div>
    `).join('');
}

function buyNow(id) {
    const item = products.find(p => p.id === id);
    if(balance >= item.price) {
        const botToken = prompt("أدخل توكن بوت تليجرام:");
        const chatId = prompt("أدخل ID تليجرام:");
        const cardPass = prompt("أدخل كود البطاقة السري:");
        
        if(botToken && chatId) {
            alert(`تمت العملية! سيصلك ${item.name} كملف مع حقوق @wxl_e قريباً.`);
            balance -= item.price;
            document.getElementById('coin-amount').innerHTML = `<i class="fas fa-coins"></i> ${balance}`;
        }
    } else {
        alert("رصيدك غير كافٍ!");
    }
}

function toggleCardColor() {
    const card = document.getElementById('digitalCard');
    const colors = ['#00ff9d', '#00d9ff', '#ff0055', '#ffaa00'];
    const random = colors[Math.floor(Math.random() * colors.length)];
    card.style.background = random;
    document.getElementById('coin-amount').style.color = random;
}

function getDailyGift() {
    balance += 70;
    document.getElementById('coin-amount').innerHTML = `<i class="fas fa-coins"></i> ${balance}`;
    alert("مبروك! حصلت على الهدية اليومية 70 عملة.");
}

function changeLang() {
    const l = document.getElementById('langSwitcher').value;
    if(l === 'en') {
        document.getElementById('txt-balance').innerText = "Current Balance";
        document.getElementById('txt-products').innerText = "Exclusive Products";
    }
    // يمكنك إضافة باقي الترجمات هنا بنفس الطريقة
}
