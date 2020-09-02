import axios from '../axios'

/* 
 * 菜单管理模块
 */

 // 保存
export const save = (data) => {
    return axios({
        url: '/menu/save',
        method: 'post',
        data
    })
}
// 删除
export const batchDelete = (data) => {
    return axios({
        url: '/menu/delete',
        method: 'post',
        data
    })
}
// 查找导航菜单树
export const navTree = (params) => {
    return axios({
        url: 'v1/menus/navTree',
        method: 'get',
        params
    })
}
// 查找导航菜单树
export const findMenuTree = () => {
    return axios({
        url: '/menu/findMenuTree',
        method: 'get'
    })
}

// 查找用户的菜单权限标识集合
export const findPermissions = (params) => {
    return axios({
        url: 'v1/menus/findPermissions',
        method: 'get',
        params
    })
}