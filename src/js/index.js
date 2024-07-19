import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  new router()

  const hoge = 'hoge'
  console.log(hoge)

  // メニュー表示
  const menu = $('.p-menu')
  const showMenuPosition = 100

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > showMenuPosition) {
      menu.addClass('is-active')
    } else {
      menu.removeClass('is-active')
    }
  })

  // メニューボタン
  const menuBtn = $('.c-menuBtn')
  const menuBox = $('.p-menu__box')
  const menuItem = $('.p-menu__item')

  menuBtn.click(function () {
    $(this).toggleClass('is-active')
    menuBox.toggleClass('is-active')
    menuItem.toggleClass('is-active')
  })

  // スライドアップ
  const checkScrollSlideUp = (scrollBottom) => {
    const scrollSlideUp = $('._scrollSlideUp')

    scrollSlideUp.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveSlideUp')
      } else {
        $(element).removeClass('_isActiveSlideUp')
      }
    })
  }

  // フェードイン
  const checkScrollFadeIn = (scrollBottom) => {
    const scrollFadeIn = $('._scrollFadeIn')

    scrollFadeIn.each((index, element) => {
      const isActive = $(element).offset().top < scrollBottom

      if (isActive) {
        $(element).addClass('_isActiveFadeIn')
      } else {
        $(element).removeClass('_isActiveFadeIn')
      }
    })
  }

  // スクロール時の処理
  $(window).scroll(() => {
    const scrollTop = $(window).scrollTop()
    const windowHeight = $(window).height()
    const scrollBottom = scrollTop + windowHeight

    checkScrollSlideUp(scrollBottom)
    checkScrollFadeIn(scrollBottom)
  })
})
