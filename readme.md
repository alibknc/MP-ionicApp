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

**Ekran Görüntüleri:**

![](media/image1.png){width="3.5663713910761157in"
height="6.33093394575678in"} (Ülke Seçme Sayfası)

![](media/image2.png){width="3.8333333333333335in"
height="6.872939632545932in"} (Şehir Seçme Sayfası)
![](media/image3.png){width="3.81332239720035in"
height="6.833333333333333in"} (İlçe Seçme Sayfası)
![](media/image4.png){width="4.023810148731409in"
height="7.159739720034995in"} (Ana Sayfa)
![](media/image5.png){width="3.9523807961504813in"
height="7.073173665791776in"} (Menü)
![](media/image6.png){width="3.7380960192475943in"
height="6.728571741032371in"} (Ayarlar Sayfası)
