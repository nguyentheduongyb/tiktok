import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCheckCircle, faCode, faCommentDots, faHeart, faPaperPlane, faMusic, faShare, faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Menu from '~/components/Popper/Menu';

import { arr } from "~/API"
import { faFacebook, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);

function Home() {
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faCode} />,
            title: 'embed',
            to: '/embed',
        },
        {
            icon: <FontAwesomeIcon icon={faPaperPlane} />,
            title: 'Sen to friend',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faFacebook} />,
            title: 'Share to Facebook',
        },
        {
            icon: <FontAwesomeIcon icon={faWhatsapp} />,
            title: 'Share to Whatsapp',
        },
        {
            icon: <FontAwesomeIcon icon={faLink} />,
            title: 'Copy Link',
        },
        {
            icon: <FontAwesomeIcon icon={faTelegram} />,
            title: 'Share to Telegram',
        },
    ];
    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                {arr.map((item) => {
                    return (
                        <div className={cx("video-item", 'mt-5')}>
                            <div className="d-flex">
                                <Link to={`/@${item.user.username}`}>
                                    <div className={cx("avatar")} style={{ backgroundImage: `url(${item.user.avatar})` }}></div>
                                </Link>
                                <div className="ms-4" style={{ flex: "1" }}>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <Link to={`/@${item.user.username}`}>
                                                <div className="d-flex align-items-end">
                                                    <h3 className="fw-bold me-2">{item.user.username}<FontAwesomeIcon className={cx("icon-check")} icon={faCheckCircle} /></h3>
                                                    <h4>Độ Phùng</h4>
                                                </div>
                                            </Link>
                                            <div>
                                                <span>{item.video.title}</span>

                                            </div>
                                            <div>
                                                {item.video.hashtag.map((hashtag) => {
                                                    return (
                                                        <Link to="#" className={cx("hashtag")}>
                                                            <strong className="me-2">#{hashtag}</strong>
                                                        </Link>
                                                    )
                                                })}
                                            </div>

                                            <h4><FontAwesomeIcon className="me-4" icon={faMusic} /><Link to="#" className={cx("music-name")}>{item.video.sound}</Link></h4>
                                        </div>
                                        <div><button className={cx("btn-follow")}>Following</button></div>
                                    </div>
                                    <div className="d-flex">
                                        <div className={cx("video")}>
                                            <video width="322" height="583" src={item.video.url} controls></video>
                                        </div>
                                        <div className={cx("action")}>
                                            <div className={cx('action-item')}>
                                                <div className={cx("action-icon", "liked")}>
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </div>
                                                <span>{item.video.like}</span>
                                            </div>
                                            <div className={cx('action-item')}>
                                                <div className={cx("action-icon")} >
                                                    <FontAwesomeIcon icon={faCommentDots} />
                                                </div>
                                                <span>{item.video.comment}</span>

                                            </div>
                                            <div className={cx('action-item')}>
                                                <div className={cx("action-icon")} >
                                                    <FontAwesomeIcon icon={faBookmark} />
                                                </div>
                                                <span>{item.video.favourite}</span>

                                            </div>
                                            <Menu items={MENU_ITEMS} placement='top-start'>
                                                <div className={cx('action-item')}>
                                                    <div className={cx("action-icon")}>
                                                        <FontAwesomeIcon icon={faShare} />
                                                    </div>
                                                    <span>{item.video.share}</span>
                                                </div>
                                            </Menu>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Home;
