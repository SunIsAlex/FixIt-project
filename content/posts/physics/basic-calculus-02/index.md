---
title: 微积分基础导论:简易积分
subtitle:
date: 2026-05-22T16:39:58+08:00
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
## 引入
假如知道一头猪各个微小部分的密度$\rho$,怎么求总质量?

$$
M=\sum\Delta m_i=\int dm=\int\rho(\vec{r})dV
$$

由此,便引入了**不定积分**记号

### 例1
一根一维细棒,其单位长度的线密度$\rho(x)=Ax^4$,求总质量:

$$
M=\int_{0}^{l_0}\rho(x)dx
$$

由此,又引入了**定积分**记号.

其中:

| 被积函数 | 积分变量 | 积分符号 | 上,下限 |
| --- | --- | ---| --- |
| $\rho(x)$ | $x$ | $\int$ | $l_0,0$ |

## 运算
求**不定积分**,即求**原函数**

定义:若$F'(x)=f(x)$,则称$F(x)$为$f(x)$的**原函数**.

容易知道,**原函数**是不唯一的,其常数项是任意的.

$$\int f(x)dx=F(x)+C$$

### 例2
通过观察,求下列函数的不定积分.

(1)$\int5x^3dx$

$=\frac{5}{4}x^4+C$

(2)$\int\sin3x dx$

$=-\frac{1}{3}\cos3x+C$

(3)$\int\frac{4}{x}dx$

$=4\ln x+C$

(4)$\int7\cos2xdx$

$=\frac{7}{2}\sin 2x$

以下为常用的不定积分表:

$$
\begin{align}
  % 高中物理竞赛常用积分表
% ============ 基本积分 ============
\int x^n\,dx &= \frac{x^{n+1}}{n+1}+C, \quad n\neq -1 \\
\int \frac{1}{x}\,dx &= \ln|x|+C \\
\int e^{ax}\,dx &= \frac{1}{a}e^{ax}+C \\
\int a^{x}\,dx &= \frac{a^x}{\ln a}+C \\
\int \ln x\,dx &= x\ln x - x+C \\
% ============ 三角函数 ============
\int \sin x\,dx &= -\cos x+C \\
\int \cos x\,dx &= \sin x+C \\
\int \tan x\,dx &= -\ln|\cos x|+C \\
\int \sin^2 x\,dx &= \frac{x}{2}-\frac{\sin 2x}{4}+C \\
\int \cos^2 x\,dx &= \frac{x}{2}+\frac{\sin 2x}{4}+C \\
\int \sin(ax)\,dx &= -\frac{\cos(ax)}{a}+C \\
\int \cos(ax)\,dx &= \frac{\sin(ax)}{a}+C \\
% ============ 有理/根式 ============
\int \frac{dx}{x^2+a^2} &= \frac{1}{a}\arctan\frac{x}{a}+C \\
\int \frac{dx}{x^2-a^2} &= \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|+C \\
\int \frac{dx}{\sqrt{a^2-x^2}} &= \arcsin\frac{x}{a}+C \\
\int \frac{dx}{\sqrt{x^2\pm a^2}} &= \ln\left|x+\sqrt{x^2\pm a^2}\right|+C \\
\int \sqrt{a^2-x^2}\,dx &= \frac{x\sqrt{a^2-x^2}}{2}+\frac{a^2}{2}\arcsin\frac{x}{a}+C \\
% ============ 高频定积分 ============
\int_0^\infty e^{-ax}\,dx &= \frac{1}{a} \\
\int_0^\infty x^n e^{-ax}\,dx &= \frac{n!}{a^{n+1}} \\
\int_{-\infty}^{+\infty} e^{-x^2}\,dx &= \sqrt{\pi} \\
\int_0^{\pi} \sin^2\theta\,d\theta = \int_0^{\pi}\cos^2\theta\,d\theta &= \frac{\pi}{2} \\
\int_0^{2\pi} \sin^2\theta\,d\theta = \int_0^{2\pi}\cos^2\theta\,d\theta &= \pi \\
% ============ 分部积分 ============
\int u\,dv &= uv - \int v\,du \\
\int x e^{ax}\,dx &= \frac{e^{ax}}{a}\left(x-\frac{1}{a}\right)+C \\
\int x\sin(ax)\,dx &= \frac{\sin(ax)}{a^2}-\frac{x\cos(ax)}{a}+C \\
\int x\cos(ax)\,dx &= \frac{\cos(ax)}{a^2}+\frac{x\sin(ax)}{a}+C \\
\int e^{ax}\sin(bx)\,dx &= \frac{e^{ax}(a\sin bx - b\cos bx)}{a^2+b^2}+C \\
\int e^{ax}\cos(bx)\,dx &= \frac{e^{ax}(a\cos bx + b\sin bx)}{a^2+b^2}+C
\end{align}
$$

### 说明
为什么**求积分**就是**求原函数**的过程?

$$\int_{x_0}^{x_1} f(x)dx=\sum_{x_0}^{x_1}f(x)dx=\sum\Delta S$$

而$\frac{dF(x)}{dx}=f(x),$即$dF(x)=f(x)dx$,故:

$$\int_{x_0}^{x_1} f(x)dx=S=\sum dF(x)=F(x_1)-F(x_0)$$

记作:

$\int_{x_0}^{x_1} f(x)dx=\left.F(x)\right|_{x_0}^{x_1}$

不难看出,如果定积分上下限交换,则结果变为相反数.

![alt text](image.png)

### 例3
(1)$\int_{\textcolor{red}{0}}^{\textcolor{red}{-1}}(a+bx^2)dx$

原函数$F(x)=ax+\frac{b}{3}x^3+C$

$\int_{0}^{-1}(a+bx^2)dx=F(-1)-F(0)=-a-\frac{b}{3}$

(2)$\int_{a}^{b}\sin(kt+\phi_0)dt$

原函数$F(x)=-\frac{1}{k}\cos(kt+\phi_0)+C$

$\int_{a}^{b}\sin(kt+\phi_0)dt=F(b)-F(a)=...$

(3)$\int_{a}^{2a}\frac{1}{(x+a)^2}dx$

原函数$F(x)=-(x+a)^{-1}+C$

$\int_{a}^{2a}\frac{1}{(x+a)^2}dx=F(2a)-F(a)=\frac{1}{6a}$

(4)$\int_{1}^{5}\frac{dx}{x^2+7x+12}$

把被积函数写成**部分分式**:

$\frac{1}{x^2+7x+12}=\frac{1}{x+3}+\frac{1}{x+4}$

原函数$F(x)=\ln(x+3)-\ln(x+4)+C$

$\int_{1}^{5}\frac{dx}{x^2+7x+12}=F(5)-F(1)=\ln8-\ln9-\ln4+\ln5=\ln2-2\ln3+\ln5$

(5)$\int_{0}^{1}\sqrt{1-x^2}dx$

使用第二类换元法:

令$x=\cos\theta,\theta\in [0,\frac{\pi}{2}]$

则$\int_{0}^{1}\sqrt{1-x^2}dx=\int^{\textcolor{red}{0}}_{\textcolor{red}{\frac{\pi}{2}}}\sin\theta d(\cos\theta)=-\int_{\frac{\pi}{2}}^0\sin^2\theta=\int_{\frac{\pi}{2}}^0\frac{\cos2\theta-1}{2}$

原函数$F(x)=\frac{1}{4}\sin2x-\frac{x}{2}+C$

$\int_{0}^{1}\sqrt{1-x^2}dx=F(0)-F(\frac{\pi}{2})=\frac{\pi}{4}$

换元法:换掉$x,dx$和积分上下限.