/* =====================================================================
 *  Beer Tower / Tap Tower 产品目录 —— 可编辑数据文件
 * ---------------------------------------------------------------------
 *  如何修改（改完保存，刷新 index.html 即可生效）：
 *   1) 公司信息 / 联系方式  -> 改 brand 部分
 *   2) 封面标题            -> 改 title（zh 中文标题，en 副标题）
 *   3) 单款产品            -> 在 products 数组里增 / 删 / 改一个对象：
 *        item     型号（如 HP245）
 *        desc     产品描述 / 本体尺寸
 *        capacity 容量（如 3L）
 *        material 材质（如 AS/ABS）
 *        packing  包装方式（多项用 " / " 分隔）
 *        meas     外箱尺寸（多项用 " / " 分隔）
 *        weight   毛重/净重（如 3.6/5kg）
 *        load     装柜量（如 20GP: 500PCS）
 *        prices   阶梯价数组，每项 { price: 单价, moq: 起订量 }
 *        photo    配图文件名（位于 assets/photos/ 下；留空 "" 则不显示图片）
 *   4) 实拍图廊            -> gallery 是图片文件名数组（来自 assets/photos/）；
 *        增删图片请把文件放进 assets/photos/ 并同步此列表，
 *        或重新运行 python gen_data.py 自动重新生成。
 *   注意：本文件是纯 JS，请用 UTF-8 编码保存，字符串用双引号。
 * ===================================================================== */

