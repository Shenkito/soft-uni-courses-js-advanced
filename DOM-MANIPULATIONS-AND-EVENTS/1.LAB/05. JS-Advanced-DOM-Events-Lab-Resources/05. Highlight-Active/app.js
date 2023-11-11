function focused() {

    let sections = document.getElementsByTagName('div')[0]; // взимам си всички секций (връша ми html collection)
    Array.from(sections.getElementsByTagName('input')).forEach(el => { // взимам си всички инпути на секцийте и ги обръщам в масив , като за всяка закачам eventListener
        el.addEventListener('focus', focus);
    });

    function focus(e) {
        let parent = e.target.parentNode;
        parent.classList.add('focused');
    }


    Array.from(sections.getElementsByTagName("input")).forEach(el => {
        el.addEventListener("blur", focusLost);
    });

    function focusLost(e) {
        let parent = e.target.parentNode;
        parent.classList.remove("focused");
    }
}