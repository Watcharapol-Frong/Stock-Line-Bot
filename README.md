# Stock-Line-Bot

A simple yet powerful LINE bot for checking product stock in real time using Google Sheets as the backend.  
Designed for small businesses and sales teams who need quick access to stock data — without touching any backend systems.

> **Project Date:** May 14, 2025  
> **Author:** [frongwatcharapol.com](https://frongwatcharapol.com)

---

## 🚀 Objective

- Quickly check stock via LINE chat
- No need to open backend systems or spreadsheets
- Designed for small retailers and fast-moving sales teams
- 100% free using Google Apps Script + Google Sheets + LINE Messaging API

---

## 🔧 Technology Stack

| Tool                  | Purpose                                    |
|-----------------------|--------------------------------------------|
| LINE Messaging API    | Receive and reply to messages              |
| Google Apps Script    | Business logic & bot engine                |
| Google Sheets         | Real-time product stock database           |

> **The goal** of this project is to make technology accessible and practical for small businesses.  
> We use only free, scalable tools — no servers, no hosting fees.

---

## 🧱 System Components

1. **Google Sheets** — Stores product names and stock quantities  
2. **Google Apps Script** — Middleware: receives message → searches stock → sends reply  
3. **LINE Platform** — Where users interact with the bot via chat

---

## 🔄 Workflow Overview

> **"Simple and practical — ready-to-use with minimal coding required."**

1. User sends a message via LINE (e.g. `"กาแฟ"`, `"iPhone 13"`)
2. LINE Webhook sends the message to Google Apps Script
3. Apps Script processes keywords, searches Google Sheets
4. If match is found → stock info is returned
5. If not found → bot replies with a friendly fallback message

---

## ⚙️ Development Process

1. **System Planning** – Define objective & map flow: LINE → Apps Script → Google Sheets  
2. **Database Setup** – Create Google Sheet for product stock  
3. **Coding** – Write Apps Script to process LINE messages  
4. **LINE API Integration** – Configure webhook to trigger `doPost()`  
5. **Testing** – Check both match & no-match responses  
6. **Documentation & Portfolio** – Diagram + blog article

---

## 🎬 Demo Showcase

> **From typing to answer — all within 3 seconds.**

### Step-by-step Flow

1. 🧑💬 User types: `"กาแฟ"` or `"iPhone 13"` in the LINE chat  
2. 🤖 Bot cleans and matches keywords using RegEx, then searches Google Sheets  
3. 📦 Bot replies:
   📦 iPhone 13
   จำนวนคงเหลือ: 10
4. ❌ If no match is found:  
   😕 ไม่พบสินค้าที่คุณค้นหา
   ลองพิมพ์ชื่อหรือรุ่นให้ชัดเจน เช่น 'iPhone 13'

---

## 🔮 Future Improvements

The goal is not just to check stock — but to evolve this bot into a **smart business assistant**.

Future directions include:
- Connect with real databases (e.g. MySQL, Firebase, AWS RDS)
- Support multi-user environments
- Integrate OpenAI API to understand questions and recommend products
- Deploy to web apps, mobile apps, or dashboards

> **This project is just the beginning — built to grow with real business needs.**

---

## ✅ License & Credits

This project is open-source and free to use.  
Created by [frongwatcharapol.com](https://frongwatcharapol.com)
