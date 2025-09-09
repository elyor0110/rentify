# Rentify – Startup Car Rental Platform 🚗

## 🌍 Loyiha haqida
Rentify – bu avtomobil ijarasi jarayonini soddalashtirish va raqamlashtirish uchun yaratilgan platforma.  
Sayt orqali foydalanuvchilar ro‘yxatdan o‘tishi, e’lon joylashtirishi va mavjud mashinalarni ko‘rishi mumkin.  
Investorlar uchun loyihada **zamonaviy dizayn, ishlaydigan demo funksiyalar** va **to‘lov + shartnoma ko‘rinishi** ham mavjud.  

---

## 🛠 Texnologiyalar
- **Frontend:** Next.js (React, TailwindCSS, shadcn/ui)  
- **Backend:** Supabase (PostgreSQL + Auth + Storage)  
- **Deploy:** Vercel (frontend)  
- **Kelajakda:** Stripe (to‘lov integratsiyasi), PDF contract generator  

---

## 🚀 Hozirgi holat
✅ UI tayyor (homepage, header, hero, demo listings)  
✅ Deploy Vercel’da: [https://rentify-rho-smoky.vercel.app](https://rentify-rho-smoky.vercel.app)  
⬜ Auth (login/signup) ishlamaydi  
⬜ CRUD listings (Supabase bilan bog‘lanmagan)  
⬜ Contract + payment demo hali qo‘shilmagan  

---

## 📌 Keyingi bosqichlar
1. **Supabase Auth** – email/password orqali sign up & login.  
2. **CRUD Listings** – mashina qo‘shish, tahrirlash, o‘chirish va ko‘rish.  
3. **Profile page** – foydalanuvchi e’lonlarini boshqarish.  
4. **Contract demo** – e’lon tanlanganda PDF shartnoma preview.  
5. **Payment demo** – Stripe test integratsiyasi (faqat ko‘rsatma sifatida).  

---

## 🔑 Muhim
- `.env.local` fayl yarating va Supabase kalitlarini yozing:
