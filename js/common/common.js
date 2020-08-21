
let project_base_url = '';
let env = 'dev';
/**
* 定义 api的访问前缀来区分不同环境
*/
function getEnvUrlPrefix(){
    if(env == 'dev'){//开发环境 api地址前缀
        project_base_url = 'http://dev';
    }else if(env == 'test'){// 测试环境 api地址前缀
        project_base_url = 'test';
    }else if(env == 'prod'){// 生产环境 api地址前缀
        project_base_url = 'prod';
    }
    return project_base_url;
}

/**
* 获取当前页面url地址上的参数 并封装成一个object返回
*/
function GetRequest() {
   var url = location.search; //获取url中"?"符后的字串
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}