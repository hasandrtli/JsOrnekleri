// src -> kullanıyoruz onuda harici bir dosya çağırmak için kullanıyoruz

// Programlama dillerinde veriler türlerine göre ayrılır.
// Primitive - ilkel - değer tipli veriler -> doğrudan içindeki değeri tutan veriler

// Bunlar ;
// Programcılık tarafında bir karşılığı var


// Metin -> string -> js string ifade tek veya çift tırnak içinde belirtliir 
// Sayı , küsüratlı sayı, (integer(tamsayı) - "double - float - decimal"(küsüratlı)) 
// Tırnak vb yoktur  doğrudan yazılır

//Tarih -> date (datetime) -> js'de bununla uğraşmayın 


//Binary tipinde 1 ve 0 a benzer, bool -> boolean algebra -> true ve false


// JS tek veya çift tırnak farketmez ben hallederim diyor . diğer diller sorun çıkarabilir bu.

//

// alert("Hello JS Dünyası");
//Tarayıcı uyarı kutusu
//Bu bir fonksiyondur. Tarayıcının içinde olan fonksiyon
//Fonksiyonun ismini yazdıktan sonra parantez aç kapa, sonra gösterilecek mesajı tırnak içine yaz



// özelliğin amacı
//normalde, tarayıcılar bir html sayfasını yüklerken script 
//etiketine rastlandığında javascript dosyasını hemen indirir ve çalıştırır
//bu da html'in yüklenmesini geçici olarak durdurabilir
//bu yüzden defer kullanıldığında bu durum ortadan kalkar.


// javascript dosyasının senkron yerine asenkron olarak yüklenmesini sağlar.
//bu özellik, sayfanın yüklenme performansını optimize etmek ve tarayıcıda
// doğru bir sırada çalışmasını sağlamak için kullanılır


// sürekli alerti çalıştırmak / çağırmak sevimsiz bir durum
//yeni nesil güzel tarayıcıların js yazıyorsanız 2 adet güzel tarayıcı mevcut
//chrome ve firefox bunarın dışında js ile aktif geliştirme yapıyosanız 
//diğerlerinde keyifiniz kaçabilir, araçları fazla gelişmemiştir.


// console.log('merhaba string dünyası. console.log\'u test ediyoruz ')
// console.log('Çalışma Sırası:')
// console.log('Sıra 1')
// console.log('Sıra 2')
// console.log('Sıra 3')
// console.log('Sıra 4')
    


//  console.log("Nihat'ın JavaScript Kodu")
//  console.log('Onda bunda "Nihat" hoca farkı')
//  console.log('Nihat' + ' ' + 'Duysak')
//  console.log('Onda bunda "Nihat" hoca farkı')
//  console.clear();
//  console.log('123')
//  console.log(123 + '  ' + 123)
//  console.log(12,123,321)
// console.clear()
 // Syntax hatası vs, bunları console bize gösteriyor zaten.
// bu yaptığımız işleme karakterleri "escape etme" denir.
//

// console.log (4 + 3);
// console.log (4 * 3);

// prompt('Adınız Nedir?');

// console.log(prompt('Adınız Nedir?'));
// console.clear()
// console.log('Merhaba Sayın ' + prompt('Adınız Nedir?'));
// console.clear()


//Veri dönüştürme
//Rakamı Metine dönüştürme kısmını pek dert etmeyiz. çok fazla ihtiyacımız olmaz.
//prompt veya form elemanları (inputlar) bize her zaman string verir.
//Metini rakama dönüştürme kısmında ise numaraya çevirmemiz gerekir.
//(string olan veriyi matematik işlemi yapmak için)

//css'te olduğu gibi büyük küçük harf duyaarlılığı var.
//javascript case sensitive bir dildir(büyük küçük harf duyarlılığı.)

//  Number('29') --> number dönmüş olur.

// console.log('Yaşın: ' + (2025 - Number (prompt('Kaç Yılında Doğdun?'))));

//JS Anormal bir dilmiş dolayısıyla arada böyle string - number swaplarını kendisi yapabilir :)

// console.log('Doğum Yılı: ' + (2025- Number(prompt('Kaç Yaşındasın?'))))


//kullanıcıya şimdiki yılı soralım
//kullanıcıya doğum ylını soralım
//kullanıcıya yaşını söyleyelim


// console.log('Senin Yaşın : '+ (Number(prompt('Şuanki yıl nedir?')) - Number(prompt('Doğum Yılınız Nedir?'))));

// console.log('Hoş Geldin: ' + (prompt('İsminiz Nedir?') + ' ' + (prompt('Soyisminiz Nedir?')) + ' ' + (2025 - Number(prompt('Doğum Yılınız Nedir?'))) + ' yaşındasın.'));

// console.log('Sınav Notunuz: ' + (Number(prompt('Sınav Notunuz Nedir?')) + Number(prompt('2. Sınav Notunuz Nedir?')) + Number(prompt('3. Sınav Notunuz Nedir?'))) / 3);


// console.log('3. Açı:' + (180 - (Number(prompt('İlk Açıyı Giriniz:')) + Number(prompt('İkinci Açıyı Giriniz:')))));


//NaN hatası --> not a number demektyrr.

//Değişkenler - Variables   

// Değişkenlerin genel amacı --> veriyi tekrar tekrar kullanabilmek ve erişebilmek

// Bonus özellik --> kod okunurluuğunu arttırır.
// geçici depolama yeri -> ram


//değişken tanımlamanın anahtar kelimesi "let"

// artık "var" kullanmıyoruz, çok sıkıntı çıkartıyor ve modern javascript kodları ile uyuşmuyor. var'ı unutalım.

// Tarayıcı çalıştırır fakat geriye dönük uyumluluktan dolayı.

//Deiğşken tanımlama yöntemi 
// değişken anahtar kelimesi + değişken ismi + atama operatörü + değer


// let ad = 'Nihat';
//JS de değişkenler camel case kuralına uymalı.

//EN ÖNEMLİ OLAYLARDAN BİRTANESİ türkçe karakter kullanılmaz.
// Diğer önemli konu: Ardışık değişken isimleri %99 oranında hatalı yapılıyor demektir. ad1 ad2 ad3 gibi.
// let ad1 = 'Nihat';
// let ad2 = 'Duysak';
// console.log(ad);
// console.log(ad2);
// console.log(ad1);

//eşittirin sol ve sağ tarafı çok önemli!!!

// let ad;
// console.log(ad);

// ad='Nihat';
// console.log('ad ' + ad);

// let isim = prompt('İsminiz:');
// // console.log(isim)
// let soyad = prompt('Soyisminiz:');
// // console.log(isim + ' ' +soyad);

// let tamAd = isim + ' ' + soyad;
// console.log('Hoş geldin ' + tamAd);


// let data;
// // let data = x; diyemeyiz çünkü daha önce let ile tanımlanmış. bir daha tanımlanamazz.
// console.log(data);

//tanımlama yapılmadıysa veya veri içinde yoksa


// undefined --> tanımsız
// null --> boş değer
// en güzel örneği tuvalet kağıdı örneği


// değişken ismi verirken ardışık sayıyla değişken VERMEYİZ!!!
// örnek :::

let name = 'Hasan';
console.log(name);
let name2 = name;
console.log(name2);
let name3 = name2;
console.log(name3);


name = 'leo';
console.log(name3);