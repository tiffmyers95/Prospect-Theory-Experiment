/**
 * # Player type implementation of the game stages
 * Copyright(c) 2019 camille <clandesvmail.uni-mannheim.de>
 * MIT Licensed
 *
 * Each client type must extend / implement the stages defined in `game.stages`.
 * Upon connection each client is assigned a client type and it is automatically
 * setup with it.
 *
 * http://www.nodegame.org
 * ---
 */

"use strict";

module.exports = function(treatmentName, settings, stager, setup, gameRoom) {

    stager.setOnInit(function() {

        // Initialize the client.

        var header, frame;

        // Bid is valid if it is a number between 0 and 100.
        this.isValidBid = function(n) {
            return node.JSUS.isInt(n, -1, 101);
        };

        this.randomOffer = function(offer, submitOffer) {
            var n;
            n = J.randomInt(-1,100);
            offer.value = n;
            submitOffer.click();
        };

        // Setup page: header + frame.
        header = W.generateHeader();
        frame = W.generateFrame();

        // Add widgets.
        this.visualRound = node.widgets.append('VisualRound', header, {
            title: false
         });
       // this.visualTimer = node.widgets.append('VisualTimer', header);

        this.doneButton = node.widgets.append('DoneButton', header);

        // Additional debug information while developing the game.
        // this.debugInfo = node.widgets.append('DebugInfo', header)
    });

    stager.extendStep('instructions', {
        frame: 'instructions.htm'
    });
	
	stager.extendStep('socio', {
		widget: {
		name: 'ChoiceManager',
		root: 'container',
		options: {
			className: 'centered',
			mainText: 'To start, we want to know something about your person',
			forms: [
			{
				name: 'ChoiceTable',
				id: 'sex',
				mainText: 'What is your gender?',
				choices: [
				'male',
				'female',
				"Do not want to say"
			],
			//requiredChoice: true,
			orientation: 'V'
			},
			
			{
				name: 'ChoiceTable',
				id: 'age',
				mainText: 'What is your age group?',
				choices: [
					'18-20', '21-30', '31-40', '41-50',
					'51-60', '61-70', '71+', 'Do not want to say'
				],
				title: false,
				//requiredChoice: true
			},
			
			{
				name: 'ChoiceTable',
				id: 'education',
				mainText: 'What is your highest qualification?',
				choices: [
				'No degree',
				'Less than high school diploma',
				'High school diploma or equivalent degree',
				"Bachelor’s degree",
				"Master's degree",
				'Do not want to say'
			],
			title: false,
			//requiredChoice: true
			}
			]
		}
		}
    });
	
	//stager.extendStep('mood1', {
	//widget: {
	//name: 'MoodGauge',
	//root: 'container',
		// options: {
        //        panel: false,
        //        title: false
        //    }
		//}	
	 //});
	 

	/// var root = document.body;
	/// var mood = node.widgets.get('MoodGauge', root);		
			
// After user made his or her selection, get current values.
// mood.getValues();
// Object {
//     id: "ipnassf"
//     items: {
//         Active: {
//             id: "Active",
//             group: "ipnassf",
//             groupOrder: 10,
//             attempts: [],
//             choice: "3",
//             isCorrect: true,
//             nClicks: 1,
//             time: 9510
//         },
//         Afraid: Object
//         Alert: Object
//         Ashamed: Object
//         Attentive: Object
//         Determined: Object
//         Hostile: Object
//         Inspired: Object
//         Nervous: Object
//         Upset: Object
//    },
//    missValues: true,
//    order: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// };
// });		


	//stager.extendStep('mood1_test', {
		//widget: {
		//name: 'ChoiceTableGroup',
		//root: 'container',
		//id: 'score',
		//options: {
			//mainText: 'Thinking about yourself and how you normally feel, to what extent do you generally feel:',
			//items: [
				//	'Enraged',	 //anger
				//	'Sorrowful', //sadness
				//	'Afraid',	 //fear	//maybe add more, look at mood gauge
			//],
     //choices: [ 1, 2, 3, 4, 5 ],
     //requiredChoice: true,
     //left: 'Always',
     //right: 'Never'
		//	}
		//}
	 //});	
	 
	 
//VERSION 2 Test

	//var moodOptions = {
    //id: 'score',
    //mainText: 'Thinking about yourself and how you normally feel, to what extent do you generally feel:',
		//	items: [
		//			'Enraged',	 //anger
		//			'Sorrowful', //sadness
		//			'Afraid',	 //fear	//maybe add more, look at mood gauge
		//	],
    // choices: [ 1, 2, 3, 4, 5 ],
    // shuffleItems: true, 
    // requiredChoice: true,
    // left: 'Lowest',
    // right: 'Highest'
//};        

//var node = gameRoom.node;

	// stager.extendStep('mood1_test', {
    //   cb: function() {
    //      var w;
    //      w = node.widgets;
	//		var scoreTable = w.append('ChoiceTableGroup', 'container', moodOptions);
	//	}
	 //});	 			
		
	stager.extendStep('fakesurvey', {
		widget: {
		name: 'ChoiceManager',
		root: 'container',
		options: {
			className: 'centered',
			mainText: 'We now have some questions. Please remember to answer truthfully.',
			forms: [
			{
				name: 'ChoiceTable',
				id: 's_1',
				mainText: 'Have you ever been to the casino?',
				choices: [
				'Yes',
				'No',
				"Do not want to say"
			],
			// requiredChoice: true,
			},
			
			{
				name: 'ChoiceTable',
				id: 's_2',
				mainText: 'Have you ever played the lottery?',
				choices: [
				'Yes',
				'No',
				"Do not want to say"
				],
				title: false,
			//	requiredChoice: true
			},
			
			{
				name: 'ChoiceTable',
				id: 's_3',
				mainText: 'Have you ever placed a bet before?',
				choices: [
				'Yes',
				'No',
				"Do not want to say"
				],
			title: false,
			//requiredChoice: true
			},
			
			{
				name: 'ChoiceTable',
				id: 's_4',
				mainText: 'Have you ever made an financial investment?',
				choices: [
				'Yes',
				'No',
				"Do not want to say"
				],
			title: false,
			//requiredChoice: true
			},
			
			{
				name: 'ChoiceTable',
				id: 's_5',
				mainText: 'Have you ever continued to gamble after losing?',
				choices: [
				'Yes',
				'No',
				"Do not want to say"
				],
			title: false,
			//requiredChoice: true
			},
			]
		}
		}
    });
	
	//stager.extendStep('mood2', {
	//widget: {
	//name: 'MoodGauge',
	//root: 'container',
		// options: {
        //        panel: false,
        //        title: false
        //    }
		//}	
	 //});


//stager.extendStep('mood2_test', {
	//	widget: {
	//	name: 'ChoiceTableGroup',
	//	root: 'container',
	//	id: 'score',
	//	options: {
		//	mainText: 'After doing this little writing-task, would you mind telling us again how you feel right now? Think of your earlier answers which were on a more general level and try to answer in reference to them',
		//	items: [
			//		'Enraged',	 //anger
			//		'Sorrowful', //sadness
			//		'Afraid',	 //fear	//maybe add more, look at mood gauge
			//],
     //choices: [ 1, 2, 3, 4, 5 ],
     //requiredChoice: true,
     //left: 'Not at all',
     //right: 'Strongly'
		//	}
		//}
	 //});		

	
	stager.extendStep('game', {
        donebutton: false,
        frame: 'game.htm',
        roles: {
            DICTATOR: {
                timer: settings.bidTime,
                cb: function() {
                    var button, offer, div;

                    // Make the dictator display visible.
                    div = W.getElementById('dictator').style.display = '';
                    button = W.getElementById('submitOffer');
                    offer =  W.getElementById('offer');

                    // Listen on click event.
                    button.onclick = function() {
                        var decision;

                        // Validate offer.
                        decision = node.game.isValidBid(offer.value);
                        if ('number' !== typeof decision) {
                            W.writeln('Please enter a number between ' +
                                      '0 and 100.', 'dictator');
                            return;
                        }
                        button.disabled = true;

                        // Mark the end of the round, and
                        // store the decision in the server.
                        node.done({ offer: decision });
                    };
                },
                timeup: function() {
                    node.game.randomOffer(W.getElementById('offer'),
                                          W.getElementById('submitOffer'));
                }
            },
            OBSERVER: {
                cb: function() {
                    var span, div, dotsObj;

                    // Make the observer display visible.
                    div = W.getElementById('observer').style.display = '';
                    span = W.getElementById('dots');
                    dotsObj = W.addLoadingDots(span);

                    node.on.data('decision', function(msg) {
                        dotsObj.stop();
                        W.setInnerHTML('waitingFor', 'Decision arrived: ');
                        W.setInnerHTML('decision',
                                       'The dictator offered: ' +
                                       msg.data + ' ECU.');

                        node.timer.randomDone();
                    });
                }
            }
        }
    });

    stager.extendStep('consent', {
		frame: 'debriefing.htm'
    });
	
	
	stager.extendStep('end', {
        donebutton: false,
        frame: 'end.htm',
        cb: function() {
            node.game.visualTimer.setToZero();
        }
    });
};
