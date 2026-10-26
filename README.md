Bartın Üniversitesi Güreş Kulübü

BPR201 - İnternet Tabanlı Programlama | Haftalık Proje Ödevi 1

Öğrenci: Huzeyfe Gençer Öğrenci No: 25015221026 Bölüm: Bilgisayar Programcılığı, Bartın Üniversitesi Repository: https://github.com/huzeyfex/Kampus_Kulubu

Projenin amacı

Güreş Kulübü, güreş sporunu sevdirmek ve düzenli antrenman yapmak isteyen öğrenciler için hazırlanmış üç sayfalık statik bir web sitesidir. Sitenin amacı kulüp etkinliklerini duyurmak ve etkinlikleri başlığa göre aranabilir hale getirmektir.

Site; HTML, CSS ve JavaScript ile hazırlanmıştır. Backend, database, API ve kullanıcı girişi içermez. Etkinlik kayıtları HTML içindedir, arama tarayıcıda JavaScript ile çalışır. Geliştirme sürecinde GitHub Codespaces ve GitHub Copilot desteği kullanılmıştır.

Sayfalar
Dosya	Açıklama
index.html	Ana Sayfa: site başlığı, kısa tanıtım ve diğer sayfalara yönlendirme
etkinlikler.html	5 özgün etkinlik kartı (başlık, tarih, yer, açıklama) ve başlığa göre arama
hakkimizda.html	Kulübün tanıtımı ve sitenin amacı
style.css	Üç sayfanın ortak görünümü, mobil uyum ve odak (focus) stilleri
script.js	Arama, sayaç, sonuç bulunamadı mesajı ve Temizle düğmesi

Üç sayfada da ortak navigation menüsü bulunur ve bağlantılar birbirine çalışır.

Etkinlikler
Grekoromen Teknik Antrenmanı (5 Kasım, 18.00, Spor Salonu)
Serbest Stil Antrenmanı (12 Kasım, 18.00, Spor Salonu)
Yağlı Güreş Tanıtım Günü (19 Kasım, 15.00, Kampüs Açık Alan)
Kulüp İçi Dostluk Turnuvası (26 Kasım, 14.00, Kapalı Spor Salonu)
Güreşçi Beslenmesi Semineri (3 Aralık, 16.00, Konferans Salonu)
Arama özelliği
Kullanıcı yazdıkça eşleşen etkinlik kartları gösterilir.
Büyük/küçük harf farkı ve baştaki/sondaki boşluklar sonucu etkilemez (Türkçe karakterler için toLocaleLowerCase("tr-TR")).
Görünen etkinlik sayısı yazılır: "X etkinlik gösteriliyor."
Eşleşme yoksa "Aramanıza uygun etkinlik bulunamadı." mesajı görünür.
Temizle düğmesi aramayı sıfırlar ve tüm etkinlikleri geri getirir.
Arama alanının label öğesi vardır; site dar ekranda (390 px) yatay taşma olmadan kullanılır.
Çalıştırma adımları
Repository'yi GitHub Codespaces'te aç (Code → Codespaces → Create codespace on main).
Terminalde proje dosyalarının bulunduğu klasörde şu komutu çalıştır:
bash
python3 -m http.server 8000 --bind 0.0.0.0
Ports panelinde 8000 portunu bul ve Open in Browser ile aç.
Ana Sayfa, Etkinlikler ve Hakkımızda bağlantılarını dene.
Dosyalarda değişiklik yaptıktan sonra kaydet (Ctrl+S) ve tarayıcıyı yenile.

Yerel bilgisayarda index.html dosyasına çift tıklayarak da açılabilir. Kurulum, npm veya framework gerekmez.

Belgeler ve kanıtlar
AI_NOTLARI.md: Kullanılan prompt'lar, AI önerisinin değerlendirilmesi ve kod açıklamaları
TEST_NOTLARI.md: Altı testin beklenen ve gerçekleşen sonuçları
Ekran görüntüleri (ekran-goruntuleri/ klasörü):
01-normal-arama.png: Normal arama
02-bos-sonuc.png: Sonuç bulunamadı durumu
03-mobil-390px.png: 390 px mobil görünüm
Dosya yapısı
index.html
etkinlikler.html
hakkimizda.html
style.css
script.js
README.md
AI_NOTLARI.md
TEST_NOTLARI.md
ekran-goruntuleri/
Not

Bu proje eğitim amaçlıdır. Tarihler ve etkinlikler kurgudur. Kullanıcı girişi, form gönderimi ve database içermez.