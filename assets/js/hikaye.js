

alert('Hikaye oyunuma hoş geldiniz. Başlamak için Tamam\'a veya enter\'e basınız.');

alert('Köpeklerden kaçarken, terk edilmiş bir üniversite laboratuvarına giriyorsun ve gizemli bir zaman makinesi buluyorsun. Üzerinde eski yazılarla dolu zor okunan bir not ve bir bileklik:');
alert('"Doğ_u kararla geleceğı kurtar, yanlış adımlar ise senı s_nsuzluğa sürükler."\nMakine ak_if fakat bozuk gözüküyor. Geri dönüs gar_ntısi yok.\n\n\n\n\n\nA il d rum k odu\' AEZAKMI0421 \nMakine Modeli: R93-t1 F');
const acilKod = "AEZAKMI0421";
const modelNo = "R93-t1 F";
let gecmisGelecekSecimi = prompt('Zaman makinesine yanaştın ve içine girdin. İki büyük buton var. "Gelecek" (Yıl 3020) - "Geçmiş" "Yıl M.Ö 1000".\n\nHangisini seçeceksin? \n\n\n\nGelecek mi, yoksa geçmiş mi?\na) Gelecek\nb) Geçmiş');
if (gecmisGelecekSecimi.toLowerCase() === "gelecek" || gecmisGelecekSecimi.toLowerCase() === "a") {
    confirm("Geleceğe gitmek istediğine emin misin?");
    alert('Gelecekte teknolojinin gelişmiş olduğunu düşünüyosun. Korktuğun için geçmişe gitmedin. Ve Geleceğe bastın. Bayıldın.\n \nUyandığında Yıl 3020. Her yer yıkık dökük. Ya savaş çıktı ve insanlık yok oldu. Ya da Kıyamet koptu ve canlı dünyası bitti. Bir çukurdasın ve dört yanın tepe. Bir taraftan toz bulutu geldiğini, diğer tarafınsa temiz olduğunu görüyorsun.');
    let tozluTemizSecimi = prompt('Ne tarafa gideceksin? \n \na) Tozlu \nb) Temiz');
    if (tozluTemizSecimi.toLowerCase() === "tozlu" || tozluTemizSecimi.toLowerCase() === "a") {
        alert('Hareket olduğunu düşünüp toz bulutuna ilerledin. Birkaç saniye sonra, içinde silah sesleri ve uğuldayan sesler duymaya başlıyorsun. Karşında devasa bir makine ve etrafında birkaç insan silueti görüyorsun. Ancak bu insanlar... garip bir şekilde başka bir boyutun yaratıkları gibi duruyorlar. Senin gibi bir yabancı var mı, yoksa hepsi birer hayalet mi?');
        alert('Yaklaşınca görüyorsun ki silüetler ve makineler savaş halinde. Aralarından sana doğru yaklaşıyor, yüzü görünmüyor ama bir şekilde seni izlediğini hissediyorsun.\n \n Şimdi ne yapacaksın?');
        alert('Makinelere doğru yönelip, onlarla konuşmak mı; Gelen silüeti bekleyip inceleyip, kim-ne olduğunu anlamaya mı çalışacaksın?');
        let makineSiluetSecimi = prompt('Ne yapacaksın? \n \na)Makinelere yönel \nb)Silüeti bekle');
        if (makineSiluetSecimi.toLowerCase() === "makinelere yönel" || makineSiluetSecimi.toLowerCase() === "a") {
            alert('Makinelere doğru kaçıp onlarla konuşmaya çalıştın.');
            alert('Makinelere doğru adım attığında, birdenbire makinelerden biri aniden hareketleniyor. Çatırdayarak çalışmaya başlıyor. Makine, bir adım daha atmanı izledikten sonra, keskin bir şekilde sana dönüp, "Burada ne işin var?" diye soruyor.');
            let makineDogruYanlisSecim = prompt('Ne diyeceksin? \n \na) Doğru Söyle \nb) Yalan Söyle');
            if (makineDogruYanlisSecim.toLowerCase() === "doğru söyle" || makineDogruYanlisSecim.toLowerCase() === "a") {
                alert('Doğru konuştun ve zaman makinesi kullandığını söyledin.');
                let acilkodhatirla = prompt('makine sana acil durum kodunu ve makine modelini hatırladığını sordu:\n \na)PDNEJOH1421 JK12-t2 F\nb)UZUMYMW6112 R90-t3 W\nc)KJKSZPJ2133 M-140LM W\nd)AEZAKMI0421 R93-t1 F' + '\n \n(şık harfi yeterlidir.)');
                if (acilkodhatirla.toLowerCase() === "d") {
                    alert('Makina modeli ve acil durum kodunu hatırlayıp söylersin. Makina sana güvenir ve seni zamanına yollar. Ancak yollamadan önce sana şunları der. "İnsanlık 100 yıllardır dünyaya zarar veriyor ve biz bu savaşı bu yüzden başlattık. İnsanoğlu, yapman gereken, önlemen gereken çok önemli kararlar var. Git ve bir daha gelme. Ve insanlara bu dünyayı anlat. Bizi ve insanoğlunu bu durumdan kurtar!');
                    alert('Tebrikler! Sağ salim dönebildin!');
                }
                else if (acilkodhatirla.toLowerCase() === "a" || acilkodhatirla.toLowerCase() === "b" || acilkodhatirla.toLowerCase() === "c") {
                    alert('Makina modelini yanlış söylersin ve kendini bilmediğin bir zamanda, bilmediğin bir mekanda bulursun. Ömrünün sonuna dek yeni bir hayata alışman gerekiyor. İyi şanslar...')
                }
            }
            else if (makineDogruYanlisSecim.toLowerCase() === "yalan söyle" || makineDogruYanlisSecim.toLowerCase() === "b") {
                alert('Makina yalan konuştuğunu anlar ve:"Gerçek insanlık sona ereli 700 sene oldu." der. Ve ölü bedenlerin arasına seni de ekler.');
            }
        }
        else if (makineSiluetSecimi.toLowerCase() === "silüeti bekle" || makineSiluetSecimi.toLowerCase() === "b") {
            alert('Silüetin yanaştıkça sesini duyarsın: İnleyerek senden yardım diler şekilde yanına gelir. Ve "lütfen yardım et!" diyerek yaklaşır. Bu sırada bir makine silüetin arkasından büyük bir delik açar ve silüetin aslında bir insan olduğunu anlarsın.');
            let ceseteGitGitme = prompt('Önüne düşen bedene yanaşıp yardım eli uzatıcak mısın? \n \na) Yardıma git \nb) Hızlıca bilekliğe sarıl');
            if (ceseteGitGitme.toLowerCase() === "yardıma git" || ceseteGitGitme.toLowerCase() === "a") {
                alert('Yerdeki bedene yanaşırsın. Fakat bunu gören makineler seni bir tehdit olarak algılayıp seni de öldürür.');
            }
            else if (ceseteGitGitme.toLowerCase() === "hızlıca bilekliğe sarıl" || ceseteGitGitme.toLowerCase() === "b" || ceseteGitGitme.toLowerCase() === "bilekliğe sarıl") {
                alert('Bulunduğun durumdan çok korkup bileklik aracılığıyla hızlıca günümüze döndün.');

            }
        }

    }



    else if (tozluTemizSecimi.toLowerCase() === "temiz" || tozluTemizSecimi.toLowerCase() === "b") {
        alert('Nefessiz kalmamak istediğin için temiz tepeye doğru koştun. Tozdan uzaklaştıkça, daha ferah bir hava seni karşılıyor. Tepede büyük, terkedilmiş bir yapının kalıntıları görünmeye başlıyor. Tepede karşına çıkan yapıya doğru yaklaşırken, çevrende hala makinelerin hafif titremesi ve silüetlerin gizemli şekilde gözükmesi seni takip ediyor gibi hissediyorsun.');
        let yapiyaGirGirme = prompt('Yapıya girecek misin, dışarıda mı bekleyeceksin? \n\na)Gir \nb)Bekle');
        if (yapiyaGirGirme.toLowerCase() === "gir" || yapiyaGirGirme.toLowerCase() === "a") {
            alert('Yapıya girdiğinde, içerideki havanın sıkışmış ve terkedilmiş olduğu hissiyle karşılaşıyorsun. Eski taş duvarlar arasında, garip semboller ve yazılarla kaplı bir masa var. Masanın üzerinde ise, bir zamanlar işlevini yerine getiren bir makine kalıntısı duruyor. Makine, şimdi ölü bir şey gibi görünüyor, ancak bazı parçaları hala çalışıyor gibi titriyor. \n "Bunlar, zamanı kontrol etme gücüne sahipti!"');
            let sakinTelas = prompt('Makine parçaları ile uğraşmak mı? Telaşla bir kenara çömelip beklemek mi? \n \na) makine parçalarına yönel \nb) telaş et ve bir kenara çömel');
            if (sakinTelas.toLowerCase() === "makine parçalarına yönel" || sakinTelas.toLowerCase() === "a") {
                alert('Yaklaşıp makine parçaları ile uğraşmayı seçersin. Arkandan birinin yanaştığını hissedersin. Ve döndüğünde Laboratuvarın müdürü ile karşılaşırsın. Müdür: "Senin burada ne işin var??? Bir kanal üzerinden aynı anda yalnızca 1 kişi yolculuk yapabilir. Şimdi senin yüzünden ya ben ya sen burada kalacağız!", der ve elinde metal ile üzerine yürür. korkar ve bir şey yapamazsın. Müdür zorla bilekliği alır ve günümüze döner. Sonsuza dek orada kalırsın.');
            }
            else if (sakinTelas.toLowerCase() === "telaş et ve bir kenara çömel" || sakinTelas.toLowerCase() === "b") {
                alert('Telaşa kapılıp bir kenara çömelir beklersin. Bu sırada geldiğin yoldan tıkırtılar duyarsın. Bir kaç saniye sonra Laboratuvar\'ın müdürü içeri girer ve söylendiğini duyarsın: "Ahmak! Ne yaptığını zannediyor? Onun yüzünden burada sonsuza dek kalacağım!!", der ve "Ya da o kalacak!" diye ekler. Ve o an anlarsın, geçiti yalnızca biriniz kullanabilir! Müdür seni görmeden yaklaştığı anda üzerine atlarsın ve biraz arbededen sonra oradan kaçıp hızlı bir şekilde bilekliği kullanır ve günümüze dönersin!');
            }
        }
        else if (yapiyaGirGirme.toLowerCase() === "bekle" || yapiyaGirGirme.toLowerCase() === "b" || yapiyaGirGirme.toLowerCase() === "girme") {
            alert('Dışarıda beklerken Bir silüet, seni fark ettiğinde soğuk bir sesle konuşuyor: "Ne yapmak istiyorsun? Zamanla oynamak, her şeyi değiştirebilir!" Silüete yaklaşarak, neden burada olduğunu ve bu yapının amacını ve neler olduğunu soruyorsun. \n "Bunlar, bir zamanlar dünyayı değiştirebilecek kadar güçlüydü. Fakat her gücün bir fiyatı vardır." "Burada ne işin var? Uzaklaş buradan, yoksa başına bir şey gelicek!" ');
            let kalGit = prompt('Ne yapacaksın? Uzaklaşıcak mısın yoksa konuşmaya devam mı edeceksin? \n \na) Kal ve konuş \nb) Uzaklaş');
            if (kalGit.toLowerCase() === "kal ve konuş" || kalGit.toLowerCase() === "a") {
                alert('Silüetle konuşmaya devam eder, geleceği nasıl etkileyebileceğini sorarsın. \n \n  "Zamanla oynamak kolay değil, gitmen gerek! Ancak istesende, iş işten geçmiş olabilir." Bir anda makineler sarsılmaya başlıyor. Hızla ilerleyen bir ışık huzmesi, tüm odayı sarıyor ve seni yere seriyor. Bir anda her şey hızla değişiyor. Tüm dünya, zamanın kırılgan bir şekilde yeniden şekillendiğini hissediyor. Yavaşça gözlerini açtığında, kendini bir kez daha eski laboratuvarda buluyorsun, ama bu sefer her şey kararmış ve yıkılmış. Makine bozulmuş, silüet yok olmuş. Zamanın bu dünyayı terk etmesiyle, sen de kaybolanlardan birisin.');
            }
            else if (kalGit.toLowerCase() === "uzaklaş" || kalGit.toLowerCase() === "b") {
                alert('Uzaklaşıyorsun, ilk geldiğin çukura yanaştığın sırada, yapının içinden silüetin çığlıklar atarak kaçtığını görüyorsun. İçerideki makine aniden yeniden aktive oluyor, ışıkları parlıyor ve etrafında bir yıkım başlatıyor. Silüet son bir kez sana bakıyor ve "Zamanla oynamak... bir bedel ödemek demektir," diye bağırıyor. Bir patlama sesiyle, her şey kararmaya başlıyor ve bileğindeki alet çalışıyor. Gözlerini açtığında, pekte yabancı bir yerde değilsin. Laboratuvarda uyanıyosun ve makineyi göremiyorsun. Fakat bileğindeki icat derine işlemiş. Bundan sonraki hayatında da muhtemelen peşini bırakmayacak...');
            }
        }
    }
}







