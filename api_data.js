define({ "api": [
  {
    "type": "post",
    "url": "/api/geetest_api_v1",
    "title": "05.极验配置信息返回",
    "name": "geetest_api_v1",
    "group": "01Auth",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "HTTP/1.1 200\n{\n     \"success\": 1,\n     \"gt\": \"9af3aa9e204402036ff03ca65b64621a\",\n     \"challenge\": \"30d33f3d3cd369458f7831928945f843\",\n     \"new_captcha\": 1,\n     \"status\": 1\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "用户接口"
  },
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "02.登陆",
    "name": "login",
    "group": "01Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>M   电子邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>M   密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geetest_challenge",
            "description": "<p>M   极验参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geetest_validate",
            "description": "<p>M   极验参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geetest_seccode",
            "description": "<p>M   极验参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geetest_status",
            "description": "<p>M   极验参数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "HTTP/1.1 200\n{\n  \"message\": \"\",\n  \"status_code\":0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回",
          "content": "HTTP/1.1 422\n{\n     \"message\": \"验证不通过\",\n     \"errors\": {\n         \"name\": [\"用户名不能为空\"],\n         \"email\": [\"邮箱不能为空\"],\n         \"password\": [\"密码不能为空\"],\n         \"geetest_challenge\": [\"请点击以滑动校验验证码\"],\n         \"geetest_validate\": [\"请点击以滑动校验验证码\"],\n         \"geetest_seccode\": [\"请点击以滑动校验验证码\"],\n         \"geetest_status\": [\"请点击以滑动校验验证码\"]\n     },\n     \"status_code\": 422\n }\n HTTP/1.1 422（极验验证不通过）\n{\n     \"message\": \"验证不通过\",\n     \"errors\": {\n         \"error\": [\"验证失败请重试\"],\n     },\n     \"status_code\": 422\n }\nHTTP/1.1 400\n{\n     \"message\": \"验证不通过\",\n     \"errors\": {\n         \"error\": [\"邮箱或密码不正确\"],\n     },\n     \"status_code\": 400\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "用户接口"
  },
  {
    "type": "post",
    "url": "/api/auth/logout",
    "title": "04.退出登陆",
    "name": "logout",
    "group": "01Auth",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "HTTP/1.1 200\n{\n  \"message\":\"退出成功\",\n  \"status_code\":0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "用户接口"
  },
  {
    "type": "get",
    "url": "/api/auth/refresh",
    "title": "03.刷新token",
    "name": "refresh",
    "group": "01Auth",
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "用户接口"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "01.注册",
    "name": "register",
    "group": "01Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>M   用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>M   电子邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>M   密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geetest_challenge",
            "description": "<p>M   极验参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geetest_validate",
            "description": "<p>M   极验参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geetest_seccode",
            "description": "<p>M   极验参数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "geetest_status",
            "description": "<p>M   极验参数</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "HTTP/1.1 200\n{\n  \"message\": \"\",\n  \"status_code\":0,\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回",
          "content": "HTTP/1.1 422\n{\n     \"message\": \"验证不通过\",\n     \"errors\": {\n         \"name\": [\"用户名不能为空\"],\n         \"email\": [\"邮箱不能为空\"],\n         \"password\": [\"密码不能为空\"],\n         \"geetest_challenge\": [\"请点击以滑动校验验证码\"],\n         \"geetest_validate\": [\"请点击以滑动校验验证码\"],\n         \"geetest_seccode\": [\"请点击以滑动校验验证码\"],\n         \"geetest_status\": [\"请点击以滑动校验验证码\"]\n     },\n     \"status_code\": 422\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "用户接口"
  },
  {
    "type": "get",
    "url": "/api/auth/user",
    "title": "03.获取用户信息",
    "name": "user",
    "group": "01Auth",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "HTTP/1.1 200\n{\n  \"data\":{\n     \"id\":1,\n     \"name\":\"a\",\n     \"email\":\"a@a.com\",\n     \"created_at\":\"2018-07-10 02:27:51\",\n     \"updated_at\":\"2018-07-10 02:27:51\"\n  },\n  \"status_code\":0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/V1/AuthController.php",
    "groupTitle": "用户接口"
  },
  {
    "type": "get",
    "url": "/api/productClassify",
    "title": "01.获取商品分类",
    "name": "productClassify",
    "group": "01ProductClassify",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "  HTTP/1.1 200\n  {\n       \"code\": 0,\n       \"list\": [\n            {\n                \"id\": 1,\n                \"name\": \"手机\",\n                \"pid\": 0,\n                \"created_at\": null,\n                \"updated_at\": null,\n                \"_child\": [\n                    {\n                        \"id\": 2,\n                        \"pid\": 1,\n                        \"name\": \"魅族手机\",\n                        \"created_at\": null,\n                        \"updated_at\": null\n                    },\n                    {\n                        \"id\": 3,\n                        \"pid\": 1,\n                        \"name\": \"魅蓝手机\",\n                        \"created_at\": null,\n                        \"updated_at\": null\n                    }\n                  ]\n               },\n               ...\n           ]\n\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/V1/ProductClassifyController.php",
    "groupTitle": "商品分类"
  },
  {
    "type": "post",
    "url": "/api/global",
    "title": "1.全局返回码",
    "description": "<p>全局返回码</p>",
    "group": "01Return",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "-1",
            "description": "<p>系统错误</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "0",
            "description": "<p>请求成功</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "500",
            "description": "<p>请求错误</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "422",
            "description": "<p>请求参数错误</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "400",
            "description": "<p>登陆错误</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "filename": "app/Http/Controllers/Api/ReturnCodeController.php",
    "groupTitle": "全局返回码",
    "name": "PostApiGlobal"
  },
  {
    "type": "post",
    "url": "Header返回值",
    "title": "",
    "description": "<p>Header返回值</p>",
    "group": "01Return",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer {token} 登录后返回的token 当token过期后也会返回新的token 需要替换本地token</p>"
          }
        ]
      }
    },
    "version": "0.1.0",
    "filename": "app/Http/Controllers/Api/ReturnCodeController.php",
    "groupTitle": "全局返回码",
    "name": "PostHeader"
  },
  {
    "type": "get",
    "url": "/api/addresses",
    "title": "01.获取用户地址列表",
    "name": "addresses",
    "group": "01UserAddresses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pSize",
            "description": "<p>M   单页显示记录条数（默认10）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>M   页码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "HTTP/1.1 200\n{\n \"status_code\": 0,\n \"list\": [\n     {\n         \"id\": 1,\n         \"user_id\": 1,\n         \"province\": 11,\n         \"city\": 11,\n         \"district\": 11,\n         \"address\": \"11\",\n         \"zip\": 11,\n         \"contact_name\": \"1\",\n         \"contact_phone\": \"1\",\n         \"created_at\": \"2018-07-16 09-18\",\n         \"updated_at\": \"2018-07-16 09-18\"\n     },\n     {\n         \"id\": 4,\n         \"user_id\": 1,\n         \"province\": 2,\n         \"city\": 2,\n         \"district\": 2,\n         \"address\": \"2\",\n         \"zip\": 2,\n         \"contact_name\": \"2\",\n         \"contact_phone\": \"2\",\n         \"created_at\": \"2018-07-16 09-18\",\n         \"updated_at\": \"2018-07-16 09-18\"\n     }\n ],\n \"total\": 2,\n \"totalPage\": 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/V1/UserAddressesController.php",
    "groupTitle": "用户地址接口"
  },
  {
    "type": "post",
    "url": "/api/addresses",
    "title": "03.删除用户地址",
    "name": "destroy",
    "group": "01UserAddresses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>C   地址ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "HTTP/1.1 200\n{\n \"status_code\": 0,\n \"message\": \"操作成功\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回",
          "content": "HTTP/1.1 200\n{\n \"status_code\": 500,\n \"message\": \"错误信息\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/V1/UserAddressesController.php",
    "groupTitle": "用户地址接口"
  },
  {
    "type": "post",
    "url": "/api/addresses",
    "title": "02.用户地址添加&修改",
    "name": "store",
    "group": "01UserAddresses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>C   地址ID（0 =&gt; 新增）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "province",
            "description": "<p>M   省份</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "city",
            "description": "<p>M   城市</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "district",
            "description": "<p>M   区域</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>M   详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "zip",
            "description": "<p>M   邮编</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_name",
            "description": "<p>M   收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_phone",
            "description": "<p>M   收货人手机号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "HTTP/1.1 200\n{\n \"status_code\": 0,\n \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回",
          "content": "HTTP/1.1 422\n{\n     \"message\": \"验证不通过\",\n     \"errors\": {\n         \"province\": [\"省份不能为空\"],\n         \"city\": [\"城市不能为空\"],\n     },\n     \"status_code\": 422\n }\nHTTP/1.1 500\n{\n \"status_code\": 1,\n \"message\": \"错误信息\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/V1/UserAddressesController.php",
    "groupTitle": "用户地址接口"
  }
] });
