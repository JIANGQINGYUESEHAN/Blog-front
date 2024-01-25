"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.scss';
import '@/assets/css/reset.css';
import Auth from '@/Component/Auth';
import Detail from '@/Component/Detail';

import Title from '@/Component/Title';

import ArticlePageLeft from '@/Component/ArticlePageLeft';
import ArticlePageRight from '@/Component/ArticlePageRight';
import ArticleList from '@/Component/ArticleList';

export default function Home() {
  const targetPosition = 650; // 将目标位置设置为距顶部400像素
  const duration = 1000; // 设置动画持续时间（以毫秒为单位）

  function btnHandle() {
    const StartTime = performance.now();
    const startScrollY = window.scrollY;
    function scrollAnimation(CurrentTime: any) {
      //从点击的时间算
      const RestTime = CurrentTime - StartTime
      if (RestTime < duration) {
        const easeInOutCubic = easeInOutCubicFunc(RestTime / duration);
        const NewY = easeInOutCubic * (targetPosition - startScrollY) + startScrollY

        window.scrollTo(0, NewY)
        requestAnimationFrame(scrollAnimation);
      } else {
        window.scrollTo(0, targetPosition)
      }


    }


    requestAnimationFrame(scrollAnimation);
  }

  // 平滑动画的缓动函数
  function easeInOutCubicFunc(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  return (
    <div className={styles.page}>
      <div className={styles.divs}>
        <button onClick={btnHandle}>滚动</button>
      </div>
      <div className={styles.Page}>
        <div className={styles.left}>
          <Auth />
          <Detail name={`分类`} iconfont='&#xe68b;' >

          </Detail>

          <Detail name={`推荐文章`} iconfont='&#xe6a5;' height={360} backgroundColor={`#bebeee`}>

            <ArticleList />
          </Detail>
        </div>
        <div className={styles.right}>
          <Title />
          <ArticlePageLeft />
          <ArticlePageLeft />
          <ArticlePageRight />
        </div>
      </div>
    </div>
  );
}