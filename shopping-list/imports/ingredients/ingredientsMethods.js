import {check} from 'meteor/check';
import {IngredientCollection} from "./IngredientCollection";

Meteor.methods({

    'ingredients.find'(predicate) {
        return IngredientCollection.findOne(predicate);
    },

    'ingredients.createIfNotExists'(name) {
        const ingredient = Meteor.call('ingredients.find', {name: name});

        if (!ingredient) {
            Meteor.call('ingredients.create', name);
        }
    },

    'ingredients.create'(name) {
        check(name, String);

        //TODO: Validate that name is not in use

        IngredientCollection.insert({
            name,
            createdAt: new Date()
        });
    },

    'ingredients.delete'(id) {
        check(id, String);

        //TODO: Validate that the ingredient is not in use

        const ingredient = IngredientCollection.findOne({_id: id});

        if (!ingredient) {
            throw new Meteor.Error('Object not found.');
        }

        IngredientCollection.remove(id);
    }

});