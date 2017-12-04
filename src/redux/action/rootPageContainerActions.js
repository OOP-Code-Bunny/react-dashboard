import *as BaseActions from './BaseActions'

//改变 isShowFullScreenSpin

export default {
    changeShowFullScreenSpin: 'changeShowFullScreenSpin',
    changeShowFullScreenSpinAction: BaseActions.createBaseAction(this.changeShowFullScreenSpin),

    /**
     * 改变 currentSelectMenu
     */
    // changeCurrentSelectMenu: 'changeCurrentSelectMenu',
    // changeCurrentSelectMenuAction: BaseActions.createBaseAction(this.changeCurrentSelectMenu),
}
