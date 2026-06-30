const tracks = [
    {
        "id": 1,
        "title": "Le sacre du printemps, Pt. I: Les augures printaniers - Danses des adolescentes",
        "artist": "Royal Concertgebouw Orchestra & Eduard van Beinum",
        "composer": "Igor Stravinsky",
        "year": "1948",
        "album": "Stravinsky: Le sacre du printemps 100th Anniversary Collectors Edition",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/a5/52/d2/a552d2ed-8873-74cd-cdda-a0a1c3bb8584/00028947837299.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452957186"
    },
    {
        "id": 2,
        "title": "Die Zauberflöte, K. 620, Act II: \"Der Hölle Rache kocht in meinem Herzen\"",
        "artist": "Roberta Peters, Karl Böhm & Berliner Philharmoniker",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1964",
        "album": "Mozart: Die Zauberflöte, K. 620",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ce/15/08/ce15085c-18e9-2c4f-8afb-d278462fe88f/00028947964902.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452393726"
    },
    {
        "id": 3,
        "title": "Rhapsody in Blue",
        "artist": "Leonard Bernstein & Columbia Symphony Orchestra",
        "composer": "George Gershwin",
        "year": "1958",
        "album": "Gershwin: Rhapsody in Blue - An American in Paris",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/ff/c7/25/ffc725e2-9e02-1455-7c19-39af2665c9d1/886443706699.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/594513239"
    },
    {
        "id": 4,
        "title": "Die Zauberflöte, K. 620, Act I: \"Wie stark ist nicht dein Zauberton\"",
        "artist": "Fritz Wunderlich, Karl Böhm, Berliner Philharmoniker & Dietrich Fischer-Dieskau",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1964",
        "album": "Mozart: Die Zauberflöte, K. 620",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ce/15/08/ce15085c-18e9-2c4f-8afb-d278462fe88f/00028947964902.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452393486"
    },
    {
        "id": 5,
        "title": "Die Zauberflöte, K. 620, Act II: \"Papagena, Papagena, Papagena! Weibchen, Täubchen\"",
        "artist": "Rosl Schwaiger, Karl Böhm, Berliner Philharmoniker, Antonia Fahberg, Lisa Otto, Raili Kostia & Dietrich Fischer-Dieskau",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1964",
        "album": "Mozart: Die Zauberflöte, K. 620",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ce/15/08/ce15085c-18e9-2c4f-8afb-d278462fe88f/00028947964902.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452393722"
    },
    {
        "id": 6,
        "title": "Die Forelle, Op. 32, D. 550",
        "artist": "Fritz Wunderlich & Hubert Giesen",
        "composer": "Franz Schubert",
        "year": "1966",
        "album": "Schubert: Die schöne Müllerin, Op. 25, D. 795",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/d6/cf/d5/d6cfd5f0-4635-380b-4dbf-a30222f27783/00028947965008.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452659560"
    },
    {
        "id": 7,
        "title": "Die Zauberflöte, K. 620, Act II: \"O Isis und Osiris\"",
        "artist": "Franz Crass, Karl Böhm, Berliner Philharmoniker & RIAS Kammerchor",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1964",
        "album": "Mozart: Die Zauberflöte, K. 620",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ce/15/08/ce15085c-18e9-2c4f-8afb-d278462fe88f/00028947964902.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452393887"
    },
    {
        "id": 8,
        "title": "Winterreise, D. 911: No. 1, Gute Nacht",
        "artist": "Dietrich Fischer-Dieskau & Gerald Moore",
        "composer": "Franz Schubert",
        "year": "1972",
        "album": "Schubert: Winterreise, D. 911",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/0b/70/79/0b707976-0972-4a33-9988-b3cfadb99dd3/22UMGIM89270.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1650387738"
    },
    {
        "id": 9,
        "title": "Carmen, WD 31, Act I: \"L'amour est un oiseau rebelle\"",
        "artist": "Marilyn Horne, The Metropolitan Opera Orchestra, Leonard Bernstein, The Manhattan Opera Chorus & John Mauceri",
        "composer": "Georges Bizet",
        "year": "1973",
        "album": "Bizet: Carmen, WD 31",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/bb/fa/5f/bbfa5f9f-a011-3062-b610-9fd8a42bc8cd/00028947986829.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452745216"
    },
    {
        "id": 10,
        "title": "El grillo",
        "artist": "David Munrow & The Early Music Consort of London",
        "composer": "Josquin Des Prez",
        "year": "1976",
        "album": "The Art of the Netherlands",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/47/94/40/479440a0-f5ff-eaba-c376-beac5c470a2a/5099962849852_1425x1425_300dpi.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/692424982"
    },
    {
        "id": 11,
        "title": "Játékok",
        "artist": "Kurtág Márta",
        "composer": "Kurtág György",
        "year": "1976",
        "album": "Kurtág: Játékok (Kiegészítés) - Single",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/68/9b/f7/689bf746-b97c-aba7-453d-22435e93c989/dj.fgtbkndj.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/553023964"
    },
    {
        "id": 12,
        "title": "Oboe Concerto No. 3 in G Minor, HWV 287: I. Allegro",
        "artist": "Maurice André, English Chamber Orchestra, Sir Charles Mackerras & Mauritz Sillem",
        "composer": "Antonio Vivaldi",
        "year": "1977",
        "album": "Trumpet Concertos",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/10/91/93/1091936a-342b-c68b-529b-56e1ce9748cf/00028941598028.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452567551"
    },
    {
        "id": 13,
        "title": "Trumpet Concerto in E-Flat, Hob.VIIe:1: 3. Allegro",
        "artist": "Maurice André, Münchener Kammerorchester & Hans Stadlmair",
        "composer": "Franz Joseph Haydn",
        "year": "1977",
        "album": "Haydn: Essentials",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/4e/5e/9b/4e5e9b8c-bbb0-0df5-1072-25b8029b9646/00028948358595.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1437587764"
    },
    {
        "id": 14,
        "title": "Serenade No. 13 in G Major, K. 525 \"Eine kleine Nachtmusik\": 1. Allegro",
        "artist": "Berliner Philharmoniker & Herbert von Karajan",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1982",
        "album": "Mozart: Eine kleine Nachtmusik - Grieg: Holberg Suite - Prokofiev: Symphonie Classique",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1a/09/2c/1a092cbe-9d84-e961-9968-d025091b9c68/14UMGIM09702.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452618150"
    },
    {
        "id": 15,
        "title": "Die Zauberflöte, K. 620, Act I: \"Der Vogelfänger bin ich ja\"",
        "artist": "Dietrich Fischer-Dieskau, Karl Böhm & Berliner Philharmoniker",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1964",
        "album": "Mozart: Die Zauberflöte, K. 620",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ce/15/08/ce15085c-18e9-2c4f-8afb-d278462fe88f/00028947964902.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452393320"
    },
    {
        "id": 16,
        "title": "Symphony No. 9 in D Minor, Op. 125 \"Choral\": IVb. \"O Freunde nicht diese Töne\"",
        "artist": "Janet Perry, Agnes Baltsa, Vinson Cole, José Van Dam, Berliner Philharmoniker, Herbert von Karajan, Wiener Singverein & Helmuth Froschauer",
        "composer": "Ludwig van Beethoven",
        "year": "1984",
        "album": "Beethoven: Symphony No. 9",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/ce/c6/9e/cec69efe-daa4-b308-905d-ec43844202e4/00028943900621.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1440743604"
    },
    {
        "id": 17,
        "title": "Symphony No. 25 in G Minor, K. 183: I. Allegro con brio",
        "artist": "Barry Wordsworth & Capella Istropolitana",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1987",
        "album": "50 of the Best: Mozart",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/a6/28/78/mzi.dqlmvrrd.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964554"
    },
    {
        "id": 18,
        "title": "12 Etudes d'execution transcendante, S. 139 / R. 2b: No. 5 in B Major \"Feux follets\"",
        "artist": "Jenő Jandó",
        "composer": "Franz Liszt",
        "year": "1987",
        "album": "The Very Best of Liszt",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/ee/d8/69/eed86929-a2e8-f4dd-1582-e3c3a25c820b/0730099213127.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750849"
    },
    {
        "id": 19,
        "title": "Piano Sonata No. 11 in A Major, K. 331: III. Rondo alla turca: Allegretto",
        "artist": "Jenő Jandó",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1987",
        "album": "50 of the Best: Mozart",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/a6/28/78/mzi.dqlmvrrd.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964699"
    },
    {
        "id": 20,
        "title": "3 German Dances, K. 605, No. 3 in C Major, \"Die Schlittenfahrt\" (Sleigh Ride)",
        "artist": "Johannes Wildner & Capella Istropolitana",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1987",
        "album": "50 of the Best: Mozart",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/a6/28/78/mzi.dqlmvrrd.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964497"
    },
    {
        "id": 21,
        "title": "Serse (Xerxes), HWV 40: Larghetto from \"Xerxes\"",
        "artist": "Jozef Cejka, Richard Edlinger & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1987",
        "album": "Handel : The Best of Handel",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/2f/db/e8/mzi.qodtylxs.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028244"
    },
    {
        "id": 22,
        "title": "Requiem in D Minor, K. 626: 3. Sequentia: Lacrimosa",
        "artist": "Wiener Singverein, Herbert von Karajan & Wiener Philharmoniker",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1987",
        "album": "Mozart: Requiem",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/a9/a8/da/a9a8da6b-39e9-3c91-19b1-e397f0c466aa/00028943902328.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1440771815"
    },
    {
        "id": 23,
        "title": "Music for Royal Fireworks, HWV 351: La Rejouissance",
        "artist": "Bohdan Warchal & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1988",
        "album": "Handel : The Best of Handel",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/2f/db/e8/mzi.qodtylxs.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028078"
    },
    {
        "id": 24,
        "title": "Water Music: Suite No. 2 In D Major, HWV 349: II. Alla Hornpipe",
        "artist": "Bohdan Warchal & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1988",
        "album": "Handel : The Best of Handel",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/2f/db/e8/mzi.qodtylxs.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028269"
    },
    {
        "id": 25,
        "title": "Messiah, HWV 56: Hallelujah",
        "artist": "Bratislava City Chorus, Jaroslav Krček & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1988",
        "album": "Handel : The Best of Handel",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/2f/db/e8/mzi.qodtylxs.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028364"
    },
    {
        "id": 26,
        "title": "6 Hungarian Rhapsodies, S. 359 / R. 441: No. 2 in D Minor",
        "artist": "Mátyás Antal & Hungarian State Symphony Orchestra",
        "composer": "Liszt Ferenc",
        "year": "1988",
        "album": "The Very Best of Liszt",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/ee/d8/69/eed86929-a2e8-f4dd-1582-e3c3a25c820b/0730099213127.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750607"
    },
    {
        "id": 27,
        "title": "Der Tanz in der Dorfschenke, S. 514 / R. 181 \"Mephisto Waltz No. 1\"",
        "artist": "Péter Nagy",
        "composer": "Franz Liszt",
        "year": "1988",
        "album": "The Very Best of Liszt",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/ee/d8/69/eed86929-a2e8-f4dd-1582-e3c3a25c820b/0730099213127.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750851"
    },
    {
        "id": 28,
        "title": "Judas Maccabaeus, HWV 63 (arr. for Orchestra): See Here the Conqu'ring Hero Comes (Judas Maccabaeus)",
        "artist": "Richard Edlinger & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1988",
        "album": "Handel : The Best of Handel",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/2f/db/e8/mzi.qodtylxs.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028236"
    },
    {
        "id": 29,
        "title": "Toccata and Fugue in D Minor, BWV 565: I. Toccata",
        "artist": "Simon Preston",
        "composer": "Johann Sebastian Bach",
        "year": "1989",
        "album": "J.S. Bach: Toccata and Fugue BWV 565",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/af/d8/5b/afd85b43-a42f-6df7-09f7-e2a6439a1b6e/00028942766822.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452552106"
    },
    {
        "id": 30,
        "title": "Don Giovanni, K. 527, Act I: La ci darem la mano",
        "artist": "Andrea Martin, Donna Robin, Johannes Wildner & Capella Istropolitana",
        "composer": "Wolfgang Amadeus Mozart & Lorenzo da Ponte",
        "year": "1990",
        "album": "50 of the Best: Mozart",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/a6/28/78/mzi.dqlmvrrd.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964496"
    },
    {
        "id": 31,
        "title": "Grandes etudes de Paganini, S. 141 / R. 3b: No. 3 in G-Sharp Minor \"La campanella\"",
        "artist": "Jenő Jandó",
        "composer": "Franz Liszt",
        "year": "1990",
        "album": "The Very Best of Liszt",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/ee/d8/69/eed86929-a2e8-f4dd-1582-e3c3a25c820b/0730099213127.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750858"
    },
    {
        "id": 32,
        "title": "Piano Concerto No. 23 in A Major, K. 488: II. Adagio",
        "artist": "Jenő Jandó, Mátyás Antal & Concentus Hungaricus",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1990",
        "album": "50 of the Best: Mozart",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/a6/28/78/mzi.dqlmvrrd.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964567"
    },
    {
        "id": 33,
        "title": "Trumpet Concerto In D Minor: Largo-Vivace",
        "artist": "Miroslav Kejmar, Peter Skvor & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1990",
        "album": "Handel : The Best of Handel",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/2f/db/e8/mzi.qodtylxs.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028297"
    },
    {
        "id": 34,
        "title": "Solomon, HWV 67: Arrival of the Queen of Sheba",
        "artist": "Béla Bánfalvi & Budapest Strings",
        "composer": "George Frideric Handel",
        "year": "1991",
        "album": "Handel : The Best of Handel",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/2f/db/e8/mzi.qodtylxs.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028106"
    },
    {
        "id": 35,
        "title": "Die schöne Müllerin, Op. 25, D. 795: I. Das Wandern",
        "artist": "Fritz Wunderlich & Hubert Giesen",
        "composer": "Franz Schubert",
        "year": "1991",
        "album": "Schubert: Die schöne Müllerin, Op. 25, D. 795",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/d6/cf/d5/d6cfd5f0-4635-380b-4dbf-a30222f27783/00028947965008.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452659737"
    },
    {
        "id": 36,
        "title": "Fantasia in D Minor, K. 397",
        "artist": "János Sebestyén",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1991",
        "album": "50 of the Best: Mozart",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/a6/28/78/mzi.dqlmvrrd.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964594"
    },
    {
        "id": 37,
        "title": "Symphony No. 94 in G Major, Hob.I:94: 2. Andante (Live)",
        "artist": "Wiener Philharmoniker & Leonard Bernstein",
        "composer": "Franz Joseph Haydn",
        "year": "1991",
        "album": "Haydn: Essentials",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/4e/5e/9b/4e5e9b8c-bbb0-0df5-1072-25b8029b9646/00028948358595.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1437587891"
    },
    {
        "id": 38,
        "title": "Swan Lake Op. 20: Neapolitan Dance",
        "artist": "Alexander Lazarev & The Bolshoi Symphony Orchestra",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "year": "1992",
        "album": "Tchaikovsky: Swan Lake, The Sleeping Beauty",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/49/d2/e7/49d2e75f-16f8-fbb8-94c6-20dd7c8e5f29/dj.pzqchmib.tif/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/79299764"
    },
    {
        "id": 39,
        "title": "Concerto for Piano and Orchestra No.1 in B Flat Minor Op.23: 1/Allegro non troppo e molto maestoso / Konzert für Klavier und Orchester Nr.1 in b-Moll Op.23",
        "artist": "David Lively, the Slovak Radio New Philharmonic Orchestra & Alexander Rahbari",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "year": "1993",
        "album": "Tchaikovsky's Greatest Hits",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Features6/v4/23/14/5d/23145dbd-6e89-ae23-a8a3-8470793e845a/dj.ntlogddy.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/391741147"
    },
    {
        "id": 40,
        "title": "Nutcracker Suite Op.71: 2/March / Der Nussknacker Op.71, Ballett-Suite: 2/Marche miniature / Casse-Noisette: 2/Marche",
        "artist": "London Symphony Orchestra",
        "composer": "Charles Gerhardt & Pyotr Ilyich Tchaikovsky",
        "year": "1993",
        "album": "Tchaikovsky's Greatest Hits",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Features6/v4/23/14/5d/23145dbd-6e89-ae23-a8a3-8470793e845a/dj.ntlogddy.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/391741140"
    },
    {
        "id": 41,
        "title": "Nutcracker Suite Op.71: 3/Dance Of The Sugar Plum Fairy / Der Nussknacker Op.71, Ballett-Suite: 3/Tanz der Zuckerfee / Casse-Noisette: 3/Danse de la fée Dragée",
        "artist": "London Symphony Orchestra & Charles Gerhardt",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "year": "1993",
        "album": "Tchaikovsky's Greatest Hits",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Features6/v4/23/14/5d/23145dbd-6e89-ae23-a8a3-8470793e845a/dj.ntlogddy.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/391741141"
    },
    {
        "id": 42,
        "title": "Serenade in C For String Orchestra Op.48: 1/Pezzo in forma di sonatina: Andante ma non troppo, Allegro moderato",
        "artist": "Stuttgarter Kammerorchester & Gilbert Varga",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "year": "1993",
        "album": "Tchaikovsky's Greatest Hits",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Features6/v4/23/14/5d/23145dbd-6e89-ae23-a8a3-8470793e845a/dj.ntlogddy.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/391741158"
    },
    {
        "id": 43,
        "title": "Peer Gynt, Op. 23: No. 15, Morning Mood",
        "artist": "BBC Scottish Symphony Orchestra & Einar Steen-Nøkleberg",
        "composer": "Edvard Grieg",
        "year": "1994",
        "album": "The Very Best of Grieg",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/59/50/68/mzi.jzdrexhr.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159065813"
    },
    {
        "id": 44,
        "title": "Peer Gynt, Op. 23: No. 18, Anitra's Dance",
        "artist": "BBC Scottish Symphony Orchestra & Jerzy Maksymiuk",
        "composer": "Edvard Grieg",
        "year": "1994",
        "album": "The Very Best of Grieg",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/59/50/68/mzi.jzdrexhr.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159065834"
    },
    {
        "id": 45,
        "title": "Peer Gynt, Op. 23: No. 8, In the Hall of the Mountain King",
        "artist": "BBC Scottish Symphony Orchestra & Jerzy Maksymiuk",
        "composer": "Edvard Grieg",
        "year": "1994",
        "album": "The Very Best of Grieg",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/59/50/68/mzi.jzdrexhr.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159066042"
    },
    {
        "id": 46,
        "title": "Holberg Suite, Op. 40: I. Preludium",
        "artist": "Bournemouth Sinfonietta & Richard Studt",
        "composer": "Edvard Grieg",
        "year": "1995",
        "album": "The Very Best of Grieg",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/59/50/68/mzi.jzdrexhr.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159065745"
    },
    {
        "id": 47,
        "title": "Lyric Pieces, Book 5, Op. 54: No. 3, March of the Trolls",
        "artist": "Einar Steen-Nøkleberg",
        "composer": "Edvard Grieg",
        "year": "1995",
        "album": "The Very Best of Grieg",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/59/50/68/mzi.jzdrexhr.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159066224"
    },
    {
        "id": 48,
        "title": "Symphony No. 40 in G Minor, K. 550: I. Molto allegro",
        "artist": "Johannes Wildner & Philharmonia Cassovia",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1995",
        "album": "50 of the Best: Mozart",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/a6/28/78/mzi.dqlmvrrd.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964494"
    },
    {
        "id": 49,
        "title": "Peer Gynt, Op. 23: No. 13, Solveig's Song",
        "artist": "Bodil Arnesen & Erling Ragnar Eriksen",
        "composer": "Edvard Grieg",
        "year": "1997",
        "album": "The Very Best of Grieg",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/59/50/68/mzi.jzdrexhr.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159065793"
    },
    {
        "id": 50,
        "title": "4 Impromptus, Op. 90, D.899: No. 4 in A-Flat: Allegretto",
        "artist": "Maria João Pires",
        "composer": "Franz Schubert",
        "year": "1997",
        "album": "Complete Solo Recordings",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/85/ef/ec/85efecaf-0cdb-d1c4-6809-f1cfc8baa1c2/13UAEIM19293.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452396571"
    },
    {
        "id": 51,
        "title": "Ave verum corpus, K. 618",
        "artist": "St. Clement Concert Choir, Randall Swanson & St. Clement Concert Orchestra",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1997",
        "album": "50 of the Best: Mozart",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/a6/28/78/mzi.dqlmvrrd.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964564"
    },
    {
        "id": 52,
        "title": "Liebestraume, S. 541 / R. 211: III. Nocturne in A-Flat Major",
        "artist": "Jenő Jandó",
        "composer": "Franz Liszt",
        "year": "1998",
        "album": "The Very Best of Liszt",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/ee/d8/69/eed86929-a2e8-f4dd-1582-e3c3a25c820b/0730099213127.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750608"
    },
    {
        "id": 53,
        "title": "Trois Soeurs (Three Sisters) - No. 1: \"Múzika igráyet tak bódro\" (Olga, Masha, Irina)",
        "artist": "Alain Aubin, Kent Nagano, Orchestre de l'Opéra de Lyon, Vyatchescav Kagen - Paley, Péter Eötvös & Oleg Riabets",
        "composer": "Péter Eötvös",
        "year": "1999",
        "album": "Eötvös: 3 Sisters",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d5/68/b5/d568b5b5-0bc9-d6e3-c592-6d8292016c56/00028945969428.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452195590"
    },
    {
        "id": 54,
        "title": "Háry János Suite: II. Viennese Musical Clock",
        "artist": "Budapest Festival Orchestra & Iván Fischer",
        "composer": "Zoltán Kodály",
        "year": "1999",
        "album": "Kodály: Háry János Suite - Dances of Galánta & Marosszék.",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/db/aa/23/dbaa2379-1c3b-9b72-bcf6-2fb5c06ab60f/00028946282427.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452183963"
    },
    {
        "id": 55,
        "title": "Háry János Suite: V. Intermezzo",
        "artist": "Budapest Festival Orchestra & Iván Fischer",
        "composer": "Zoltán Kodály",
        "year": "1999",
        "album": "Kodály: Háry János Suite - Dances of Galánta & Marosszék.",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/db/aa/23/dbaa2379-1c3b-9b72-bcf6-2fb5c06ab60f/00028946282427.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452183971"
    },
    {
        "id": 56,
        "title": "Gergely-járás (St. Gregory's Day)",
        "artist": "Children's Choir Miraculum, Kecskemet & Unknown",
        "composer": "Zoltán Kodály",
        "year": "1999",
        "album": "Kodály: Háry János Suite - Dances of Galánta & Marosszék.",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/db/aa/23/dbaa2379-1c3b-9b72-bcf6-2fb5c06ab60f/00028946282427.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452183124"
    },
    {
        "id": 57,
        "title": "Piano Sonata No. 16 in C Major, K. 545, \"Sonata facile\"",
        "artist": "Laszlo Baranyay",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "2000",
        "album": "50 of the Best: Mozart",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/a6/28/78/mzi.dqlmvrrd.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964600"
    },
    {
        "id": 58,
        "title": "Herz und Mund und Tat und Leben, BWV 147: Chorale. Jesus bleibet meine Freude",
        "artist": "Yukari Nonoshita, Robin Blaze, Gerd Türk, Peter Kooij, Bach Collegium Japan & Masaaki Suzuki",
        "composer": "Johann Sebastian Bach",
        "year": "2000",
        "album": "A Choral Year With Bach",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/af/39/10/af391003-222c-493c-e615-91cdea9f941d/7318590019511.png/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1725858186"
    },
    {
        "id": 59,
        "title": "Orchestral Suite No. 2 in B Minor, BWV 1067: VII. Badinerie",
        "artist": "Berliner Barock Solisten, Emmanuel Pahud & Rainer Kussmaul",
        "composer": "Johann Sebastian Bach",
        "year": "2001",
        "album": "Bach: Brandenburg Concerto No. 5 - Orchestral Suite No. 2 - Trio Sonata - Partita",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/38/9e/d0/389ed076-1d2d-714d-8751-e353ee9cdf98/724355711151.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/696162470"
    },
    {
        "id": 60,
        "title": "Schwanengesang, D. 957 (Cycle): IV. Ständchen: Leise flehen meine Lieder",
        "artist": "Thomas Quasthoff & Justus Zeyen",
        "composer": "Franz Schubert",
        "year": "2001",
        "album": "Schubert: Schwanengesang, D. 957 & Brahms: Vier ernste Gesänge, Op. 121",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2c/44/9a/2c449ad6-c27c-c88a-0517-09813a9bf232/00028947103028.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452151156"
    },
    {
        "id": 61,
        "title": "Concerto for 2 Violins, Strings, and Continuo in D Minor, BWV 1043: 2. Largo ma non tanto",
        "artist": "Hilary Hahn, Margaret Batjer, Los Angeles Chamber Orchestra & Jeffrey Kahane",
        "composer": "Johann Sebastian Bach",
        "year": "2003",
        "album": "J.S. Bach: Violin Concertos",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/77/ef/a5/77efa536-58ce-1e10-c62a-a242b95620c1/00028948358892.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1424731329"
    },
    {
        "id": 62,
        "title": "Don Giovanni K527, Atto Secondo, Scena quinta, Finale: Don Giovanni, a cenar teco (Commendator/Don Giovanni/Leporello)",
        "artist": "Philharmonia Orchestra & Otto Klemperer",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "2003",
        "album": "Mozart: Don Giovanni",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/3b/e2/de/3be2def5-ee6b-668d-e170-c9b8055a4cd0/5099970448351.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/691656580"
    },
    {
        "id": 63,
        "title": "The Well-Tempered Clavier, Book I: Prelude No. 1 in C Major, BWV 846",
        "artist": "Daniel Barenboim",
        "composer": "Johann Sebastian Bach",
        "year": "2004",
        "album": "Bach: Well-Tempered Clavier Books 1 & 2",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/0d/27/37/mzi.mkjngxcn.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/201247716"
    },
    {
        "id": 64,
        "title": "The Well-Tempered Clavier, Book I: Fugue No. 1 in C Major, BWV 846",
        "artist": "Daniel Barenboim",
        "composer": "Johann Sebastian Bach",
        "year": "2004",
        "album": "Bach: Well-Tempered Clavier Books 1 & 2",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/0d/27/37/mzi.mkjngxcn.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/201247747"
    },
    {
        "id": 65,
        "title": "The Seven Last Words Of Our Saviour On The Cross, Op. 51, Hob. III:50-56: 1. Introduzione (Maestoso ed Adagio)",
        "artist": "Emerson String Quartet",
        "composer": "Franz Joseph Haydn",
        "year": "2004",
        "album": "Haydn: Essentials",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/4e/5e/9b/4e5e9b8c-bbb0-0df5-1072-25b8029b9646/00028948358595.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1437587903"
    },
    {
        "id": 66,
        "title": "Le nozze di Figaro, K. 492, Act II: Voi, che sapete",
        "artist": "Michelle Breedt, Michael Halász & Nicolaus Esterházy Sinfonia",
        "composer": "Wolfgang Amadeus Mozart & Lorenzo da Ponte",
        "year": "2004",
        "album": "50 of the Best: Mozart",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/a6/28/78/mzi.dqlmvrrd.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964500"
    },
    {
        "id": 67,
        "title": "Cruda Amarilli (Live)",
        "artist": "La Venexiana",
        "composer": "Claudio Monteverdi",
        "year": "2005",
        "album": "Monteverdi: Madrigals (Live)",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/1c/22/3d/1c223d6a-6050-cd7a-c88a-ea7e745f053a/8424562200159.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1519516950"
    },
    {
        "id": 68,
        "title": "Les preludes, S. 97 / R. 414",
        "artist": "Michael Halász & Polish National Radio Symphony Orchestra",
        "composer": "Liszt Ferenc",
        "year": "2005",
        "album": "The Very Best of Liszt",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/ee/d8/69/eed86929-a2e8-f4dd-1582-e3c3a25c820b/0730099213127.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750855"
    },
    {
        "id": 69,
        "title": "Brandenburg Concerto No. 3 in G Major, BWV 1048: I. —",
        "artist": "Rinaldo Alessandrini & Concerto Italiano",
        "composer": "Johann Sebastian Bach",
        "year": "2005",
        "album": "Bach: Brandenburg Concertos",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/bd/bd/2d/bdbd2d53-8e6e-3f48-ccbd-dd2521faf2fd/cover.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1277131273"
    },
    {
        "id": 70,
        "title": "Consolations, S. 172 / R. 12: III. Lento placido",
        "artist": "Philip Thomson",
        "composer": "Liszt Ferenc",
        "year": "2006",
        "album": "The Very Best of Liszt",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/ee/d8/69/eed86929-a2e8-f4dd-1582-e3c3a25c820b/0730099213127.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750854"
    },
    {
        "id": 71,
        "title": "Verbum caro factum est",
        "artist": "Schola Cantorum Karolus Magnus & Stan Hollaardt",
        "composer": "Traditional",
        "year": "2006",
        "album": "Gregorian Chant",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3c/59/be/3c59beec-1df1-bd25-7665-a0469f77d1dd/ticket.jgmcsliy.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/692785098"
    },
    {
        "id": 72,
        "title": "Gloria",
        "artist": "Schola Cantorum Karolus Magnus & Stan Hollaardt",
        "composer": "Traditional",
        "year": "2006",
        "album": "Gregorian Chant",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3c/59/be/3c59beec-1df1-bd25-7665-a0469f77d1dd/ticket.jgmcsliy.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/692785332"
    },
    {
        "id": 73,
        "title": "Te laudamus, Domine omnipotens",
        "artist": "Schola Cantorum Karolus Magnus & Stan Hollaardt",
        "composer": "Traditional",
        "year": "2006",
        "album": "Gregorian Chant",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3c/59/be/3c59beec-1df1-bd25-7665-a0469f77d1dd/ticket.jgmcsliy.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/692785336"
    },
    {
        "id": 74,
        "title": "Romanian Folk Dances, Sz. 56",
        "artist": "György Sándor",
        "composer": "Béla Bartók",
        "year": "2007",
        "album": "Béla Bartók: Essential Works",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/81/60/63/81606393-f630-6b82-ae00-c6455cfb293f/4065142001120.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1557494471"
    },
    {
        "id": 75,
        "title": "L'Orfeo, Favola in Musica (Opera en 5 Actes), SV 318 - Acte I, scène 2: Dal Mio Permesso Amato",
        "artist": "Rinaldo Alessandrini, Concerto Italiano & Monica Piccinini",
        "composer": "Claudio Monteverdi",
        "year": "2007",
        "album": "Monteverdi: Orfeo",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ca/bc/56/cabc5613-019c-5b73-2035-4bb833e2d7cd/mzi.pagxjzzs.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/307110333"
    },
    {
        "id": 76,
        "title": "Winter",
        "artist": "The Vivaldi Philharmonic Orchestra",
        "composer": "",
        "year": "2007",
        "album": "Classic Serenades",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/67/26/73/mzi.pcybuyrg.tif/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/438892630"
    },
    {
        "id": 77,
        "title": "Suite from The Miraculous Mandarin, Sz. 73: III. The Mandarin",
        "artist": "Minnesota Orchestra & Stanisław Skrowaczewski",
        "composer": "Béla Bartók",
        "year": "2008",
        "album": "Béla Bartók: Essential Works",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/81/60/63/81606393-f630-6b82-ae00-c6455cfb293f/4065142001120.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1557494486"
    },
    {
        "id": 78,
        "title": "Le Nozze Di Figaro: Ouverture, \"Cinque … Dieci… Venti … Trenta\"",
        "artist": "Walter Berry, Reri Grist, Ingvar Wixell, Karl Böhm, State Orchestra of Vienna, Vienna State Choir, David Thaw, Margarethe Bence, Edith Mathis, Klaus Hirte, Zoltan Keleman, Alfred Pfeifle, Deirdre Aselford & Claire Watson",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "2008",
        "album": "Mozart: Figaro",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/bc/31/73/mzi.lwumjshx.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/280775025"
    },
    {
        "id": 79,
        "title": "Allegro barbaro - Tempo giusto",
        "artist": "Zoltán Kocsis",
        "composer": "Béla Bartók",
        "year": "2008",
        "album": "Works for Piano Solo No. 4 (Művek zóló zongorára 4.)",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/9d/5b/3e/9d5b3e5a-fcc1-e288-da39-b56e93f38edb/V4HttpAssetRepositoryClient-ticket.rdqlszsp.jpg-3498872044832026770.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/366468497"
    },
    {
        "id": 80,
        "title": "Carmina Burana: I. O Fortuna",
        "artist": "Mozarteumorchester Salzburg, Kurt Prestel & Salzburg Mozarteum Chorus",
        "composer": "Carl Orff",
        "year": "2009",
        "album": "Orff: Carmina Burana",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/63/37/df/mzi.hntlfywg.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/335224116"
    },
    {
        "id": 81,
        "title": "Epitaph of Seikilos (Complete Ancient Greek Melody Composed by Seikilos, Son of Euterpe, 1st Century CE - Arranged For Replica Lyre)",
        "artist": "Michael Levy",
        "composer": "",
        "year": "2010",
        "album": "The Ancient Greek Lyre",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3c/b7/fd/3cb7fd98-c0c4-ce9b-a018-cd8f401b93c5/mzi.hshqcdgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/393321469"
    },
    {
        "id": 82,
        "title": "The First Delphic Hymn To Apollo (Ancient Greek Melody c.138 BCE - Arranged For Replica Lyre)",
        "artist": "Michael Levy",
        "composer": "",
        "year": "2010",
        "album": "The Ancient Greek Lyre",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/3c/b7/fd/3cb7fd98-c0c4-ce9b-a018-cd8f401b93c5/mzi.hshqcdgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/393321470"
    },
    {
        "id": 83,
        "title": "Orchestral Suite No. 3 in D Major, BWV 1068: II. Aria",
        "artist": "Freiburger Barockorchester",
        "composer": "Johann Sebastian Bach",
        "year": "2011",
        "album": "J.S. Bach: Orchestral Suites Nos. 1-4",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/b2/49/c8/b249c84f-c629-6e00-2f88-bd507b442f2e/5414939982507_cover.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1806409052"
    },
    {
        "id": 84,
        "title": "Goldberg Variations, BWV 988: Aria",
        "artist": "Nicholas Angelich",
        "composer": "Johann Sebastian Bach",
        "year": "2011",
        "album": "Bach : Goldberg Variations",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/dd/a7/06/dda70650-b1a0-753a-2cbd-15dd6d258c40/5099907066450.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/693413159"
    },
    {
        "id": 85,
        "title": "Tenebrae Responsories, Feria quinta: V. Judas mercator pessimus",
        "artist": "Philippe Herreweghe & Collegium Vocale Gent",
        "composer": "Carlo Gesualdo",
        "year": "2013",
        "album": "Gesualdo: Responsoria 1611",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/20/35/7f/20357fa7-fece-a774-d69e-693dcd31e7c0/5400439000100.png/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1572117210"
    },
    {
        "id": 86,
        "title": "Tenebrae Responsories, Sabbato sancto: V. O vos omnes",
        "artist": "Philippe Herreweghe & Collegium Vocale Gent",
        "composer": "Carlo Gesualdo",
        "year": "2013",
        "album": "Gesualdo: Responsoria 1611",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/20/35/7f/20357fa7-fece-a774-d69e-693dcd31e7c0/5400439000100.png/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1572117190"
    },
    {
        "id": 87,
        "title": "Concerto Italien BWV 971: I. Allegro",
        "artist": "Claire-Marie Le Guay",
        "composer": "Johann Sebastian Bach",
        "year": "2015",
        "album": "Bach",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/80/7f/f5/807ff5da-0446-a9f3-7681-593d971f73d0/3760127222644.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/954495459"
    },
    {
        "id": 88,
        "title": "Northern Lights (Live)",
        "artist": "Musica Sacra",
        "composer": "Ola Gjelio",
        "year": "2016",
        "album": "Song of Songs",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music20/v4/45/6c/18/456c18ef-0aeb-8782-45e7-05f24691c203/888295433372.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1109542794"
    },
    {
        "id": 89,
        "title": "Cantata No. 82, \"Ich habe genug\", BWV 82: I. \"Ich habe genug\"",
        "artist": "Petra Müllejans, Philippe Jaroussky, Ann-Kathrin Brüggemann & Freiburger Barockorchester",
        "composer": "Johann Sebastian Bach",
        "year": "2016",
        "album": "Bach & Telemann: Sacred Cantatas",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music71/v4/6e/dd/46/6edd4690-9115-0f6d-8062-b23ef5056cc5/dj.asqgwitk.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1149073883"
    },
    {
        "id": 90,
        "title": "Nymphes De Bois",
        "artist": "John Potter, Anna Maria Friman, Ariel Abramovich, Lee Santana & Hille Perl",
        "composer": "Josquin Des Prez",
        "year": "2017",
        "album": "Secret History",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/d8/c9/6d/d8c96da4-aa72-9157-3629-c00c5f2128f8/00028948114665.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452670407"
    },
    {
        "id": 91,
        "title": "Vespro della Beata Vergine, SV 206: I. Deus in adiutorium",
        "artist": "Joshua Ellicott, John Butt, Dunedin Consort & His Majestys Sagbutts & Cornetts",
        "composer": "Claudio Monteverdi",
        "year": "2017",
        "album": "Monteverdi: Vespers 1610",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/dd/2e/79/dd2e7983-60b0-8973-033b-9f6655a0461a/8720205578822.png/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1561271002"
    },
    {
        "id": 92,
        "title": "Gnossiennes: No. 1, Lent",
        "artist": "Alice Sara Ott",
        "composer": "Erik Satie",
        "year": "2018",
        "album": "Nightfall",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/94/58/67/94586712-43c2-cdbb-5dee-3097cf085201/18UMGIM05507.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1411407761"
    },
    {
        "id": 93,
        "title": "Beethoven - Fur Elise (Komuz Remix)",
        "artist": "Komuz",
        "composer": "",
        "year": "2018",
        "album": "Beethoven - Fur Elise (Komuz Remix) - Single",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/f7/58/57/f75857a3-0c71-0e66-c5f3-b16495347c5d/192650423930_cover.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1413422407"
    },
    {
        "id": 94,
        "title": "Bachianas brasileiras No. 5, W. 389: I. Aria (Cantilena)",
        "artist": "Nadine Sierra, Royal Philharmonic Orchestra & Robert Spano",
        "composer": "Heitor Villa-Lobos",
        "year": "2018",
        "album": "There's a Place for Us",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/e3/3a/f6e33ad4-fcfc-5896-a336-598b70841131/17UM1IM63524.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1397455413"
    },
    {
        "id": 95,
        "title": "Cello Suite No. 1 in G Major, BWV 1007: I. Prélude",
        "artist": "Yo-Yo Ma",
        "composer": "Johann Sebastian Bach",
        "year": "2018",
        "album": "Six Evolutions - Bach: Cello Suites",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c2/9a/21/c29a2148-e8c1-e2bc-1da8-bcbe3350b28c/886447042472.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1398581234"
    },
    {
        "id": 96,
        "title": "Agnus Dei",
        "artist": "VOCES8",
        "composer": "Samuel Barber",
        "year": "2019",
        "album": "Enchanted Isle",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/f7/17/f1/f717f19b-163f-673d-1e87-e71975995db3/00028948346738.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1444864400"
    },
    {
        "id": 97,
        "title": "Sacræ cantiones, liber quartus: Audi tellus",
        "artist": "Daniel Reuss & Cappella Amsterdam",
        "composer": "Orlando di Lasso",
        "year": "2020",
        "album": "Lassus: Inferno",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/54/9d/4d/549d4d25-4da3-d535-02d8-56e05a1c0347/3149020941515.png/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1510526344"
    },
    {
        "id": 98,
        "title": "Jesu, meine Freude, BWV 227: \"Jesu, meine Freude\"",
        "artist": "Raphaël Pichon & Pygmalion",
        "composer": "Johann Sebastian Bach",
        "year": "2020",
        "album": "Johann Sebastian Bach: Motets",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6f/ec/95/6fec95b9-140a-2877-3374-41ff276ca1c3/3149020941591.png/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1531479767"
    },
    {
        "id": 99,
        "title": "America",
        "artist": "Ariana DeBose, David Alvarez, Ana Isabelle, Jennifer Florentino, Natalie Toro, Arianna Rosario, Ilda Mason, Jeanette Delgado, Annelise Cepero, Tanairi Sade Vazquez, Jamila Velazquez, Edriz E. Rosa Pérez, Melody Martí, Gaby Diaz, Juliette Feliciano, Isabella Ward, Maria Alexis Rodriguez, Yesenia Ayala, Gabriela M. Soto, Sebastian Serra, Julius Anthony Rubio, Ricardo A. Zayas, Yurel Echezarreta, Kelvin Delgado, Ricky Ubeda, Carlos Sánchez Falú, Adriel Flete, Jacob Guzman, Carlos E. Gonzalez, David Avilés Morales, Andrei Chagas & David Guzmán",
        "composer": "Leonard Bernstein & Stephen Sondheim",
        "year": "2021",
        "album": "West Side Story (2021 Motion Picture Soundtrack)",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/71/b1/ec/71b1ec21-b3a7-9e2f-52c2-c37ef2155dea/21UM1IM43161.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1597020715"
    },
    {
        "id": 100,
        "title": "L'Orfeo, SV 318, Act III: No. 7, Possente spirto, e formidabil nume",
        "artist": "Valerio Contaldo, Cappella Mediterranea & Leonardo García Alarcón",
        "composer": "Claudio Monteverdi",
        "year": "2021",
        "album": "Monteverdi: L'Orfeo",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8c/03/81/8c0381cb-178f-28ba-a454-cecf2cb0321e/3760014197208.png/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1580759143"
    },
    {
        "id": 101,
        "title": "Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 \"Moonlight\": I. Adagio sostenuto",
        "artist": "Alice Sara Ott",
        "composer": "Ludwig van Beethoven",
        "year": "2023",
        "album": "Beethoven",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/25/4e/a6/254ea699-44f9-ac13-9d47-866eca8fb766/23UMGIM16072.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1695919050"
    },
    {
        "id": 102,
        "title": "Waltz No. 7 in C-Sharp Minor, Op. 64 No. 2. Tempo giusto",
        "artist": "Rafał Blechacz",
        "composer": "Frédéric Chopin",
        "year": "2024",
        "album": "Chopin: Waltz No. 7 in C-Sharp Minor, Op. 64 No. 2 (Musical Moments) - Single",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/57/19/ab/5719abce-982c-04f2-14bc-c361c0a4c3cd/24UMGIM51600.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1746813232"
    },
    {
        "id": 103,
        "title": "Nocturne No. 2 in E-Flat Major, Op. 9 No. 2",
        "artist": "Lang Lang",
        "composer": "Frédéric Chopin",
        "year": "2025",
        "album": "Piano Book 2",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7f/0b/05/7f0b0590-3e21-b19c-463f-1d51e327efca/25UM1IM01348.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1834399738"
    },
    {
        "id": 104,
        "title": "Mazurka No. 14 in G Minor, Op. 24 No. 1",
        "artist": "Rafał Blechacz",
        "composer": "Frédéric Chopin",
        "year": "2025",
        "album": "Chopin: Mazurkas, Opp. 6, 17, 24, 41, 50, 56 & 63",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/89/1e/9c/891e9c9a-5f56-dec5-114f-70d8c3196d73/25UM1IM37816.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/1840435089"
    },
    {
        "id": 105,
        "title": "The Four Seasons: Summer, Violin Concerto in G Minor, Op. 8 No. 2, RV 315: III. Presto",
        "artist": "Anne-Sophie Mutter, Mutter's Virtuosi & Mahan Esfahani",
        "composer": "Antonio Vivaldi",
        "year": "2026",
        "album": "Anne-Sophie Mutter: My Berlin",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/61/0c/7e/610c7e80-990f-79a2-7b3b-f4df492dacb1/25UM1IM97390.rgb.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/6764874379"
    },
    {
        "id": 106,
        "title": "Symphony No. 5 in C Minor, Op. 67: I. Allegro con brio",
        "artist": "Sinfonia Amabile",
        "composer": "Ludwig van Beethoven",
        "year": "2010",
        "album": "Beethoven: Symphony No. 5 in C Minor, Op. 67 - EP",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/bd/0f/59/bd0f5916-5c87-7c55-190c-94b0099744fb/888831607564.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/904500507"
    },
    {
        "id": 107,
        "title": "Die Walküre / A walkür - Ride of the Valkyrie /Act 3/ A walkürök lovaglása",
        "artist": "Budapest Symphony Orchestra, Antal Janovics & György Lehel",
        "composer": "Richard Wagner",
        "year": "1969",
        "album": "Orchestral Music from Operas - Zenekari Operarészletek",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/34/2d/e6/342de665-dac7-a7f8-6ae6-a539aa798467/V4HttpAssetRepositoryClient-ticket.kherzcdr.jpg-6576729391288928595.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/409207519"
    },
    {
        "id": 108,
        "title": "Ein Sommernachtstraum (A Midsummer's Night Dream): VII. Hochzeitsmarsch [Marche nuptiale]",
        "artist": "Orchestre des Champs-Elysées & Philippe Herreweghe",
        "composer": "Felix Mendelssohn",
        "year": "1994",
        "album": "Mendelssohn: Ein Sommernachtstraum (A Midsummer's Night Dream)",
        "artwork": "https://is1-ssl.mzstatic.com/image/thumb/Music/v4/ef/a6/1f/efa61f14-e8c0-a3a5-6bba-87221318c582/3149020150214.jpg/600x600bb.jpg",
        "appleMusicUrl": "https://music.apple.com/hu/song/526023559"
    }
];

export default tracks;
