import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, LoginPage, SignUpPage, PostPage, WritingPostPage, LikedPostListPage, MyPage, NotFoundPage } from 'pages';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route exact path="/post/:postid" component={PostPage} />
                <Route exact path="/write" component={WritingPostPage} />
                <Route path="/likedpost/:uerId" component={LikedPostListPage} />
                <Route path="/mypage/mypost/:userId" component={MyPage} />
                <Route component={NotFoundPage}/>  
            </Switch>
        </div>
    );
};

export default App;