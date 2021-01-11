// ALL IMPORT

/* header */
import { menuData } from './data/menuData.js';
import { Menu } from './components/menu/Menu.js';
/* hero */
/* about */
/* hobbies */
import { hobbiesData } from './data/hobbiesData.js';
import { renderHobbies } from './components/hobbies/renderHobbies.js';
/* achievements */
import { Achievements } from './components/achievements/Achievements.js';
import { achievementsData } from './data/achievementsData.js';
/* services */
/* job history */
/* work expertise */
/* portfolio */
import { Gallery } from './components/gallery/Gallery.js';
/* testimonials */
/* blog */
/* hire me banner */
/* contact me */
/* footer */


// CODE EXECUTION

/* header */
const menu = new Menu(menuData);
menu.init();
/* hero */
/* about */
/* hobbies */
renderHobbies({
    selector: '#hobbies_block',
    data: hobbiesData,
    limit: 12,
    borderRadius: 4
});
/* achievements */
const achievements = new Achievements(achievementsData);
achievements.init();
achievements.addEvents();
/* services */
/* job history */
/* work expertise */
/* portfolio */
// const gallery = new Gallery(params);
// console.log(gallery);
/* testimonials */
/* blog */
/* hire me banner */
/* contact me */
/* footer */