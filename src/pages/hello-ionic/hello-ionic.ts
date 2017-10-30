import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

import { CreatePage } from '../create/create';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  
  items: Array<{title: string,content: string;}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.items = [
  			{	
  				title: '示例：今日待办清单',
  				content: '7:00早起跑步\n8:00开始吃早点\n8:30开始上班\n17:30下班\n18:00会面'
  			},
  			{
  				title: 'Qracle账号信息',
  				content: "用户名： 13206650267@163.com    密码： 123456789\n   注册时间：2017-09-10"
  			},
        {
          title: '有比特币平台称可将资产移至理财平台',
          content: '监管层全面叫停比特币交易后，多家平台都发布了限期关停人民币与比特币交易业务的公告。比特币交易平台“中国比特币”也发布公告称，其从9月15日24点起，暂停新用户注册、人民币充值业务。不过，记者留意到，其在公告中还称，“用户也可暂时将比特币莱特币提到全球知名钱包Bitbank（比特币银行）进行保管，Bitbank也将尽快推出ETH/ETC的资产保管服务。”“比特币理财暂时不影响。”记者昨日致电Bitbank官网电话，对方表示，现在还可以购买比特币理财服务。Bitbank官网资料显示，假设100BTC（比特币）存入该平台，不同期限收益不同：活期年化收益率为1.6%、三月期理财为4.6%、六月期理财为5.6%，一年期理财则为6.6%。对于后三种定期理财，可以通过转让进行解约。此外，官网上还提供比特币P2P借贷服务，目前截止到25期均已结束。以第25期为例，周期为180天，利率8.91%，借币总量为2500BTC。此外，平台宣称，针对特别优质的项目，Bitbank会推出保本保息服务，降低投资者风险。根据巴比特资讯，中国比特币和Bitbank均为比银集团旗下企业。中国比特币官网称，其创始人花松秀先后创办了十星购物网、CHBTC、Bitbank、币网等多个互联网项目。“Bitbank花松秀”的认证微博也显示其为Bitbank和中国比特币的CEO。'
        },
        {
          title: 'Starting a New Ionic App: ionic start MyIonicProject tutorial',
          content: 'tabs : a simple 3 tab layout;sidemenu: a layout with a swipable menu on the side;blank: a bare starter with a single page;;super: starter project with over 14 ready to use page designs;tutorial: a guided starter project'
        },
  		];
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  create(){
    this.navCtrl.push(CreatePage);
  }

  
}
