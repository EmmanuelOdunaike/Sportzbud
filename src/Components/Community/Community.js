import { SearchRounded } from '@material-ui/icons';
import React, { useContext, useState } from 'react'
import { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import props2 from '../../Asset/Dummy/mycommunity.json';
import Loading from '../../Shared/Loading/Loading';
import MyCommunity from '../../Pages/Community/MyCommunity';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { API_URL } from '../../API/config';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SearchContext } from '../../Context/SearchContext';

function Community({ userId }) {
    const { communitySearch, setCommunitySearch } = useContext(SearchContext)
    
    }
