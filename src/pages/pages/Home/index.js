import React from 'react';
import Grid from 'styled-components-grid';
import { Link } from 'react-router-dom';

import GraduationCapIcon from 'react-icons/lib/fa/graduation-cap';
import GavelIcon from 'react-icons/lib/fa/gavel';
import EurIcon from 'react-icons/lib/fa/eur';
import ChildIcon from 'react-icons/lib/fa/child';
import HourglassIcon from 'react-icons/lib/fa/hourglass-3';

import { StyledLink } from './style';

const Home = () => (
    <div>
        <StyledLink>
            <Link to={`/book/test-book`}>test-book</Link>
        </StyledLink>
        <Grid>
            <Grid.Unit size={{ mobil: 1, tablet: 1 / 2, desktop: 1 / 5 }}>
                <GraduationCapIcon size={50} />
            </Grid.Unit>
            <Grid.Unit size={{ mobil: 1, tablet: 1 / 2, desktop: 1 / 5 }}>
                <GavelIcon size={50} />
            </Grid.Unit>
            <Grid.Unit size={{ mobil: 1, tablet: 1 / 2, desktop: 1 / 5 }}>
                <EurIcon size={50} />
            </Grid.Unit>
            <Grid.Unit size={{ mobil: 1, tablet: 1 / 2, desktop: 1 / 5 }}>
                <ChildIcon size={50} />
            </Grid.Unit>
            <Grid.Unit size={{ mobil: 1, tablet: 1 / 2, desktop: 1 / 5 }}>
                <HourglassIcon size={50} />
            </Grid.Unit>
        </Grid>
    </div>
);

export default Home;
