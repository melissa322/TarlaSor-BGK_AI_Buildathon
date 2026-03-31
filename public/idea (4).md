# TarlaSor Ağı

## Problem

Dünya genelinde 500 milyondan fazla küçük çiftçi, toprak ve sulama suyu test sonuçlarını yorumlayamadığı için yanlış kararlar alıyor ve toprağını giderek çoraklaştırıyor. Tarım uzmanına ulaşmak pahalı, zaman alıyor ve her bölgede mümkün değil. Bu hem küresel bir çevre krizi hem de derin bir fırsat eşitsizliği — büyük çiftlikler danışman tutabilirken küçük çiftçi tahminle ilerliyor.

## Kullanıcı

Türkiye'de küçük ve orta ölçekli araziye sahip çiftçiler (ilerleyen süreçte global). Akıllı telefonu var ancak teknik tarım bilgisi yok. İki şekilde gelir:

- **Belirti ile:** "Yapraklarım sararıyor, toprakta beyaz leke var" gibi gözlemlerini anlatır
- **Lab sonucu ile:** Elinde pH, EC, SAR gibi değerler var ama ne anlama geldiğini bilmiyor

## AI'ın Rolü

Kullanıcının anlattığı belirtileri, girdiği lab değerlerini ve bulunduğu bölgenin hava durumunu birleştirerek sade Türkçeyle şu üç soruyu yanıtlar:

1. **Ne oluyor?** — Toprağında, suyunda veya bitkinde büyük ihtimalle şu problem var
2. **Neden oluyor?** — Sebebi bu
3. **Ne yapmalısın?** — Bu hafta şunu yap, ucuz ve uygulanabilir adımlar

## Özellikler

- 🌱 Toprak analizi (belirti + lab değeri)
- 💧 Su kalitesi analizi
- 🍂 Bitki hastalığı ve zararlı tespiti
- ☀️ Şehir bazlı 7 günlük hava durumu entegrasyonu
- 💬 Yerel forum (şehir/bölgeye göre sıralanan)
- 📋 Kişisel analiz geçmişi

## Rakip Durum

| Rakip | Ne Yapıyor | Eksikliği |
|---|---|---|
| Soilo | AI toprak analizi, gübre önerisi | Donanım bağımlı, Türkçe yok |
| Soil Test Pro | Lab entegrasyonu, hassas tarım | ABD odaklı, belirti girişi yok |
| KETOS | Su kalitesi izleme | Kurumsal, pahalı donanım gerektirir |
| SQAPP | Harita tabanlı toprak analizi | Konum bazlı, kullanıcı girişi yok |

**Farkımız:** Hiçbir rakip Türkçe olarak hem belirti anlatımını hem lab sonucunu hem hava durumunu birleştirip sade bir eylem önerisi sunmuyor. Üstelik forum ile çiftçiler birbirinden öğrenebiliyor. Donanım, abonelik veya teknik bilgi gerekmez.

## Başarı Kriteri

Bir çiftçi uygulamayı açıp bilgisini girdikten sonra 1 dakika içinde "toprağımda/suyumda şu sorun var, bu hafta şunu yapmalıyım" cevabını alabiliyorsa proje başarılıdır.
