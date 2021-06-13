import {request2} from './request.js';

export function getDetail(iid){
  return request2({
    url:'/detail/',
    params:{
      iid
    }
  })
}

// 导图推荐数据
export function getRecommend(){
  return request2({
    url:'/recommend'
  })
}

export class Goods{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title//商品标题
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.lowPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop{
  constructor(shopInfo){
    this.name = shopInfo.name
    this.logo = shopInfo.shopLogo
    this.shopUrl = shopInfo.shopUrl
    this.score = shopInfo.score
    this.fans = shopInfo.cFans
    this.goodsCount = shopInfo.cGoods
    this.sells = shopInfo.cSells
  }
}

export class GoodsParams {
  constructor(info, rule){
    // 注：images可能没有值，某些上平有值，某些有值
    this.images = info.images ? info.images:''
    this.infos = info.set
    this.sizes = rule.tables
  }
}

export class Comment{
  constructor(list){
    this.content = list.content
    this.created = list.created
    this.explain = list.explain
    this.style = list.style
    this.user = list.user
    this.extraInfo = list.extraInfo
    this.images = list.images? list.images:''
  }
}