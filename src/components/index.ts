//引入项目中全局组件
import SvgIcon from './global/svg-icon.vue'

//全局对象
const allGloablComponent: any = { SvgIcon }
//对外暴露插件对象
export default {
  install(app: any) {
    //注册项目全部的全局组件
    Object.keys(allGloablComponent).forEach((key) => {
      app.component(key, allGloablComponent[key])
    })
  }
}
