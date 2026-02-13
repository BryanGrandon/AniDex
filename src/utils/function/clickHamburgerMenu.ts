const clickHamburgerMenu = () => {
  const McButton = document.querySelector('[data-hamburger-menu]') as HTMLElement
  const McBar1 = McButton.querySelector('b:nth-child(1)') as HTMLElement
  const McBar3 = McButton.querySelector('b:nth-child(3)') as HTMLElement

  McButton.classList.toggle('active')
  const isActive = McButton.classList.contains('active')
  if (isActive) {
    // Bar1 → top: 50%
    McBar1.style.transition = 'top 100ms ease-out'
    McBar1.style.top = '50%'
    // Bar3 → top: 50% → rotateZ(90deg)
    McBar3.style.transition = 'top 100ms ease-out'
    McBar3.style.top = '50%'

    setTimeout(() => {
      McBar3.style.transition = 'transform 500ms cubic-bezier(.5,0.02,0,1)'
      McBar3.style.transform = 'rotateZ(90deg)'
    }, 200)
    // Button rotateZ(135deg)
    setTimeout(() => {
      McButton.style.transition = 'transform 500ms cubic-bezier(.5,0.02,0,1)'
      McButton.style.transform = 'rotateZ(135deg)'
    }, 200)
  } else {
    McButton.style.transform = 'rotateZ(0deg)'
    McBar3.style.transform = 'rotateZ(0deg)'
    // Bar3 → top: 100%
    setTimeout(() => {
      McBar3.style.transition = 'top 100ms ease-out'
      McBar3.style.top = '100%'
    }, 800)
    // Bar1 reverse
    setTimeout(() => {
      McBar1.style.top = '0'
    }, 800)
  }
}

export { clickHamburgerMenu }
