import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';

const TypeBar = observer(() => {
    const {device} = useContext(Context);

    return <ListGroup>
        {device.types.map(type =>
            <ListGroup.Item 
                active={type.id === device.selectedType.id}
                style={{cursor: 'pointer'}}
                key={type.id}
                onClick={() => device.setSelectedType(type)}
            >
                {type.name}
            </ListGroup.Item>
        )}
    </ListGroup>
});

export default TypeBar;