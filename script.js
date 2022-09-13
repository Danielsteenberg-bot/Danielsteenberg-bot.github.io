 var STYD =  {};
 
STYD.init = () => {

    const stydElements = document.querySelectorAll('.styd');
    const stydLinkElements = document.querySelectorAll('.styd-link');
    const stydLink = document.querySelector('.placering');
    const footerFade = document.querySelector('.footer');
    const preFootFade = document.querySelector('.preFoot');
    const bryllupGone = document.querySelector('.image-vid');
    const preContactFade = document.querySelector('.preContact');
    const siteFootFade = document.querySelector('.footer');
    const stydTop = document.querySelector('.someTXT');
    const nav = document.querySelector('.navforsvind');
    const stydImageElements = document.querySelectorAll('.styd-image');
    const lastSection = document.querySelector('#SECTION-5');
    const firstSection = document.querySelector('.responseLAND');
    const arrow = document.querySelector('.arrow');
    const stydBG = document.querySelector('.styd-bg')





    let current = '';


    // i whoSpy kan vi gøre forskellige ting alt efter hvad vi ænsker skal ske når en at vores
    // sektioner er den aktive.
    const whoSpy = (id) => {

        // Kig i consollen. Og husk og fjern denne linie hvis i bruger koden til noget.

        stydImageElements.forEach((styd) => {
                   
            if(styd.dataset.stydImage === id) {
                styd.classList.add('styd-image-active');

                
            } else {
                styd.classList.remove('styd-image-active');

            }
   
        });
        
        stydLinkElements.forEach((styd) => {
            
            if(styd.dataset.stydLink === id) {
                styd.classList.add('styd-link-active');
            } else {
                styd.classList.remove('styd-link-active');
            }
        });

        
    }

    // onScroll foretager bereging på hvilke section der er Aktiv og kalde whoSpy() funktionen ved hver skift.
    // Vi gør dette for kun at kalde funktionen ved skift og ikke konstant. Dermed kan vores transtioner blive langt mere flydende
    // og vi har 100% styr på hviklen sektion der er aktiv.
    const onScroll = () => {



        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
        


         if(scrollPosition > 900){
            stydLink.classList.add('visible');
            stydTop.style.opacity = "0";
            nav.style.display = "none";
            firstSection.style.display = "none";
            arrow.style.display = "none";
            
        }

        else
        {
            stydLink.classList.remove('visible');
            stydTop.style.opacity = "1";
            nav.style.display = "block";
            firstSection.style.display = "block";
            arrow.style.display = "block";
        }
        
        if(scrollPosition >= lastSection.offsetTop){
            footerFade.classList.add('foot-fade');
            preFootFade.classList.add('preFoot-fade');
            preContactFade.classList.add('preContact-fade');
            siteFootFade.classList.add('siteFooter-fade');
        }
        else{
            footerFade.classList.remove('foot-fade');
            preFootFade.classList.remove('preFoot-fade');
            preContactFade.classList.remove('preContact-fade');
            siteFootFade.classList.remove('siteFooter-fade');
        }




        stydElements.forEach((styd, index) => {
         
             //let localOffset = index === 0 ? 0 : 0; 

            // Vi undesøger om vores element er i view og at scroll ikke er scorollet længere end elementets højde for at afgøre om det er det Aktive Element.
            if((styd.offsetTop) <= scrollPosition && styd.offsetTop + styd.clientHeight > scrollPosition && current !== styd.dataset.styd )
            {
                // Sætter current til at være lig med vores data-spyd attribut.
                current = styd.dataset.styd;
            
                // Dette er et "fix". Hvis vi har det allersidste element i vores array.
                // Så ønsker vi at fjerne active på alle.
                if(stydElements.length - 1 === index)
                {
                    stydElements.forEach((styd) => {
                   
                        styd.classList.remove('styd-active');

                    });
                }

                // Vil tilføjer en aktiv klasse til elementet.
                styd.classList.add('styd-active');

                //.
                whoSpy(current)
                
            }
            
            // Her fjerne vi aktiv klassen hvis elementet ikke er sat til current.
            if(current !== styd.dataset.styd){

                styd.classList.remove('styd-active');

            }

            if(scrollPosition < 900){
                bryllupGone.style.display = "none";
           }
           else{
             bryllupGone.style.display = "block";

           }   
            
            
        });
    }
    
    // Her lystter vi på Window Scroll og kalder onScroll funktionen.
    window.addEventListener('scroll', onScroll);

    //Vi kalder onScroll én gang som initialisering for at få sat aktive klasser på fra sarten.
    onScroll();
} 
const formular = document.querySelector('#contact');
const preContact = document.querySelector('.form');
const contactGrid = document.querySelector('.contact-grid');
const preTXTcontainer = document.querySelector('.preTXTcontainer');
const responseDONE = document.querySelector('.response');
const checkMARK = document.querySelector('.check-icon');

const sendToMail = (e) => {

    e.preventDefault()

    let formInputs = formular.elements;


        let formData = {
            'name' : formInputs['name'].value,
            'email' : formInputs['email'].value,
            'besked' : formInputs['besked'].value
         }

        fetch('https://formspree.io/f/xyyovlaq', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((response) => response.json()).then((response) => {
    
            if(response.ok){
                
                preContact.classList.add('submitDONE');
                preTXTcontainer.classList.add('hidden');
                contactGrid.style.display = "none";
                responseDONE.classList.add('responsePLAY');
                checkMARK.classList.add('.check-mark-animation')
            }
       
    
        });
    
}
STYD.init();

formular.addEventListener("submit", sendToMail)