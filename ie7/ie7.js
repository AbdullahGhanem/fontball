/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'football\'">' + entity + '</span>' + html;
	}
	var icons = {
		'football-ball-goal': '&#xe900;',
		'football-tshirt-10': '&#xe901;',
		'football-cards': '&#xe902;',
		'football-change': '&#xe903;',
		'football-commentator': '&#xe904;',
		'football-competition-1': '&#xe905;',
		'football-competition': '&#xe906;',
		'football-couple-of-football-cones': '&#xe907;',
		'football-award': '&#xe908;',
		'football-chalice-shaped-trophy': '&#xe909;',
		'football-coach': '&#xe90a;',
		'football-midair': '&#xe90b;',
		'football-soccer-board': '&#xe90c;',
		'football-player-blocking': '&#xe90d;',
		'football-player-inclined': '&#xe90e;',
		'football-football-player-kicking-ball-(1)': '&#xe90f;',
		'football-player-kicking': '&#xe910;',
		'football-football-player-landing-on-field-missing-the-ball': '&#xe911;',
		'football-player-posture': '&#xe912;',
		'football-player-running': '&#xe913;',
		'football-player-stretching': '&#xe914;',
		'football-player-head': '&#xe915;',
		'football-player-injury': '&#xe916;',
		'football-player-hands': '&#xe917;',
		'football-player-ball': '&#xe918;',
		'football-referee-card': '&#xe919;',
		'football-football-socks-with-white-lines-design': '&#xe91a;',
		'football-gloves': '&#xe91b;',
		'football-game-tv': '&#xe91c;',
		'football-goal-ball-2': '&#xe91d;',
		'football-goal': '&#xe91e;',
		'football-goalkeeper': '&#xe91f;',
		'football-inflatable-cheerer': '&#xe920;',
		'football-list': '&#xe921;',
		'football-penalty-1': '&#xe922;',
		'football-penalty': '&#xe923;',
		'football-player-1': '&#xe924;',
		'football-player-attempting-to-kick-ball': '&#xe925;',
		'football-player-ban': '&#xe926;',
		'football-player-kicking-ball': '&#xe927;',
		'football-player-pluse': '&#xe928;',
		'football-player-remove': '&#xe929;',
		'football-player-setting-ball': '&#xe92a;',
		'football-player-with-number-10-jersey-and-check-mark': '&#xe92b;',
		'football-player': '&#xe92c;',
		'football-players-on-game': '&#xe92d;',
		'football-red-card-2': '&#xe92e;',
		'football-red-card': '&#xe92f;',
		'football-referee-2': '&#xe930;',
		'football-referee': '&#xe931;',
		'football-running-sportive-shoe-for-soccer-players': '&#xe932;',
		'football-soccer-ball': '&#xe933;',
		'football-corner': '&#xe934;',
		'football-soccer-goal': '&#xe935;',
		'football-soccer-shoe': '&#xe936;',
		'football-soccer-tactics-sketch': '&#xe937;',
		'football-sports-t-shirt': '&#xe938;',
		'football-stadium': '&#xe939;',
		'football-strategy-1': '&#xe93a;',
		'football-strategy': '&#xe93b;',
		'football-t-shirt-of-soccer-player-front': '&#xe93c;',
		'football-tactics': '&#xe93d;',
		'football-tactics-1': '&#xe93e;',
		'football-team-1': '&#xe93f;',
		'football-team-bench': '&#xe940;',
		'football-team': '&#xe941;',
		'football-cup': '&#xe942;',
		'football-tshirt': '&#xe943;',
		'football-tshirt-1': '&#xe944;',
		'football-two-black-sportive-flags': '&#xe945;',
		'football-whistle-1': '&#xe946;',
		'football-whistle-2': '&#xe947;',
		'football-whistle': '&#xe948;',
		'football-yard-1': '&#xe949;',
		'football-yard': '&#xe94a;',
		'football-yellow-card-1': '&#xe94b;',
		'football-yellow-card': '&#xe94c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/football-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
