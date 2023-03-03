import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  items = [
    {
      name: "Iphone 14 Pro Max",
      description: "Iphone 14 Pro Max 128GB Gold Color",
      raiting: 5,
      realPage: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-128gb-zolotistyi-106363302/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4e/h5d/63073981693982/apple-iphone-14-pro-max-128gb-zolotistyj-106363302-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/hbc/63073981923358/apple-iphone-14-pro-max-128gb-zolotistyj-106363302-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/heb/63073982152734/apple-iphone-14-pro-max-128gb-zolotistyj-106363302-3.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h09/h4c/63073982382110/apple-iphone-14-pro-max-128gb-zolotistyj-106363302-4.jpg"
      ]
    },
    {
      name: "Macbook Pro 13",
      description:"Reviews Notebook Apple MacBook Air 13 MGN63 gray",
      raiting: 4,
      realPage: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/h97/50489392824350/apple-macbook-air-13-mgn63-seryj-100797845-4.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/h9f/50489392365598/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-3-Container.jpg"
      ]
    },
    {
      name: "Dior Sauvage 2015",
      description:"Reviews of Dior Sauvage 2015 eau de toilette EDT 100 ml",
      raiting: 5,
      realPage: "https://kaspi.kz/shop/p/dior-sauvage-2015-tualetnaja-voda-edt-100-ml-17301124/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h7a/31667179225118/dior-sauvage-2015-edt-100-ml-17301124-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/h03/31667180896286/dior-sauvage-2015-edt-100-ml-17301124-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h95/31667184042014/dior-sauvage-2015-edt-100-ml-17301124-3.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h7a/31667179225118/dior-sauvage-2015-edt-100-ml-17301124-1.jpg"
      ]
    },
    {
      name: "Apple Watch SE",
      description:"Reviews for Apple Watch SE 2nd Gen 40mm Gold",
      raiting: 5,
      realPage: "https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-zolotistyi-106362759/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd7/h19/62711073636382/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-2.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/hc2/62281060286494/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-3.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h46/62711073407006/apple-watch-se-2nd-generation-40-mm-zolotistyj-106362759-1.jpg"
      ]
    },
    {
      name: "Tablet Apple iPad Pro 2021",
      description:"Tablet Apple iPad Pro 2021 11 256GB Wi-Fi silver",
      raiting: 5,
      realPage: "https://kaspi.kz/shop/p/apple-ipad-pro-2021-11-256gb-wi-fi-serebristyi-101594351/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he2/h27/34155841847326/apple-ipad-pro-11-2021-256gb-wi-fi-mhqv3-serebristyj-101594351-1-Container.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h0e/34155845845022/apple-ipad-pro-11-2021-256gb-wi-fi-mhqv3-serebristyj-101594351-2-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/hf2/34155852693534/apple-ipad-pro-11-2021-256gb-wi-fi-mhqv3-serebristyj-101594351-3-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he8/h53/34155857477662/apple-ipad-pro-11-2021-256gb-wi-fi-mhqv3-serebristyj-101594351-4-Container.jpg"
      ]
    },
    {
      name: "TV Samsung",
      description:"TV Samsung UE43T5300AUXCE 109 cm black",
      raiting: 5,
      realPage: "https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hb2/49319748927518/samsung-ue43t5300au-chernyi-100182013-3.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/hcb/49319749156894/samsung-ue43t5300au-chernyi-100182013-4.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h69/49319749615646/samsung-ue43t5300au-chernyi-100182013-5.jpg"
      ]
    },
    {
      name: "Wardrobe Grand Turin",
      description:"Wardrobe Grand Turin 5D, 225x50x218 cm, white",
      raiting: 5,
      realPage: "https://kaspi.kz/shop/p/grand-turin-5d-225x50x218-sm-belyi-105072998/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h65/51132067053598/skaf-grand-turin-5d-225x50x218-sm-ldsp-belyj-105072998-1.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd7/h60/51132067708958/skaf-grand-turin-5d-225x50x218-sm-ldsp-belyj-105072998-2.jpg",
        "https://kaspi.kz/shop/p/grand-turin-5d-225x50x218-sm-belyi-105072998/?c=750000000#!/item",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd7/h60/51132067708958/skaf-grand-turin-5d-225x50x218-sm-ldsp-belyj-105072998-2.jpg"
      ]
    },
    {
      name: "Charger Apple",
      description:"Charger Apple 20W USB-C Power Adapter white",
      raiting: 5,
      realPage: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/h84/44833409892382/apple-20w-usb-c-power-adapter-100984093-1-Container.jpg",
      galery: [
        "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000#!/item",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2b/hbf/44833411006494/apple-20w-usb-c-power-adapter-100984093-3-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/h84/44833409892382/apple-20w-usb-c-power-adapter-100984093-1-Container.jpg"
      ]
    },
    {
      name: "Headphones Apple AirPods",
      description:"Headphones Apple AirPods with Charging Case white",
      raiting: 5,
      realPage: "https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000#!/item",
      currectImg: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h3d/46637140508702/apple-airpods-2-with-charging-case-belyj-4804056-2-Container.jpg",
      galery: [
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/h40/46637140738078/apple-airpods-2-with-charging-case-belyj-4804056-3-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h5b/46637140967454/apple-airpods-2-with-charging-case-belyj-4804056-4-Container.jpg",
        "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/hb5/46637145030686/apple-airpods-with-charging-case-belyj-4804056-5.jpg"
      ]
    },
    {name: "", description: "", raiting: 3, realPage: "", currectImg: "", galery: ""},
    {name: "", description: "", raiting: 2, realPage: "", currectImg: "", galery: ""},
    {name: "", description: "", raiting: 4, realPage: "", currectImg: "", galery: ""},
    {name: "", description: "", raiting: 5, realPage: "", currectImg: "", galery: ""},
    {name: "", description: "", raiting: 2, realPage: "", currectImg: "", galery: ""},
    {name: "", description: "", raiting: 1, realPage: "", currectImg: "", galery: ""},
    {name: "", description: "", raiting: 4, realPage: "", currectImg: "", galery: ""},
    {name: "", description: "", raiting: 5, realPage: "", currectImg: "", galery: ""},
  ]

  constructor(private router: Router) {
  }

  goToRealPage(i: number) {
    document.location.href = this.items[i].realPage;
  }

  changeCurrentImg(i: number, j: number) {
    this.items[i].currectImg = this.items[i].galery[j];
  }

  shareWithTelegram(i: number) {
    document.location.href = "https://t.me/share/url?url=" + this.items[i].realPage
  }
}
