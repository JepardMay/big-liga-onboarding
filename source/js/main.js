import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {initNavMenu} from './modules/init-nav-menu';
import {initLoader} from './modules/init-loader';
import {showContent} from './modules/show-content';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initLoader();
initNavMenu();
showContent();
