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
				'Male',
				'Female',
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
	
	
stager.extendStep('socio2', {
		widget: {
		name: 'ChoiceManager',
		root: 'container',
		options: {
			className: 'centered',
			forms: [
			{
				name: 'ChoiceTable',
				id: 'education_father',
				mainText: "What is your fathers' highest educational level?",
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
			}, 
			
			{
				name: 'ChoiceTable',
				id: 'education_mother',
				mainText: "What is your mothers' highest educational level?",
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
			},
			
			{
				name: 'CustomInput',
				id: 'automobiles',
				mainText: 'How many automobiles (e.g. cars) are there in your household?',
				type: 'int',
				min: 0,
				max: 10,
				requiredChoice: true
			},
			
			{
				name: 'CustomInput',
				id: 'rooms',
				mainText: 'How many rooms are there in your home?',
				type: 'int',
				min: 0,
				max: 10,
				requiredChoice: true
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
	 

	//// var root = document.body;
	//// var mood = node.widgets.get('MoodGauge', root);		
			
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

stager.extendStep('mood1', {
widget: {
		name: 'ChoiceManager',
		root: 'container',
		options: {
			className: 'centered',
			mainText: 'And how are you feeling right now?',
			forms: [
			{
				name: 'ChoiceTable',
				id: 'M1_1',
				mainText: 'I feel angry',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M1_2',
				mainText: 'I feel happy',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M1_3',
				mainText: 'I feel enraged',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M1_4',
				mainText: 'I feel determined',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M1_5',
				mainText: 'I feel sad',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M1_6',
				mainText: 'I feel inspired',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M1_7',
				mainText: 'I feel sorrowful',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M1_8',
				mainText: 'I feel afraid',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M1_9',
				mainText: 'I feel attentive',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M1_10',
				mainText: 'I feel frightened',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			]
		}
		}
    });	
		
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

stager.extendStep('mood2', {
widget: {
		name: 'ChoiceManager',
		root: 'container',
		options: {
			className: 'centered',
			mainText: 'How are you feeling right now after completing the writing task?',
			forms: [
			{
				name: 'ChoiceTable',
				id: 'M2_1',
				mainText: 'I feel angry',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M2_2',
				mainText: 'I feel happy',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M2_3',
				mainText: 'I feel offended',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M2_4',
				mainText: 'I feel determined',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M2_5',
				mainText: 'I feel sad',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M2_6',
				mainText: 'I feel inspired',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M2_7',
				mainText: 'I feel sorrowful',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M2_8',
				mainText: 'I feel afraid',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M2_9',
				mainText: 'I feel attentive',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			{
				name: 'ChoiceTable',
				id: 'M2_10',
				mainText: 'I feel frightened',
				choices: [
				'1',
				'2',
				'3',
				'4',
				'5'
			],
			// requiredChoice: true,
			left: 'Not at all',
			right: 'Strongly',
			},
			
			]
		}
		}
    });	



stager.extendStep('writing', {
    widget: {
    name: 'Feedback',
    root: 'container',
        options: {
          className: 'centered',
          mainText: 'Can you recall the moment where you felt ' + settings.questionFeeling + '? Please write about the situation in as much detail as you can.',
          minChars: 100,
          minWords: 5,
          requiredChoice: true,
          showSubmit: false,
          panel: false,
          title: false,
        }
      }
    });


stager.extendStep('game', {
	widget: {
	name: 'RiskGauge',
	root: 'container',
		 options: {
                panel: false,
                title: false
            }
		}	
	 });
	
	 
stager.extendStep('debriefing_feedback_consent', {
	frame: 'debriefing.htm',
    widget: {
			name: "Feedback",
			root: "container", 
			options: {
			className: "centered",
			mainText: "Contact us here or give us feedback on our study!",
			minchar: 100,
			minwords: 5,
			requiredChoice: true,
			showSubmit: false,
			panel: false,
			title: false,
			}
		}
    });

	
	stager.extendStep('end', {
        donebutton: false,
        frame: 'end.htm',
        //cb: function() {
        //    node.game.visualTimer.setToZero();
        //}
    });
};
