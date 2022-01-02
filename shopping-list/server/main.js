import {Meteor} from 'meteor/meteor';
import '../imports/ingredients/ingredientsMethods';

Meteor.startup(() => {
        [
            'Poteter',
            'Gulrøtter',
            'Kyllingbryst',
            'Laks',
            'Melk',
            'Biola'
        ].forEach(name => Meteor.call('ingredients.createIfNotExists', name));
});
