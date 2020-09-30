import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  isFullscreen: false,

  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showNav: true,

  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showPanel: true,

  /**
   * where to show the addon panel
   * @type {('bottom'|'right')}
   */
  panelPosition: 'bottom',

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: true,

  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: true,

  /**
   * show/hide tool bar
   * @type {Boolean}
   */
  isToolshown: true,

  /**
   * theme storybook, see link below
   */
  theme: create({
    base: 'light',
    brandTitle: 'hey3 starter-for-react storybook',
    brandUrl: 'https://github.com/hey3/starter-for-react',
    fontBase: '"游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ", sans-serif',
    fontCode: 'monospace',
    textColor: 'black',
    inputBg: 'white',
  }),

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedPanel: undefined,

  /**
   * select the default active tab on Mobile
   * @type {('sidebar'|'canvas'|'addons')}
   */
  initialActive: 'sidebar',

  /**
   * display the top-level grouping as a "root" in the sidebar
   * @type {Boolean}
   */
  showRoots: false,
})