window.CATALOG = {
  "year": "2026",
  "priceLabel": "出厂价 (不含税) / Ex-works",
  "title": {
    "zh": "BEER TOWER CATALOG",
    "en": "精酿扎啤塔 · 分酒器 · Tap Tower 产品目录"
  },
  "brand": {
    "name": "Huangyan Peace Plastic Factory",
    "cn": "黄岩和平塑料厂",
    "contact": "Nicole Fu",
    "tel": "0086-576-84615011",
    "fax": "0086-576-84276865",
    "mob": "86-15858660858",
    "web": "www.peace-plastic.com",
    "email": "sales2@peace-plastic.com"
  },
  "intro": "共 {n} 款啤酒塔 / 扎啤塔机型，涵盖 1.5L–5L 容量、AS/ABS/PC 等多种材质，支持阶梯出厂价与灵活起订量。价格为<b>不含税出厂价</b>，最终报价以书面确认为准。",
  "galleryLead": "产品实拍展示（点击查看大图）。共 {n} 张。",
  "products": [
    {
      "item": "HP245",
      "desc": "beer tower 27*18*64.5",
      "capacity": "3L",
      "material": "AS/ABS",
      "packing": "1pcs/inner box / 2pcs/ctn",
      "meas": "54.5*29*67",
      "weight": "3.6/5kg",
      "load": "20GP: 500PCS",
      "prices": [
        {
          "price": "90",
          "moq": "500PCS"
        },
        {
          "price": "88",
          "moq": "1000pcs"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP246",
      "desc": "beer tower 29*29*65",
      "capacity": "3L",
      "material": "AS/ABS",
      "packing": "1pcs/inner box / 2pcs/ctn",
      "meas": "60*30*67 / (内箱：）",
      "weight": "5.5/7.5kg",
      "load": "",
      "prices": [
        {
          "price": "130",
          "moq": "500PCS"
        },
        {
          "price": "125",
          "moq": "1000pcs"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP247",
      "desc": "beer tower 22*22*55 2.3kg",
      "capacity": "3L",
      "material": "PC/ABS",
      "packing": "1pcs/inner box / 2pcs/ctn",
      "meas": "42*25*56",
      "weight": "",
      "load": "",
      "prices": [
        {
          "price": "125",
          "moq": "500PCS"
        },
        {
          "price": "120",
          "moq": "1000pcs"
        }
      ],
      "photo": "HP247.jpg",
      "colors": [
        {
          "name": "默认款",
          "hex": "#E8A33D",
          "photos": [
            "HP247.jpg",
            "hp256-ce.jpg"
          ]
        },
        {
          "name": "宝石红",
          "hex": "#c0392b",
          "photos": []
        },
        {
          "name": "香槟金",
          "hex": "#E8A33D",
          "photos": []
        }
      ]
    },
    {
      "item": "HP248",
      "desc": "beer tower 20.5*24*56cm",
      "capacity": "3L",
      "material": "PC/ABS",
      "packing": "1pcs/inner box / 2pcs/ctn",
      "meas": "54.5*23*59.5",
      "weight": "6.5kg",
      "load": "",
      "prices": [
        {
          "price": "125",
          "moq": "500PCS"
        },
        {
          "price": "120",
          "moq": "1000pcs"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP249",
      "desc": "beer tower 20*22*60.5",
      "capacity": "3L",
      "material": "AS/ABS",
      "packing": "1pcs/inner box / 6pcs/ctn",
      "meas": "64*43*49.5",
      "weight": "7.8/8.8kg",
      "load": "",
      "prices": [
        {
          "price": "85",
          "moq": "500PCS"
        },
        {
          "price": "80",
          "moq": "1000pcs"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP250",
      "desc": "beer tower",
      "capacity": "3L",
      "material": "PC/ABS",
      "packing": "1pcs/inner box / 2pcs/ctn",
      "meas": "49*22*63",
      "weight": "",
      "load": "",
      "prices": [
        {
          "price": "125",
          "moq": "500PCS"
        },
        {
          "price": "120",
          "moq": "1000pcs"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP252",
      "desc": "beer tower 24*22*55 23*22*57",
      "capacity": "3L",
      "material": "PC/ABS",
      "packing": "1pcs/inner box / 2pcs/ctn",
      "meas": "49*26*58 / 48.5*26.5*58 / 内箱(25*23*56.5)",
      "weight": "4/5.2kg",
      "load": "40HQ: 2039PCS",
      "prices": [
        {
          "price": "125",
          "moq": "500PCS"
        },
        {
          "price": "120",
          "moq": "1000pcs"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP253",
      "desc": "beer tower 24*26*56cm(象腿）",
      "capacity": "3L",
      "material": "PC/ABS",
      "packing": "1pcs/inner box / 2pcs/ctn",
      "meas": "49*24*56",
      "weight": "",
      "load": "",
      "prices": [
        {
          "price": "125",
          "moq": "500PCS"
        },
        {
          "price": "120",
          "moq": "1000pcs"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP254",
      "desc": "beer tower 20*20*61",
      "capacity": "3L",
      "material": "PC/ABS",
      "packing": "1pcs/inner box / 2pcs/ctn",
      "meas": "41*21*63",
      "weight": "",
      "load": "",
      "prices": [
        {
          "price": "138",
          "moq": "500PCS"
        },
        {
          "price": "135",
          "moq": "1000pcs"
        },
        {
          "price": "132",
          "moq": "1500"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP255",
      "desc": "beer tower 25*25*65",
      "capacity": "3L",
      "material": "PC/ABS",
      "packing": "1pcs/inner box / 2pcs/ctn",
      "meas": "52*26*67",
      "weight": "6/7.5KG",
      "load": "",
      "prices": [],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP256-A",
      "desc": "beer tower 20*20*64.5cm",
      "capacity": "3L",
      "material": "PC/ABS",
      "packing": "1pcs/inner box / 2pcs/ctn",
      "meas": "43*22*67cm",
      "weight": "6/7.5KG",
      "load": "40HQ 1050ctn",
      "prices": [
        {
          "price": "125",
          "moq": "500PCS"
        },
        {
          "price": "120",
          "moq": "1000pcs"
        }
      ],
      "photo": "hp256-ce.jpg",
      "colors": [
        {
          "name": "默认款",
          "hex": "#E8A33D",
          "photos": [
            "hp256-ce.jpg"
          ]
        }
      ]
    },
    {
      "item": "HP256-B",
      "desc": "beer tower",
      "capacity": "3L",
      "material": "",
      "packing": "",
      "meas": "43*22*68",
      "weight": "",
      "load": "",
      "prices": [
        {
          "price": "125",
          "moq": "500"
        },
        {
          "price": "120",
          "moq": "1000"
        }
      ],
      "photo": "hp256-ce.jpg",
      "colors": [
        {
          "name": "默认款",
          "hex": "#E8A33D",
          "photos": [
            "hp256-ce.jpg"
          ]
        }
      ]
    },
    {
      "item": "HP256-S",
      "desc": "beer tower",
      "capacity": "3L",
      "material": "",
      "packing": "",
      "meas": "44.5*23*68",
      "weight": "",
      "load": "",
      "prices": [
        {
          "price": "140",
          "moq": "500"
        },
        {
          "price": "138",
          "moq": "1000"
        }
      ],
      "photo": "hp256-ce.jpg",
      "colors": [
        {
          "name": "默认款",
          "hex": "#E8A33D",
          "photos": [
            "hp256-ce.jpg"
          ]
        }
      ]
    },
    {
      "item": "HP256-C",
      "desc": "beer tower",
      "capacity": "3L",
      "material": "",
      "packing": "",
      "meas": "44.5*23*68 / 22*22*74",
      "weight": "",
      "load": "",
      "prices": [
        {
          "price": "122",
          "moq": "500"
        },
        {
          "price": "118",
          "moq": "1000"
        }
      ],
      "photo": "hp256-ce.jpg",
      "colors": [
        {
          "name": "默认款",
          "hex": "#E8A33D",
          "photos": [
            "hp256-ce.jpg"
          ]
        }
      ]
    },
    {
      "item": "HP256-D",
      "desc": "beer tower 5L",
      "capacity": "5L",
      "material": "",
      "packing": "1pcs/inner box / 2pcs/ctn",
      "meas": "46*23.5*76",
      "weight": "7.2/6kg",
      "load": "",
      "prices": [
        {
          "price": "140",
          "moq": "500"
        },
        {
          "price": "138",
          "moq": "1000"
        }
      ],
      "photo": "hp256-ce.jpg",
      "colors": [
        {
          "name": "默认款",
          "hex": "#E8A33D",
          "photos": [
            "hp256-ce.jpg"
          ]
        }
      ]
    },
    {
      "item": "HP257",
      "desc": "vodka dispenser 13*13*39",
      "capacity": "3L",
      "material": "ABS/AS",
      "packing": "1pc/inner box / 16pcs/CTN",
      "meas": "55*55*40cm",
      "weight": "10.2/11.4kg",
      "load": "",
      "prices": [
        {
          "price": "",
          "moq": "1000pcs"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP258-S",
      "desc": "beer tower 20*20*72",
      "capacity": "3L",
      "material": "ABS/PC",
      "packing": "1pc/inner box / 2pcs/ctn",
      "meas": "44.5*23*76",
      "weight": "5/6.5kg",
      "load": "",
      "prices": [
        {
          "price": "140",
          "moq": "500"
        },
        {
          "price": "138",
          "moq": "1000"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP258-B",
      "desc": "beer tower plastic ice tube",
      "capacity": "3L",
      "material": "",
      "packing": "1pc/inner box / 2pcs/ctn",
      "meas": "44.5*23*75",
      "weight": "5.5/6.5",
      "load": "",
      "prices": [
        {
          "price": "125",
          "moq": "500"
        },
        {
          "price": "120",
          "moq": "1000"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP259",
      "desc": "beer tower 31*31*62 20GP 40GP 40HQ",
      "capacity": "3L",
      "material": "ABS/PC",
      "packing": "2pcs/ctn / 分体单个包装",
      "meas": "66*33*67 / 54*33*26",
      "weight": "8/5.5kg",
      "load": "346PCS",
      "prices": [
        {
          "price": "150",
          "moq": "500"
        },
        {
          "price": "145",
          "moq": "1000"
        },
        {
          "price": "140",
          "moq": "1500"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP260",
      "desc": "beer tower",
      "capacity": "3L",
      "material": "ABS/PC",
      "packing": "2pcs/ctn",
      "meas": "50.5*29.5*62 / 内箱（28*24.5*60cm)",
      "weight": "",
      "load": "",
      "prices": [
        {
          "price": "125",
          "moq": "500"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP261",
      "desc": "beer tower",
      "capacity": "",
      "material": "",
      "packing": "",
      "meas": "",
      "weight": "",
      "load": "",
      "prices": [],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP262",
      "desc": "beer tower beer tower beer tower 22*22*65 beer tower 21*22*65",
      "capacity": "3L",
      "material": "pp/pc/ABS",
      "packing": "1pcs/inner box / 3pcs/ctn / 1pcs/inner box / 4pcs/ctn",
      "meas": "67*23*69 / 44*45*67cm",
      "weight": "5.5/8kg",
      "load": "",
      "prices": [
        {
          "price": "170",
          "moq": "500"
        },
        {
          "price": "50",
          "moq": "1000(20GP)"
        },
        {
          "price": "78",
          "moq": "500pcs"
        },
        {
          "price": "128",
          "moq": "500"
        },
        {
          "price": "125",
          "moq": "1000"
        },
        {
          "price": "123",
          "moq": "2000"
        },
        {
          "price": "150",
          "moq": "1000"
        },
        {
          "price": "160",
          "moq": "700"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP266",
      "desc": "",
      "capacity": "",
      "material": "",
      "packing": "",
      "meas": "",
      "weight": "",
      "load": "",
      "prices": [],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP268",
      "desc": "beer tower",
      "capacity": "4.5L",
      "material": "",
      "packing": "1pcs/inner box",
      "meas": "29.5*24.5*72",
      "weight": "2/2.7kg",
      "load": "",
      "prices": [
        {
          "price": "180",
          "moq": "300"
        },
        {
          "price": "175",
          "moq": "500"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP269 (3L)",
      "desc": "beer tower",
      "capacity": "3L",
      "material": "",
      "packing": "1pcs/inner box",
      "meas": "22.5*22*59",
      "weight": "2.48/2.7",
      "load": "",
      "prices": [
        {
          "price": "125",
          "moq": "500"
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP270(1.5L)",
      "desc": "beer tower beer tower 不喷漆 beer tower",
      "capacity": "1.5L",
      "material": "",
      "packing": "1pcs/inner box",
      "meas": "19.5*19.5*54.5",
      "weight": "2.1/1.8",
      "load": "",
      "prices": [
        {
          "price": "129",
          "moq": "500"
        },
        {
          "price": "122",
          "moq": "200"
        },
        {
          "price": "93",
          "moq": "2500"
        },
        {
          "price": "91",
          "moq": "5000"
        },
        {
          "price": "89",
          "moq": "200"
        },
        {
          "price": "83",
          "moq": "2500"
        },
        {
          "price": "85",
          "moq": "5000"
        },
        {
          "price": "83",
          "moq": ""
        },
        {
          "price": "81",
          "moq": ""
        }
      ],
      "photo": "",
      "photos": []
    },
    {
      "item": "HP272",
      "desc": "beer tower 21*21*71 盖+龙头+连接器(+5) 全套(+18) beer tower 23*25*50 20*20*60",
      "capacity": "3L",
      "material": "ABS/PC",
      "packing": "1pcs/inner box / 3pcs/ctn / 彩盒+泡沫 / 3pcs/ctn / 彩盒+泡沫 / 20GP: 915PCS / 40GP: 1830pcs",
      "meas": "68*24*77 / 21*21*72.5cm / 65.5*22.5*75cm / 51.5*26*73cm / 44*44*63",
      "weight": "6.3/9KG",
      "load": "",
      "prices": [
        {
          "price": "180",
          "moq": "200"
        },
        {
          "price": "165",
          "moq": "500"
        },
        {
          "price": "83",
          "moq": "1000"
        },
        {
          "price": "80",
          "moq": "2000"
        },
        {
          "price": "",
          "moq": "1000"
        },
        {
          "price": "",
          "moq": "2000"
        }
      ],
      "photo": "",
      "photos": []
    }
  ],
  "gallery": [
    "002.jpg",
    "003.jpg",
    "004.jpg",
    "005.jpg",
    "006.jpg",
    "007.jpg",
    "008.jpg",
    "009.jpg",
    "010.jpg",
    "011.jpg",
    "012.jpg",
    "013.jpg",
    "015.jpg",
    "016.jpg",
    "017.jpg",
    "018.jpg",
    "019.jpg",
    "020.jpg",
    "HP247.jpg",
    "IMGP0393.jpg",
    "IMGP0394.jpg",
    "IMGP0396.jpg",
    "IMGP0397.jpg",
    "IMGP0398.jpg",
    "IMGP0399.jpg",
    "IMGP0400.jpg",
    "IMGP0401.jpg",
    "IMGP0402.jpg",
    "IMGP0403.jpg",
    "IMGP0404.jpg",
    "IMGP0405.jpg",
    "IMGP0407.jpg",
    "IMGP0408.jpg",
    "IMGP0410.jpg",
    "IMGP0411.jpg",
    "IMG_20170622_165406.jpg",
    "IMG_20170706_094730.jpg",
    "IMG_20170706_104010.jpg",
    "IMG_20170706_104022.jpg",
    "IMG_20170706_104030.jpg",
    "IMG_20170717_141852.jpg",
    "IMG_20170718_105054.jpg",
    "IMG_20170718_105227.jpg",
    "IMG_20170718_105301.jpg",
    "IMG_20170722_110810.jpg",
    "IMG_20170722_110828.jpg",
    "IMG_20170722_110844.jpg",
    "IMG_20170728_154120_01.jpg",
    "IMG_20170728_154142_01.jpg",
    "IMG_20170807_101859.jpg",
    "IMG_20170807_101910.jpg",
    "IMG_9043.jpg",
    "IMG_9044.jpg",
    "IMG_9045.jpg",
    "IMG_9046.jpg",
    "IMG_9047.jpg",
    "IMG_9049.jpg",
    "IMG_90531.jpg",
    "IMG_9054.jpg",
    "IMG_9055.jpg",
    "IMG_9056.jpg",
    "IMG_9057.jpg",
    "IMG_9058.jpg",
    "IMG_9060.jpg",
    "IMG_9062.jpg",
    "IMG_9063.jpg",
    "IMG_9064.jpg",
    "IMG_9065.jpg",
    "IMG_9066.jpg",
    "IMG_9068.jpg",
    "IMG_9069.jpg",
    "IMG_9070.jpg",
    "IMG_9071.jpg",
    "IMG_9072.jpg",
    "IMG_9073.jpg",
    "IMG_9074.jpg",
    "IMG_9075.jpg",
    "IMG_9076.jpg",
    "IMG_9077.jpg",
    "IMG_9078.jpg",
    "IMG_9079.jpg",
    "IMG_9080.jpg",
    "IMG_9081.jpg",
    "IMG_9082.jpg",
    "IMG_9083.jpg",
    "IMG_9084.jpg",
    "IMG_9085.jpg",
    "IMG_9086.jpg",
    "IMG_9087.jpg",
    "IMG_9088.jpg",
    "IMG_9089.jpg",
    "IMG_9090.jpg",
    "IMG_9091.jpg",
    "IMG_9093.jpg",
    "IMG_9096.jpg",
    "IMG_9097.jpg",
    "IMG_9098.jpg",
    "IMG_9099.jpg",
    "IMG_9100.jpg",
    "IMG_9101.jpg",
    "IMG_9102.jpg",
    "IMG_9103.jpg",
    "IMG_9104.jpg",
    "IMG_9105.jpg",
    "IMG_9106.jpg",
    "IMG_9107.jpg",
    "IMG_9108.jpg",
    "IMG_9109.jpg",
    "IMG_9110.jpg",
    "IMG_9111.jpg",
    "IMG_9112.jpg",
    "IMG_9113.jpg",
    "IMG_9114.jpg",
    "IMG_9115.jpg",
    "IMG_9116.jpg",
    "IMG_9117.jpg",
    "IMG_9118.jpg",
    "IMG_9119.jpg",
    "IMG_9120.jpg",
    "IMG_9121.jpg",
    "IMG_9122.jpg",
    "IMG_9123.jpg",
    "IMG_9124.jpg",
    "IMG_9125.jpg",
    "IMG_9126.jpg",
    "IMG_9127.jpg",
    "IMG_9129.jpg",
    "IMG_9131.jpg",
    "IMG_9132.jpg",
    "IMG_9133.jpg",
    "IMG_9134.jpg",
    "IMG_9135.jpg",
    "IMG_9137.jpg",
    "IMG_9138.jpg",
    "IMG_9139.jpg",
    "IMG_9140.jpg",
    "IMG_9141.jpg",
    "IMG_9142.jpg",
    "IMG_9143.jpg",
    "IMG_9144.jpg",
    "IMG_9145.jpg",
    "IMG_9146.jpg",
    "IMG_9147.jpg",
    "IMG_9148.jpg",
    "IMG_9149.jpg",
    "IMG_9150.jpg",
    "IMG_9151.jpg",
    "IMG_9152.jpg",
    "IMG_9153.jpg",
    "IMG_9154.jpg",
    "IMG_9155.jpg",
    "IMG_9156.jpg",
    "IMG_9157.jpg",
    "IMG_9158.jpg",
    "IMG_9159.jpg",
    "IMG_9160.jpg",
    "IMG_9161.jpg",
    "IMG_9162.jpg",
    "IMG_9163.jpg",
    "IMG_9164.jpg",
    "IMG_9166.jpg",
    "IMG_9167.jpg",
    "IMG_9168.jpg",
    "IMG_9169.jpg",
    "IMG_9170.jpg",
    "IMG_9171.jpg",
    "IMG_9172.jpg",
    "IMG_9173.jpg",
    "IMG_9174.jpg",
    "IMG_9175.jpg",
    "IMG_9176.jpg",
    "IMG_9177.jpg",
    "IMG_9178.jpg",
    "IMG_9179.jpg",
    "IMG_9180.jpg",
    "IMG_9181.jpg",
    "IMG_9182.jpg",
    "IMG_9183.jpg",
    "IMG_9184.jpg",
    "IMG_9185.jpg",
    "IMG_9186.jpg",
    "IMG_9187.jpg",
    "IMG_9188.jpg",
    "IMG_9189.jpg",
    "IMG_9190.jpg",
    "IMG_9191.jpg",
    "IMG_9192.jpg",
    "IMG_9193.jpg",
    "IMG_9194.jpg",
    "IMG_9195.jpg",
    "IMG_9196.jpg",
    "IMG_9197.jpg",
    "IMG_9198.jpg",
    "IMG_9199.jpg",
    "IMG_9200.jpg",
    "IMG_9201.jpg",
    "IMG_9202.jpg",
    "IMG_9203.jpg",
    "IMG_9204.jpg",
    "IMG_9205.jpg",
    "IMG_9206.jpg",
    "IMG_9207.jpg",
    "IMG_9208.jpg",
    "IMG_9209.jpg",
    "IMG_9210.jpg",
    "IMG_9211.jpg",
    "IMG_9212.jpg",
    "IMG_9213.jpg",
    "IMG_9214.jpg",
    "IMG_9216.jpg",
    "IMG_9218.jpg",
    "QQ图片20170622160748.jpg",
    "QQ图片20170817170047_副本.jpg",
    "cover-Recover.jpg",
    "cover.jpg",
    "hp256-ce.jpg"
  ]
};
