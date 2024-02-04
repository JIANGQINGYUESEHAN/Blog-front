import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image';
import { img } from '@/assets/utils/BaseData'
import { ConfigProvider, Divider } from 'antd';
interface IProps {
    children?: ReactNode
}

const About: FC<IProps> = () => {

    return (
        <ConfigProvider
            theme={{
                components: {
                    Divider: {
                        textPaddingInline: 0
                    },
                },
            }}
        >
            <div className={styles.about}>
                <div className={styles.acd}>
                    <span className={styles.title}>
                        风飘飘，雪遥遥，梦中不知岁已老
                    </span>
                </div>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.avatar}>
                            <Image src={img}
                                width={100}
                                height={100}
                                alt='头像'
                                className={styles.image} />
                        </div>
                        <div className={styles.leftContent}>
                            <h5>简介</h5>
                            <Divider style={{
                                borderStyle: 'solid',
                            }}></Divider>
                            <div className={styles.info}>
                                <div className={styles.detail}>
                                    姓名：zy
                                </div>
                                <div className={styles.detail}>
                                    职业：程序员
                                </div>    <div className={styles.detail}>
                                    姓名：zy
                                </div>

                            </div>
                        </div>
                        <div className={styles.leftContent}>
                            <h5>联系方式</h5>
                            <Divider style={{
                                borderStyle: 'solid',
                            }}></Divider>
                            <div className={styles.info}>
                                <div className={styles.detail}>
                                    扣扣：zy
                                </div>
                                <div className={styles.detail}>
                                    微信：程序员
                                </div>    <div className={styles.detail}>
                                    邮箱：zy
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.rightContent}>
                            <h5>博客开发</h5>
                            <Divider style={{
                                borderStyle: 'solid',
                            }}></Divider>
                            <div className={styles.info}>
                                其实很早就有开发一个自己个人博客的想法，但是一直没有付诸行动，如今大家能看到此页面，说明我的博客终于是上线啦，撒花～～ 在开发这个博客之前，我都是在知乎上写些东西，但是吧，平台规则限制，时不时就有些文章或者回答被屏蔽了，所以还是有一个自己 的内容空间好啊！！！

                                整个博客网站由本人独立开发完成，页面 UI 方面参考了很多其他人的博客风格，最终呈现了这个样子。一个美观的页面对于用户的体 验影响是非常大的，所以尽量把页面做得美观我觉得是很有必要的。

                                开发使用的技术，用户端由于考虑到 SEO ，所以做了 SSR，使用的 Nuxt3 框架。管理后台则是使用的 VUE3 + TypeScript + ElementPlus。至于后端 API 的话则是使用的 NodeJs + NestJs + Prisma，数据库使用的是 Sqlite 。

                                自己一个人从 0 到 1开发一个项目还是很爽的，所有东西都由自己决定，想要怎么设计，怎么改，都行。当然要做的东西也很多：框架 搭建，页面样式，数据库设计，API接口开发，测试联调，域名&备案，项目打包发布，服务器&部署，SEO推广等等。这一切都搞定之后， 收获的则是满满的成就感。

                            </div>
                        </div>
                        <div className={styles.rightBottomContent}>
                            <h5>个人经历</h5>
                            <Divider style={{
                                borderStyle: 'solid',
                            }}></Divider>
                            <div className={styles.info}>
                                其实很早就有开发一个自己个人博客的想法，但是一直没有付诸行动，如今大家能看到此页面，说明我的博客终于是上线啦，撒花～～ 在开发这个博客之前，我都是在知乎上写些东西，但是吧，平台规则限制，时不时就有些文章或者回答被屏蔽了，所以还是有一个自己 的内容空间好啊！！！

                                整个博客网站由本人独立开发完成，页面 UI 方面参考了很多其他人的博客风格，最终呈现了这个样子。一个美观的页面对于用户的体 验影响是非常大的，所以尽量把页面做得美观我觉得是很有必要的。

                                开发使用的技术，用户端由于考虑到 SEO ，所以做了 SSR，使用的 Nuxt3 框架。管理后台则是使用的 VUE3 + TypeScript + ElementPlus。至于后端 API 的话则是使用的 NodeJs + NestJs + Prisma，数据库使用的是 Sqlite 。

                                自己一个人从 0 到 1开发一个项目还是很爽的，所有东西都由自己决定，想要怎么设计，怎么改，都行。当然要做的东西也很多：框架 搭建，页面样式，数据库设计，API接口开发，测试联调，域名&备案，项目打包发布，服务器&部署，SEO推广等等。这一切都搞定之后， 收获的则是满满的成就感。

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    )

}

export default memo(About)
