var hangman={
   comGuess:"",
   wordTheme:"1",
   wrongGuessToRip:7,
   wins:0,
   hiddenWord:[],
   guessedLetters:[],
   hideComGuess:function (){

       for (i=0;i<this.comGuess.length;i++)
          if(this.comGuess.charAt(i)==" ")
          this.hiddenWord.push(" ");
          else
          this.hiddenWord.push("_");

       document.getElementById("dashedWord").innerHTML=this.hiddenWord.join(" ").replace(/ /g,"&nbsp;");
},
   getUserGuess:function(event){
       var userGuess=String.fromCharCode(event.keyCode).toLowerCase();

       if (!(this.guessedLetters.indexOf(userGuess)>=0) && event.keyCode!=8){
         
       if (this.comGuess.includes(userGuess)){
       for (i=0;i<this.hiddenWord.length;i++)
       if (this.comGuess.charAt(i)==userGuess)
       this.hiddenWord[i]=userGuess;
       document.getElementById("dashedWord").innerHTML= this.hiddenWord.join(" ").replace(/ /g,"&nbsp;");
       }
       else{
       this.guessedLetters.push(userGuess);
       document.getElementById("lettersGuessed").innerHTML=" "+this.guessedLetters.toString().toUpperCase();
       document.getElementById("imghang"+(7-this.wrongGuessToRip+1)).style.display="none";
       this.wrongGuessToRip--;
       document.getElementById("imghang"+(7-this.wrongGuessToRip+1)).style.display="block";
       document.getElementById("numLife").innerHTML=this.wrongGuessToRip;
       }
       this.checkStatus();
    }

   },
   checkStatus:function(theme){
       if (this.comGuess==this.hiddenWord.join("").toString()){
           document.getElementById("msg").className="alert alert-success";
           document.getElementById("msg").innerHTML="Congratulations! You Won!";
           this.wins++;
           document.getElementById("imghang"+(7-this.wrongGuessToRip+1)).style.display="none";
           document.getElementById("imghang1").style.display="block";
           document.getElementById("numWins").innerHTML=this.wins;
           document.getElementById("txtUserGuess").blur();
           document.getElementById("txtUserGuess").style.display="none";
           document.getElementById("btnRestart").style.display="block";
       }
          if(this.wrongGuessToRip<=0){
           document.getElementById("msg").className="alert alert-danger";
           document.getElementById("msg").innerHTML="You Lost!answer was <strong>"+this.comGuess.toUpperCase()+"</strong>";
           document.getElementById("txtUserGuess").blur();
           document.getElementById("txtUserGuess").style.display="none";
           document.getElementById("btnRestart").style.display="block";
       }
   } ,
   reset:function(){
              document.getElementById("imghang"+(7-this.wrongGuessToRip+1)).style.display="none";
              document.getElementById("imghang1").style.display="block";
              this.wrongGuessToRip=7;
              while(this.hiddenWord.length){this.hiddenWord.pop();}
              while(this.guessedLetters.length){this.guessedLetters.pop();}
              document.getElementById("numLife").innerHTML=this.wrongGuessToRip;
              document.getElementById("lettersGuessed").innerHTML="";
              document.getElementById("msg").className="";
              document.getElementById("msg").innerHTML="";
              document.getElementById("txtUserGuess").style.display="block";
              document.getElementById("btnRestart").style.display="none";
              this.getComGuess();
   },
   getComGuess:function(){

           if(this.wordTheme==1){
           var engWords=["the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","I","his","they","be","at","one","have","this","from","or","had","by","hot","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find","any","new","work","part","take","get","place","made","live","where","after","back","little","only","round","man","year","came","show","every","good","me","give","our","under","name","very","through","just","form","sentence","great","think","say","help","low","line","differ","turn","cause","much","mean","before","move","right","boy","old","too","same","tell","does","set","three","want","air","well","also","play","small","end","put","home","read","hand","port","large","spell","add","even","land","here","must","big","high","such","follow","act","why","ask","men","change","went","light","kind","off","need","house","picture","try","us","again","animal","point","mother","world","near","build","self","earth","father","head","stand","own","page","should","country","found","answer","school","grow","study","still","learn","plant","cover","food","sun","four","between","state","keep","eye","never","last","let","thought","city","tree","cross","farm","hard","start","might","story","saw","far","sea","draw","left","late","run","don't","while","press","close","night","real","life","few","north","open","seem","together","next","white","children","begin","got","walk","example","ease","paper","group","always","music","those","both","mark","often","letter","until","mile","river","car","feet","care","second","book","carry","took","science","eat","room","friend","began","idea","fish","mountain","stop","once","base","hear","horse","cut","sure","watch","color","face","wood","main","enough","plain","girl","usual","young","ready","above","ever","red","list","though","feel","talk","bird","soon","body","dog","family","direct","pose","leave","song","measure","door","product","black","short","numeral","class","wind","question","happen","complete","ship","area","half","rock","order","fire","south","problem","piece","told","knew","pass","since","top","whole","king","space","heard","best","hour","better","true","during","hundred","five","remember","step","early","hold","west","ground","interest","reach","fast","verb","sing","listen","six","table","travel","less","morning","ten","simple","several","vowel","toward","war","lay","against","pattern","slow","center","love",
           "person","money","serve","appear","road","map","rain","rule","govern","pull","cold","notice","voice","unit","power","town","fine","certain","fly","fall","lead","cry","dark","machine","note","wait","plan","figure","star","box","noun","field","rest","correct","able","pound","done","beauty","drive","stood","contain","front","teach","week","final","gave","green","oh","quick","develop","ocean","warm","free","minute","strong","special","mind","behind","clear","tail","produce","fact","street","inch","multiply","nothing","course","stay","wheel","full","force","blue","object","decide","surface","deep","moon","island","foot","system","busy","test","record","boat","common","gold","possible","plane","stead","dry","wonder","laugh","thousand","ago","ran","check","game","shape","equate","hot","miss","brought","heat","snow","tire","bring","yes","distant","fill","east","paint","language","among","grand","ball","yet","wave","drop","heart","am","present","heavy","dance","engine","position","arm","wide","sail","material","size","vary","settle","speak","weight","general","ice","matter","circle","pair","include","divide","syllable","felt","perhaps","pick","sudden","count","square","reason","length","represent","art","subject","region","energy","hunt","probable","bed","brother","egg","ride","cell","believe","fraction","forest","sit","race","window","store","summer","train","sleep","prove","lone","leg","exercise","wall","catch","mount","wish","sky","board","joy","winter","sat","written","wild","instrument","kept","glass","grass","cow","job","edge","sign","visit","past","soft","fun","bright","gas","weather","month","million","bear","finish","happy","hope","flower","clothe","strange","gone","jump","baby","eight","village","meet","root","buy","raise","solve","metal","whether","push","seven","paragraph","third","shall","held","hair","describe","cook","floor","either","result","burn","hill","safe","cat","century","consider","type","law","bit","coast","copy","phrase","silent","tall","sand","soil","roll","temperature","finger","industry","value","fight","lie","beat","excite","natural","view","sense","ear","else","quite","broke","case","middle","kill","son","lake","moment","scale","loud","spring","observe","child","straight","consonant","nation","dictionary","milk","speed","method","organ","pay","age","section","dress","cloud","surprise","quiet","stone","tiny","climb","cool","design","poor","lot","experiment","bottom","key","iron","single","stick","flat","twenty","skin","smile","crease","hole","trade","melody","trip","office","receive","row","mouth","exact","symbol","die","least","trouble","shout","except","wrote","seed","tone","join","suggest","clean","break","lady","yard","rise","bad","blow","oil","blood","touch","grew","cent","mix","team","wire","cost","lost","brown","wear","garden","equal","sent","choose",
           "fell","fit","flow","fair","bank","collect","save","control","decimal","gentle","woman","captain","practice","separate","difficult","doctor","please","protect","noon","whose","locate","ring","character","insect","caught","period","indicate","radio","spoke","atom","human","history","effect","electric","expect","crop","modern","element","hit","student","corner","party","supply","bone","rail","imagine","provide","agree","thus","capital","won't","chair","danger","fruit","rich","thick","soldier","process","operate","guess","necessary","sharp","wing","create","neighbor","wash","bat","rather","crowd","corn","compare","poem","string","bell","depend","meat","rub","tube","famous","dollar","stream","fear","sight","thin","triangle","planet","hurry","chief","colony","clock","mine","tie","enter","major","fresh","search","send","yellow","gun","allow","print","dead","spot","desert","suit","current","lift","rose","continue","block","chart","hat","sell","success","company","subtract","event","particular","deal","swim","term","opposite","wife","shoe","shoulder","spread","arrange","camp","invent","cotton","born","determine","quart","nine","truck","noise","level","chance","gather","shop","stretch","throw","shine","property","column","molecule","select","wrong","gray","repeat","require","broad","prepare","salt","nose","plural","anger","claim","continent","oxygen","sugar","death","pretty","skill","women","season","solution","magnet","silver","thank","branch","match","suffix","especially","fig","afraid","huge","sister","steel","discuss","forward","similar","guide","experience","score","apple","bought","led","pitch","coat","mass","card","band","rope","slip","win","dream","evening","condition","feed","tool","total","basic","smell","valley","nor","double","seat","arrive","master","track","parent","shore","division","sheet","substance","favor","connect","post","spend","chord","fat","glad","original","share","station","dad","bread","charge","proper","bar","offer","segment","slave","duck","instant","market","degree","populate","chick","dear","enemy","reply","drink","occur","support","speech","nature","range","steam","motion","path","liquid","log","meant","quotient","teeth","shell","neck"];
           this.comGuess=engWords[Math.floor(Math.random()*engWords.length)].toLocaleLowerCase();
           document.getElementById("themeTitle").innerHTML="an English word";
    }

        if(this.wordTheme==2){
            var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzestan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre and Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts and Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor LEste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands","Yemen","Zambia","Zimbabwe"];
            this.comGuess=country_list[Math.floor(Math.random()*country_list.length)].toLowerCase();
             document.getElementById("themeTitle").innerHTML="a World Country";
    }
        if (this.wordTheme==3){
            var usaStates=['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
            this.comGuess=usaStates[Math.floor(Math.random()*usaStates.length)].toLowerCase();
            document.getElementById("themeTitle").innerHTML="a Us State";
        }
        if(this.wordTheme==4){
            var Animals=["Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo","Donkey","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Bison","Boar","Buffalo","Butterfly","Camel","Capybara","Caribou","Cassowary","Cat","Caterpillar","Cattle","Chamois","Cheetah","Chicken","Chimpanzee","Chinchilla","Chough","Clam","Cobra","Cockroach","Cod","Cormorant","Coyote","Crab","Crane","Crocodile","Crow","Curlew","Deer","Dinosaur","Dog","Dogfish","Dolphin","Dotterel","Dove","Dragonfly","Duck","Dugong","Dunlin","Eagle","Echidna","Eel","Eland","Elephant","Elk","Emu","Falcon","Ferret","Finch","Fish","Flamingo","Fly","Fox","Frog","Gaur","Gazelle","Gerbil","Giraffe","Gnat","Gnu","Goat","Goldfinch","Goldfish","Goose","Gorilla","Goshawk","Grasshopper","Grouse","Guanaco","Gull","Hamster","Hare","Hawk","Hedgehog","Heron","Herring","Hippopotamus","Hornet","Horse","Human","Hummingbird","Hyena","Ibex","Ibis","Jackal","Jaguar","Jay","Jellyfish","Kangaroo","Kingfisher","Koala","Kookabura","Kouprey","Kudu","Lapwing","Lark","Lemur","Leopard","Lion","Llama","Lobster","Locust","Loris","Louse","Lyrebird","Magpie","Mallard","Manatee","Mandrill","Mantis","Marten","Meerkat","Mink","Mole","Mongoose","Monkey","Moose","Mosquito","Mouse","Mule","Narwhal","Newt","Nightingale","Octopus","Okapi","Opossum","Oryx","Ostrich","Otter","Owl","Oyster","Panther","Parrot","Partridge","Peafowl","Pelican","Penguin","Pheasant","Pig","Pigeon","Pony","Porcupine","Porpoise","Quail","Quelea","Quetzal","Rabbit","Raccoon","Rail","Ram","Rat","Raven","Red deer","Red panda","Reindeer","Rhinoceros","Rook","Salamander","Salmon","Sand Dollar","Sandpiper","Sardine","Scorpion","Seahorse","Seal","Shark","Sheep","Shrew","Skunk","Snail","Snake","Sparrow","Spider","Spoonbill","Squid","Squirrel","Starling","Stingray","Stinkbug","Stork","Swallow","Swan","Tapir","Tarsier","Termite","Tiger","Toad","Trout","Turkey","Turtle","Viper","Vulture","Wallaby","Walrus","Wasp","Weasel","Whale","Wildcat","Wolf","Wolverine","Wombat","Woodcock","Woodpecker","Worm","Wren","Yak","Zebra"]
            this.comGuess=Animals[Math.floor(Math.random()*Animals.length)].toLowerCase();
            document.getElementById("themeTitle").innerHTML=" an Animal";
    }
       if(this.wordTheme==5){
            var Sports=["archery","badminton","baseball","softball","basketball","volleyball","boxing","canoe","kayak","climbing","cycling","diving","equestrian","fencing","hockey","golf","gymnastic","shandball","judo","karate","modern pentathlon","roller sport","rowing","rugby","sailing","shooting","soccer","football","swimming","surfing","synchronized","swimming","table tennis","taekwondo","tennis","track and field","triathlon","volleyball","water polo","weightlifting","wrestling","squash","wushu","bowling","croquet","polo","cricket","lacrosse"];
            this.comGuess=Sports[Math.floor(Math.random()*Sports.length)].toLowerCase();
            document.getElementById("themeTitle").innerHTML=" a Sport";
    }
       if(this.wordTheme==6){
           var GreekMythology=["Acestes","Achilles","Acis","Acontius","Actaeon","Admetus","Adonis","Aeacus","Aedon","Aeolus","Aethra","Agamemnon","Aglauros","Ajax the Greater","Ajax the Lesser","Alcestis","Alcithoë","Alcmaeon","Aloadae","Amalthaea","Amazon","Amphion","Amphitrite","Amphitryon","Ananke","Ancaeus","Anchises","Andromache","Andromeda","Anius","Antaeus","Antilochus","Antiope","Aphrodite","Apollo","Ares","Arethusa","Argonaut","Argus","Ariadne","Aristaeus","Artemis","Asclepius","Astyanax","Atalanta","Athamas","Athena","Atlas","Augeas","Autolycus","Baucis","Bellerophon","Bendis","Biton","Boreas","Briareus","Britomartis","Busiris","Cabeiri","Cadmus","Caeneus","Calais","Calchas","Calliope","Callisto","Cassandra","Castalia","Cecrops","Centaur","Cephalus","Chaos","Charon","Chimera","Chiron","Circe","Cleobis","Clio","Clytemnestra","Cotys","Cronus","Cyclops","Cyrene","Daedalus","Danaus","Daphne","Daphnis","Dardanus","Demeter","Demophon","Deucalion","Diomedes","Dione","Dionysus","Dioscuri","Echidna","Echo","Eileithyia","Electra","Elysium","Endymion","Eos","Erato","Erechtheus","Erigone","Eris","Eros","Eumolpus","Europa","Eurydice","Euterpe","Evander","Fama","Fate","Furies","Gaea","Galatea","Galinthias","Ganymede","Glaucus","Gorgon","Grace","Hades","Harmonia","Harpy","Hebe","Hecate","Hector","Hecuba","Helen","Helenus","Helios","Hellen","Hephaestus","Hera","Heracles","Hermaphroditus","Hermes","Hero","Hesperides","Hesperus","Hestia","Hippolytus","Hora","Hyacinthus","Hyades","Hydra","Hygieia","Hylas","Hymen","Hyperborean","Hypnos","Hypsipyle","Iacchus","Iasion","Icarus","Idomeneus","Ilos","Io","Iolaus","Iphigeneia","Iris","Ixion","Jason","Laestrygones","Lamia","Laocoön","Laomedon","Leander","Leda","Lethe","Leto","Leucothea","Linus","Lotus-Eater","Lucifer","Lycaon","Manto","Marsyas","Medea","Medusa","Melampus","Meleager","Melpomene","Memnon","Menelaus","Midas","Minos","Minotaur","Mnemosyne","Morpheus","Muse","Myrmidon","Naiad","Narcissus","Nemesis","Neoptolemus","Nereid","Nereus","Nestor","Nike","Ninus","Niobe","Nisus","Nyx","Oceanus","Odysseus","Oedipus","Oenone","Orestes","Orion","Orpheus","Pan","Pandarus","Pandora","Paris","Pegasus","Peleus","Pelias","Pelops","Penelope","Persephone","Perseus","Phaethon","Philemon","Philoctetes","Phocus","Phoebe","Phoenix","Pirithous","Pleiades","Plutus","Polymnia","Polyphemus","Polyxena","Poseidon","Priam","Priapus","Procrustes","Proetus","Prometheus","Protesilaus","Proteus","Psyche","Pygmalion","Python","Rhea","Sarpedon","Satyr","Selene","Semele","Serapis","Seven Against Thebes","Silenus","Siren","Sisyphus","Styx","Tantalus","Tartarus","Telegonus","Telemachus","Tereus","Terpsichore","Thalia","Thamyris","Thanatos","Themis","Theseus","Thetis","Tiresias","Titan","Tithonus","Triton","Troilus","Tyche","Typhon","Urania","Uranus","Zetes","Zethus","Zeus"];
           this.comGuess=GreekMythology[Math.floor(Math.random()*GreekMythology.length)].toLowerCase();
           document.getElementById("themeTitle").innerHTML="a Greek mythological figure";
    }
      if(this.wordTheme==7){
          var Authors=["James Joyce","William Faulkner","Vladimir Nabokov","Virginia Woolf","William Shakespeare","Henry James","D H Lawrence","George Orwell","John Steinbeck","F Scott Fitzgerald","Ernest Hemingway","Joseph Conrad","Leo Tolstoy","Fyodor Dostoyevsky","Marcel Proust","William Butler Yeats","Miguel de Cervantes Saavedra","William Wordsworth","Herman Melville","William Blake","Ralph Ellison","Charles Dickens","Franz Kafka","Walt Whitman","Edgar Allan Poe","Toni Morrison","John Keats","Joseph Heller","Kurt Vonnegut","E.M. Forster","Willa Cather","Aldous Huxley","Homer","John Milton","Rudyard Kipling","Dante Aligheri","Jane Austen","Mark Twain","Gustave Flaubert","Stendhal","Emily Dickinson","J D Salinger","Theodore Dreiser","Samuel Beckett","Jack Kerouac","Edith Wharton","George Eliot","Johann Wolfgang von Goethe","Evelyn Waugh","Laurence Sterne","John Donne","Geoffrey Chaucer","J R R Tolkien","Emily Bronte","Murasaki Shikibu","Percy Bysshe Shelley","Charlotte Bronte","William Golding","Anton Chekhov","Malcolm Lowry","Richard Wright","Charles Baudelaire","Thomas Mann","Euripides","Virgil","Pablo Neruda","James Baldwin","Thomas Hardy","Gabriel Garcia Marquez","Henry Miller","Robert Musil","Thomas Pynchon","William Carlos Williams","Ovid","Harper Lee","Samuel Taylor Coleridge","Jack London","Saul Bellow","Flannery OConnor","Ayn Rand","Honore de Balzac","Sophocles","Gertrude Stein","Nathaniel Hawthorne","Robert Frost","Henry Wadsworth Longfellow","Langston Hughes","Robert Browning","Alfred Lord Tennyson","Henry Fielding","Rabindranath Tagore","Maya Angelou","Anthony Burgess","Ford Madox Ford","Charles Bukowski","Sylvia Plath","T.S. Eliot","Alexander Pushkin","Ivan Turgenev","Carson McCullers","John Irving"];
          this.comGuess=Authors[Math.floor(Math.random()*Authors.length)].toLowerCase();
          document.getElementById("themeTitle").innerHTML="an Author";
    }

       this.hideComGuess();
   },
   setTheme:function(theme){
        this.wordTheme=theme;
        var x=document.getElementsByClassName("dropdown-menu");
        for (i=1;i<=x[0].childElementCount;i++)
        document.getElementById("menuItem"+i).className="";
        document.getElementById("menuItem"+theme).className="active";
        this.reset();
   }
 
}
