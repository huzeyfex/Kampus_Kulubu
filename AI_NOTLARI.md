AI Notları
Copilot erişimi

GitHub Codespaces üzerinde GitHub Copilot Chat kullandım. Erişimim vardı; tüm prompt'lar Copilot'a yazıldı ve çıktılar kontrol edildi.

Kullandığım prompt'lar
1. Mevcut kodu anlama (dosya değiştirmeden)

Prompt metni: “HTML, CSS ve JavaScript öğrenmeye yeni başladım. Bu üç sayfalı web sitesindeki etkinlik kartlarının yapısını, CSS sınıflarını ve navigation menüsünün sayfalar arasında nasıl çalıştığını incele. Dosyaları değiştirme ve terimleri sade açıkla.”

Amacı: Projedeki HTML ve CSS yapısını öğrenmek, sayfa bağlantılarının nasıl çalıştığını anlamak.

Sonuç: Etkinlik kartlarının <article> yapısı, .grid, article ve .meta stilleri ve sayfalar arası <a href> bağlantıları açıklandı. Hiçbir dosya değişmedi.

2. Etkinlikleri güreş kulübü konusuna göre güncelleme

Prompt metni: “Yalnızca etkinlikler.html dosyasını değiştir. Mevcut article yapısını kullanarak toplam 5 özgün etkinlik kartı olacak şekilde yeni kartlar ekle. Eski örnek kartların yerine bunlar kalsın. Her kartta tarih/saat, başlık, açıklama ve yer olsun. Konu: Bartın Üniversitesi Güreş Kulübü. Etkinlikler: Grekoromen Teknik Antrenmanı (5 Kasım), Serbest Stil Antrenmanı (12 Kasım), Yağlı Güreş Tanıtım Günü (19 Kasım), Kulüp İçi Dostluk Turnuvası (26 Kasım), Güreşçi Beslenmesi Semineri (3 Aralık). Navigation linklerini ve sayfa yapısını koru. Yeni paket ekleme. Değişen satırları açıkla.”

Amacı: Örnek etkinlikleri güreş kulübüne uygun, tutarlı kartlarla değiştirmek.

Sonuç: Beş güreş etkinliği kartı eklendi; kartların yapısı ve navigation menüsü korundu. Ana Sayfa ve Hakkımızda metinleri de ayrı bir prompt ile kulübe göre güncellendi.

3. Arama özelliği ekleme (script.js)

Prompt metni: “etkinlikler.html için başlığa göre arama ekle. Yazdıkça filtrele. Türkçe küçük harfe dönüştür (toLocaleLowerCase('tr-TR')), baş ve sondaki boşlukları temizle. Sonuç sayısını ve boş sonuç mesajını göster. Temizle düğmesi aramayı sıfırlayıp tüm etkinlikleri geri getirsin. JavaScript için script.js kullan ve defer ile bağla. Arama alanına label ekle, placeholder “Örnek: Antrenman” olsun. Dar ekranda yatay taşma olmasın, input ve düğmeye Tab ile ulaşılabilsin. Yalnızca ilgili HTML, CSS ve JS'i değiştir. Paket kurma. Önce kısa planını açıkla.”

Amacı: Etkinlik başlıklarının yazdıkça filtrelenmesini sağlamak ve sonuçları erişilebilir biçimde bildirmek.

Sonuç: script.js oluşturuldu, etkinlikler.html'e arama alanı, label, sayaç ve boş sonuç mesajı eklendi. Arama, sayaç ve Temizle düğmesi tarayıcıda test edildi.

Kabul ettiğim veya değiştirdiğim öneri

[BURAYI KENDİ DENEYİMİNİZE GÖRE YAZIN. Aşağıdaki örneği gerçekte olana göre değiştirin veya silin.]

Copilot arama için [önerdiği şey, örn. kart başlığını h2 içinden okuyup küçük harfe çeviren bir filtre] önerdi. Bunu [kabul ettim / şu şekilde değiştirdim: örn. Temizle'ye basınca odağın input'a dönmesi ekledim / boş sonuç mesajını kendi cümlemle değiştirdim]. Nedeni: [örn. kullanıcı Temizle'ye bastıktan sonra tekrar yazmaya devam edebilsin].

Kod açıklamaları

[Aşağıdaki açıklamaları kendi script.js dosyanıza bakarak, kendi cümlelerinizle yeniden yazın. Değişken adları sizin kodunuzda farklıysa düzeltin.]

Event listener

searchInput.addEventListener('input', filterEvents) satırı, arama kutusuna her harf yazıldığında veya silindiğinde filterEvents fonksiyonunu çalıştırıyor. "input" olayı kullanıldığı için kullanıcı Enter'a basmak zorunda kalmıyor, sonuçlar yazdıkça değişiyor.

Filtreleme koşulu

const matches = title.includes(query); satırı, kartın başlığının aranan yazıyı içerip içermediğine bakıyor. Hem başlık hem aranan yazı önce toLocaleLowerCase('tr-TR') ile küçük harfe çevrildiği için "GÜREŞ" ve "güreş" aynı sonucu veriyor. trim() sayesinde baştaki ve sondaki boşluklar da sonucu etkilemiyor. Sonuç true ise kart gösteriliyor, false ise card.hidden = true ile gizleniyor. Örneğin "semineri" yazınca yalnızca "Güreşçi Beslenmesi Semineri" kartı kalıyor.