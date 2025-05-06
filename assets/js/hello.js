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


console.log('merhaba string dünyası. console.log u test ediyoruz ')
console.log('Çalışma Sırası:')
console.log('Sıra 1')
console.log('Sıra 2')
console.log('Sıra 3')
console.log('Sıra 4')
    



console.log("Nihat'ın JavaScript Kodu")
console.log('Onda bunda "Nihat" hoca farkı')
console.log('Nihat' + ' ' + 'Duysak')
console.log('Onda bunda "Nihat" hoca farkı')

console.clear();
console.log('123')
console.log(123 + '  ' + 123)
console.log(12,123,321)
//Syntax hatası vs, bunları console bize gösteriyor zaten.
// bu yaptığımız işleme karakterleri "escape etme" denir.
//