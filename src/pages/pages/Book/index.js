import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';

const Book = ({ match }) => {
    const slug = get(match, 'params.slug') || '';

    return (
        <div>
            <Helmet>
                <title>Book {slug}</title>
            </Helmet>
            <h1>Book {slug}</h1>
        </div>
    );
};

Book.propTypes = {
    match: PropTypes.shape({
        param: PropTypes.shape({
            slug: PropTypes.string,
        }),
    }),
};

export default Book;
