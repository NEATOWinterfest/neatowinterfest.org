---
---

{% include js/conference.js %}

window.conference.awaitReady().then(() => {
    const map = window.conference.map.getMap();
    
    /* if (typeof map !== 'undefined') { */
    /*     let main_station = L.marker([43.40912,-70.48889], { */
    /*         icon: L.divIcon({ */
    /*             className: '', */
    /*             html: '<span class="fas fa-train"></span> Visitors<br />Center', */
    /*             iconSize: [120, 56] */
    /*         }) */
    /*     }).addTo(map); */
    /* } */

    map.setView([43.40912,-70.48889], 17);

});