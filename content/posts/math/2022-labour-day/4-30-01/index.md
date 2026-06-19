---
title: 培尖教育2022五一刷题班(4.30)
subtitle:
date: 2026-06-14T16:14:59+08:00
slug: 8bb16b7
draft: true
author:
  name:
  link:
  email:
  avatar:
description:
keywords:
comment: false
weight: 0
tags:
  - draft
categories:
  - draft
hiddenFromHomePage: false
hiddenFromSearch: false
hiddenFromRelated: false
hiddenFromFeed: false
summary:
featuredImagePreview:
featuredImage:
password:
message:
repost:
  enable: false
  url:

# See details front matter: https://fixit.lruihao.cn/documentation/content-management/introduction/#front-matter
---

<!--more-->
## 例1
抛物线$y^2=2px(p\gt 0)$与圆$(x-2)^2+y^2=3$交于A,B两点,线段AB的中点在$y=x$上,求p的值.

联立消y得:

$$\begin{gathered}
  (x-2)^2+2px=3\\
  x^2+2(p-2)x+1=0\\
  \Longleftrightarrow\begin{cases}
    x_1x_2=1\\
    x_1+x_2=-2(p-2)\\
    \Delta=4(p-2)^2-4\gt 0\longleftrightarrow |p-2|\gt 1
  \end{cases}\\
  y_1^2+y_2^2=2p(x_1+x_2)=(y_1+y_2)^2-2y_1y_2\\
  2y_1y_2=(y_1+y_2)^2-2p(x_1+x_2)\\
  =(x_1+x_2)^2-2p(x_1+x_2)\\
  =4(p-2)^2+4p(p-2)\\
  =8p^2-24p+16\\
  y_1y_2=4p^2-12p+8\\
  x_1x_2=\frac{(y_1y_2)^2}{4p^2}=1\\
  y_1y_2=\pm 2p\\
  4p^2-12p+8=\pm 2p\\
\end{gathered}$$

接下来根据正负号不同进行讨论:

$$\begin{gathered}
  2p^2-7p+4=0\\
  \Delta=17\gt 0\\
  p=\frac{7\pm\sqrt{17}}{4}\\
  p=\frac{7+\sqrt{17}}{4},p-2=\frac{\sqrt{17}-1}{4}\lt 1\\
  \text{舍去这个解}\\
  p=\frac{7-\sqrt{17}}{4},2-p=\frac{\sqrt{17}+1}{4}\gt 1\\
  \text{保留这个解}
\end{gathered}$$

$$\begin{gathered}
  2p^2-5p+4=0\\
  \Delta=25-32\lt 0\\
  \text{无实数解}
\end{gathered}$$

## 例2
(2009南京大学)在x轴上方作与x轴相切的圆,切点横坐标为$\sqrt{3}$,过点$B(-3,0),C(3,0)$分别作圆的切线,两切线交于$P$,$Q$为C在锐角$\angle BPC$角平分线上的射影.

(1)求P的轨迹方程,及其横坐标的取值范围.

(2)求Q的轨迹方程.

(1)

![alt text](image.png)

显然$|PB|-|PC|=|AB|-|AC|=3+\sqrt{3}-(3-\sqrt{3})=2\sqrt{3}$

点P位于双曲线$\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$的右支:

$2a=2\sqrt{3},2c=3$

$a=\sqrt{3},c=3,b=\sqrt{6}$

所以点P的轨迹方程$\frac{x^2}{3}-\frac{y^2}{6}=1(x\gt \sqrt{3})$

(2)

考虑延长CQ交PB于点E,则有$EQ=QC,PE=PC$

又O点为线段BC的中点,故OQ为$\triangle PBC$中BE边所对中位线

$OQ=\frac{BE}{2}=\frac{PB-PC}{2}=\sqrt{3}$

寻找一下,点Q还有什么约束条件:

对于任何一个到原点距离为$\sqrt{3}$的点Q($y_Q\ne 0$),总可以倍长CQ得到点,再延长BE与EC中垂线相交得到点P,所以点Q的轨迹方程为:

