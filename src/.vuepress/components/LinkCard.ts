// 修改自 vuepress-theme-hope/packages/components/src/client/components/VPCard.ts (https://github.com/vuepress-theme-hope)
import { isLinkExternal } from '@vuepress/helper'
import type { FunctionalComponent } from 'vue'
import { h } from 'vue'
import { RouteLink, withBase } from '@vuepress/client'
import '../styles/link-card.scss'

export interface CardProps {
  /**
   * Card title
   *
   * 卡片标题
   *
   */
  title: string

  /**
   * Card description
   *
   * 卡片描述
   */
  desc?: string

  /**
   * Card icon
   *
   * 卡片图标
   */
  logo?: string

  /**
   * Card link
   *
   * 卡片链接
   */
  link?: string

  /**
   * Card background
   *
   * 卡片背景
   */
  background?: string

  /**
   * Card font color
   *
   * 卡片字体颜色
   */
  color?: string
}

const LinkCard: FunctionalComponent<CardProps> = ({
  title,
  desc = '',
  logo,
  background,
  color,
  link
}) => {
  const children = [
    logo
      ? h('img', {
          class: 'link-card-logo',
          src: withBase(logo),
          loading: 'lazy',
          'no-view': ''
        })
      : null,
    h('div', { class: 'link-card-content' }, [
      h('div', { class: 'link-card-title', innerHTML: title }),
      h('hr'),
      h('div', { class: 'link-card-desc', innerHTML: desc })
    ])
  ]

  const style: Record<string, string> = {}

  if (background) style['background'] = background
  if (color) style['color'] = color

  return link
    ? isLinkExternal(link)
      ? h(
          'a',
          { class: 'link-card', href: link, target: '_blank', style },
          children
        )
      : h(RouteLink, { to: link, class: 'link-card', style }, () => children)
    : h('div', { class: 'link-card', style }, children)
}

LinkCard.displayName = 'LinkCard'


export default LinkCard