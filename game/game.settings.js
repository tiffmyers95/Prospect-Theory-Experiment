/**
 * # Game settings definition file
 * Copyright(c) 2019 camille <clandesvmail.uni-mannheim.de>
 * MIT Licensed
 *
 * The variables in this file will be sent to each client and saved under:
 *
 *   `node.game.settings`
 *
 * The name of the chosen treatment will be added as:
 *
 *    `node.game.settings.treatmentName`
 *
 * http://www.nodegame.org
 * ---
 */
module.exports = {

    // # Treatments definition.

    // They can contain any number of properties, and also overwrite
    // those defined above.

    // If the `treatments` object is missing a treatment named _standard_
    // will be created automatically, and will contain all variables.

    treatments: {

        sad: {
            Name: 'Sad',
            description: "Felt sad",
            questionFeeling: 'sad'
        },

        angry: {
            Name: 'Angry',
            description: "Felt angry",
            questionFeeling: 'angry'
        },

        fear: {
            Name: 'Fear',
            description: "Felt scared",
            questionFeeling: 'scared'
        },

        control: {
            Name: 'Control',
            description: 'No emotion',

        },
     }
};
