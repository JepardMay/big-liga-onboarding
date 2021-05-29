import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/init-modals';
import {initNavMenu} from './modules/init-nav-menu';
import {initLoader} from './modules/init-loader';
import {showContent} from './modules/show-content';
import {stopTransitiononResize} from './modules/stop-transition-resize';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initLoader();
initModals();
initNavMenu();
showContent();
stopTransitiononResize();
