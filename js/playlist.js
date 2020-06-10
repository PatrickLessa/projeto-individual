const album1 = [

    {
        title: 'Fight Fire With Fire',
        album: 'Ride The Lightning',
    },
    {
        title: 'Ride The Lightning',
        album: 'Ride The Lightning',
    },
    {
        title: 'For Whom The Bells Tools',
        album: 'Ride The Lightning',
    },
    {
        title: 'Fade To Black',
        album: 'Ride The Lightning',
    },
    {
        title: 'Trapped Under Ice',
        album: 'Ride The Lightning',
    },
    {
        title: 'Escape',
        album: 'Ride The Lightning',
    },
    {
        title: 'Creeping Death',
        album: 'Ride The Lightning',
    },
    {
        title: 'The Call Of The Ktulu',
        album: 'Ride The Lightning',
    }
]

const album2 = [

    {
        title: 'Evil Has No Boundaries',
        album: 'Show No Mercy',
    },
    {
        title: 'Antichrist',
        album: 'Show No Mercy',
    },
    {
        title: 'Die by The Sword',
        album: 'Show No Mercy',
    },
    {
        title: 'Fight til Death',
        album: 'Show No Mercy',
    },
    {
        title: 'Metal Storm/Face the Slayer',
        album: 'Show No Mercy',
    },
    {
        title: 'Black Magic',
        album: 'Show No Mercy',
    },
    {
        title: 'Tormentor',
        album: 'Show No Mercy',
    },
    {
        title: 'Final Command',
        album: 'Show No Mercy',
    },
    {
        title: 'Crionics',
        album: 'Show No Mercy'
    }
]

// for (i = 0; i < songs.length; i++) {
//     document.getElementById('songs-js').innerHTML += `
//         <div class="music">

//             <div class="track">
//                 <i class="fas fa-music icon-music"></i>
//                 <div class="info">
//                     <span class="title">${songs[i].title}</span>
//                     <span class="album-title">${songs[i].album}</span>
//                 </div>
//             </div>

//             <i class="fas fa-heart favoritar"></i>
//         </div>
//     `
// }

//favoritar
//favoritar
var aux;
function favoritar(event) {
    if (event.target.classList.contains('favoritado')) {
        event.target.classList.remove('favoritado');
    } else {
        event.target.classList.add('favoritado');
    }
}

//slide
var cont = 0;

function prox() {
    if (cont == 0) {
        cont++
        document.getElementById('songs-js').innerHTML = ''
        document.getElementById('capinha').style.backgroundImage = 'url(img/ride.jpg)'
        for (i = 0; i < album1.length; i++) {
            document.getElementById('songs-js').innerHTML += `
                <div class="music">
                                            
                    <div class="track">
                        <i class="fas fa-music icon-music"></i>
                        <div class="info">
                            <span class="title">${album1[i].title}</span>
                            <span class="album-title">${album1[i].album}</span>
                        </div>
                    </div>
        
                    <i class="fas fa-heart favoritar"></i>
                </div>
            `

            aux = document.querySelectorAll('.favoritar');
            aux.forEach(icon => {
                icon.addEventListener('click', favoritar);
            });

        }

    } else if (cont == 1) {

        cont = 0;
        document.getElementById('songs-js').innerHTML = ''
        document.getElementById('capinha').style.backgroundImage = 'url(img/noMercy.jpg)'
        for (i = 0; i < album2.length; i++) {
            document.getElementById('songs-js').innerHTML += `
                <div class="music">
                                            
                    <div class="track">
                        <i class="fas fa-music icon-music"></i>
                        <div class="info">
                            <span class="title">${album2[i].title}</span>
                            <span class="album-title">${album2[i].album}</span>
                        </div>
                    </div>
        
                    <i class="fas fa-heart favoritar"></i>
                </div>
            `

            aux = document.querySelectorAll('.favoritar');
            aux.forEach(icon => {
                icon.addEventListener('click', favoritar);
            });

        }
    }
}

prox();