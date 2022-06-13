 const sr = ScrollReveal({
    mobile: false,   
    distance: "50px",
    duration: 1500,
    delay: 100,
    reset: false
  });

  sr.reveal (".eventHEAD", {delay: 100, origin: "left", mobile: false });
  sr.reveal (".eventTXT", {delay: 200, origin: "right",  mobile: false });
  sr.reveal ("#container-btn", {delay: 200, origin: "right", mobile: false });
  sr.reveal (".button-text", {delay: 200, origin: "right", mobile: false });
  sr.reveal (".event", {delay: 300, origin: "center", mobile: false });



