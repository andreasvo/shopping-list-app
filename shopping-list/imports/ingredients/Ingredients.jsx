import React from 'react';
import {Table} from "../ui/Table";

const data = Meteor.call('ingredients.find', {});

const columns = [{header: 'Navn', accessor: 'name'}];

export const Ingredients = () => (
    <div>
        <h1>Ingredienser</h1>
        <Table columns={columns} data={data}/>
    </div>
);
