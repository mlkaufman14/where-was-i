import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.utils';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {HeaderContainer, OptionsContainer, OptionLink} from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <OptionsContainer>
                <OptionLink to="/places">
                    PLACES
                </OptionLink>
                <OptionLink to="/contact">
                    CONTACT
                </OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
                )}
        </OptionsContainer>
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
