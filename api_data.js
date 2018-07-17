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
          "content": "HTTP/1.1 200\n{\n     \"success\": 1,\n     \"gt\": \"9af3aa9e204402036ff03ca65b64621a\",\n     \"challenge\": \"30d33f3d3cd369458f7831928945f843\",\n     \"new_captcha\": 1,\n     \"status\": 1\n  }",
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
          "content": "HTTP/1.1 200\n{\n  \"message\": \"\",\n  \"code\":0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "错误返回",
          "content": "HTTP/1.1 422\n{\n     \"message\": \"验证不通过\",\n     \"errors\": {\n         \"name\": [\"用户名不能为空\"],\n         \"email\": [\"邮箱不能为空\"],\n         \"password\": [\"密码不能为空\"],\n         \"geetest_challenge\": [\"请点击以滑动校验验证码\"],\n         \"geetest_validate\": [\"请点击以滑动校验验证码\"],\n         \"geetest_seccode\": [\"请点击以滑动校验验证码\"],\n         \"geetest_status\": [\"请点击以滑动校验验证码\"]\n     },\n     \"status_code\": 422\n }\nHTTP/1.1 400\n{\n     \"message\": \"验证不通过\",\n     \"errors\": {\n         \"errors\": [\"邮箱或密码不正确\"],\n     },\n     \"status_code\": 400\n }",
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
          "content": "HTTP/1.1 200\n{\n  \"message\":\"退出成功\",\n  \"code\":0\n}",
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
          "content": "HTTP/1.1 200\n{\n  \"message\": \"\",\n  \"code\":0,\n}",
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
    "type": "post",
    "url": "/api/auth/user",
    "title": "03.获取用户信息",
    "name": "user",
    "group": "01Auth",
    "success": {
      "examples": [
        {
          "title": "成功返回",
          "content": "HTTP/1.1 200\n{\n  \"data\":{\n     \"id\":1,\n     \"name\":\"a\",\n     \"email\":\"a@a.com\",\n     \"created_at\":\"2018-07-10 02:27:51\",\n     \"updated_at\":\"2018-07-10 02:27:51\"\n  },\n  \"code\":0\n}",
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
    "url": "/api/addresses",
    "title": "01.获取用户地址列表",
    "name": "UserAddresses",
    "group": "01UserAddresses",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pSize",
            "description": "<p>M   单页显示记录条数（默认10）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
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
          "content": "HTTP/1.1 200\n{\n \"code\": 0,\n \"message\": \"\",\n \"list\": [\n     {\n         \"id\": 1,\n         \"user_id\": 1,\n         \"province\": 11,\n         \"city\": 11,\n         \"district\": 11,\n         \"address\": \"11\",\n         \"zip\": 11,\n         \"contact_name\": \"1\",\n         \"contact_phone\": \"1\",\n         \"created_at\": \"2018-07-16 09-18\",\n         \"updated_at\": \"2018-07-16 09-18\"\n     },\n     {\n         \"id\": 4,\n         \"user_id\": 1,\n         \"province\": 2,\n         \"city\": 2,\n         \"district\": 2,\n         \"address\": \"2\",\n         \"zip\": 2,\n         \"contact_name\": \"2\",\n         \"contact_phone\": \"2\",\n         \"created_at\": \"2018-07-16 09-18\",\n         \"updated_at\": \"2018-07-16 09-18\"\n     }\n ],\n \"total\": 2,\n \"totalPage\": 1\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/V1/UserAddressesController.php",
    "groupTitle": "用户地址接口"
  }
] });