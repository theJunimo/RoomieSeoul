import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import SignUpFormContainer from 'containers/form/SignUpFormContainer';

const SignUpPage = () => {
    return (
        <PageTemplate>
            <SignUpFormContainer/>
        </PageTemplate>
    );
}

export default SignUpPage;