import React from 'react';
import { IconFilledStar, IconStar } from '../icons/icon';

type props = {
    filled: boolean
}

const Star = ({ filled }: props) => {
    let style = {
        color: 'rgba(233, 178, 0, 1)',
        fontSize: '1.5em'
    };
    if (!filled) {
        return <IconStar style={style} />
    }
    return (
        <IconFilledStar style={style} />
    );
};

export default Star;