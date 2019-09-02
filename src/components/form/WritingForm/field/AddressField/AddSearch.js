import React, {Component} from 'react';
import styles from './AddSearch.scss';
import classNames from 'classnames/bind';

import DaumPostCode from 'react-daum-postcode';

const cx = classNames.bind(styles);

class AddSearch extends Component{
    componentDidMount = () => {
        document.addEventListener('click',this.closeAddrSearch);
    }
    componentWillUnmount = () => {
        document.removeEventListener('click', this.closeAddrSearch);
    }

    closeAddrSearch = (e) => {
        const {closeAddrSearch} = this.props;
        closeAddrSearch();
    }

    render() {
        const {onComplete} = this.props;

        return(
            <div className = {cx('daumSearch')}>
                <DaumPostCode
                onComplete = {onComplete}
                />
            </div>
        )
    }
}

export default AddSearch;