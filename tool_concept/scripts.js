var verbs, nouns, adjectives;
nouns = ["horror", "crows", "Transylvania", "eyeballs", "monsters", "superstition", "tales of horror", "werewolves", "vampires", "a graveyard", "a prankster", "tricks", "a tombstone", "the undead", "a broomstick", "the headless horseman", "a flashlight", "ghost stories", "fangs", "candy", "spirits", "spider webs", "nightfall", "full moon", "pumpkin patch",];
verbs = ["screaming", "surprised", "creeped", "panicing", "spooked", "raising hell", "trick-or-treating", "party", "playing pranks", "vexing", "at risk", "hooting", "petrified", "distressed", "afraid",];
adjectives = ["abominable", "blood-curdling", "supernatural", "eerie", "fear-inspiring", "wicked", "ghoulish", "up-to-no-good", "bone-chilling", "bloody", "chilling", "cowardly", "disguised", "dire", "deadly", "dark", "corpselike", "",];
            
            function randGen() {
              return Math.floor(Math.random() * 5);
            }

            function sentence() {
              var rand1 = Math.floor(Math.random() * 10);
              var rand2 = Math.floor(Math.random() * 10);
              var rand3 = Math.floor(Math.random() * 10);
              var rand4 = Math.floor(Math.random() * 10);
              var rand5 = Math.floor(Math.random() * 10);
              var rand6 = Math.floor(Math.random() * 10);
              //                var randCol = [rand1,rand2,rand3,rand4,rand5];
              //                var i = randGen();
              var content = "No" + " longer " + verbs[rand1] + " " + " this " + " Halloween" + ", " + " " + " the " + " room " + " would " + " still " + " be " + " haunted " + " by " + adjectives[rand3] + " " + " memories " + " and " + nouns[rand4] + "" + ".";
              document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
            };
            sentence();

            $( "#container4" ).click(function() {
            $( "#sentence" ).click();
            });