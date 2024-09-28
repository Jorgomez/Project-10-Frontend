import { Tooltip } from '../ToolTip/ToolTip'
import './HeroHome.css'

export const HeroHome = () => {
  const heroHome = document.createElement('article')
  heroHome.classList.add('heroHome')
  heroHome.innerHTML = `<h3 class="heroTitle">Explore <span class="keyWords" id="eventTooltipSpan"> Events</span>, <span class="keyWords" id="createTooltipSpan"> Create</span> memories and <span class="keyWords" id="connectTooltipSpan">Connect</span> with the community.</h3>`

  return heroHome
}