$x^2+y^2=3(y\ne0)$

## 例3
(北大自招)AB为$y=1-x^2$上在y轴两侧的点,求过A,B的切线与x轴围成面积的最小值.

不妨设$A(u,1-u^2),B(v,1-v^2),u\lt0\lt v$,点E为过A,B点切线的交点.

易知:$l_{AE}:y=-2ux+u^2+1,l_{BE}:y=-2vx+v^2+1,E(\frac{u+v}{2},1-uv)$

令$y=0$,解得三角形在x轴上的底边长度为$s=\frac{1}{2}(v+\frac{1}{v}-u-\frac{1}{u})$

考虑负代换:令$t=-u\gt0$,这样一石二鸟,不仅让$v,t$的符号相同,也简化了面积表达式

$$\begin{gathered}
  S_{\triangle}=\frac{1}{2}sy_E=\frac{1}{4}(v+t+\frac{1}{v}+\frac{1}{t})(1+vt)\\
  \ge\frac{1}{2}(\sqrt{vt}+\sqrt{\frac{1}{vt}})(1+vt)\\
  =\frac{1}{2}\frac{(vt+1)^2}{\sqrt{vt}}
\end{gathered}$$

这里对$v,t$和$\frac{1}{v},\frac{1}{u}$分组使用均值不等式,是因为通过对称性猜到了取等条件.

$$\begin{gathered}
  S_{\triangle}=\frac{1}{2}\frac{(vt+\frac{1}{3}+\frac{1}{3}+\frac{1}{3})^2}{\sqrt{vt}}\\
  \ge\frac{1}{2}\frac{(4\sqrt[4]{vt(\frac{1}{3})^3})^2}{\sqrt{vt}}=\frac{8\sqrt{3}}{9}
\end{gathered}$$

## 例4
过抛物线$y^2=4x$的焦点 F 的直线交抛物线于 A, B 两点，抛物线的准线与 x 轴交于点
C ，若 $\angle OFA=130\degree$(O 是坐标原点)，求 $\tan\angle ACB$ .

$$\begin{gathered}
  x=ky+1,k=\tan40\degree\\
  y^2=4x=4ky+4,y^2-4ky-4=0\\
  A(x_1,y_1),B(x_2,y_2)\\
  \tan\angle ACB=\frac{k_{AC}-k_{BC}}{1+k_{AC}k_{BC}}\\
  =\frac{y_1(x_2+1)-y_2(x_1+1)}{(x_1+1)(x_2+1)+y_1y_2}\\
  =\frac{y_1(ky_2+2)-y_2(ky_1+2)}{(ky_1+2)(ky_2+2)+y_1y_2}\\
  =\frac{2(y_1-y_2)}{(k^2+1)y_1y_2+2k(y_1+y_2)+4}\\
  =\frac{2\sqrt{16k^2+16}}{(k^2+1)(-4)+2k(4k)+4}\\
  =\frac{8\sqrt{k^2+1}}{4k^2}\\
  =\frac{2}{k}\sqrt{1+\frac{1}{k^2}}\\
  =\frac{2}{\tan40\degree}\sqrt{1+\tan^250\degree}\\
  =\frac{2}{\tan40\degree\cos50\degree}\\
  =\frac{2\cos40\degree}{\cos^250\degree}
\end{gathered}$$

## 例5
求过$y=2x^2-2x-1$和$y=-5x^2+2x+3$交点的直线方程.

$$5y+2y=5(2x^2-2x-1)+2(-5x^2+2x+3)=-6x+1$$

$$y=\frac{-6}{7}x+\frac{1}{7}$$

另法:

$$\begin{cases}
  y=2x^2-2x-1=kx+b,\\
  y=-5x^2+2x+3=kx+b\\
\end{cases}$$

$$\begin{cases}
  2x^2-(k+2)x-(b+1)=0,\\
  5x^2+(k-2)x+(b-3)=0
