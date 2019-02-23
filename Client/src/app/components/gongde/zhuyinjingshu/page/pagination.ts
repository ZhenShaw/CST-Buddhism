//分页组件所需配置信息的对象
export class Pagination {

    /**
        * 构造函数，同时设置属性，初始值
        * @param pageLength 显示的页码数，奇数，默认6
        * @param currentPage 当前页码数，默认1
        * @param totalItems 总条数 默认0
        * @param pageItems 每页显示条数，默认1
        * @param changePage 翻页时调用的方法
    */

    constructor(
        public pageLength: number = 6,
        public currentPage: number = 1,
        public totalItems: number = 0,
        public pageItems: number = 1,
        public changePage: () => void
    ) { }

    public static defaultPagination = new Pagination(6, 1, 0, 1, function () { });
}