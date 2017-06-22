export const menuList = 
[
    {
        isSingle: true,
        menu: 
        {
            icon: "desktop",
            name: "简介",
            route: "introduction"
        }
    },
    {
        isSingle: true,
        menu: 
        {
            icon: "download",
            name: "开始使用",
            route: "getting-started"
        }
    },
    {
        isSingle: true,
        menu: 
        {
            icon: "adjust",
            name: "主题",
            route: "theme"
        }
    },
    {
        isSingle: false,
        menus: 
        [
            {
                name: "UI 元素",
                icon: "dashboard",
                children: 
                [
                    {
                        name: "栅格系统",
                        desc: "Grid",
                        route: "grid"
                    },
                    {
                        name: "辅助元素",
                        desc: "Typography",
                        route: "typography"
                    },
                    {
                        name: "图片",
                        desc: "Image",
                        route: "image"
                    },
                    {
                        name: "阴影",
                        desc: "BoxShadow",
                        route: "shadow"
                    }
                ]
            },
            {
                name:"基础组件",
                icon:"th-large",
                children:
                [
                    {
                        name:"按钮",
                        desc:"Button组",
                        route:"buttons"
                    },
                    {
                        name:"列表",
                        desc:"List",
                        route:"list"
                    },
                    {
                        name:"卡片",
                        desc:"Card",
                        route:"card"
                    },
                    {
                        name:"进度条",
                        desc:"Progress",
                        route:"progress"
                    },
                    {
                        name:"加载条",
                        desc:"Loading",
                        route:"loading"
                    },
                    {
                        name:"输入框",
                        desc:"Input",
                        route:"input"
                    },
                    {
                        name:"复选框",
                        desc:"Checkbox",
                        route:"checkbox"
                    },
                    {
                        name:"单选框",
                        desc:"Radio",
                        route:"radio"
                    },
                    {
                        name:"开关",
                        desc:"Switch",
                        route:"switch"
                    },
                    {
                        name:"表格",
                        desc:"Table",
                        route:"table"
                    },
                    {
                        name:"面包屑",
                        desc:"Breadcrumb",
                        route:"breadcrumb"
                    },
                    {
                        name:"图标",
                        desc:"Icon",
                        route:"icon"
                    },
                    {
                        name:"小徽章",
                        desc:"Badge",
                        route:"badge"
                    }                                     
                ]
            },
            {
                name:"拓展组件",
                icon:"support",
                children:
                [
                    {
                        name:"面板",
                        desc:"折叠面板/手风琴",
                        route:"accordion"
                    },
                    {
                        name:"选项卡",
                        desc:"Tab切换",
                        route:"tabs"
                    },
                    {
                        name:"模态框",
                        desc:"Modal",
                        route:"modals"
                    },
                    {
                        name:"提示框",
                        desc:"Tooltip",
                        route:"tooltips"
                    },
                    {
                        name:"选择框",
                        desc:"Select",
                        route:"select"
                    },
                    {
                        name:"数字输入框",
                        desc:"Spinner",
                        route:"spinner"
                    },
                    {
                        name:"滑动条",
                        desc:"Range",
                        route:"range"
                    },
                    {
                        name:"星星评分",
                        desc:"Rating",
                        route:"rating"
                    },
                    {
                        name:"下拉菜单",
                        desc:"Dropdown",
                        route:"dropdown"
                    },
                    {
                        name:"弹出框",
                        desc:"Popover",
                        route:"popover"
                    },
                    {
                        name:"日历",
                        desc:"Calendar",
                        route:"calendar"
                    },
                    {
                        name:"碎片",
                        desc:"Chip",
                        route:"chip"
                    },
                    {
                        name:"自定义滚动条",
                        desc:"Scroll",
                        route:"scroll"
                    },
                    {
                        name:"树形菜单",
                        desc:"Tree",
                        route:"tree"
                    },
                    {
                        name:"Json视图",
                        desc:"JsonView",
                        route:"json-view"
                    }
                ]
            },
            {
                name:"自定义页面",
                icon:"clone",
                children:
                [
                    {
                        name:"登录页",
                        desc:"Login",
                        route:"/login"
                    },
                    {
                        name:"404页面",
                        desc:"Error 404",
                        route:"error"
                    }
                ]
            }
        ]
    },
    {
        isSingle:true,
        menu:
        {
            icon:"history",
            name:"更新日志",
            route:"changelog"
        }
    }
]