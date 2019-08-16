import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, PostPage, WritingPostPage, LikedPostListPage, MyPage, NotFoundPage } from 'pages'

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/post/:postid" component={PostPage} />
                <Route exact path="/write" component={WritingPostPage} />
                <Route exact path="/likedpost" component={LikedPostListPage} />
                <Route exact path="/mypage" component={MyPage} />
                <Route component={NotFoundPage}/>  
            </Switch>
        </div>
    );
};

export default App;