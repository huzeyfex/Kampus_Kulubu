# Test Notları

| Test / işlem | Girdi | Beklenen sonuç | Gerçekleşen sonuç | Geçti/Kaldı |
|---|---|---|---|---|
| 1. Başlığa göre arama | `antrenman` yaz | 2 etkinlik görünür: Grekoromen Teknik Antrenmanı ve Serbest Stil Antrenmanı. |  |  |
| 2. Türkçe büyük/küçük harf araması | Sırayla `GÜREŞ` ve `güreş` yaz | Her iki aramada da aynı 2 kart görünür: Yağlı Güreş Tanıtım Günü ve Güreşçi Beslenmesi Semineri. |  |  |
| 3. Eşleşmeyen arama | `xyz` yaz | Sayaç `0 etkinlik gösteriliyor.` olur ve `Aramanıza uygun etkinlik bulunamadı.` mesajı görünür. |  |  |
| 4. Aramayı sıfırlama | Yalnızca boşluk yaz; ardından Temizle düğmesine bas | Boşlukla aramada ve Temizle işleminden sonra 5 etkinlik görünür. |  |  |
| 5. Menü bağlantıları | Üç sayfanın menüsündeki bağlantıları aç | Ana Sayfa, Etkinlikler ve Hakkımızda bağlantıları sırasıyla doğru sayfalara gider. |  |  |
| 6. Dar ekran ve klavye erişimi | Görüntü genişliğini 390 px yap; Tab tuşuna bas | Yatay taşma olmaz; Tab ile arama alanına ve Temizle düğmesine ulaşılır. |  |  |