\end{cases}$$

两个方程的解应该完全相同,故方程系数对应向量平行,若存在大小为0的分量,显然推出矛盾,故:

$$\begin{gathered}
  \frac{2}{5}=-\frac{k+2}{k-2}=-\frac{b+1}{b-3}
\end{gathered}$$

解得:$k=-\frac{6}{7},b=\frac{1}{7}$

## 例6
点A在$y=kx$上,点B在$y=-kx$上,其中$k\gt0,|OA||OB|=k^2+1$且$A,B$在y轴同侧.

(1)求AB中点M的轨迹方程C;

(2)曲线C与抛物线$x^2=2py(p\gt0)$相切,求证:切点分别在两条定直线上,并求出两条切线方程.

(1)

设$A(x_1,y_1),B(x_2,y_2)$,由$|OA||OB|=k^2+1$.

$$\begin{gathered}
\sqrt{x_1^2x_2^2(k^2+1)^2}=k^2+1\\
x_1x_2=1\\
x=\frac{x_1+x_2}{2},y=\frac{y_1+y_2}{2}=\frac{k}{2}(x_1-x_2)
\end{gathered}$$

联想到$4x_1x_2=(x_1+x_2)^2-(x_1-x_2)^2$,有:

$$\begin{gathered}
  4=(2x)^2-(\frac{2}{k}y)^2\\
  x^2-\frac{y^2}{k^2}=1
\end{gathered}$$

(2)

$$\begin{cases}
  x^2=2py,\\
  x^2-\frac{y^2}{k^2}=1
\end{cases}$$

$$\begin{gathered}
  y^2-2pk^2y+k^2=0\\
  \Delta=4p^2k^4-4k^2=0\\
  pk=1(p\gt0,k\gt0)\\
  y^2-2ky+k^2=0\\
  y_1=y_2=k,\\
  x^2=2pk=2,x=\pm\sqrt{2}
\end{gathered}$$

所以,两切点分别在$x=\sqrt{2},x=-\sqrt{2}$上.

切线方程:$y=\sqrt{2}kx-k,y=-\sqrt{2}kx-k$

## 例7
设抛物线 $y^2=2px(p\gt0)$的焦点是 F , A, B 是抛物线上互异的两点，直线 AB 与 x 轴
不垂直，线段 AB 的垂直平分线交 x 轴于点$D(a,0)$ ，记 $m=|AF|+|BF|$ .

（1）证明： a
是 p 与 m 的等差中项；

（2）设 $m=3p$ ，直线 l // y 轴，且 l 被以 AD 为直径的动圆截得得
弦长恒为定值，求直线 l 方程。

![alt text](image-1.png)

(1)

设点$A(2pu^2,2pu),B(2pv^2,2pv),k_{AB}=\frac{u-v}{u^2-v^2}=\frac{1}{u+v}$

$$l_{D}:y=-(u+v)[x-p(u^2+v^2)]+p(u+v)$$

令$y=0,a=x=p(u^2+v^2+1)$

由抛物线定义:$m=p+2p(u^2+v^2)$

于是有:$m+p=2a$

(2)

由(1):$m=p+2p(u^2+v^2)=3p$,则$u^2+v^2=1$

$a=\frac{m+p}{2}=2p,D(2p,0)$

$A(2pu^2,2pu)$,以AD为直径的圆方程:

$$(x-2pu^2)(x-2p)+(y-2pu)y=0$$

设$l:x=k$,带入圆的方程:

$$\begin{gathered}
  (k-2pu^2)(k-2p)+(y-2pu)y=0\\
  y^2-2puy+(k-2pu^2)(k-2p)=0\\
  \Delta=4p^2u^2-4(k-2pu^2)(k-2p)\\
  |y_1-y_2|=\sqrt{\Delta}=C
\end{gathered}$$

这要求判别式中$u$的系数为0,即$k=\frac{3}{2}p,l:x=\frac{3}{2}p$