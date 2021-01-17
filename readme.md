**Ezan Vakti Uygulaması**

Seçilen ülke, şehir ve ilçe bilgilerine göre bölgenin ezan vakitlerini
gösteren ve vakit dolduğunda bildirim gönderen uygulama. Uygulama ilk
açılışında ülkeler listesiyle açılır. Bu liste local JSON dosyası olarak
dosyalarda bulunur. Ardından seçilen ülke için belirlenen API
kaynağından o ülkenin şehirleri listesi, bir sonraki seçim ile de
ilçelerin listesi internetten alınır. Seçimler tamamlandıktan sonra
ilçenin bir aylık ezan vakitlerini içeren JSON dosyası okunur ve veriler
daha sonra kullanılmak üzere local veri tabanına kaydedilir. Bundan
sonraki açılışlarda direkt olarak ana sayfaya yönlendirilir.

Ana sayfada en üst kısımda bir sonraki vakte kalan zaman anlık sayaç ile
gösterilir. Alt kısımda da vakitlerin saatleri listelenmektedir. Sürenin
sıfırlanması anında ezan vakti bildirim olarak gösterilir.

Bildirim gönderme isteği ayarlar sayfasından kontrol edilebilir. Seçilen
değer local veri tabanına kaydedilir ve buna bağlı olarak bildirim
gönderilir.

Uygulamayı Capacitor eklentileri kullanarak geliştirdim. Android cihazda
test ettim. Web üzerinde de çalışmaktadır. 7 sayfa ve 2 servisten
oluşmaktadır.

