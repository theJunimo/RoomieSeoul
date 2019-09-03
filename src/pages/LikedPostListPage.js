import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import LikedPostListContainer from 'containers/list/LikedPostListContainer';


const LikedPostPage = () => {
    return (
        <PageTemplate>
            <LikedPostListContainer/>
        </PageTemplate>
    );
};

export default LikedPostPage;