else if (gecmisGelecekSecimi.toLowerCase() === "geçmiş" || gecmisGelecekSecimi.toLowerCase() === "b") {
    confirm("Geçmişe gitmek istediğine emin misin?");
    alert('Geçmişi değiştirebileceğini ve daha iyi bir dünya oluşturabileceğini düşündün. Gözlerinde, M.Ö. 1000 yılına ait, taş yapılarla dolu, tarihi bir şehir beliriyor. İnsanlar basit kıyafetler giymiş, eski araçlarla çalışıyorlar. Çevrende, eski uygarlıkların kalıntılarını görebiliyorsun. Ama burada bir şeyler ters gidiyor gibi. Hava, biraz daha ağır ve eski bir enerjiyle dolu. Bir grup insan, büyüsel bir ritüel yapıyor gibi görünüyor. ');
    let ritüeleGitGitme = prompt('Büyü yapan insanlara yanaşıp onlarla konuşmak mı yoksa bölgeden uzaklaşıp daha güvenli bir yer mi aramak? \n \na)Ritüele yaklaş \nb)Güvenli bir yere git');
    if (ritüeleGitGitme.toLowerCase() === "ritüele yaklaş" || ritüeleGitGitme.toLowerCase() === "a") {
        alert('Bir adam, gözlerini sana doğru çeviriyor ve sert bir bakışla seni süzüyor ve: \n+:"Burada ne işin var?" diyor, sesi derin ve yankı yapıyor. "Zamanın, bu dünyada sana ait değil." \n-:"Ben, zamanın sırrını öğrenmek istiyorum." \n+: "O zaman geri dönüş yoktur. Zamanın gerçek gücü, seni değiştirebilir." Büyüsel bir ışık, etrafında dönmeye başlıyor ve aniden senin zihninde eski imgeler beliriyor. Eski uygarlıklara dair görüntüler, kaybolmuş savaşlar, kazandıkları zaferler, kaybettikleri hayatlar gözlerinin önünden geçiyor.');
        let katilKatilma = prompt('Ritüele katılıp katılmamak senin elinde. Ritüele katılmak, zamanın gücünü kontrol etme fırsatı sunabilir. Fakat bu karar, seni geçmişin karanlık tarafına çekebilir.\n\na)Katıl \nb)Katılma');
        if (katilKatilma.toLowerCase() === "Katıl" || katilKatilma.toLowerCase() === "a") {
            alert('Ritüel ilgini çekti, katıldın.');
            alert('Ritüele katıldın ancak bir şeyler ters gitti ve kendini bir anda hiç bilmediğin bir yerde, zamanın derinliklerinde kaybolmuş buldun. Bilekliğin çalışmıyor, ve yapabileceğin hiç bir şey yok.. Ölümü beklemekten başka...');

        }
        else if (katilKatilma.toLowerCase() === "Katılma" || katilKatilma.toLowerCase() === "b") {
            alert('Ritüle katılmak istemiyorsun, bu gücün seni nasıl etkileyebileceğini bilmeden riske atmak istemiyorsun.');
            alert('İnsanların bakışları arkanı dönerken seni izliyor, ancak sen sadece hızla kaçmak istiyorsun. Çevredeki taş yapılar arasından ilerlerken karanlık bir mağara ağzına rastlıyorsun. Ancak, tedirgin bir his seni sarıyor. Uzaklardan bir ses duyuyorsun. Bir kadının çığlıkları yükseliyor, sanki bir şey korkutucu bir şekilde onu takip ediyor.')
            let kadinaGitGitme = prompt('Ne yapacaksın? Karşındaki mağaraya mı koşacaksın, yoksa kadına yardıma mı gideceksin? \n\na) Mağaraya Koş\nb)Kadına Git');
            if (kadinaGitGitme.toLowerCase() === "mağaraya koş" || kadinaGitGitme.toLowerCase() === "a") {
                alert('Hızlıca mağaraya koştun. İçeride garip bir hava vardır, biraz geçtikten sonra leş kokusundan artık dayanamayacakken tam çıkışa geri döndüğünde karşında bir boz ayısı ile karşılaşırsın.');
                let ayiKarsilasma = prompt('Şimdi ya kaçacaksın, ya da bilekliğini kullanmayı deneyeceksin.\nNe yapacaksın?\n\n a)Kaç\nb)Bilekliği Kullan');
                if (ayiKarsilasma.toLowerCase() === "kaç" || ayiKarsilasma.toLowerCase() === "a") {
                    alert('Panik yapıp kaçmaya çalıştın. Fakat devasa ayı seni bir hamlede yere serdi  ve boynundan büyükçe ısırdı. Oracıkta can verdin..');
                }
                else if (ayiKarsilasma.toLowerCase() === "bilekliği kullan" || ayiKarsilasma.toLowerCase() === "b") {
                    alert('Panik yapıp kaçmaya çalıştın. Fakat devasa ayı seni bir hamlede yere serdi ve yemeği oldun! Oracıkta can verdin...');
                }
            }
            else if (kadinaGitGitme.toLowerCase() === "kadına git" || kadinaGitGitme.toLowerCase() === "b") {
                alert('Kadının sesine doğru gitmeyi seçtin. Kadına doğru hızlı ve emin adımlarla ilerlerken çalılardan kıpraşmalar duydun. ');
                let caliYaklasmak = prompt('Çalıya yaklaşıp göz atıcak mısın, yoksa yola devam mı edeceksin?\na)Çalıya göz at\nb)yola devam et');
                if (caliYaklasmak.toLowerCase() === "çalıya göz at" || caliYaklasmak.toLowerCase() === "çalıya gözat" || caliYaklasmak.toLowerCase() === "a") {
                    alert('Çalılara yaklaştığında büyük bir kurtun kafası iki kütük arasına sıkışmış ve kurtulmak için çabalıyor olduğunu görüyorsun.');
                    let kurtYardim = prompt('Kurta yardım edecek misin?\na)Yardım et\nb)Öylece bırak');
                    if (kurtYardim.toLowerCase() === "yardım et" || kurtYardim.toLowerCase() === "a") {
                        alert('Kurtun gözlerindeki duyguyu hisseder ve kütüğü kaldırırsın. Kurt bir tarafa doğru koşar ve uzaklaşır.');
                        alert('Kadına doğru yürümeye devam ettin. Bir anda kendini tuzağın ortasında buldun. Kadın bir düzine dağ adamı ile bir anda etrafını sarmış, çaresiz bir şekilde donakaldın!');
                        let kadinKarsinda = prompt('Şimdi ne yapacaksın? Sakin olup bekleyecek misin yoksa hızlıca bilekliğe mi sarılacaksın?\n\na)Sakin ol\nb)Bileklik');
                        if (kadinKarsinda.toLowerCase() === "Sakin ol" || kadinKarsinda.toLowerCase() === "a") {
                            alert('Dağ adamları üzerine doğru yürürken çalılar arasından biraz önceki korkutucu büyük gri kurt sıçrar ve dağ adamlarını kaçırır. Kurt "Buradan uzaklaş!" der gibi hırlar, ve bileğindeki aleti kullanıp tekrar günümüze dönersin!');
                        }
                        else if (kadinKarsinda.toLowerCase() === "bileklik" || kadinKarsinda.toLowerCase() === "b") {
                            alert('Panik olup hızlıca bileğine sarılırsın. Bunu gören dağ adamları üzerine taş yağdırır ve feci bir şekilde orada seni öldürürler.');
                        }
                    }
                    else if (kurtYardim.toLowerCase() === "öylece bırak" || kurtYardim.toLowerCase() === "b") {
                        alert('Kurtu kurtardığında ne olacağını bilmediğin için korkup bırakırsın ve sese doğru devam edersin.');
                        alert('Kadına doğru yürümeye devam ettin. Bir anda kendini tuzağın ortasında buldun. Kadın bir düzine dağ adamı ile bir anda etrafını sarmış.');
                        let bahtsizSecim = prompt('Sakin olup an kollayıp kaçmayı mı bekleyeceksin yoksa hızlıca bilekliğine mi sarılacaksın? \n\na)an kolla\nb)bileklik');
                        if (bahtsizSecim.toLowerCase() === "an kolla" || bahtsizSecim.toLowerCase() === "a") {
                            alert('Sakin bir şekilde boş bir an kollayıp kaçmak istersin fakat yakalanır ve ellerine düşersin. Artık günümüze dönmek için bilekliği tekrar alman gerekir.. Bir nevi ömrünün sonuna dek orada hapsolursun.');

                        }
                        else if (bahtsizSecim.toLowerCase() === "bileklik" || bahtsizSecim.toLowerCase() === "b") {
                            alert('Panikle bileğine sarılıp çalıştırmayı deneyecekken bunu gören dağ adamları üzerine taş yağdırır ve feci bir şekilde orada seni öldürürler.');
                        }

                    }
                }
                else if (caliYaklasmak.toLowerCase() === "yola devam et" || caliYaklasmak.toLowerCase() === "b") {
                    alert('Çalıya yanaşmazsın fakat tedbirli olman gerektiğini düşünür ve çalıları siper alarak yürümeye devam ettin. Sese yanaştığında çalılar arasından bir düzine dağ adamının kadının yanında sana tuzak kurduklarını gördün!');
                    let ayvayiYedin = prompt('Geri dönüp koşarak uzaklaşıcakmısın yoksa sakin bir şekilde geri geri mi yürüyeceksin?\n\na)Geri dön koş\nb)Sakince gerile');
                    if (ayvayiYedin.toLowerCase() === "geri dön koş" || ayvayiYedin.toLowerCase() === "a") {
                        alert('Arkanı döndüğünde biraz önceki ses gelen çalıların arasından bir kurt çıktığını gördün. Ve kurt sana doğru yürümeye başladı!');
                        let tehlikeKarsinda = prompt('Hızlı karar vermen lazım! Ya kurttan kaçıcaksın, ya dağ adamlarından kaçıcaksın, ya da hızlıca bilekliğe sarılacaksın!\n\na)Kurttan kaç\nb)dağ adamlarından kaç\nc)bilekliğe sarıl');
                        if (tehlikeKarsinda.toLowerCase() === "kurttan kaç" || tehlikeKarsinda.toLowerCase() === "a") {
                            alert('Kurttan kaçacakken kendini dağ adamlarının arasına attın ve onlara esir düştün. Geçmişte kaldın.');
                        }
                        else if (tehlikeKarsinda.toLowerCase() === "dağ adamlarından kaç" || tehlikeKarsinda.toLowerCase() === "b") {
                            alert('Dağ adamlarını daha büyük bir tehdit olarak görüp kurta yem oldun! Kendi doğumundan 3000 yıl önce öldün!');
                        }
                        else if (tehlikeKarsinda.toLowerCase() === "bilekliğe sarıl" || tehlikeKarsinda.toLowerCase() === "c") {
                            alert('Sakin bi şekilde kimseyi heyecanlandırmadan bilekliği kullanıp günümüze sağ salim döndün. Şanslı bir yolculuk!');
                        }
                    }
                    else if (ayvayiYedin.toLowerCase() === "sakince gerile" || ayvayiYedin.toLowerCase() === "b") {
                        alert('Sessizce geri geri yürürken arkandan ses gelir, arkanı döndüğünde biraz önceki ses gelen çalıların arasından kurt çıkmış ve sana yanaşıyor!');
                        let kurtGeliyor = prompt('Kurtla boğuşmayı mı tercih edersin, yoksa hızlıca bilekliğe mi sarılacaksın?\n\na)kurtla boğuş\nb)bilekliğe sarıl');
                        if (kurtGeliyor.toLowerCase() === "kurtla boğuş" || kurtGeliyor.toLowerCase() === "a") {
                            alert('Ahmak! Kurt ile boğuşmayı düşünüdün fakat kurt seni bir hamlede etkisiz bıraktı! Afiyet olsun kurt..');
                        }
                        else if (kurtGeliyor.toLowerCase() === "bilekliğe sarıl" || kurtGeliyor.toLowerCase() === "b") {
                            alert('Bilekliğe sarıldın fakat tam geçite geçicekken kurt üzerine atlar ve kurt ile birlikte günümüze dönersin. Laboratuvarda kendine geldiğinde kurt daha baygındır ve hızlıca kaçarsın.');
                        }
                    }
                }
            }

        }
    }
    else if(ritüeleGitGitme.toLowerCase() === "güvenli bir yere git" || ritüeleGitGitme.toLowerCase() === "b" ){
        alert('Yola devam edersin ve aynı dedeninkine benzeyen mütevazi bir kulübe görürsün ve yanaşırsın. Meraklı gözlerle camından içeri göz gezdirirsin.');
        let kadiniBekle = prompt('Camlar buğulu, kulübe kullanılıyor gibi görünüyor. Sahibini bekleyecek misin, yoksa ısınmak için içeriye mi gireceksin?\n\na)İçeri gir\nb)Sahibini bekle');
        if (kadiniBekle.toLowerCase() === "içeri gir" || kadiniBekle.toLowerCase() === "a"){
            alert('Boş olduğunu düşünüp içeri girer ve biraz ısınmak için şöminenin yanına oturursun.');
            alert('biraz sonra bir kadın içeri girer ve şöminenin yanına bi iskemle çeker, ve oturur. \n-:Merhaba, kusura bakm... \nKadın +: demek sonunda gelebildin.\n-: N-Ne? Nasıl yani??\n+: 64 senedir seni bekliyorum. İlk günkü umudumla, hiç umutsuzluğa kapılmadan... Çünkü bunu sen yarattın, ve işte, buradasın!\n-:Ne diyosun be kadın? Sende kimsin, neyin nesisin? Neyi yaratmışım??\n+: Sakin ol, kafan çok karışacak. Bundan 65 sene önce sebep olduğun bir şeyden dolayı burada seni bekliyorum. Eğer beni dinlemezsen bu yolculuğundan dönüşünde bir döngü oluşturacaksın. Ve her 65 senede bir bu an yaşanacak. Bu geçitin kapanması gerekiyor. Bu yüzden o eski laboratuvardaki not kağıdındaki eksik harflerin ne olduğunu hatırlaman gerekiyor.\n-:Yani kullandığım geçit bozuk mu? Nasıl geldim o zaman buraya?\n+: Sorun nasıl geldiğin değil, nasıl gideceğin. Şimdi bana o harfleri söyle.');
            let harflerNe = prompt('Yaşlı kadın, harfleri doğru söylemen gerektiğini söylüyor. Hatırlıyor musun?\n\n a) b a t ı\nb) r o t a\nc) p a r a');
            if(harflerNe.toLowerCase() === "b a t ı" || harflerNe.toLowerCase() === "batı" || harflerNe.toLowerCase() === "a"){
                alert('Yanlış hatırladın, ve geçit düzgün şekilde açılmadı. Geçmişinde derinliklerinde kayboldun..');
            }
            else if(harflerNe.toLowerCase() === "r o t a" || harflerNe.toLowerCase() === "rota" || harflerNe.toLowerCase() === "b"){
                alert('Doğru hatırladın, ve geçitte sıkıntı olmadı. Giderken yaşlı kadının son sözlerinden kendi kızın olduğunu anlıyorsun!! \n"Annemle o çok sevdiğin kafede tanışacaksın, baba."');
            }
            else if(harflerNe.toLowerCase() === "p a r a" || harflerNe.toLowerCase() === "para" || harflerNe.toLowerCase() === "c"){
                alert('Yanlış hatırladın, ve geçit düzgün şekilde açılmadı. Geçmişinde derinliklerinde kayboldun..');
            }
        }
        else if(kadiniBekle.toLowerCase() === "sahibini bekle" || kadiniBekle.toLowerCase() === "b"){
            alert('Sahibini beklemenin doğru olduğunu düşündün.\n \n ... \n \n Biraz geçtikten sonra yaşlı bir kadın gelir. Ve sormadan içeri seni de davet eder.')
            alert('Kadın içeri girer ve şöminenin yanına bi iskemle çeker, ve oturur. \nKadın +: demek sonunda gelebildin.\n-: N-Ne? Nasıl yani??\n+: 64 senedir seni bekliyorum. İlk günkü umudumla, hiç umutsuzluğa kapılmadan... Çünkü sen bunun için yaratıldın. Ve işte, buradasın.\n-:Ne diyosun be kadın? Sende kimsin, neyin nesisin? Ne için yaratılmışım??\n+: Sakin ol, kafan çok karışacak. Bundan 65 sene önce sebep olduğun bir şeyden dolayı burada seni bekliyorum. Eğer beni dinlemezsen bu yolculuğundan dönüşünde bir döngü oluşturacaksın. Ve her 65 senede bir bu an yaşanacak. Bu geçitin kapanması gerekiyor. Bu yüzden o eski laboratuvardaki not kağıdındaki eksik harflerin ne olduğunu hatırlaman gerekiyor.\n-:Yani kullandığım geçit bozuk mu? Nasıl geldim o zaman buraya?\n+: Sorun nasıl geldiğin değil, nasıl gideceğin. Şimdi bana o harfleri söyle.');
            let harflerNe = prompt('Yaşlı kadın, harfleri doğru söylemen gerektiğini söylüyor. Hatırlıyor musun?\n\n a) b a t ı\nb) r o t a\nc) p a r a');
            if(harflerNe.toLowerCase() === "b a t ı" || harflerNe.toLowerCase() === "batı" || harflerNe.toLowerCase() === "a"){
                alert('Yanlış hatırladın, ve geçit düzgün şekilde açılmadı. Geçmişinde derinliklerinde kayboldun..');
            }
            else if(harflerNe.toLowerCase() === "r o t a" || harflerNe.toLowerCase() === "rota" || harflerNe.toLowerCase() === "b"){
                alert('Doğru hatırladın, ve geçitte sıkıntı olmadı. Giderken yaşlı kadının son sözlerinden kendi kızın olduğunu anlıyorsun!! \n"Annemle o çok sevdiğin kafede tanışacaksın, baba."');
            }
            else if(harflerNe.toLowerCase() === "p a r a" || harflerNe.toLowerCase() === "para" || harflerNe.toLowerCase() === "c"){
                alert('Yanlış hatırladın, ve geçit düzgün şekilde açılmadı. Geçmişinde derinliklerinde kayboldun..');
            }
        }
    }
}