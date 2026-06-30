const tracks = [
    {
        "id": 1,
        "title": "Le sacre du printemps, Pt. I: Les augures printaniers - Danses des adolescentes",
        "artist": "Royal Concertgebouw Orchestra & Eduard van Beinum",
        "composer": "Igor Stravinsky",
        "year": "1948",
        "album": "Stravinsky: Le sacre du printemps 100th Anniversary Collectors Edition",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452957186"
    },
    {
        "id": 2,
        "title": "Die Zauberflöte, K. 620, Act II: \"Der Hölle Rache kocht in meinem Herzen\"",
        "artist": "Roberta Peters, Karl Böhm & Berliner Philharmoniker",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1964",
        "album": "Mozart: Die Zauberflöte, K. 620",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452393726"
    },
    {
        "id": 3,
        "title": "Rhapsody in Blue",
        "artist": "Leonard Bernstein & Columbia Symphony Orchestra",
        "composer": "George Gershwin",
        "year": "1958",
        "album": "Gershwin: Rhapsody in Blue - An American in Paris",
        "appleMusicUrl": "https://music.apple.com/hu/song/594513239"
    },
    {
        "id": 4,
        "title": "Die Zauberflöte, K. 620, Act I: \"Wie stark ist nicht dein Zauberton\"",
        "artist": "Fritz Wunderlich, Karl Böhm, Berliner Philharmoniker & Dietrich Fischer-Dieskau",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1964",
        "album": "Mozart: Die Zauberflöte, K. 620",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452393486"
    },
    {
        "id": 5,
        "title": "Die Zauberflöte, K. 620, Act II: \"Papagena, Papagena, Papagena! Weibchen, Täubchen\"",
        "artist": "Rosl Schwaiger, Karl Böhm, Berliner Philharmoniker, Antonia Fahberg, Lisa Otto, Raili Kostia & Dietrich Fischer-Dieskau",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1964",
        "album": "Mozart: Die Zauberflöte, K. 620",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452393722"
    },
    {
        "id": 6,
        "title": "Die Forelle, Op. 32, D. 550",
        "artist": "Fritz Wunderlich & Hubert Giesen",
        "composer": "Franz Schubert",
        "year": "1966",
        "album": "Schubert: Die schöne Müllerin, Op. 25, D. 795",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452659560"
    },
    {
        "id": 7,
        "title": "Die Zauberflöte, K. 620, Act II: \"O Isis und Osiris\"",
        "artist": "Franz Crass, Karl Böhm, Berliner Philharmoniker & RIAS Kammerchor",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1964",
        "album": "Mozart: Die Zauberflöte, K. 620",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452393887"
    },
    {
        "id": 8,
        "title": "Winterreise, D. 911: No. 1, Gute Nacht",
        "artist": "Dietrich Fischer-Dieskau & Gerald Moore",
        "composer": "Franz Schubert",
        "year": "1972",
        "album": "Schubert: Winterreise, D. 911",
        "appleMusicUrl": "https://music.apple.com/hu/song/1650387738"
    },
    {
        "id": 9,
        "title": "Carmen, WD 31, Act I: \"L'amour est un oiseau rebelle\"",
        "artist": "Marilyn Horne, The Metropolitan Opera Orchestra, Leonard Bernstein, The Manhattan Opera Chorus & John Mauceri",
        "composer": "Georges Bizet",
        "year": "1973",
        "album": "Bizet: Carmen, WD 31",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452745216"
    },
    {
        "id": 10,
        "title": "El grillo",
        "artist": "David Munrow & The Early Music Consort of London",
        "composer": "Josquin Des Prez",
        "year": "1976",
        "album": "The Art of the Netherlands",
        "appleMusicUrl": "https://music.apple.com/hu/song/692424982"
    },
    {
        "id": 11,
        "title": "Játékok",
        "artist": "Kurtág Márta",
        "composer": "Kurtág György",
        "year": "1976",
        "album": "Kurtág: Játékok (Kiegészítés) - Single",
        "appleMusicUrl": "https://music.apple.com/hu/song/553023964"
    },
    {
        "id": 12,
        "title": "Oboe Concerto No. 3 in G Minor, HWV 287: I. Allegro",
        "artist": "Maurice André, English Chamber Orchestra, Sir Charles Mackerras & Mauritz Sillem",
        "composer": "Antonio Vivaldi",
        "year": "1977",
        "album": "Trumpet Concertos",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452567551"
    },
    {
        "id": 13,
        "title": "Trumpet Concerto in E-Flat, Hob.VIIe:1: 3. Allegro",
        "artist": "Maurice André, Münchener Kammerorchester & Hans Stadlmair",
        "composer": "Franz Joseph Haydn",
        "year": "1977",
        "album": "Haydn: Essentials",
        "appleMusicUrl": "https://music.apple.com/hu/song/1437587764"
    },
    {
        "id": 14,
        "title": "Serenade No. 13 in G Major, K. 525 \"Eine kleine Nachtmusik\": 1. Allegro",
        "artist": "Berliner Philharmoniker & Herbert von Karajan",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1982",
        "album": "Mozart: Eine kleine Nachtmusik - Grieg: Holberg Suite - Prokofiev: Symphonie Classique",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452618150"
    },
    {
        "id": 15,
        "title": "Die Zauberflöte, K. 620, Act I: \"Der Vogelfänger bin ich ja\"",
        "artist": "Dietrich Fischer-Dieskau, Karl Böhm & Berliner Philharmoniker",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1964",
        "album": "Mozart: Die Zauberflöte, K. 620",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452393320"
    },
    {
        "id": 16,
        "title": "Symphony No. 9 in D Minor, Op. 125 \"Choral\": IVb. \"O Freunde nicht diese Töne\"",
        "artist": "Janet Perry, Agnes Baltsa, Vinson Cole, José Van Dam, Berliner Philharmoniker, Herbert von Karajan, Wiener Singverein & Helmuth Froschauer",
        "composer": "Ludwig van Beethoven",
        "year": "1984",
        "album": "Beethoven: Symphony No. 9",
        "appleMusicUrl": "https://music.apple.com/hu/song/1440743604"
    },
    {
        "id": 17,
        "title": "Symphony No. 25 in G Minor, K. 183: I. Allegro con brio",
        "artist": "Barry Wordsworth & Capella Istropolitana",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1987",
        "album": "50 of the Best: Mozart",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964554"
    },
    {
        "id": 18,
        "title": "12 Etudes d'execution transcendante, S. 139 / R. 2b: No. 5 in B Major \"Feux follets\"",
        "artist": "Jenő Jandó",
        "composer": "Franz Liszt",
        "year": "1987",
        "album": "The Very Best of Liszt",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750849"
    },
    {
        "id": 19,
        "title": "Piano Sonata No. 11 in A Major, K. 331: III. Rondo alla turca: Allegretto",
        "artist": "Jenő Jandó",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1987",
        "album": "50 of the Best: Mozart",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964699"
    },
    {
        "id": 20,
        "title": "3 German Dances, K. 605, No. 3 in C Major, \"Die Schlittenfahrt\" (Sleigh Ride)",
        "artist": "Johannes Wildner & Capella Istropolitana",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1987",
        "album": "50 of the Best: Mozart",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964497"
    },
    {
        "id": 21,
        "title": "Serse (Xerxes), HWV 40: Larghetto from \"Xerxes\"",
        "artist": "Jozef Cejka, Richard Edlinger & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1987",
        "album": "Handel : The Best of Handel",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028244"
    },
    {
        "id": 22,
        "title": "Requiem in D Minor, K. 626: 3. Sequentia: Lacrimosa",
        "artist": "Wiener Singverein, Herbert von Karajan & Wiener Philharmoniker",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1987",
        "album": "Mozart: Requiem",
        "appleMusicUrl": "https://music.apple.com/hu/song/1440771815"
    },
    {
        "id": 23,
        "title": "Music for Royal Fireworks, HWV 351: La Rejouissance",
        "artist": "Bohdan Warchal & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1988",
        "album": "Handel : The Best of Handel",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028078"
    },
    {
        "id": 24,
        "title": "Water Music: Suite No. 2 In D Major, HWV 349: II. Alla Hornpipe",
        "artist": "Bohdan Warchal & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1988",
        "album": "Handel : The Best of Handel",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028269"
    },
    {
        "id": 25,
        "title": "Messiah, HWV 56: Hallelujah",
        "artist": "Bratislava City Chorus, Jaroslav Krček & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1988",
        "album": "Handel : The Best of Handel",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028364"
    },
    {
        "id": 26,
        "title": "6 Hungarian Rhapsodies, S. 359 / R. 441: No. 2 in D Minor",
        "artist": "Mátyás Antal & Hungarian State Symphony Orchestra",
        "composer": "Liszt Ferenc",
        "year": "1988",
        "album": "The Very Best of Liszt",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750607"
    },
    {
        "id": 27,
        "title": "Der Tanz in der Dorfschenke, S. 514 / R. 181 \"Mephisto Waltz No. 1\"",
        "artist": "Péter Nagy",
        "composer": "Franz Liszt",
        "year": "1988",
        "album": "The Very Best of Liszt",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750851"
    },
    {
        "id": 28,
        "title": "Judas Maccabaeus, HWV 63 (arr. for Orchestra): See Here the Conqu'ring Hero Comes (Judas Maccabaeus)",
        "artist": "Richard Edlinger & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1988",
        "album": "Handel : The Best of Handel",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028236"
    },
    {
        "id": 29,
        "title": "Toccata and Fugue in D Minor, BWV 565: I. Toccata",
        "artist": "Simon Preston",
        "composer": "Johann Sebastian Bach",
        "year": "1989",
        "album": "J.S. Bach: Toccata and Fugue BWV 565",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452552106"
    },
    {
        "id": 30,
        "title": "Don Giovanni, K. 527, Act I: La ci darem la mano",
        "artist": "Andrea Martin, Donna Robin, Johannes Wildner & Capella Istropolitana",
        "composer": "Wolfgang Amadeus Mozart & Lorenzo da Ponte",
        "year": "1990",
        "album": "50 of the Best: Mozart",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964496"
    },
    {
        "id": 31,
        "title": "Grandes etudes de Paganini, S. 141 / R. 3b: No. 3 in G-Sharp Minor \"La campanella\"",
        "artist": "Jenő Jandó",
        "composer": "Franz Liszt",
        "year": "1990",
        "album": "The Very Best of Liszt",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750858"
    },
    {
        "id": 32,
        "title": "Piano Concerto No. 23 in A Major, K. 488: II. Adagio",
        "artist": "Jenő Jandó, Mátyás Antal & Concentus Hungaricus",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1990",
        "album": "50 of the Best: Mozart",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964567"
    },
    {
        "id": 33,
        "title": "Trumpet Concerto In D Minor: Largo-Vivace",
        "artist": "Miroslav Kejmar, Peter Skvor & Capella Istropolitana",
        "composer": "George Frideric Handel",
        "year": "1990",
        "album": "Handel : The Best of Handel",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028297"
    },
    {
        "id": 34,
        "title": "Solomon, HWV 67: Arrival of the Queen of Sheba",
        "artist": "Béla Bánfalvi & Budapest Strings",
        "composer": "George Frideric Handel",
        "year": "1991",
        "album": "Handel : The Best of Handel",
        "appleMusicUrl": "https://music.apple.com/hu/song/347028106"
    },
    {
        "id": 35,
        "title": "Die schöne Müllerin, Op. 25, D. 795: I. Das Wandern",
        "artist": "Fritz Wunderlich & Hubert Giesen",
        "composer": "Franz Schubert",
        "year": "1991",
        "album": "Schubert: Die schöne Müllerin, Op. 25, D. 795",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452659737"
    },
    {
        "id": 36,
        "title": "Fantasia in D Minor, K. 397",
        "artist": "János Sebestyén",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1991",
        "album": "50 of the Best: Mozart",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964594"
    },
    {
        "id": 37,
        "title": "Symphony No. 94 in G Major, Hob.I:94: 2. Andante (Live)",
        "artist": "Wiener Philharmoniker & Leonard Bernstein",
        "composer": "Franz Joseph Haydn",
        "year": "1991",
        "album": "Haydn: Essentials",
        "appleMusicUrl": "https://music.apple.com/hu/song/1437587891"
    },
    {
        "id": 38,
        "title": "Swan Lake Op. 20: Neapolitan Dance",
        "artist": "Alexander Lazarev & The Bolshoi Symphony Orchestra",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "year": "1992",
        "album": "Tchaikovsky: Swan Lake, The Sleeping Beauty",
        "appleMusicUrl": "https://music.apple.com/hu/song/79299764"
    },
    {
        "id": 39,
        "title": "Concerto for Piano and Orchestra No.1 in B Flat Minor Op.23: 1/Allegro non troppo e molto maestoso / Konzert für Klavier und Orchester Nr.1 in b-Moll Op.23",
        "artist": "David Lively, the Slovak Radio New Philharmonic Orchestra & Alexander Rahbari",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "year": "1993",
        "album": "Tchaikovsky's Greatest Hits",
        "appleMusicUrl": "https://music.apple.com/hu/song/391741147"
    },
    {
        "id": 40,
        "title": "Nutcracker Suite Op.71: 2/March / Der Nussknacker Op.71, Ballett-Suite: 2/Marche miniature / Casse-Noisette: 2/Marche",
        "artist": "London Symphony Orchestra",
        "composer": "Charles Gerhardt & Pyotr Ilyich Tchaikovsky",
        "year": "1993",
        "album": "Tchaikovsky's Greatest Hits",
        "appleMusicUrl": "https://music.apple.com/hu/song/391741140"
    },
    {
        "id": 41,
        "title": "Nutcracker Suite Op.71: 3/Dance Of The Sugar Plum Fairy / Der Nussknacker Op.71, Ballett-Suite: 3/Tanz der Zuckerfee / Casse-Noisette: 3/Danse de la fée Dragée",
        "artist": "London Symphony Orchestra & Charles Gerhardt",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "year": "1993",
        "album": "Tchaikovsky's Greatest Hits",
        "appleMusicUrl": "https://music.apple.com/hu/song/391741141"
    },
    {
        "id": 42,
        "title": "Serenade in C For String Orchestra Op.48: 1/Pezzo in forma di sonatina: Andante ma non troppo, Allegro moderato",
        "artist": "Stuttgarter Kammerorchester & Gilbert Varga",
        "composer": "Pyotr Ilyich Tchaikovsky",
        "year": "1993",
        "album": "Tchaikovsky's Greatest Hits",
        "appleMusicUrl": "https://music.apple.com/hu/song/391741158"
    },
    {
        "id": 43,
        "title": "Peer Gynt, Op. 23: No. 15, Morning Mood",
        "artist": "BBC Scottish Symphony Orchestra & Einar Steen-Nøkleberg",
        "composer": "Edvard Grieg",
        "year": "1994",
        "album": "The Very Best of Grieg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159065813"
    },
    {
        "id": 44,
        "title": "Peer Gynt, Op. 23: No. 18, Anitra's Dance",
        "artist": "BBC Scottish Symphony Orchestra & Jerzy Maksymiuk",
        "composer": "Edvard Grieg",
        "year": "1994",
        "album": "The Very Best of Grieg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159065834"
    },
    {
        "id": 45,
        "title": "Peer Gynt, Op. 23: No. 8, In the Hall of the Mountain King",
        "artist": "BBC Scottish Symphony Orchestra & Jerzy Maksymiuk",
        "composer": "Edvard Grieg",
        "year": "1994",
        "album": "The Very Best of Grieg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159066042"
    },
    {
        "id": 46,
        "title": "Holberg Suite, Op. 40: I. Preludium",
        "artist": "Bournemouth Sinfonietta & Richard Studt",
        "composer": "Edvard Grieg",
        "year": "1995",
        "album": "The Very Best of Grieg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159065745"
    },
    {
        "id": 47,
        "title": "Lyric Pieces, Book 5, Op. 54: No. 3, March of the Trolls",
        "artist": "Einar Steen-Nøkleberg",
        "composer": "Edvard Grieg",
        "year": "1995",
        "album": "The Very Best of Grieg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159066224"
    },
    {
        "id": 48,
        "title": "Symphony No. 40 in G Minor, K. 550: I. Molto allegro",
        "artist": "Johannes Wildner & Philharmonia Cassovia",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1995",
        "album": "50 of the Best: Mozart",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964494"
    },
    {
        "id": 49,
        "title": "Peer Gynt, Op. 23: No. 13, Solveig's Song",
        "artist": "Bodil Arnesen & Erling Ragnar Eriksen",
        "composer": "Edvard Grieg",
        "year": "1997",
        "album": "The Very Best of Grieg",
        "appleMusicUrl": "https://music.apple.com/hu/song/159065793"
    },
    {
        "id": 50,
        "title": "4 Impromptus, Op. 90, D.899: No. 4 in A-Flat: Allegretto",
        "artist": "Maria João Pires",
        "composer": "Franz Schubert",
        "year": "1997",
        "album": "Complete Solo Recordings",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452396571"
    },
    {
        "id": 51,
        "title": "Ave verum corpus, K. 618",
        "artist": "St. Clement Concert Choir, Randall Swanson & St. Clement Concert Orchestra",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "1997",
        "album": "50 of the Best: Mozart",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964564"
    },
    {
        "id": 52,
        "title": "Liebestraume, S. 541 / R. 211: III. Nocturne in A-Flat Major",
        "artist": "Jenő Jandó",
        "composer": "Franz Liszt",
        "year": "1998",
        "album": "The Very Best of Liszt",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750608"
    },
    {
        "id": 53,
        "title": "Trois Soeurs (Three Sisters) - No. 1: \"Múzika igráyet tak bódro\" (Olga, Masha, Irina)",
        "artist": "Alain Aubin, Kent Nagano, Orchestre de l'Opéra de Lyon, Vyatchescav Kagen - Paley, Péter Eötvös & Oleg Riabets",
        "composer": "Péter Eötvös",
        "year": "1999",
        "album": "Eötvös: 3 Sisters",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452195590"
    },
    {
        "id": 54,
        "title": "Háry János Suite: II. Viennese Musical Clock",
        "artist": "Budapest Festival Orchestra & Iván Fischer",
        "composer": "Zoltán Kodály",
        "year": "1999",
        "album": "Kodály: Háry János Suite - Dances of Galánta & Marosszék.",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452183963"
    },
    {
        "id": 55,
        "title": "Háry János Suite: V. Intermezzo",
        "artist": "Budapest Festival Orchestra & Iván Fischer",
        "composer": "Zoltán Kodály",
        "year": "1999",
        "album": "Kodály: Háry János Suite - Dances of Galánta & Marosszék.",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452183971"
    },
    {
        "id": 56,
        "title": "Gergely-járás (St. Gregory's Day)",
        "artist": "Children's Choir Miraculum, Kecskemet & Unknown",
        "composer": "Zoltán Kodály",
        "year": "1999",
        "album": "Kodály: Háry János Suite - Dances of Galánta & Marosszék.",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452183124"
    },
    {
        "id": 57,
        "title": "Piano Sonata No. 16 in C Major, K. 545, \"Sonata facile\"",
        "artist": "Laszlo Baranyay",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "2000",
        "album": "50 of the Best: Mozart",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964600"
    },
    {
        "id": 58,
        "title": "Herz und Mund und Tat und Leben, BWV 147: Chorale. Jesus bleibet meine Freude",
        "artist": "Yukari Nonoshita, Robin Blaze, Gerd Türk, Peter Kooij, Bach Collegium Japan & Masaaki Suzuki",
        "composer": "Johann Sebastian Bach",
        "year": "2000",
        "album": "A Choral Year With Bach",
        "appleMusicUrl": "https://music.apple.com/hu/song/1725858186"
    },
    {
        "id": 59,
        "title": "Orchestral Suite No. 2 in B Minor, BWV 1067: VII. Badinerie",
        "artist": "Berliner Barock Solisten, Emmanuel Pahud & Rainer Kussmaul",
        "composer": "Johann Sebastian Bach",
        "year": "2001",
        "album": "Bach: Brandenburg Concerto No. 5 - Orchestral Suite No. 2 - Trio Sonata - Partita",
        "appleMusicUrl": "https://music.apple.com/hu/song/696162470"
    },
    {
        "id": 60,
        "title": "Schwanengesang, D. 957 (Cycle): IV. Ständchen: Leise flehen meine Lieder",
        "artist": "Thomas Quasthoff & Justus Zeyen",
        "composer": "Franz Schubert",
        "year": "2001",
        "album": "Schubert: Schwanengesang, D. 957 & Brahms: Vier ernste Gesänge, Op. 121",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452151156"
    },
    {
        "id": 61,
        "title": "Concerto for 2 Violins, Strings, and Continuo in D Minor, BWV 1043: 2. Largo ma non tanto",
        "artist": "Hilary Hahn, Margaret Batjer, Los Angeles Chamber Orchestra & Jeffrey Kahane",
        "composer": "Johann Sebastian Bach",
        "year": "2003",
        "album": "J.S. Bach: Violin Concertos",
        "appleMusicUrl": "https://music.apple.com/hu/song/1424731329"
    },
    {
        "id": 62,
        "title": "Don Giovanni K527, Atto Secondo, Scena quinta, Finale: Don Giovanni, a cenar teco (Commendator/Don Giovanni/Leporello)",
        "artist": "Philharmonia Orchestra & Otto Klemperer",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "2003",
        "album": "Mozart: Don Giovanni",
        "appleMusicUrl": "https://music.apple.com/hu/song/691656580"
    },
    {
        "id": 63,
        "title": "The Well-Tempered Clavier, Book I: Prelude No. 1 in C Major, BWV 846",
        "artist": "Daniel Barenboim",
        "composer": "Johann Sebastian Bach",
        "year": "2004",
        "album": "Bach: Well-Tempered Clavier Books 1 & 2",
        "appleMusicUrl": "https://music.apple.com/hu/song/201247716"
    },
    {
        "id": 64,
        "title": "The Well-Tempered Clavier, Book I: Fugue No. 1 in C Major, BWV 846",
        "artist": "Daniel Barenboim",
        "composer": "Johann Sebastian Bach",
        "year": "2004",
        "album": "Bach: Well-Tempered Clavier Books 1 & 2",
        "appleMusicUrl": "https://music.apple.com/hu/song/201247747"
    },
    {
        "id": 65,
        "title": "The Seven Last Words Of Our Saviour On The Cross, Op. 51, Hob. III:50-56: 1. Introduzione (Maestoso ed Adagio)",
        "artist": "Emerson String Quartet",
        "composer": "Franz Joseph Haydn",
        "year": "2004",
        "album": "Haydn: Essentials",
        "appleMusicUrl": "https://music.apple.com/hu/song/1437587903"
    },
    {
        "id": 66,
        "title": "Le nozze di Figaro, K. 492, Act II: Voi, che sapete",
        "artist": "Michelle Breedt, Michael Halász & Nicolaus Esterházy Sinfonia",
        "composer": "Wolfgang Amadeus Mozart & Lorenzo da Ponte",
        "year": "2004",
        "album": "50 of the Best: Mozart",
        "appleMusicUrl": "https://music.apple.com/hu/song/478964500"
    },
    {
        "id": 67,
        "title": "Cruda Amarilli (Live)",
        "artist": "La Venexiana",
        "composer": "Claudio Monteverdi",
        "year": "2005",
        "album": "Monteverdi: Madrigals (Live)",
        "appleMusicUrl": "https://music.apple.com/hu/song/1519516950"
    },
    {
        "id": 68,
        "title": "Les preludes, S. 97 / R. 414",
        "artist": "Michael Halász & Polish National Radio Symphony Orchestra",
        "composer": "Liszt Ferenc",
        "year": "2005",
        "album": "The Very Best of Liszt",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750855"
    },
    {
        "id": 69,
        "title": "Brandenburg Concerto No. 3 in G Major, BWV 1048: I. —",
        "artist": "Rinaldo Alessandrini & Concerto Italiano",
        "composer": "Johann Sebastian Bach",
        "year": "2005",
        "album": "Bach: Brandenburg Concertos",
        "appleMusicUrl": "https://music.apple.com/hu/song/1277131273"
    },
    {
        "id": 70,
        "title": "Consolations, S. 172 / R. 12: III. Lento placido",
        "artist": "Philip Thomson",
        "composer": "Liszt Ferenc",
        "year": "2006",
        "album": "The Very Best of Liszt",
        "appleMusicUrl": "https://music.apple.com/hu/song/542750854"
    },
    {
        "id": 71,
        "title": "Verbum caro factum est",
        "artist": "Schola Cantorum Karolus Magnus & Stan Hollaardt",
        "composer": "Traditional",
        "year": "2006",
        "album": "Gregorian Chant",
        "appleMusicUrl": "https://music.apple.com/hu/song/692785098"
    },
    {
        "id": 72,
        "title": "Gloria",
        "artist": "Schola Cantorum Karolus Magnus & Stan Hollaardt",
        "composer": "Traditional",
        "year": "2006",
        "album": "Gregorian Chant",
        "appleMusicUrl": "https://music.apple.com/hu/song/692785332"
    },
    {
        "id": 73,
        "title": "Te laudamus, Domine omnipotens",
        "artist": "Schola Cantorum Karolus Magnus & Stan Hollaardt",
        "composer": "Traditional",
        "year": "2006",
        "album": "Gregorian Chant",
        "appleMusicUrl": "https://music.apple.com/hu/song/692785336"
    },
    {
        "id": 74,
        "title": "Romanian Folk Dances, Sz. 56",
        "artist": "György Sándor",
        "composer": "Béla Bartók",
        "year": "2007",
        "album": "Béla Bartók: Essential Works",
        "appleMusicUrl": "https://music.apple.com/hu/song/1557494471"
    },
    {
        "id": 75,
        "title": "L'Orfeo, Favola in Musica (Opera en 5 Actes), SV 318 - Acte I, scène 2: Dal Mio Permesso Amato",
        "artist": "Rinaldo Alessandrini, Concerto Italiano & Monica Piccinini",
        "composer": "Claudio Monteverdi",
        "year": "2007",
        "album": "Monteverdi: Orfeo",
        "appleMusicUrl": "https://music.apple.com/hu/song/307110333"
    },
    {
        "id": 76,
        "title": "Winter",
        "artist": "The Vivaldi Philharmonic Orchestra",
        "composer": "",
        "year": "2007",
        "album": "Classic Serenades",
        "appleMusicUrl": "https://music.apple.com/hu/song/438892630"
    },
    {
        "id": 77,
        "title": "Suite from The Miraculous Mandarin, Sz. 73: III. The Mandarin",
        "artist": "Minnesota Orchestra & Stanisław Skrowaczewski",
        "composer": "Béla Bartók",
        "year": "2008",
        "album": "Béla Bartók: Essential Works",
        "appleMusicUrl": "https://music.apple.com/hu/song/1557494486"
    },
    {
        "id": 78,
        "title": "Le Nozze Di Figaro: Ouverture, \"Cinque … Dieci… Venti … Trenta\"",
        "artist": "Walter Berry, Reri Grist, Ingvar Wixell, Karl Böhm, State Orchestra of Vienna, Vienna State Choir, David Thaw, Margarethe Bence, Edith Mathis, Klaus Hirte, Zoltan Keleman, Alfred Pfeifle, Deirdre Aselford & Claire Watson",
        "composer": "Wolfgang Amadeus Mozart",
        "year": "2008",
        "album": "Mozart: Figaro",
        "appleMusicUrl": "https://music.apple.com/hu/song/280775025"
    },
    {
        "id": 79,
        "title": "Allegro barbaro - Tempo giusto",
        "artist": "Zoltán Kocsis",
        "composer": "Béla Bartók",
        "year": "2008",
        "album": "Works for Piano Solo No. 4 (Művek zóló zongorára 4.)",
        "appleMusicUrl": "https://music.apple.com/hu/song/366468497"
    },
    {
        "id": 80,
        "title": "Carmina Burana: I. O Fortuna",
        "artist": "Mozarteumorchester Salzburg, Kurt Prestel & Salzburg Mozarteum Chorus",
        "composer": "Carl Orff",
        "year": "2009",
        "album": "Orff: Carmina Burana",
        "appleMusicUrl": "https://music.apple.com/hu/song/335224116"
    },
    {
        "id": 81,
        "title": "Epitaph of Seikilos (Complete Ancient Greek Melody Composed by Seikilos, Son of Euterpe, 1st Century CE - Arranged For Replica Lyre)",
        "artist": "Michael Levy",
        "composer": "",
        "year": "2010",
        "album": "The Ancient Greek Lyre",
        "appleMusicUrl": "https://music.apple.com/hu/song/393321469"
    },
    {
        "id": 82,
        "title": "The First Delphic Hymn To Apollo (Ancient Greek Melody c.138 BCE - Arranged For Replica Lyre)",
        "artist": "Michael Levy",
        "composer": "",
        "year": "2010",
        "album": "The Ancient Greek Lyre",
        "appleMusicUrl": "https://music.apple.com/hu/song/393321470"
    },
    {
        "id": 83,
        "title": "Orchestral Suite No. 3 in D Major, BWV 1068: II. Aria",
        "artist": "Freiburger Barockorchester",
        "composer": "Johann Sebastian Bach",
        "year": "2011",
        "album": "J.S. Bach: Orchestral Suites Nos. 1-4",
        "appleMusicUrl": "https://music.apple.com/hu/song/1806409052"
    },
    {
        "id": 84,
        "title": "Goldberg Variations, BWV 988: Aria",
        "artist": "Nicholas Angelich",
        "composer": "Johann Sebastian Bach",
        "year": "2011",
        "album": "Bach : Goldberg Variations",
        "appleMusicUrl": "https://music.apple.com/hu/song/693413159"
    },
    {
        "id": 85,
        "title": "Tenebrae Responsories, Feria quinta: V. Judas mercator pessimus",
        "artist": "Philippe Herreweghe & Collegium Vocale Gent",
        "composer": "Carlo Gesualdo",
        "year": "2013",
        "album": "Gesualdo: Responsoria 1611",
        "appleMusicUrl": "https://music.apple.com/hu/song/1572117210"
    },
    {
        "id": 86,
        "title": "Tenebrae Responsories, Sabbato sancto: V. O vos omnes",
        "artist": "Philippe Herreweghe & Collegium Vocale Gent",
        "composer": "Carlo Gesualdo",
        "year": "2013",
        "album": "Gesualdo: Responsoria 1611",
        "appleMusicUrl": "https://music.apple.com/hu/song/1572117190"
    },
    {
        "id": 87,
        "title": "Concerto Italien BWV 971: I. Allegro",
        "artist": "Claire-Marie Le Guay",
        "composer": "Johann Sebastian Bach",
        "year": "2015",
        "album": "Bach",
        "appleMusicUrl": "https://music.apple.com/hu/song/954495459"
    },
    {
        "id": 88,
        "title": "Northern Lights (Live)",
        "artist": "Musica Sacra",
        "composer": "Ola Gjelio",
        "year": "2016",
        "album": "Song of Songs",
        "appleMusicUrl": "https://music.apple.com/hu/song/1109542794"
    },
    {
        "id": 89,
        "title": "Cantata No. 82, \"Ich habe genug\", BWV 82: I. \"Ich habe genug\"",
        "artist": "Petra Müllejans, Philippe Jaroussky, Ann-Kathrin Brüggemann & Freiburger Barockorchester",
        "composer": "Johann Sebastian Bach",
        "year": "2016",
        "album": "Bach & Telemann: Sacred Cantatas",
        "appleMusicUrl": "https://music.apple.com/hu/song/1149073883"
    },
    {
        "id": 90,
        "title": "Nymphes De Bois",
        "artist": "John Potter, Anna Maria Friman, Ariel Abramovich, Lee Santana & Hille Perl",
        "composer": "Josquin Des Prez",
        "year": "2017",
        "album": "Secret History",
        "appleMusicUrl": "https://music.apple.com/hu/song/1452670407"
    },
    {
        "id": 91,
        "title": "Vespro della Beata Vergine, SV 206: I. Deus in adiutorium",
        "artist": "Joshua Ellicott, John Butt, Dunedin Consort & His Majestys Sagbutts & Cornetts",
        "composer": "Claudio Monteverdi",
        "year": "2017",
        "album": "Monteverdi: Vespers 1610",
        "appleMusicUrl": "https://music.apple.com/hu/song/1561271002"
    },
    {
        "id": 92,
        "title": "Gnossiennes: No. 1, Lent",
        "artist": "Alice Sara Ott",
        "composer": "Erik Satie",
        "year": "2018",
        "album": "Nightfall",
        "appleMusicUrl": "https://music.apple.com/hu/song/1411407761"
    },
    {
        "id": 93,
        "title": "Beethoven - Fur Elise (Komuz Remix)",
        "artist": "Komuz",
        "composer": "",
        "year": "2018",
        "album": "Beethoven - Fur Elise (Komuz Remix) - Single",
        "appleMusicUrl": "https://music.apple.com/hu/song/1413422407"
    },
    {
        "id": 94,
        "title": "Bachianas brasileiras No. 5, W. 389: I. Aria (Cantilena)",
        "artist": "Nadine Sierra, Royal Philharmonic Orchestra & Robert Spano",
        "composer": "Heitor Villa-Lobos",
        "year": "2018",
        "album": "There's a Place for Us",
        "appleMusicUrl": "https://music.apple.com/hu/song/1397455413"
    },
    {
        "id": 95,
        "title": "Cello Suite No. 1 in G Major, BWV 1007: I. Prélude",
        "artist": "Yo-Yo Ma",
        "composer": "Johann Sebastian Bach",
        "year": "2018",
        "album": "Six Evolutions - Bach: Cello Suites",
        "appleMusicUrl": "https://music.apple.com/hu/song/1398581234"
    },
    {
        "id": 96,
        "title": "Agnus Dei",
        "artist": "VOCES8",
        "composer": "Samuel Barber",
        "year": "2019",
        "album": "Enchanted Isle",
        "appleMusicUrl": "https://music.apple.com/hu/song/1444864400"
    },
    {
        "id": 97,
        "title": "Sacræ cantiones, liber quartus: Audi tellus",
        "artist": "Daniel Reuss & Cappella Amsterdam",
        "composer": "Orlando di Lasso",
        "year": "2020",
        "album": "Lassus: Inferno",
        "appleMusicUrl": "https://music.apple.com/hu/song/1510526344"
    },
    {
        "id": 98,
        "title": "Jesu, meine Freude, BWV 227: \"Jesu, meine Freude\"",
        "artist": "Raphaël Pichon & Pygmalion",
        "composer": "Johann Sebastian Bach",
        "year": "2020",
        "album": "Johann Sebastian Bach: Motets",
        "appleMusicUrl": "https://music.apple.com/hu/song/1531479767"
    },
    {
        "id": 99,
        "title": "America",
        "artist": "Ariana DeBose, David Alvarez, Ana Isabelle, Jennifer Florentino, Natalie Toro, Arianna Rosario, Ilda Mason, Jeanette Delgado, Annelise Cepero, Tanairi Sade Vazquez, Jamila Velazquez, Edriz E. Rosa Pérez, Melody Martí, Gaby Diaz, Juliette Feliciano, Isabella Ward, Maria Alexis Rodriguez, Yesenia Ayala, Gabriela M. Soto, Sebastian Serra, Julius Anthony Rubio, Ricardo A. Zayas, Yurel Echezarreta, Kelvin Delgado, Ricky Ubeda, Carlos Sánchez Falú, Adriel Flete, Jacob Guzman, Carlos E. Gonzalez, David Avilés Morales, Andrei Chagas & David Guzmán",
        "composer": "Leonard Bernstein & Stephen Sondheim",
        "year": "2021",
        "album": "West Side Story (2021 Motion Picture Soundtrack)",
        "appleMusicUrl": "https://music.apple.com/hu/song/1597020715"
    },
    {
        "id": 100,
        "title": "L'Orfeo, SV 318, Act III: No. 7, Possente spirto, e formidabil nume",
        "artist": "Valerio Contaldo, Cappella Mediterranea & Leonardo García Alarcón",
        "composer": "Claudio Monteverdi",
        "year": "2021",
        "album": "Monteverdi: L'Orfeo",
        "appleMusicUrl": "https://music.apple.com/hu/song/1580759143"
    },
    {
        "id": 101,
        "title": "Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 \"Moonlight\": I. Adagio sostenuto",
        "artist": "Alice Sara Ott",
        "composer": "Ludwig van Beethoven",
        "year": "2023",
        "album": "Beethoven",
        "appleMusicUrl": "https://music.apple.com/hu/song/1695919050"
    },
    {
        "id": 102,
        "title": "Waltz No. 7 in C-Sharp Minor, Op. 64 No. 2. Tempo giusto",
        "artist": "Rafał Blechacz",
        "composer": "Frédéric Chopin",
        "year": "2024",
        "album": "Chopin: Waltz No. 7 in C-Sharp Minor, Op. 64 No. 2 (Musical Moments) - Single",
        "appleMusicUrl": "https://music.apple.com/hu/song/1746813232"
    },
    {
        "id": 103,
        "title": "Nocturne No. 2 in E-Flat Major, Op. 9 No. 2",
        "artist": "Lang Lang",
        "composer": "Frédéric Chopin",
        "year": "2025",
        "album": "Piano Book 2",
        "appleMusicUrl": "https://music.apple.com/hu/song/1834399738"
    },
    {
        "id": 104,
        "title": "Mazurka No. 14 in G Minor, Op. 24 No. 1",
        "artist": "Rafał Blechacz",
        "composer": "Frédéric Chopin",
        "year": "2025",
        "album": "Chopin: Mazurkas, Opp. 6, 17, 24, 41, 50, 56 & 63",
        "appleMusicUrl": "https://music.apple.com/hu/song/1840435089"
    },
    {
        "id": 105,
        "title": "The Four Seasons: Summer, Violin Concerto in G Minor, Op. 8 No. 2, RV 315: III. Presto",
        "artist": "Anne-Sophie Mutter, Mutter's Virtuosi & Mahan Esfahani",
        "composer": "Antonio Vivaldi",
        "year": "2026",
        "album": "Anne-Sophie Mutter: My Berlin",
        "appleMusicUrl": "https://music.apple.com/hu/song/6764874379"
    },
    {
        "id": 106,
        "title": "Symphony No. 5 in C Minor, Op. 67: I. Allegro con brio",
        "artist": "Sinfonia Amabile",
        "composer": "Ludwig van Beethoven",
        "year": "2010",
        "album": "Beethoven: Symphony No. 5 in C Minor, Op. 67 - EP",
        "appleMusicUrl": "https://music.apple.com/hu/song/904500507"
    },
    {
        "id": 107,
        "title": "Die Walküre / A walkür - Ride of the Valkyrie /Act 3/ A walkürök lovaglása",
        "artist": "Budapest Symphony Orchestra, Antal Janovics & György Lehel",
        "composer": "Richard Wagner",
        "year": "1969",
        "album": "Orchestral Music from Operas - Zenekari Operarészletek",
        "appleMusicUrl": "https://music.apple.com/hu/song/409207519"
    },
    {
        "id": 108,
        "title": "Ein Sommernachtstraum (A Midsummer's Night Dream): VII. Hochzeitsmarsch [Marche nuptiale]",
        "artist": "Orchestre des Champs-Elysées & Philippe Herreweghe",
        "composer": "Felix Mendelssohn",
        "year": "1994",
        "album": "Mendelssohn: Ein Sommernachtstraum (A Midsummer's Night Dream)",
        "appleMusicUrl": "https://music.apple.com/hu/song/526023559"
    }
];

export default tracks;
