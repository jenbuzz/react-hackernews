import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAll } from '../services/api';
import Item from './Item';

const ItemsContainer = ({ type, limit }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAll(type, limit).then(items => {
            setItems(items);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="react-hackernews">
            {isLoading && <span>Loading ...</span>}
            {!isLoading && items.map(item => <Item key={item.id} item={item} />)}
        </div>
    );
};

ItemsContainer.propTypes = {
    type: PropTypes.oneOf(['new', 'top', 'best', 'ask', 'show', 'job']),
    limit: PropTypes.number,
};

ItemsContainer.defaultProps = {
    type: 'top',
    limit: 10,
};

export default ItemsContainer;
