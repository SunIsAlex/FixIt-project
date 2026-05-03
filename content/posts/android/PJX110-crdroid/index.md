---
title: 一加Ace3Pro安装crDroid
subtitle:
date: 2026-05-03T17:48:02+08:00
author: 
  name: SunIsAlex
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
>[!WARNING]
>以下教程仅供**一加Ace3Pro**安装crDroid 12(corvette)使用
>
>**玩机不规范,亲人两行泪**
>
>由操作不当造成的硬件损坏,请读者自负!
<!--more-->
本篇教程参考了[crDroid官网教程](https://crdroid.net/corvette/12/install)
## 操作准备
1. 一加Ace3Pro(已解锁BL且安装ColorOS16)+电脑+原厂数据线
2. 下载以下文件
{{< file-tree >}}
- name: crdroid.zip
  type: file
  comment: Download the latest ROM file
- name: recovery/
  type: dir
  children:
    - name: boot.img
      type: file
    - name: dtbo.img
      type: file
    - name: init_boot.img
      type: file
    - name: vbmeta.img
      type: file
    - name: vendor_boot.img
      type: file
    - name: recovery.img
      type: file
- name: nikgapps.zip
  type: file
  comment: Download the latest GApps
{{< /file-tree >}}

以上文件(不包含[gapps](https://nikgapps.com/crdroid-official))可以在[sourceforge](https://sourceforge.net/projects/crdroid/files/corvette/12.x/)下载

下载之后目录如下图(本文使用当时的最新版本)

{{< file-tree >}}
- name: 20260429-boot.img
  type: file
- name: 20260429-dtbo.img
  type: file
- name: 20260429-init_boot.img
  type: file
- name: 20260429-recovery.img
  type: file
- name: 20260429-vbmeta.img
  type: file
- name: 20260429-vendor_boot.img
  type: file
- name: crDroidAndroid-16.0-20260429-corvette-v12.9.zip
  type: file
- name: NikGapps-crdroid-official-arm64-16-20260223-signed.zip
  type: file
{{< /file-tree >}}

如果没有解锁bootloader,可以在CMD里如下操作:

```
adb reboot bootloader
fastboot flashing unlock
```

注意解锁会清除所有数据.

成功效果如图:

![alt text](fastboot_flashing_unlock.png)

## 安装步骤
首先查看所需要的底包(理论上Android 16,即ColorOS16都可以)

但是最好和crDroid构建时的底层版本一致.

在GitHub上查看[专有文件列表](https://github.com/crdroidandroid/android_device_oneplus_corvette/blob/16.0/proprietary-files.txt#L2)前两行

```
## All proprietary files from this list, unless pinned and noted otherwise,
## are from OnePlus Ace 3 Pro (PJX110_16.0.5.701(CN01)).
```

遂下载对应版本的ColorOS(701)

在[OPlus 收集站](https://op-rom.lian86.top/#/brand/OnePlus/model/%E4%B8%80%E5%8A%A0%20Ace%203%20Pro)可以解析任意版本的系统全量包链接.

对于ColorOS PJX110_16.0.5.701(CN01),其链接为:

https://gauss-compota-c-cn.allawnfs.com/remove-a39fc75063832d557a24f7ab02a02380/g-0e1e77d02e7bdea2328fda27ff230743/component-ota/26/04/14/faba2a6afc834843855599af7be64cf5.zip?sign=a0c55ee3494086f0981d65e678b94665&t=69f71e0a&AWSAccessKeyId=ayjy7KyLVHvDqDax6_KqJgtBeORTJARg9MSGiL66&Expires=1777804562&Signature=1dpWvcI4eyGiQT7obLfw2t91l54%3D

在应用管理中清除软件升级数据,然后断网即可在系统更新里手动安装全量包.

![](Screenshot_2026-05-02-19-36-28-06_fc704e6b13c4fb26bf5e411f75da84f2.jpg)

![](Screenshot_2026-05-02-21-06-36-51_9492aa3750dca76abb7c25b39a5f1e8e.jpg)