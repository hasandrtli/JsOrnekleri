// TAŞ KAĞIT MAKAS OYUNU.



let kullaniciSecimi = prompt('Birini seçiniz:\n Taş, Kağıt, Makas.');

let bilgisayarSecimi = ['Taş', 'Kağıt' , 'Makas'].at(Math.floor(Math.random() * 3));



if(kullaniciSecimi === 'Taş') {
    if (bilgisayarSecimi === 'Makas') {
        console.log('Tebrikler! Kazandın!!!')
    }
    else if (bilgisayarSecimi === 'Kağıt'){
        console.log('Üzgünüm.. Kaybettin!');
    }
    else if (bilgisayarSecimi === 'Taş'){
        console.log('Tekrar deneyiniz, berabere.');
    }
    console.log(`Bilgisayarın seçimi: ${bilgisayarSecimi}`);
}



else if(kullaniciSecimi === 'Kağıt') {
    if (bilgisayarSecimi === 'Taş') {
        console.log('Tebrikler! Kazandın!!!')
    }
    else if (bilgisayarSecimi === 'Makas'){
        console.log('Üzgünüm.. Kaybettin!');
    }
    else if (bilgisayarSecimi === 'Kağıt'){
        console.log('Tekrar deneyiniz, berabere.');
    }
    console.log(`Bilgisayarın seçimi: ${bilgisayarSecimi}`);
}



else if(kullaniciSecimi === 'Makas') {
    if (bilgisayarSecimi === 'Kağıt') {
        console.log('Tebrikler! Kazandın!!!')
    }
    else if (bilgisayarSecimi === 'Taş'){
        console.log('Üzgünüm.. Kaybettin!');
    }
    else if (bilgisayarSecimi === 'Makas'){
        console.log('Tekrar deneyiniz, berabere.');
    }
    console.log(`Bilgisayarın seçimi: ${bilgisayarSecimi}`);
}

else {
    console.log('Lütfen seçenekleri kontrol ediniz.');
}