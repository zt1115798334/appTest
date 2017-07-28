<!DOCTYPE html>
<html lang="zh_CN" class="page">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=0, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="简介">
    <meta name="keywords" content="关键词">
    <meta name="author" content="zx">
    <meta name="robots" content="index,follow">
    <title>舆情压力监控系统-风险评估单</title>
    <link href="../vendor/bootstrap-3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <link href="../vendor/bootstrap-select-1.12.2/dist/css/bootstrap-select.min.css" rel="stylesheet" />
    <link href="../vendor/fullpage.js/dist/jquery.fullpage.css" rel="stylesheet" />
    <link href="../css/style.css" rel="stylesheet" />
    <!--[if lt IE 9]>
    <script src="../vendor/html5shiv_3.7.3/html5shiv.min.js"></script>
    <script src="../vendor/respond.js_1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="pullpage" id="pullpage">
    <div class="section page-wrapper vertical-top">
        <div class="head-wrapper header-list">
            <div class="header header--fixed hide-from-print" id="header" role="banner">
                <div class="container">
                    <div class="navbar-header">
                        <img src="../images/JD-finance-logo.png" class="logo">
                        <a class="navbar-brand" href="javascript:void(0);">舆情压力监控系统</a>
                    </div>
                    <ul class="nav navbar-nav navbar-right ">
                        <li><a href="javascript:void(0);"  data-toggle="dropdown"><img src="../images/usercenter.png" alt=""/> 上午好，JD6524197_2012 <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="myCenter02.html">监控企业管理</a></li>
                                <li><a href="myCenter.html">企业预警设置</a></li>
                                <li><a href="myCenter01.html">事件分类设置</a></li>
                                <li><a href="javascript:void(0);">帮助中心</a></li>
                                <li><a href="javascript:void(0);">退出</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="banner">
                <div class="container">
                    <div class="posb-content">
                        <div class="company-name">中科点击（北京）科技有限公司</div>
                        <h3 class="doc-name">企业网络舆情压力评估建议单</h3>
                        <div class="create-date">2017年07月14日</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-wrapper">
            <div class="remind-message-box">
                <div class="container">
                    <p class="remind-message">
                        距离您<span class="prev-time">2017-06-15 12:01</span>查看该企业期间，舆情信息增加<span>34</span>条，负面信息增加<span>3</span>条，请及时跟踪。
                        <a href="javascript:void(0);">点击此处查看→</a>
                        <a href="javascript:void(0);" class="close-remind">&times;</a>
                    </p>
                </div>
            </div>
            <div class="container">
                <div class="panel panel-custom">
                    <div class="panel-heading">
                        <span class="big-text">01</span>
                        <h3 class="panel-title">舆情量化指标 <a href="javascript:void(0);" class="circle help" data-toggle="tooltip" data-placement="bottom" title="指标解读：舆情压力指数以社会化媒体为数据基础，企业为统计对象，科学分析并计算出企业二级指标（负面情感比例、媒体影响力、关联影响、累计舆情压力）加权综合得出。">?</a></h3>
                    </div>
                    <div class="panel-body">
                        <div class="model-statistics">
                            <div class="row">
                                <div class="col-xs-3">
                                    <div  class="indicatorContainerWrap">
                                        <div id="indicatorContainer-1"></div>
                                        <div class="ring blue" >
                                            <h3 class="num">0.86</h3>
                                            <p class="num-ud"><span class="ud-icom up"></span><span class="ud-num">16%</span>
                                        </div>
                                    </div>
                                    <p class="ring-title">压力指数</p>
                                </div>
                                <div class="col-xs-3">
                                    <h3 class="number-title"><img src="../images/chart.png" />昨日统计&nbsp;<span>1220</span></h3>
                                    <h1 class="number">1220</h1>
                                    <p class="ring-title">正面舆情</p>
                                </div>
                                <div class="col-xs-3">
                                    <h3 class="number-title"><img src="../images/downPointer.png" />昨日统计&nbsp;<span>1000</span></h3>
                                    <h1 class="number">1000</h1>
                                    <p class="ring-title">正面舆情</p>
                                </div>
                                <div class="col-xs-3">
                                    <h3 class="number-title"><img src="../images/fav.png" />昨日统计&nbsp;<span>220</span></h3>
                                    <h1 class="number">220</h1>
                                    <p class="ring-title">正面舆情</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section page-wrapper background-2">
        <div class="container">
            <div class="panel panel-custom">
                <div class="panel-heading">
                    <span class="big-text">02</span>
                    <h3 class="panel-title">舆情压力趋势 <a href="javascript:void(0);" class="circle help" data-toggle="tooltip" data-placement="bottom" title="通过整体压力趋势、正面压力趋势、负面压力趋势，综合量化反映某一企业舆情压力变化趋势，从历史舆情风险数据走势判断未来是否会发生风险。">?</a>
                        <select class="selectpicker pull-right">
                            <option value="">最近七天</option>
                            <option value="">最近一个月</option>
                        </select>
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="btn-box" id="btn_box">
                        <button type="button" class="btn btn-gradual btn-radius btn-transform">整体压力</button>
                        <button type="button" class="btn btn-gradual btn-radius">正面压力</button>
                        <button type="button" class="btn btn-gradual btn-radius">负面压力</button>
                    </div>
                    <div class="charts" id="charts">

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section page-wrapper">
        <div class="container">
            <div class="panel panel-custom">
                <div class="panel-heading">
                    <span class="big-text">03</span>
                    <h3 class="panel-title">舆情事件聚合 <a href="javascript:void(0);" class="circle help" data-toggle="tooltip" data-placement="bottom" title="事件聚合是指根据一定主题将全网媒体内容进行重新组合排序而生成一个或多个主题（包含多条文章）。机器学习自动聚类企业事件类型，查看事件发展走势。">?</a>
                        <div class="pull-right">
                            <select class="selectpicker">
                                <option value="">最近七天</option>
                                <option value="">最近一个月</option>
                            </select>
                            <select class="selectpicker">
                                <option value="">全部情感</option>
                            </select>
                        </div>
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="background-3 clearfix mb25">
                        <div class="col-md-12">
                            <div class="type-wrapper">
                                <ul class="type-list type-list-main">
                                    <li class="active"><span class="type">全部</span></li>
                                    <li><span class="type">人工智能</span></li>
                                    <li><span class="type">无人机</span></li>
                                    <li><span class="type">房产家居</span></li>
                                    <li><span class="type">医疗健康</span></li>
                                    <li><span class="type">汽车交通</span></li>
                                    <li><span class="type">共享经济</span></li>
                                    <li><span class="type">全部企业</span></li>
                                    <li><span class="type">人工智能</span></li>
                                    <li><span class="type">无人机</span></li>
                                    <li><span class="type">房产家居</span></li>
                                    <li><span class="type">医疗健康</span></li>
                                    <li><span class="type">汽车交通</span></li>
                                    <li><span class="type">共享经济</span></li>
                                    <li><span class="type">全部企业</span></li>
                                    <li><span class="type">人工智能</span></li>
                                    <li><span class="type">无人机</span></li>
                                    <li><span class="type">房产家居</span></li>
                                    <li><span class="type">医疗健康</span></li>
                                    <li><span class="type">汽车交通</span></li>
                                    <li><span class="type">共享经济</span></li>
                                </ul>
                                <ul class="type-list-right">
                                    <li class="last-menu">
                                        <a href="javascript:void(0);" class="arrow">
                                            更多
                                            <span class="glyphicon glyphicon-menu-up"></span>
                                            <span class="glyphicon glyphicon-menu-down"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="event-list">
                                <ul class="list-box">
                                    <li>
                                        <h3><a href="javascript:void (0);"> 吉利和长城事件表明,对中国品牌的认可还需理性吉利和长城事件表明,对中国品牌的认可还需理性 </a></h3>
                                        <p>
                                            <label>最早报道时间</label>
                                            <span>2016/12/03  23:16</span>
                                        </p>
                                        <p>
                                            <label>聚合舆情数</label>
                                            <span class="number">3645</span>
                                        </p>
                                    </li>
                                    <li>
                                        <h3><a href="javascript:void (0);"> 吉利和长城事件表明,对中国品牌的认可还需理性 </a></h3>
                                        <p>
                                            <label>最早报道时间</label>
                                            <span>2016/12/03  23:16</span>
                                        </p>
                                        <p>
                                            <label>聚合舆情数</label>
                                            <span class="number">3645</span>
                                        </p>
                                    </li>
                                    <li>
                                        <h3><a href="javascript:void (0);"> 吉利和长城事件表明,对中国品牌的认可还需理性 </a></h3>
                                        <p>
                                            <label>最早报道时间</label>
                                            <span>2016/12/03  23:16</span>
                                        </p>
                                        <p>
                                            <label>聚合舆情数</label>
                                            <span class="number">3645</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="change-box h500">
                                <div class="charts mt-50" id="charts2">

                                </div>
                                <div class="charts mt-50" id="charts3">

                                </div>
                                <div class="charts mt-50" id="charts4">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section page-wrapper background-4">
        <div class="container">
            <div class="panel panel-custom">
                <div class="panel-heading">
                    <span class="big-text">04</span>
                    <h3 class="panel-title">企业舆情视界 <a href="javascript:void(0);" class="circle help" data-toggle="tooltip" data-placement="bottom" title="从更小颗粒度的单条新闻，展现企业经营动态和舆情情况。">?</a>
                        <div class="pull-right">
                            <select class="selectpicker">
                                <option value="">最近七天</option>
                                <option value="">最近一个月</option>
                            </select>
                            <select class="selectpicker">
                                <option value="">全部情感</option>
                            </select>
                            <select class="selectpicker">
                                <option value="">全部媒体</option>
                            </select>
                        </div>
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="lyt-box">

                    </div>
                    <div class="btn-box text-right">
                        <button class="btn btn-gradual btn-radius btn-drakgolden" type="button" onclick="window.location.href='/opinionVision/opinionViewPage?enterpriseId=596dcb342b1d2426a42b484f'">
                            <span class="glyphicon glyphicon-plus"></span>
                            更多
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section page-wrapper">
        <div class="container">
            <div class="panel panel-custom">
                <div class="panel-heading">
                    <span class="big-text">05</span>
                    <h3 class="panel-title">相关企业舆情 <a href="javascript:void(0);" class="circle help" data-toggle="tooltip" data-placement="bottom" title="关联第三方企业对某一企业的舆情风险间接影响。">?</a>
                        <div class="pull-right">
                            <select class="selectpicker">
                                <option value="">最近七天</option>
                                <option value="">最近一个月</option>
                            </select>
                        </div>
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="company-box">
                                <ul class="company-layout">

                                </ul>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="change-box">
                                <div class="lyt-box lyt-news">
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">1</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">2</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">3</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">4</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">5</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                </div>
                                <div class="lyt-box lyt-news">
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">1</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">2</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">3</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">4</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">5</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                </div>
                                <div class="lyt-box lyt-news">
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">1</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">2</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">3</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">4</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">5</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                </div>
                                <div class="lyt-box lyt-news">
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">1</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">2</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">3</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">4</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">5</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                </div>
                                <div class="lyt-box lyt-news">
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">1</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">2</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">3</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">4</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">5</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="section page-wrapper background-6">
        <div class="container">
            <div class="panel panel-custom">
                <div class="panel-heading">
                    <span class="big-text">06</span>
                    <h3 class="panel-title">相关人物舆情 <a href="javascript:void(0);" class="circle help" data-toggle="tooltip" data-placement="bottom" title="企业内部关联人物对某一企业的舆情风险间接影响。">?</a>
                        <div class="pull-right">
                            <select class="selectpicker">
                                <option value="">最近七天</option>
                                <option value="">最近一个月</option>
                            </select>
                        </div>
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="slide-border-box">
                                <ul class="tab-hover">
                                    <li>
                                        <div class="layout-box">
                                            <div class="layout">
                                                <div class="indicatorContainerWrap min">
                                                    <div id="indicatorContainer-2"></div>
                                                    <div class="ring red">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="layout">
                                                <h3 class="author-name">思念的风</h3>
                                                <p class="eq-type">负面比例</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="layout-box">
                                            <div class="layout">
                                                <div class="indicatorContainerWrap min">
                                                    <div id="indicatorContainer-3"></div>
                                                    <div class="ring red">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="layout">
                                                <h3 class="author-name">hello,world!</h3>
                                                <p class="eq-type">负面比例</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="layout-box">
                                            <div class="layout">
                                                <div class="indicatorContainerWrap min">
                                                    <div id="indicatorContainer-4"></div>
                                                    <div class="ring red">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="layout">
                                                <h3 class="author-name">hello,world!</h3>
                                                <p class="eq-type">负面比例</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="layout-box">
                                            <div class="layout">
                                                <div class="indicatorContainerWrap min">
                                                    <div id="indicatorContainer-5"></div>
                                                    <div class="ring red">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="layout">
                                                <h3 class="author-name">hello,world!</h3>
                                                <p class="eq-type">负面比例</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="layout-box">
                                            <div class="layout">
                                                <div class="indicatorContainerWrap min">
                                                    <div id="indicatorContainer-6"></div>
                                                    <div class="ring red">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="layout">
                                                <h3 class="author-name">hello,world!</h3>
                                                <p class="eq-type">负面比例</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="slide-border-right"></div>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="change-box">
                                <div class="lyt-box lyt-news">
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">1</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">2</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">3</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">4</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">5</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                </div>
                                <div class="lyt-box lyt-news">
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">1</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">2</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">3</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">4</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">5</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                </div>
                                <div class="lyt-box lyt-news">
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">1</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">2</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">3</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">4</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">5</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                </div>
                                <div class="lyt-box lyt-news">
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">1</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">2</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">3</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">4</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">5</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                </div>
                                <div class="lyt-box lyt-news">
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">1</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">2</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number active">3</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">4</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                    <div class="lyt-item">
                                        <div class="lyt lyt-text-left w630">
                                            <div class="lyt-text-left-overflow">
                                                <em class="number">5</em>
                                                <a href="javascript:void(0);"> 金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始金融巨头们接连发布合作协议，好戏才刚刚开始</a>
                                            </div>
                                            <p class="details">
                                                <span class="text-darkgray">河南经济报</span>
                                                <span class="glyphicon glyphicon-fire"></span>
                                                <span class="text-gray">热度</span>
                                                <span class="number">327</span>
                                            </p>
                                        </div>
                                        <div class="lyt lyt-text-right text-darkgray">2017-05-09 08:33</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<#include "/footer.ftl"/>
<#include "/public.ftl"/>
</div>
<script src="../vendor/bootstrap-select-1.12.2/dist/js/bootstrap-select.min.js"></script>
<script src="../vendor/headRoom/Headroom.js"></script>
<script src="../vendor/headRoom/jQuery.headroom.js"></script>
<script src="../vendor/scrollbar/jquery.nicescroll.js"></script>
<script src="../vendor/fullpage.js/dist/jquery.fullpage.js"></script>
<script src="../script/radialIndicator.js"></script>
<script src="../vendor/echarts/echarts.min.js"></script>
<script src="../script/common.js"></script>
<script src="../js/riskeval/riskAssessmentReport.js?version=1"></script>
</body>
</html>