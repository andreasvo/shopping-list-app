import {check} from 'meteor/check';
import {IngredientCollection} from "./IngredientCollection";

Meteor.methods({

    'ingredients.create'(name) {
        check(name, String);

        IngredientCollection.insert({
            name,
            createdAt: new Date()
        });
    },

    'tasks.delete'(id) {
        check(id, String);

        //TODO: Validate that the ingredient is not in use

        const ingredient = IngredientCollection.findOne({_id: id});

        if (!ingredient) {
            throw new Meteor.Error('Object not found.');
        }

        IngredientCollection.remove(taskId);
    }

});