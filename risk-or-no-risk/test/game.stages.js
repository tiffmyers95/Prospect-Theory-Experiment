/**
 * # Game stages definition file
 * Copyright(c) 2019 camille <clandesvmail.uni-mannheim.de>
 * MIT Licensed
 *
 * Stages are defined using the stager API
 *
 * http://www.nodegame.org
 * ---
 */

module.exports = function(stager, settings) {

     stager
        .next("instructions")
		.next("socio")
		.next("mood1")
		.next("fakesurvey") 
		.next("writing")
		.next("mood2") 
        .next("game")
		.next("feedback")
		.next("consent")
        .next('end')
        .gameover();

    // Modify the stager to skip one stage.
    // stager.skip('instructions');
};
