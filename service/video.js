module.exports = {
    recommendedVideo: async () => {
        let list = [
            {
                title: '冠心病诊断治疗及其常用原则',
                src: 'http://v.med.wanfangdata.com.cn/Home/Player?id=V000150',
                img: 'http://img.wanfangmed.com.cn/video/V000150.jpg'
            },
            {
                title: '血脂异常的调脂治疗及合理用药',
                src: 'http://v.med.wanfangdata.com.cn/Home/Player?id=V000147',
                img: 'http://img.wanfangmed.com.cn/video/V000147.jpg'
            }, {
                title: '心血管疾病的预防与治疗',
                src: 'http://v.med.wanfangdata.com.cn/Home/Player?id=V000191',
                img: 'http://img.wanfangmed.com.cn/video/V000191.jpg'
            }, {
                title: '高血压的预防与治疗',
                src: 'http://v.med.wanfangdata.com.cn/Home/Player?id=V000171',
                img: 'http://img.wanfangmed.com.cn/video/V000171.jpg'
            }, {
                title: '餐后高血糖与心血管疾病',
                src: 'http://v.med.wanfangdata.com.cn/Home/Player?id=V000034',
                img: 'http://img.wanfangmed.com.cn/video/V000034.jpg'
            }, {
                title: '磁导航系统在心血管病介入治疗中的应用',
                src: 'http://v.med.wanfangdata.com.cn/Home/Player?id=v003116',
                img: 'http://img.wanfangmed.com.cn/video/v003116.jpg'
            },
        ];
        let data = {
            list: list,
            status: 200,
            msg: '数据请求成功'
        };
        return data;
    }
};
