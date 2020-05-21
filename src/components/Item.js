import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Item = ({ item }) => {
    return item && item.url ? (
        <div>
            <a href={item.url} target="_blank" rel="noopener noreferrer nofollow">
                {item.title}
            </a>
            {item.time ? (
                <div>
                    <span>{dayjs.unix(item.time).format('YYYY-MM-DD')}</span>
                </div>
            ) : null}
        </div>
    ) : null;
};

Item.propTypes = {
    item: PropTypes.object,
};

export default Item;
