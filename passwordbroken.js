alert('Welcome to the club')
let pass =prompt('Please enter a password')
if (pass.length>=10){
    alert('Thanks for giving me your password have a nice day')
    window.location.reload();
}
else if (pass.length<10){
    alert('Please enter up to at least 10 characters')
    window.location.reload();
}

else if (pass='Kickapoo'||'kickapoo'){
    alert(`A long-ass fucking time ago In a town called Kickapoo There lived a humble family Religious through and through But yay, there was a black sheep And he knew just what to do His name was young JB And he refused to step in line A vision he did see Of fucking rocking all the time  He wrote a tasty jam And all the planets did align Oh, the dragon's balls were blazing As I stepped into his cave Then I sliced his fucking cockles With a long and shiny blade 'Twas I who fucked the dragon Fuckali, sing fuckaloo And if you try to fuck with me Then I shall fuck you too Got to get it on in the party zone I gots to shoot a load in the party zone Gotta lick a toad in the party zone Gotta suck a chode in the party zone, ah You've disobeyed my orders, son Why were you ever born? Your brother's ten times better than you Jesus loves him more This music that you play for us Comes from the depths of Hell Rock and Roll's the Devil's work He wants you to rebel You'll become a mindless puppet Beelzebub will pull the strings Your heart will lose direction And chaos it will bring You better shut your mouth You better watch your tone You're grounded for a week With no telephone Don't let me hear you cry Don't let me hear you moanYou gotta praise the Lord When you're in my home Dio, can you hear me? I am lost and so alone I'm asking for your guidance Won't you come down from your throne? I need the tight compadre Who will teach me how to rock My father thinks you're evil But man, he can suck a cock  Rock is not the Devil's work It's magical and rad I'll never rock as long as I am Stuck here with my Dad I hear you, brave young Jables You are hungry for the rock But to learn the ancient method Sacred doors you must unlock Escape your father's clutches And this oppressive neighborhood On a journey you must go To find the land of Hollywood. In the City of Fallen Angels  Where the ocean meets the sand You will form a strong alliance And the world's most awesome band To find your fame and fortune Through the Valley you must walk You will face your inner demons Now go, my son, and Rock So he bailed from fucking Kickapoo With hunger in his heart And he journeyed far and wide To find the secrets of his art But in the end he knew That he would find his counterpart')`)
    for (let i=0; i<100; i++ ){
    window.open('https://www.youtube.com/watch?v=kVbbtuJfgIc');
    }
}

//Couldnt get the kickapoo line to execute on its condition if you could let me know why I would appreciate it. I think its a limitation with the alert method because it seems to be buggy to begin with like using outside of the html via a js file it throws console errors.