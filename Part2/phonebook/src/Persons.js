import React from 'react'
export const Persons = ({ persons, filter }) => <div>
    {
        persons
            .filter(({ name }) => name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
            .map(({ name }) => <div>{name}</div>)
    }
</div>