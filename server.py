import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

# قاعدة بيانات المنتجات (المسارات)
FILES_DATABASE = {
    1: {"name": "SOLX", "path": "solx_wxle.py"},
    2: {"name": "WebAnalyzer", "path": "WebAnalyzer_Pro.py"},
    4: {"name": "Trading Course", "path": "trading_pro.pdf"}
}

@app.route('/deliver', methods=['POST'])
def deliver_product():
    data = request.json
    bot_token = data.get('token')
    chat_id = data.get('chat_id')
    product_id = data.get('product_id')
    
    product = FILES_DATABASE.get(product_id)
    
    # إرسال الملف عبر تليجرام
    url = f"https://api.telegram.org/bot{bot_token}/sendDocument"
    caption = f"📦 المنتج: {product['name']}\n🛡️ المبرمج: @wxl_e\nتم الشراء بنجاح!"
    
    with open(product['path'], 'rb') as f:
        r = requests.post(url, data={'chat_id': chat_id, 'caption': caption}, files={'document': f})
    
    return jsonify({"status": "success", "msg": "Sent!"})

if __name__ == '__main__':
    app.run(port=5000)
