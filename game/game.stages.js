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
		.next("mood1_test")
		.next("fakesurvey") 
		.next("writing")
		.next("mood2") 
		.next("mood2_test")
        .next("game")
		.next("feedback")
		.next("consent")
        .next('end')
        .gameover();

    // Modify the stager to skip one stage.
     stager.skip('socio');
	 stager.skip('mood1');
	 stager.skip('mood1_test');
	 stager.skip('fakesurvy');
	 stager.skip('writing');
	 stager.skip('mood2');
	 stager.skip('mood2_test');
	 stager.skip('game');
	 stager.skip('feedback');
	 
	 
};
