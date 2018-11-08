import React, { Component } from 'react';
import ExchangePage from './components/pages/ExchangePage';
import { FlexBoxNav, HeaderTitle, FlexBoxNormal, HeaderWrapper } from './components/molecules/StyledComponents';
import SocialLink from './components/molecules/SocialLink';


const socialListElem = [
    { name: 'Twitter', href: 'https://twitter.com/nabendu82' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nabendu-biswas-42aa4522/' },
    { name: 'Medium', href: 'https://medium.com/@nabendu82' }
  ];


class App extends Component {
    render() {
        const socialList = socialListElem.map((item, index) => {
            return (
                <SocialLink
                    name={ item.name }
                    href={ item.href }
                    key={ index }
                />
            );
        });

        return (
            <div className="main-container">
                <HeaderWrapper>
                    <FlexBoxNav toBtw>
                        <HeaderTitle>Exchange Rates</HeaderTitle>
                    </FlexBoxNav>
                </HeaderWrapper>
                <div className="main-content">
                        <ExchangePage />
                     </div>
                     <HeaderWrapper thinner>
                         <FlexBoxNav toBtw>
                             <FlexBoxNormal>
                                 {socialList}
                             </FlexBoxNormal>
                             <HeaderTitle small>Created in 🇮🇳 by Nabendu</HeaderTitle>
                         </FlexBoxNav>
                     </HeaderWrapper>

            </div>
        )
    }
}


export default App;
