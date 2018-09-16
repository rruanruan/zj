<template>
    <div flex="dir:top" class="about-us">
        <div flex="box:mean" flex-box="0" class="tab">
            <div :class="{'active':active===0}" @click.stop="tab(0)">平台简介</div>
            <div :class="{'active':active===1}" @click.stop="tab(1)">平台优势</div>
            <div :class="{'active':active===2}" @click.stop="tab(2)">安全保障</div>
            <div :class="{'active':active===3}" @click.stop="tab(3)">联系我们</div>
        </div>
        <div flex-box="1" id="about-us" style="overflow-y: auto;" @scroll="scroll" ref="scroll">
            <div id="introduction" class="items">
                <div class="banner"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMBAMAAAA1uUwYAAAAIVBMVEUAAACLreiPseqRs+6wyviHquaTtvL///+pxfaTsuiTs+s1vGHMAAAABHRSTlMA+8se2APJTQAAAJtJREFUSMft00EKRmAQxvGvvhuQA1jYcwcLW+pZuIDc4L2AFHvlCI4pSY3FvDMpkea//pXm0fuzrAf6xyAFKcMynAoZliw5aawYFnWUFSXDkJ/Cy1jfbLUSa/ZE5rZeyvaUg3ziL9A3oWIIfYy8CRUrSs8JIMOwgwjs6DqTP6o8gRvkFjYAs4JNQK04Ac5BHoRnR8bUDN60zLLEVr+iLQPZZ+51AAAAAElFTkSuQmCC"
                    alt="banner" class="img">
                    平台简介
                </div>
                <div class="section seperate">
                    <div class="text-index">
                        智能投顾ing是中冀投资旗下的互联网理财信息服务平台，借助最先进的大数据、云计算和移动互联网技术，依托母公司中冀投资股份有限公司对金融投资的实盘经验和背景优势，为机构客户提供高品质的互联网投资信息服务。
                    </div>
                </div>
                <div class="section seperate">
                    <div flex="main:center" class="title">
                        关于中冀投资
                    </div>
                    <div class="text-index">
                        母公司“中冀投资股份有限公司”于2016年8月成立，是由河北省九家著名民营企业联合创立的一家股份有限公司，公司注册资本100亿元。
                        中冀投资致力于打造以投资业务、基金管理、财富管理、产业运营四类业务架构为支柱的国际化金融服务平台，公司将立足河北、聚焦京津冀，布局全国，放眼全世界。
                    </div>
                </div>
                <div class="tab-content">
                    <div flex-box="0" class="section seperate">
                        <div>
                            <div flex="main:center" class="title">
                                中冀领军者
                            </div>
                            <div flex="dir:top main:center" class="info">
                                <div flex="dir:top">
                                    <div><img src="https://static-test.zj-hf.cn/land/gengjianming.66659029.png"
                                              alt="banner" class="img"></div>
                                    <div class="name">耿建明</div>
                                    <div class="position">董事长</div>
                                </div>
                            </div>
                            <div flex="" class="content-list">
                                武汉理工大学产业经济学本科毕业，新加坡南洋理工大学MBA，博士学位，高级工程师。<br>
                                现任荣盛控股股份有限公司总裁、荣盛房地产发展股份有限公司董事长、廊坊市工商联主席、廊坊市政协副主席。
                            </div>
                        </div>
                        <div>
                            <div flex="dir:top main:center" class="info">
                                <div flex="dir:top">
                                    <div><img src="https://static-test.zj-hf.cn/land/wenyuanhua.aeb97094.png"
                                              alt="banner" class="img"></div>
                                    <div class="name">文远华</div>
                                    <div class="position">总裁</div>
                                </div>
                            </div>
                            <div flex="" class="content-list">
                                中国社会科学院经济学博士，麦吉尔大学访问学者，耶鲁大学世界学者。<br>
                                文先生具备二十余年金融行业从业经验，曾供职于多家大型金融机构并任要职，2014年-2016年担任天津银行总行行长，曾历任中央汇金投资有限责任公司、建设银行总行和中信银行总行等多家金融机构的重要职务。曾参与中央汇金投资有限责任公司的早期工作，主持天津银行上市和建设银行印尼子行、巴西子行的收购等多项金融重大事件，于2017年加入中冀投资股份有限公司，现任总裁一职。
                            </div>
                        </div>
                    </div>
                    <div flex-box="0" class="section seperate">
                        <div flex="main:center" class="title">
                            中冀重点投资方向
                        </div>
                        <div class="content-direction bottom_10">
                            <div class="title_sub">重点投资行业</div>
                            <div class="li">高端制造（包括新能源、新材料、汽车、自动化等）</div>
                            <div class="li">军民融合</div>
                            <div class="li">节能环保及清洁技术</div>
                            <div class="li">人工智能</div>
                            <div class="li">金融科技</div>
                            <div class="li">医疗及医疗服务</div>
                        </div>
                        <div class="content-direction">
                            <div class="title_sub">重点投资项目举例</div>
                            <div class="li">大运汽车项目</div>
                            <div class="li">北汽新能源项目</div>
                            <div class="li">河北建设港股IPO基石投资项目（已于12月15日成功港股IPO）</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="advantage" class="items">
                <div class="banner"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAMAAADwSaEZAAAAeFBMVEUAAACJq+iLr+uJrOiHq+eHquaJq+iKrOmIquaOsOqIq+eIq+eIq+eIq+eHq+eIq+eJq+eMqueJseuLsvCOqv+/v/+NsOqHq+eQsOuHq+eIq+eJrOaNruuHquawyvityPedvPCpxPWkwfOTtOyMr+maue6Xt+2Qsutplu/hAAAAHXRSTlMA/kb72+7mUvbX0LyZiIBlYSoaEAkE66qYd3Y0JpHVoqUAAAFASURBVFjD7dbbioMwFIXh7Hiq2nPtuStJra3v/4YTDIMM2KqZMAea70oI/LBhXcg8z/u3eB5FOXfTWqKxdBILoaRUCP9ezOmZjEPjzBFozMdGpQwfG2o9DUD3OyGYrr+Z2swmoIcUQj4Ik9mG2StOEeh2FY3rjRCdCsvUdhEDJvWZA+LF1qaVhEBdii/KGgiT0SmeAVWbanMVkPFRqXOuU0p0UjqXnwenLnsCKSmekIpA+8uIYZnUs5yZ3eBhvTRsdsXRDKufmd2xeD2s2qSG5OoXs0tCWOicXbKDpd2zFWM0pr13jDHRaL/6Xn8uBq396nv/7RhPgyDlbmIHgkYHFzFO5j+UuINYCiU0hdRBLIAUmkTgIAaIBuBj7xpbwcqqMzaHlXlnLEMpRiuRdV9ZCQsVVt1XurszhqWYeZ6nfQBOyKYt31sv+wAAAABJRU5ErkJggg=="
                    alt="banner" class="img">
                    平台优势
                </div>
                <div flex-box="0" class="section seperate">
                    <div class="title_sub">
                        政府支持推动
                    </div>
                    <div>2016年9月26日，中冀投资股份有限公司在河北省石家庄市正式揭牌运营，这标志着河北省民营企业联合投资平台正式诞生。时任河北省委书记赵克志、省长张庆伟对中冀投资成立做出批示。</div>
                    <div flex="main:center"><img src="https://static-test.zj-hf.cn/land/pic1.b3c7b2f6.png"
                                                 class="hetong"></div>
                    <div flex="main:center"><img src="https://static-test.zj-hf.cn/land/pic2.b845e060.png"
                                                 class="office-img"></div>
                </div>
                <div flex-box="0" class="section seperate">
                    <div class="title_sub">
                        股东实力支撑
                    </div>
                    <div flex="cross:center" class="copa-li">
                        <div flex-box="0" class="company-img"><img
                            src="https://static-test.zj-hf.cn/land/rongsheng.43ef2bee.png"></div>
                        <div flex-box="1">
                            <div class="title_sub">荣盛房地产发展股份有限公司</div>
                            <div>全国百强地产企业，2017年中国房地产百强企业第16位<br>河北省首家通过A股IPO上市的房地产企业，证券代码为SZ 002146<br>截至2017年9月，公司总资产为1758亿元。
                            </div>
                        </div>
                    </div>
                    <div flex="cross:center" class="copa-li">
                        <div flex-box="0" class="company-img"><img
                            src="https://static-test.zj-hf.cn/land/yangyuan.98a62cef.png"></div>
                        <div flex-box="1">
                            <div class="title_sub">河北养元智汇饮品股份有限公司</div>
                            <div>中国最大的核桃饮品生产基地<br>中国核桃乳饮料行业标准起草单位，行业的先行者<br>2018年2月12日正式在上海证券交易所挂牌上市，股票简称“养元饮品”，股票代码603156。
                            </div>
                        </div>
                    </div>
                    <div flex="cross:center" class="copa-li">
                        <div flex-box="0" class="company-img"><img
                            src="https://static-test.zj-hf.cn/land/xinao.c403051a.png"></div>
                        <div flex-box="1">
                            <div class="title_sub">新奥资本管理有限公司</div>
                            <div>以资产管理和保险为主导、全价值链的领先金融服务集团。</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="safety" class="items">
                <div flex-box="cross:center" class="banner"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAMAAADwSaEZAAAAsVBMVEUAAACQs/Cfuf+Iq+eIqueHquaIq+eIqueIq+eIq+eHq+iMr+yIqueHq+eJrOmKrumIqueHqueIqueIqueJq+qIq+eIq+iJq+iIq+mJrOmMreiIrOeKrOmIq+eJre2Iq+eHquewyviHquf+//+uyPi4z/iKrOjz9/3F2PmPsOq0zPirxvagvvHs8v3e6PypxfWlwvOYt+6Ts+uNrumtx/adu/Caue+Wtu35+/7T4frC1vmzRRsEAAAAIXRSTlMACwXfwfi6r5+VghT75i0l8evY0DuzXFdRRzVnH4kcy6j84W21AAACTElEQVRYw+3X2W7aQBSAYcAGjMMWKEvW9vyZTOLYjTeWtO//YI3cSmYJHhu4qcR/w92nw5EQZ2qXLl36n2t3zmd9o3l1LutqBOcarWHjaaZnseoT0kXAsH+O7/idNBRZc317+u4tUl9EVMLwRK3hdvGUZCU0704aawwr+ZeKwakfS93/gDSSvEBjzY+iBk4TvVSyme9Bq195V/MJsPZzJx+O1k2VmabOEHQcyhepWIPVuWmUG8riM2+5kAOpZQp0LbtlBmfoZOlLYdHK47OZEWsRSIlUGNMyWfUuSkrl060bsDmJlMxjbsAeWJbFVjwYsAlRWSxiYsBGhEbl+S37CBkZsGsWRuvlJdMU1wasiTJaT0+//2JNAwYlrFfJAiNW1sox885e303WwrizMaFk/Xx6L7YkZGz8aUaS9ZZpBZZExh+nQyC5VmRJgGPAXGLZ0AosiXGNN4onm9phSzy+GbDGEH9LO2j5DBvGU4xA9rV9SwLaNVN3JLKv7VuScGc+VJr4e9oXll/qAOwQy46WW3lxqftvgF7saB/71kIzKHUNs5ItLbfyVtn6zd1CKJs9f/zatUIoea118JQUprzSF3PdMv1FLbFKX2o36LDICjUVLiGH1D9s+SlOxdNfFSzMblR8lCSHsITRVcWDtkeivpwroXdfq1i/l+9te1+9I94qj2N0tGtFmvHjUY+mNsRq+6CF9rFPAbeLDrZO7a5bO7q+DV6gsqkCD+zTnnazHuh1FK019GYnPzenNln2tF47QwPXstxB7dKlS4X9ActS39Cg7/gAAAAAAElFTkSuQmCC"
                    alt="banner" class="img"> <span>安全保障</span></div>
                <div flex-box="0" class="section seperate">
                    <div>
                        <div class="title f8">
                            平台背景可靠吗？偿付能力如何？
                        </div>
                        平台母公司“中冀投资股份有限公司”是由河北省九家著名民营企业联合创立的一家股份有限公司，公司注册资本100亿元。
                        <div flex="main:center"><img src="https://static-test.zj-hf.cn/land/zhizhao.062cdfe8.png"
                                                     class="zhizhao"></div>
                        <div class="content-direction">
                            <div>中冀投资股份有限公司的主要股东包括：</div>
                            <div class="li">荣盛发展股份有限公司（001246SZ），全国百强地产企业，2017年中国房地产百强企业第16位截至2017年9月，公司总资产为1758亿元。
                            </div>
                            <div class="li">河北养元智汇饮品股份有限公司（股票代603156.SH），中国最大的核桃饮品生产基地。</div>
                            <div class="li">新奥资本管理有限公司，以资产管理和保险为主导、全价值链的领先金融服务集团，隶属于新奥集团。</div>
                        </div>
                    </div>
                    <div class="top40">
                        <div class="title f8">
                            平台特色：
                        </div>
                        <div class="content-direction">
                            <div class="li">
                                结合了中冀投资二级市场团队的实盘操作经验，为客户提供定制化的实盘交易策略；
                            </div>
                            <div class="li">
                                策略结合人工智能和深度学习模块，能够有效挖掘市场潜在机会；
                            </div>
                            <div class="li">
                                客户面对策略本身，按照专业化组合投资的方式进行投资，可以有效规避个股风险；
                            </div>
                            <div class="li">
                                策略按照贝叶斯模型，主观和客观相结合，形成一套与市场波动紧密相关的投资风格。
                            </div>
                        </div>

                    </div>
                    <div class="top40">
                        <div class="title f8">
                            我的个人信息安全吗？
                        </div>
                        智能投顾ing平台承诺，不会在任何情况下以任何方式，向任何机构或个人泄露用户的个人信息。<br><br>
                        平台由行业领先的安全防护解决方案提供商“绿盟科技”提供安全防护服务。绿盟科技成立于2000年，是国家重点发展的信息安全企业，拥有多项权威认证资质。自成立以来，绿盟科技获得政府相关主管机构、知名媒体及社会团体授予的众多业界荣誉。<br><br>
                        平台由“阿里云”提供云存储服务。阿里（www.aliyun.com）创立于2009年，是全球领先的云计算及人工智能科技公司，为200多个国家和地区的企业、开发者和政府机构提供服务。2017年1月阿里云成为奥运会全球指定云服务商。
                    </div>
                    <div flex="box:mean" class="support">
                        <div flex="dir:top">
                            <div flex="main:center"><img src="https://static-test.zj-hf.cn/land/lumeng.3aa21c3a.png"
                                                         class="baoz-img"></div>
                            <div flex="main:center">绿盟</div>
                        </div>
                        <div flex="dir:top">
                            <div flex="main:center"><img
                                src="data:image/png;base64,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"
                                class="baoz-img"></div>
                            <div flex="main:center">阿里云</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" class="items">
                <div flex-box="cross:center" class="banner"><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAMAAADwSaEZAAAAyVBMVEUAAACHq+dektFDZ6tCZ6xRbrtCaKxDaKxEa65CaKtCZ6xCaKxDaKxDaaxDaq1CZ6xCZ6xCaKxDaaxDaKxDaKxEaKyKrOhCZ6yHq+dCaKxDaK1Daa2Kq+hDaatFaa9Faq9OcrFCaKxCaK1Faa1IarOHq+aIquaIqueIq+aHq+dCaKxDZ6yIqueIq+ZEaa2Jq+eJrOmJreeIrOeZs/9DaKtDaKxCZ6uHquawyvicu/Beg8OqxvWfvPGOsOqiwPKYt+6Xt+52mddxlNPvnMNDAAAANnRSTlMAiQT77wzmnif12sCQVjTUu7GGeU4//se9pYVbTUctIhJsYjoZ9eHSxbOmmX58bWpGQSsKq24Mkav2AAAB50lEQVRYw+2XWXOCMBSFUwQCioAstda61u77dtPavf//RzVX7IzTRhP0vnSG88g5fOQmJw+wSpUqrZCVJ51G3ffrjU6SWxuRMm7Dgmyerc3LIvijKFsLFTZAqUZYnjWqwUwu7+ae43h5l7swU21UdrfOivf4vrXwcJ8XXzgrtXNOMWLL+214rWJUpwRs9ordU1k9G72WOSvBfN1Tm14d3cSU1cV0e7jMHrbR75qxhjiIO1kemLi4CUMjWCCjfriygr6MBCasAR7/5erMJdZmYADr4OZbmhriIXQMKoYLa+pSTVyaw0xiEdMqMvkkO5WpXT1sV8ZOtZcSexHqYSG2Q3dF+9gxZiDsWl+T6clMbAKLZbCnyYxlhpvAuAyONZm02H+zE0hX+NdCiK/pdPppwNr6lMEvIXaWBY7EXCawn+ye2t8Tr48oQ9gTZl/Esdo/ES/lYKhtcauy78T2c3nYu7hQ2Tc4ZWnYm/oIrsTHGrBncaiyz9EuCcP0ASmMdEzaA6CvBn1p6a8T/UVn12vAdhiJUkgYmQIY0cFakJGxHB8mZLAmtBmZ2vBAxhqD61CxPBuaVKyBC/dUrNyF2CIqRQAQOzQTBjbU0o3WJeYKohpA3GeMAgbgc0SRwFL8ZaSCsUqVKv1DfQOaOH8TBsZw/QAAAABJRU5ErkJggg=="
                    alt="banner" class="img"> <span>联系我们</span></div>
                <div flex-box="0" class="section seperate f7">
                    <div class="btn1">
                        <div class="color3"><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAASFBMVEUAAABDZ6tHcK1CaatCZ6xrgL9CaKxCZ6xDZ6xDZ6tDZq1CZ6xDZ61DaKxKarVDaKxDaKxCZ6xDaKxDaKtDaq1FaK1HarFCZ6sfe+eOAAAAF3RSTlMA+Rl39Ab45LOOioN5cRjd1rm2p1cuJEAwYFMAAACnSURBVDjL5dBZDoQgEEXRApkaEGfZ/047Vtq0kAcb8H5V4sEi0HtKcbHG2CWmJtFB5F8i6IZx+ZHDKuSigIxUvGeQcuCtSgI08vnhGgceR4BW/sLHJY8rQFONJoBUvU4BZHJ58WwAsrnKAuRq5OATVI0AJVEakQi0lWgj1CmKH50E80/kCafnv5k1NTrUbdRBzfYb7dQpZi5St89lPn3Dik0/7+llfQG64RenhikNCQAAAABJRU5ErkJggg=="
                            class="cnt-icon">
                            地址
                        </div>
                        <div class="paddleft">北京市丰台区恒泰中心C座</div>
                    </div>
                    <div class="btn1">
                        <div class="color3"><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAhFBMVEUAAABCZ6xCaav////r7vbS2+v///96lsdCZ6v////9/f72+Pvk6fNIbK7w8/nt8Pfa4e7I0ua9yuJ3kcNSdLJMb7DN1um3xd+itdacr9OWqtCQps1+l8ZwjMBrib1igbpefrhaerVWd7T5+vzz9fnW3u3CzuOwv9yputmJoMqDm8dmhLvd1uw9AAAACHRSTlMA40nj4+NJSYNZhdcAAACtSURBVDjL7c/HDoJAAIRhwTYDLL2JFMGu7/9+QmLWbFgSL8YL//k7zCzmvm9rQF+z2ki03OlNdeJaIotBojHlkRchUeTSOYzM3uIVkAitT7uEWk4OKz4IIqSVKyajdYeKgEIZJgLaEUYIVT+seZv4TLeGBqHrhz0w1DrDES2CyMgbgKdHP4YGyddpHNlME0wj1B77QkCHZF1oewX0SO3HyJg2hkSmMWnMxdwfegEZAhPeNZ/degAAAABJRU5ErkJggg=="
                            class="cnt-icon">
                            客服邮箱
                        </div>
                        <div class="paddleft">phkefu@zj-inv.cn</div>
                    </div>
                    <div class="btn1">
                        <div class="color3"><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAhFBMVEX///9CZ6vr7/bL1ehKbq/5+vzU3Oylt9eYrNF3ksNbe7ZTdLL19/rt8Pfd4/Da4e6Uqc9nhLtjgblffrhXeLRMb7D8/f7w8/nt8ffo7PXk6fPh5/LO2Om6x+CNpMyHnsmCmsdsiL1QcrFFaazG0eXDz+S+y+Kuvtutvdqbr9KJoMpcfLbuqorXAAAAy0lEQVQ4y+XSyQ6CMBCA4W5C2ZFFQAQR3H3/9zPtECNJOxw9+F+4fGEoU/KzduuEpdkzWjEHn1KaNahpAqrahhhyKSQx5M0oqHAExQiSs8mwj+Jg/JggbXJlSjD48YoQR2xU6kbwHgoJB0dVoQfucdXBYhh+UwatTjWqohwU/q5khInwXS1vjYqXWr3UGa+CijQyXj24VqWbdEKviRsn5lQ3wcPy45hHFx3Nq5YL5BFzF/8L3a3L7qfPtA2x5gxwzB6MrZq7qTyTf+gNZ2QH+4LZbQUAAAAASUVORK5CYII="
                            class="cnt-icon">
                            客服电话
                        </div>
                        <div class="paddleft">400-022-9558</div>
                        <div class="paddleft">( 工作日9:00-12:00,13:00-18:00 )</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../less/intro/about-us.less';

    export default {
        name: 'about-us',
        data() {
            return {
                active: 0
            }
        },
        created() {

        },
        computed: {},
        methods: {
            scroll(evt) {
                console.log(evt.target.scrollTop);
                if (evt.target.scrollTop < 1652) {
                    this.active = 0;
                }
                if (evt.target.scrollTop >= 1652) {
                    this.active = 1;
                }
                if (evt.target.scrollTop >= 3052) {
                    this.active = 2;
                }
                if (evt.target.scrollTop >= 4329) {
                    this.active = 3;
                }
            },
            tab(num) {
                switch (num) {
                    case 0:
                        this.$refs.scroll.scrollTop = 0;
                        break;
                    case 1:
                        this.$refs.scroll.scrollTop = 1652;
                        break;
                    case 2:
                        this.$refs.scroll.scrollTop = 3053;
                        break;
                    case 3:
                        this.$refs.scroll.scrollTop = 4329;
                        break;
                }
            }

        },
        destroyed() {

        }
    }
</script>
