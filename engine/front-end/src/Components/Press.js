import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

import ImageLinuxMagazin from '../assets/linux-magazine.png';
import ImageCT from '../assets/ct.png';
import ImageSmarthomeDIY from '../assets/smarthome_diy.png';
import ImageHomeAndSmart from '../assets/home_and_smart.svg';

import I18n from '../i18n';
import Utils from '../Utils';

const styles = {
    mainDiv: {
        background: '#FFFFFF',
        width: 'calc(100% - 40px)',
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 32,
        padding: 15,
        fontWeight: 'bold',
    },
    preBox: {
        display: 'inline-block',
        maxWidth: 1100,
    },
    box: {
        display: 'inline-block',
        width: '100%',
    },
    card: {
        display: 'inline-block',
        cursor: 'pointer',
        margin: 10,
    },
    cardLink: {
        height: 48,
    },
    cardLinkMobile: {
        height: 32,
    },
    cardTitle: {
        marginTop: -8,
    },
};

const PRESS = [
    {
        title: '2019.08',
        alt: 'C\'t',
        image: ImageCT,
        link: 'https://www.heise.de/tests/ioBroker-Die-wichtigsten-neuen-Erweiterungen-der-Smart-Home-Steuersoftware-4502251.html',
    },
    {
        title: '2019.08',
        alt: 'C\'t',
        image: ImageCT,
        link: 'https://www.heise.de/ratgeber/ioBroker-Smart-Home-Steuersoftware-sicher-installieren-und-betreiben-4497372.html',
    },
    {
        title: '2018.08', alt: 'C\'t', image: ImageCT, link: 'https://www.heise.de/select/ct/2018/17/1534562336998502',
    },
    {
        title: '2018.08', alt: 'Smarthome DIY', image: ImageSmarthomeDIY, link: 'https://leanpub.com/smarthdiy',
    },
    {
        title: '2018.04',
        alt: 'Linux Magazin',
        image: ImageLinuxMagazin,
        link: 'http://www.linux-magazin.de/ausgaben/2018/04/io-broker/',
    },
    {title: '2017.08', alt: 'C\'t', image: ImageCT, link: 'https://www.heise.de/select/ct/2017/18/1503875643519180'},
    {
        title: '2017.07',
        alt: 'Linux Magazin',
        image: ImageLinuxMagazin,
        link: 'http://www.linux-magazin.de/ausgaben/2017/07/io-broker/',
    },
    {
        title: '2017.03',
        alt: 'Home&Smart',
        image: ImageHomeAndSmart,
        link: 'https://www.homeandsmart.de/iobroker-integrations-plattform-iot',
    },
];

class Press extends Component {
    render() {
        return <div key="press" className={`${this.props.classes.mainDiv} ${this.props.backClass || ''}`}>
            <div className={this.props.classes.title}>{I18n.t('ioBroker in The Press')}</div>
            <div className={this.props.classes.preBox}>
                <div className={this.props.classes.box}>
                    {PRESS.map((p, i) => <div key={ i } className={this.props.classes.card} onClick={() => Utils.openLink(p.link)}>
                        <img className={`${this.props.classes.cardLink} ${this.props.mobile ? this.props.classes.cardLinkMobile : ''}`} src={p.image} alt={p.alt} />
                        <div className={this.props.classes.cardTitle}>{p.title}</div>
                    </div>)}
                </div>
            </div>
        </div>;
    }
}

Press.propTypes = {
    mobile: PropTypes.bool,
    backClass: PropTypes.string,
};

export default withStyles(styles)(Press);
