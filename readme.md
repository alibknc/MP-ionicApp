# Ezan Vakti Uygulaması

Seçilen ülke, şehir ve ilçe bilgilerine göre bölgenin ezan vakitlerini gösteren ve vakit dolduğunda bildirim gönderen uygulama. Uygulama ilk açılışında ülkeler listesiyle açılır. Bu liste local JSON dosyası olarak dosyalarda bulunur. Ardından seçilen ülke için belirlenen API kaynağından o ülkenin şehirleri listesi, bir sonraki seçim ile de ilçelerin listesi internetten alınır. Seçimler tamamlandıktan sonra ilçenin bir aylık ezan vakitlerini içeren JSON dosyası okunur ve veriler daha sonra kullanılmak üzere local veri tabanına kaydedilir. Bundan sonraki açılışlarda direkt olarak ana sayfaya yönlendirilir.

Ana sayfada en üst kısımda bir sonraki vakte kalan zaman anlık sayaç ile gösterilir. Alt kısımda da vakitlerin saatleri listelenmektedir. Sürenin sıfırlanması anında ezan vakti bildirim olarak gösterilir.

Bildirim gönderme isteği ayarlar sayfasından kontrol edilebilir. Seçilen değer local veri tabanına kaydedilir ve buna bağlı olarak bildirim gönderilir.

Kaza Takibi sayfasından kaza namazları takip edilebilir. Güncellenen değerler local veri tabanına kaydedilir.

Uygulamayı Capacitor eklentileri kullanarak geliştirdim. Android cihazda test ettim. Web üzerinde de çalışmaktadır. 8 sayfa ve 2 servisten oluşmaktadır.

### API Kaynağı

`<Kaynak>` : <https://ezanvakti.herokuapp.com/>

* Ülkeler Listesi: /ulkeler
* Şehirler Listesi: /sehirler/{ULKE_KODU}
* İlçeler Listesi: /ilce/{SEHIR_KODU}
* Vakitler: /vakitler/{ILCE_KODU}

### Kurulum

Tüm dosyaları indirin ve VS Code (vb.) ile açın. Ardından sırasıyla;

`$ npm install`

`$ ionic serve`

### Ekran Görüntüleri

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshoots/1.png)

> Ana Sayfa.

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshoots/2.png)

> Ülke Seçme Sayfası.

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshoots/3.png)

> Şehir Seçme Sayfası.

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshoots/4.png)

> İlçe Seçme Sayfası.

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshoots/5.png)

> Menü.

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshoots/6.png)

> Ayarlar Sayfası.

----
