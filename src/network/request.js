import axios from 'axios'

export function request(config,success,failure) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  instance(config).then( res => {
    console.log(res);
    success(res)//这里是success是一个回调函数
  }).catch(err => {
    failure(err)
  })
}

export function request2(config) {
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  instance(config.baseConfig).then(res => {
    config.success(res)
  }).catch( err => {
    config.failure(err)
  })
}

export function request3(config) {
  //直接返回一个Promise，其中成功的数据会被放入then的回调中，而失败的会放入err中
  return new Promise(((resolve, reject) => {
    const instance = axios.create({//定义一个axios实例
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
    instance(config).then(res => {
      resolve(res)//根据传入的配置调用实例发送请求，如果成功则直接将结果装入resolve并调用
    }).catch(err => {
      reject(err)//失败则将结果装入reject并调用
    })
  }))
}

export function request4(config) {
  const instance = axios.create({//定义一个axios实例
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  instance.interceptors.request.use(config => {
    console.log(config);//打印拦截到的请求信息
    return config;//拦截完毕后必须放行
  },error => {
    console.log(error);
  })
  instance.interceptors.response.use(res => {
    console.log(res);
    res = res.data.data;//取出响应中的data
    return res;//拦截完毕后必须放行
  },err => {
    console.log(err);
  })
  //这里的instance返回的本身就是个promise,所以可以直接将其返回到调用的地方
  return instance(config)
}
