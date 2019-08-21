import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import LikedPostFilter from 'components/filter/LikedPostFilter';
import LikedPostList from 'components/list/LikedPostList';
import CancelLikeModal from 'components/modal/CancelLikeModal';

const LikedPostPage = () => {
    return (
        <PageTemplate>
            {/*<CancelLikeModal />*/}
            <LikedPostFilter />
            <LikedPostList></LikedPostList>
        </PageTemplate>
    );
};

export default LikedPostPage;