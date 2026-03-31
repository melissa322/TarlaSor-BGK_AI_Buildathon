# 🌾 TarlaSor Ağı

Dünya genelinde 500 milyondan fazla küçük çiftçi, toprak ve sulama suyu test sonuçlarını yorumlayamadığı için yanlış kararlar alıyor ve toprağını giderek çoraklaştırıyor. TarlaSor bu sorunu çözüyor — belirti anlat veya lab değeri gir, AI sade Türkçeyle analiz yapar ve ne yapman gerektiğini söyler.

## Problem

Küçük çiftçiler tarım danışmanına ulaşamıyor — pahalı, zaman alıyor, her bölgede yok. Bu hem küresel bir çevre krizi (toprak bozunumu, gıda güvenliği) hem de derin bir fırsat eşitsizliği. TarlaSor bu boşluğu dolduruyor: sensör yok, abonelik yok, teknik bilgi gerekmez.

## Çözüm

Belirti anlat veya lab değeri gir — TarlaSor sade Türkçeyle analiz yapar, ne yapman gerektiğini söyler. Hava durumuna göre kişiselleştirilmiş öneriler alır, geçmiş analizlerini takip eder, bölgendeki çiftçilerle forum üzerinden bilgi paylaşırsın.

## Özellikler

- 🌱 **Toprak Analizi** — belirti veya lab değeriyle
- 💧 **Su Kalitesi Analizi** — sulama suyunun bitkiye etkisi
- 🍂 **Bitki Hastalığı Tespiti** — zararlı ve hastalık önerileri
- ☀️ **Hava Durumu** — şehir bazlı 7 günlük tahmin (Open-Meteo)
- 💬 **Yerel Forum** — şehir/bölgeye göre sıralanan çiftçi topluluğu
- 📋 **Analiz Geçmişi** — kişisel analiz kayıtları (localStorage)
- 👤 **Kullanıcı Hesabı** — kayıt/giriş veya misafir mod

## Canlı Demo

🌐 Yayın Linki: https://tarla-sor-bgk-ai-buildathon-ckb6.vercel.app/

🎥 Demo Video: [buraya Loom linki eklenecek]

## Kullanılan Teknolojiler

- **Frontend:** React + Vite
- **AI:** Groq API (Llama 3.3-70b-versatile)
- **Hava Durumu:** Open-Meteo (geocoding + 7 günlük tahmin)
- **Auth + Veri:** Local Auth + localStorage (MVP)
- **Planlanan:** Supabase (auth, geçmiş, forum)
- **Deploy:** Vercel
- **Editörler:** Cursor, Windsurf, Antigravity
- **AI Asistanlar:** Claude AI, Gemini

## Kurulum

1. Bağımlılıkları yükle:
```bash
npm install
```

2. `.env` dosyası oluştur (şablon: `.env.example`):
```env
VITE_GROQ_API_KEY=senin_groq_anahtarın
VITE_SUPABASE_URL=senin_supabase_url
VITE_SUPABASE_ANON_KEY=senin_supabase_anon_key
```

3. Çalıştır:
```bash
npm run dev
```

Not: Hesap açmak zorunlu değil. Misafir modda uygulamayı inceleyebilirsin.

## Güvenlik Notu

`VITE_GROQ_API_KEY` client tarafında kullanıldığı için demo ortamında görünür. Üretimde Groq çağrısını bir backend/proxy üzerinden geçirmek gerekir.

## Supabase'e Geçiş Planı

Adım adım geçiş planı: `supabase-migration.md`

## Wicked Problem

Bu proje şu küresel sorunlara temas ediyor:
- Gıda güvenliği
- İklim krizi ve kuraklık
- Toprak bozunumu / verim kaybı
- Bilgiye erişim eşitsizliği (kırsal bölgeler)
