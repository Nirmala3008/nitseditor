export const menu = function (currentNav) {
    var menu_type = _.find(JSON.parse(nitseditor).all_menu, (o) => {
        return o.link === currentNav;
    })
    if(menu_type.menu_location === 'main_menu')
        var main_menu = _.filter(JSON.parse(nitseditor).menu, function(o) { return o.menu_location === 'main_menu'; })
    else if(menu_type.menu_location === 'analytics_menu')
        var main_menu = _.filter(JSON.parse(nitseditor).menu, function(o) { return o.menu_location === 'analytics_menu'; })

    var menu = main_menu.map(a => ({
        name: a.name,
        link: a.link,
        icon: a.icon,
        sub_menu: a.children.length ? a.children.map(b => ({
            name: b.name,
            link: b.link,
            icon: b.icon,
            sub_menu: b.children.length ? b.children.map(c => ({
                name: c.name,
                link: c.link,
                icon: c.icon
            })) : []
        })) : []
    }))

    if(menu_type.menu_location === 'main_menu')
        menu.push({name: 'Biltrax Analytics', link: '/dashboard-biltrax-analytics', icon: 'flaticon2-protection'})
    else if(menu_type.menu_location === 'analytics_menu')
        menu.push({name: 'Search Data', link: '/dashboard', icon: 'flaticon2-protection'})

    return menu;
}

import authorization from "NitsModels/_auth";

const auth = new authorization();

export const login = function(user) {
    return new Promise((resolve, reject) => {

        const cred = {
            email: user.email,
            password: user.password
        }

        new auth.login(cred).then(response => {
            const redirect = {
                redirect: '/dashboard'
            }
            resolve(redirect);
        }).catch( err => {
            if(err.response.status === 401){
                const error = err.response.data.message
                reject(error)
            }
            if(err.response.status === 500) {
                const error = 'Server error, please try after sometime.'
                reject(error)
            }
            if(err.response.status === 400) {
                const error = 'Environment variable missing. Check and retry.'
                reject(error)
            }
        });

    })


}