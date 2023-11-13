/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';
import classes from 'classnames';
import styles from './styles.module.scss';
/**
 * 这个函数实现自动页面顶部的音频播放转盘，并且尝试自动播放
 * @param {*} param0
 * @returns
 */
const BgAudioTurntable = ({ audioUrl }) => {
  const [musicIsPlaying, setMusicPlaying] = useState(false);
  const audioControl = useRef();
  const firstPlayStatusRef = useRef(false);
  const clickAudioHandle = async () => {
    if (musicIsPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };
  const playAudio = async () => {
    try {
      const audioDom: any = audioControl.current;
      await audioDom.play();
      setMusicPlaying(true);
      return true;
    } catch (e) {
      console.log(e);
    }
    return false;
  };
  const pauseAudio = async () => {
    try {
      const audioDom = audioControl.current;
      await audioDom.pause();
      setMusicPlaying(false);
      return true;
    } catch (e) {
      console.log(e);
    }
    return false;
  };
  const firstPlay = async () => {
    if (firstPlayStatusRef.current) {
      return;
    }
    const result = await playAudio();
    if (result) {
      firstPlayStatusRef.current = true;
    }
  };
  // 尝试用户第一次触发屏幕是开始播放音频
  useEffect(() => {
    document
      .getElementsByTagName('body')[0]
      .addEventListener('touchend', firstPlay);
    return () => {
      document
        .getElementsByTagName('body')[0]
        .removeEventListener('touchend', firstPlay);
    };
  }, []);
  useEffect(() => {
    firstPlay();
    window.wx &&
      window.wx.ready(() => {
        firstPlay();
      });
    return () => {};
  }, []);
  const playStyle = musicIsPlaying ? styles.playIcon : styles.pauseIcon;
  const animateStyle = musicIsPlaying ? styles.animate__rotate : null;
  const iconStyles = classes(styles.usualIcon, playStyle, animateStyle);
  return (
    <div>
      <div className={iconStyles} onClick={() => clickAudioHandle()} />
      <audio
        className={styles.playTrue}
        src={audioUrl}
        controls="controls"
        autoPlay="autoplay"
        loop="loop"
        ref={audioControl}
      />
    </div>
  );
};

export default BgAudioTurntable;
