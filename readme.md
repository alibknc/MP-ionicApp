# Ezan Vakti Uygulaması

## Giriş

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/src/assets/icon/favicon.ico)

> Logo.

Seçilen ülke, şehir ve ilçe bilgilerine göre bölgenin ezan vakitlerini gösteren ve vakit dolduğunda bildirim gönderen uygulamadır. Uygulama ilk açılışında ülkeler listesiyle açılır. Bu liste local JSON dosyası olarak dosyalarda bulunur. Ardından seçilen ülke için belirlenen API kaynağından o ülkenin şehirleri listesi, bir sonraki seçim ile de ilçelerin listesi internetten alınır. Seçimler tamamlandıktan sonra ilçenin bir aylık ezan vakitlerini içeren JSON dosyası okunur ve veriler daha sonra kullanılmak üzere local veri tabanına kaydedilir. Bundan sonraki açılışlarda direkt olarak ana sayfaya yönlendirilir.

Ana sayfada en üst kısımda bir sonraki vakte kalan zaman anlık sayaç ile gösterilir. Alt kısımda da vakitlerin saatleri listelenmektedir. Sürenin sıfırlanması anında ezan vakti bildirim olarak gösterilir.

Bildirim gönderme isteği ayarlar sayfasından kontrol edilebilir. Seçilen değer local veri tabanına kaydedilir ve buna bağlı olarak bildirim gönderilir.

Kaza Takibi sayfasından kaza namazları takip edilebilir. Güncellenen değerler local veri tabanına kaydedilir.

Uygulamayı Capacitor eklentileri kullanarak geliştirdim. Web üzerinde de çalışmaktadır. 8 sayfa ve 2 servisten oluşmaktadır.

## Ülkeler Sayfası

Uygulamanın ilk kullanımında açılan başlangıç sayfası ve daha sonrasında Konum Ayarları bölümünde açılan sayfadır (Kaynak kodlarında ismi *"First Page"*). Sayfa açılışında data servis ile local olarak bulunan *ulkeler.json* dosyasından ülke isimlerinin ve ID'lerin bulunduğu JSON veriyi alır ve ekranda listeler. Listeden seçilen ülkenin ID'si parametre olarak bir sonraki sayfaya gönderilir.

## Şehirler Sayfası

Ülkeler sayfasında seçilen ülke sonrası açılan sayfadır (Kaynak kodlarında ismi *"Second Page"*). Sayfa açılışında parametre olarak alınan ID'yi API linkine ekleyerek data serviste bulunan metoda gönderir. Metot ile API kaynağından seçilmiş ülkenin şehirlerinin isimlerinin ve ID'lerin bulunduğu JSON veriyi alır ve ekranda listeler. Listeden seçilen şehrin ID'si parametre olarak bir sonraki sayfaya gönderilir.

## İlçeler Sayfası

Şehirler sayfasında seçilen şehir sonrası açılan sayfadır (Kaynak kodlarında ismi *"Third Page"*). Sayfa açılışında parametre olarak alınan ID'yi API linkine ekleyerek data serviste bulunan metoda gönderir. Metot ile API kaynağından seçilmiş şehrin ilçelerinin isimlerinin ve ID'lerin bulunduğu JSON veriyi alır ve ekranda listeler. Listeden seçilen ilçenin ID'sini *kaydet()* metoduyla tekrardan API linkine ekleyerek data serviste bulunan metoda gönderir. API kaynağından seçilmiş ilçenin vakit bilgilerinin bulunduğu JSON veriyi alır ve yine data servis aracılığıyla local veritabanına kaydeder ve ana sayfaya yönlendirir.

## Ana Sayfa

İlk kullanımda ilçeler sayfasından sonra açılan, daha sonra ise uygulamanın başlangıcı olan sayfadır (Kaynak kodlarında ismi *"Home"*). Sayfa açıldığında öncelikle data servis ile localde kaydedilen vakit bilgilerini alır. Ardından sırasıyla *tarihBul(), setVeri(), getElapsedTime()* fonksiyonlarını çağırır. tarihBul ile günün tarihi bilgisi alınır. Bu bilgi ekranda gösterilir. setVeri ile localden alınan veri listesi gezilir ve günün tarihine ait bilgiler filtrelenir. Bu bilgiler de ekranda gösterilir. getElapsedTime sayaç işlemlerinde kullanılır. Metot içinde öncelikle *checkTime()*  ile bir sonraki vaktin hangisi olduğu belirlenir. Günün tüm vakitleri geçmiş ise bir sonraki günün ilk vaktini seçer. Daha sonra belirlenen vakte kalan zaman saat, dakika ve saniyelere ayrılır. Eğer tümü sıfır ise bildirim gönderme fonksiyonu tetiklenir. Bu fonksiyon da bildirim servisi ile ezan vaktini bildirim olarak gönderir. Ekranın sol üst köşesinde menü bulunur.

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

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshots/1.png)

> Ana Sayfa.

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshots/2.png)

> Ülke Seçme Sayfası.

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshots/3.png)

> Şehir Seçme Sayfası.

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshots/4.png)

> İlçe Seçme Sayfası.

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshots/5.png)

> Menü.

![](https://raw.githubusercontent.com/alibknc/MP-ionicApp/master/screenshots/6.png)

> Ayarlar Sayfası.

----
