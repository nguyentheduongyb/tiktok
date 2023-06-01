import classNames from 'classnames/bind';
import video from "~/assets/videos/Download.mp4"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Profile.module.scss';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEllipsis, faLink, faLocation, faLock, faShare, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { profile } from "~/API"

const cx = classNames.bind(styles);

function Profile() {
    const [tab, setTab] = useState(1)
    const line = useRef()

    const handleTab = (e) => {
        setTab(e.currentTarget.getAttribute('tab'))
        line.current.style.left = e.currentTarget.offsetLeft + 'px'
    }
    const handleHover = (e) => {
    }
    const handleMouseLeave = (e) => {
    }
    return <div className='pt-5'>
        <div className="col-lg-6">
            <div className='d-flex'>
                <Link to="">
                    <div className={cx("avatar")} style={{ backgroundImage: `url("${profile.user.avatar}")` }}></div>
                </Link>
                <div className='d-flex ms-4 justify-content-between' style={{ flex: "1" }}>
                    <div className='d-flex justify-content-between flex-column'>
                        <Link to="">
                            <h1 className={cx("username", "d-flex align-items-center fw-bold")}><span className='me-2'>{profile.user.username}</span><FontAwesomeIcon className={cx("h2", "icon-check")} icon={faCheckCircle} /></h1>
                            <h2 className='fw-bold'>{profile.user.name}</h2>
                        </Link>

                        <div>
                            <button className={cx('btn-messenger')}>Message</button>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('btn-user')}>
                                    <FontAwesomeIcon icon={faUserCheck} />
                                </button>
                            </Tippy>
                        </div>
                    </div>
                    <div>
                        <button className='btn-no-outline me-3'>
                            <FontAwesomeIcon className='h1' icon={faShare} />
                        </button>
                        <button className='btn-no-outline'>
                            <FontAwesomeIcon className='h1' icon={faEllipsis} />
                        </button>
                    </div>
                </div>
            </div>
            <h3 className='d-flex mt-5'>
                <div className='me-4'>
                    <strong className='me-2'>{profile.user.following}</strong>
                    <span>Following</span>
                </div>
                <div className='me-4'>
                    <strong className='me-2'>{profile.user.follower}</strong>
                    <span>Folllower</span>
                </div>
                <div>
                    <strong className='me-2'>{profile.user.like}</strong>
                    <span>Liked</span>
                </div>
            </h3>
            <p>No biography.</p>
            <div>
                <FontAwesomeIcon icon={faLink} />
                <a className="fw-bold ms-2" href="https://mixigaming.com/">{profile.user.desc}</a>
            </div>
        </div>
        <div className={cx('position-relative', 'list-tab')}>
            <div className='d-flex' onMouseLeave={handleMouseLeave}>
                <div tab={1} onMouseOver={handleHover} onClick={handleTab} className={cx('tab-item', tab == 1 ? 'active' : '')}><span>Video</span></div>
                <div tab={2} onMouseOver={handleHover} onClick={handleTab} className={cx('tab-item', tab == 2 ? 'active' : '')}><FontAwesomeIcon className={cx('me-2')} icon={faLock} /><span>Favourite</span></div>
                <div tab={3} onMouseOver={handleHover} onClick={handleTab} className={cx('tab-item', tab == 3 ? 'active' : '')}><FontAwesomeIcon className={cx('me-2')} icon={faLock} /><span>Liked</span></div>

            </div>
            <div ref={line} className={cx('line')}></div>
        </div>
        <div className={cx('tab-content', tab == 1 ? 'active' : '')}>
            <h2 className="mt-5 mb-2 fw-bold">Video</h2>
            <ul className="row list-unstyled">
                {profile.videos.map((item) => {
                    return (
                        <li className="col-lg-2">
                            <div className={cx('video-item')}>
                                <video className={cx("video")} src={item.url} width="100%" height="100%" controls ></video>
                                <div className={cx('video-title')}>
                                    <a href="">
                                        <p>Đú trend theo kiểu ông bố 2 con :”)))</p>
                                    </a>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className={cx('tab-content', tab == 2 ? 'active' : '')}>
            <div className={cx('liked')}>
                <FontAwesomeIcon className={cx('icon-locked')} icon={faLock} />
                <h1 className='fw-bold mb-3'>
                    This user's liked videos are private
                </h1>
                <h3>
                    Videos liked by mixigaming are currently hidden
                </h3>
            </div>
        </div>
        <div className={cx('tab-content', tab == 3 ? 'active' : '')}>
            <div className={cx('liked')}>
                <FontAwesomeIcon className={cx('icon-locked')} icon={faLock} />
                <h1 className='fw-bold mb-3'>
                    This user's liked videos are private
                </h1>
                <h3>
                    Videos liked by mixigaming are currently hidden
                </h3>
            </div>
        </div>
    </div >;
}

export default Profile;
