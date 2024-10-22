--@block
DROP TABLE carousel;
CREATE TABLE IF NOT EXISTS carousel (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uri VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT
);
INSERT INTO carousel (uri, title, description)
VALUES
    ('/events/e5n_eloadas.jpg', 'E5N - Gyere\nelőadónak!', 'Kedves Diákság!\n\nÖrömmel értesítünk benneteket, hogy az előadók jelentkezési határidejét október 17-ig meghosszabbítottuk. Szeretnénk mindenkinek további lehetőséget biztosítani, hogy csatlakozzon az Eötvös Napok előadásaihoz előadóként.\n\nAz előadássávok a következőek:\n\n\nCsütörtök (10.24.)\n\n9:00-9:45 - első előadássáv\n\n10:00-10:45 - második előadássáv\n\n\nPéntek(10.25.):\n\n10:15-11:00 - első előadássáv\n\n11:15-12:00 - második előadássáv\n\n\nA további részletek a forms leírásában találhatók, ha bármi egyéb kérdés, bizonytalanság vagy probléma merül fel az előadásokkal kapcsolatban, nyugodtan keressetek minket! \n\nhttps://forms.gle/uBgrZ4GVznmLaDfs5 \n\n\nÜdvözlettel,\n\nEötvös DÖ Kormány'),
    ('/events/ropi2.jpg', 'E5N foci\nJelentkezz!', 'Kedves Diákok!\n\nAz Eötvös Napok sportprogramjai idén is izgalmas kihívásokkal várnak titeket! Két nagyszerű bajnokságra invitálunk benneteket a csütörtöki nap folyamán, ahol megmutathatjátok, mire vagytok képesek, és összemérhetitek tudásotokat a legjobbakkal.\n\nEötvös Focibajnokság\n\nDátum: Október 24.\n\nIdőpont: 15:00 órától\n\nFormátum: Egyenes kiesés\n\nLink a jelentkezéshez: https://docs.google.com/forms/d/e/1FAIpQLSf6srNePqFJmmgF7rthM5YHvmT3nTlsPLp_QUpyHcv0Vc7rHA/viewform?usp=sf_link\n\nAz alábbiakban találjátok a részletes szabályokat:\n\n-A focibajnokság alatt minden résztvevő a következő szabályokat köteles tiszteletben tartani: \n-A mérkőzések 10 percesek, két 5 perces félidőre bontva.\n-A labda csakis akkor kerül ki játékból, ha a játékteret az alapvonalon hagyja el(vagy bordásfal mögé beesik). Ilyenkor a kapustól, földről indul újra a játék.\n-A labdát hazaadni nem lehet, azaz a csapattárstól érkező passzt a kapus kézzel nem foghatja meg.\n-Különösen veszélyes és agresszív megmozdulások piros lappal büntetendők, ilyenkor a büntetett játékos 2 percig nem állhat vissza a játékba(azaz le sem cserélhető) és csapata emberhátrányban folytatja a mérkőzést.\n-Ezenfelül a megszokott szabályok érvényesek a kezezésre, a kapus területére és a szabadrúgásokra.\n-A kirúgást csak a földről lehet elvégezni\n\nÜdvözlettel,\n\nEötvös DÖ Kormány\n'),
    ('/events/ropi.jpg', 'E5N röpi\nJelentkezz!', 'Kedves Diákok!\n\nAz Eötvös Napok sportprogramjai idén is izgalmas kihívásokkal várnak titeket! Két nagyszerű bajnokságra invitálunk benneteket a csütörtöki nap folyamán, ahol megmutathatjátok, mire vagytok képesek, és összemérhetitek tudásotokat a legjobbakkal.\n\nEötvös Röplabdabajnokság\nDátum: Október 24.\nIdőpont: 13:00 órától\nFormátum: Egyenes kiesés\n\nLink a jelentkezéshez: \nhttps://docs.google.com/forms/d/e/1FAIpQLSe-4UgdQSVdLFcigG-tD3b-QLg8EX2H9EQnV2ipBnno128gCg/viewform?usp=sf_link\n\nAz alábbiakban találjátok a részletes szabályokat:\n-A szabályokat helyben fogjuk ismertetni, 15 pontos meccseket fogunk játszani.\n\nNe maradjatok ki! Álljatok össze a csapattal, és jelentkezzetek minél előbb!\n\nÜdvözlettel,\nEötvös DÖ Kormány'),
    ('https://supercell.com/images/1a5b69311180a4a1c374e10556941f05/1681/hero_bg_brawlstars.a385872a.webp', 'Brawl Stars\nbajnokság', 'Brawl Stars bajnokság\nIdőpont: 13:30-tól\nA versenyre 3 fős csapatok jelentkezését várjuk, részletek és jelentkezés az alábbi linken:\nhttps://docs.google.com/forms/d/e/1FAIpQLSfTvdRfKZaKRQU3fgGDo2QTAd_fKuy7b7VtkCKx4UceLCCJEw/viewform?usp=sf_link\nA bajnokságokra vasárnapig lehet jelentkezni (okt 20.).\nVárunk mindenkit sok szeretettel, a programok pontos helyszíneiről hamarosan tájékoztatunk Benneteket!'),
    ('https://media.istockphoto.com/id/1425158165/photo/table-tennis-ping-pong-paddles-and-white-ball-on-blue-board.jpg?s=612x612&w=0&k=20&c=KSdi4bEGoxdhaGMnl6CZaqTLbKbobArgrrpLem3oN98=', 'Pingpong-\nbajnokság', 'Pingpongbajnokság\nIdőpont: 15:00-tól\nJelentkezés az alábbi linken:\nhttps://docs.google.com/forms/d/e/1FAIpQLSeraj4ul12o09Oe7lruexn1dU7EVQC8CXA4SdZKtyZc-8D8uQ/viewform?usp=sf_link\nA bajnokságokra vasárnapig lehet jelentkezni (okt 20.).\nVárunk mindenkit sok szeretettel, a programok pontos helyszíneiről hamarosan tájékoztatunk Benneteket!'),
    ('https://openclipart.org/download/228573/1443610712.svg', 'Ninja\nWarrior', 'Pingpongbajnokság\nIdőpont: 15:00-tól\nJelentkezés az alábbi linken:\nhttps://docs.google.com/forms/d/e/1FAIpQLSeraj4ul12o09Oe7lruexn1dU7EVQC8CXA4SdZKtyZc-8D8uQ/viewform?usp=sf_link\nA bajnokságokra vasárnapig lehet jelentkezni (okt 20.).\nVárunk mindenkit sok szeretettel, a programok pontos helyszíneiről hamarosan tájékoztatunk Benneteket!'),
    ('/events/spikeball.jpg', 'Spikeball', 'Spikeball\nIdőpont: 15:00-tól\nA Spikeball egy gyors tempójú, ütős labdajáték, amelyet négy játékos játszik két csapatban egy kisméretű háló körül, a földön. A játék célja úgy visszaütni a labdát a hálóra, hogy az ellenfél ne tudja azt visszaadni, hasonlóan a röplabdához.\nA bajnokságokra vasárnapig lehet jelentkezni (okt 20.).\nVárunk mindenkit sok szeretettel, a programok pontos helyszíneiről hamarosan tájékoztatunk Benneteket!'),
    ('/events/e5merch.png', 'E5 Merch\nrendelés', 'Kedves Diákság!\n\n\nÖrömmel értesítünk titeket, hogy megérkeztek az új Eötvös-merch termékek, amelyek mostantól megvásárolhatók. Kínálatunkban megtalálhatóak a kényelmes pulóverek, praktikus kulacsok és környezettudatos vászontáskák, amelyek tökéletesen illeszkednek a mindennapi élethez és iskolai tevékenységekhez.\n\nRendelési határidő: okt. 25\n\nMit kínálunk?\n\nEötvös pulóver\nKulacs\nVászontáska\nAmellett, hogy ezek a termékek hasznosak, kiváló módot kínálnak arra is, hogy kifejezd a kötődésed iskolánkhoz.\n\nTekintsd meg a teljes kínálatot itt:\n\nhttps://pullowear.hu/termekkategoria/ejg/?fbclid=IwZXh0bgNhZW0CMTEAAR26FQl4iDNW5RqN8egTt4lGapag-MaYeddvGrhsGZY5CZtPMiK4ap0NPyQ_aem_qUN12gkYlO5veTVKY4eppQ\n\n\n\nVárhatóan a termékeket november közepén fogjátok tudni átvenni.\n\n\n\nÜdvözlettel,\n\nEötvös DÖ Kormány'),
    ('/events/challange.png', 'Javaslat E5N\nkihívásra', 'Kedves Diákok!\nJavaslatokat küldhettek az E5N-i kihívásokra. Ezt az alábbi linken tehetitek meg:\nhttps://docs.google.com/forms/d/e/1FAIpQLScFTJDKHiXhhEZeoJu8ACjsxM0DyrdzSW4nzI18OTYJXEVqmw/viewform \n(Ki kell választani a "Javaslat kihívásra opciót")\nKihívások még nem biztosan leszenk az E5 Napokon.'),
    ('/events/turi2.jpg', 'Turi - Hozd el\nhasznált ruháid!', 'Kedves Diákok!\n\nIdén is megrendezésre kerül az E5vösTuri az E5N idején. Kérünk mindenkit, hogy addig is gyűjtögesse, válogassa azokat ruháit, könyveit, társasait esetleg plüsseit, ékszereit, amiket úgy érzi behozna, hogy új gazdára találjanak!\n\nMi már nagyon várjuk, hogy sok lelkes arcot lássunk ismét a turiban!\n\nKövessetek be minket az e5vosturi instagram oldalon, további információkért!\n\nÜdv,\nE5vösTuri csapata'),
    ('/events/mome.jpg', 'MOME\nworkshop', 'Kedves Diákok!\n\nEgy momés tanárszakos halgató levelét továbbítom nektek:\n\n"Fogok tartani a MOME-n egy 4 alkalmas formatervező kurzus, ahol egy-egy egyedi kisállatház elkészítésén keresztül megtanítom a résztvevőknek hogy hogyan kell egy ötletet a tervezéstől a kivitelezésig végig vinni, és hogy az elkészítéshez szükséges eszközöket és szerszámokat hogyan kell szakszerűen használni. A tanfolyam végére mindenki hazaviheti a saját, 4 nap alatt elkészített kisállatházát, és a szakmai tudást, amit saját projekteknél alkalmazhat.\n\nAjánlom azoknak, akiket érdekel a formatervezés, barkácsolás, a MOME-ra készülnek, vagy csak szívesen kedveskednének háziállatuknak egy új házikóval.\nElső alkalom: november 9.\nHelyszín: MOME\n\nÉs itt van hozzá egy link a részletekről és a jelentkezési felületről.\nhttps://craft.mome.hu/pet-house/index.html\n\nÜdvözlettel,\n\nKormos Panni"\n\nÜdv.:\nBG');