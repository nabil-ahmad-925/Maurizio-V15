import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {

   }

  postRequest(httpMethod:'post'|'GET'|'put', endpoint:string, data:object){
    console.log("called login")
    return new Promise((resolve, reject)=>{
      let config = {
        data,
        method : httpMethod,
        url: endpoint,
        baseURL: "http://rcu-smartcity.smartu.ae/",
        timeout : 180000,
        headers : {
          "transactionId": this.generateUUID(),
          "Content-Type" : "application/json",
          "Authorization": 'Bearer '+ localStorage.getItem("token")
      }
      }
      axios.request(config)
      .then((res)=> {
        resolve(res)
    }).catch((err)=> reject(err))
    })

  }
  generateUUID () {
    var fmt = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

        return fmt.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

  getLoggedInUserInfo(){
    return JSON.parse(localStorage.getItem("logged_in_user_data") as string)
  }

   sumQueryParams(uri:any, queryParams:any) {
    if (queryParams && queryParams.length) {
        uri = uri + '?';
        for (var k = 0; k < queryParams.length; k++) {
            if (queryParams[k].name) {
                if (k === 0) {
                    uri = uri + queryParams[k].name + '=' + queryParams[k].value;
                } else {
                    uri = uri + '&' + queryParams[k].name + '=' + queryParams[k].value;
                }
            }
        }
        return uri;
    }else{
        return uri;
    }
  }



  getRequest(httpMethod:'post'|'GET'|'put', endpoint:string,data:any,queryParams:any){
    console.log("called login")
    return new Promise((resolve, reject)=>{

       data =  {};
       endpoint = this.sumQueryParams(endpoint, queryParams);

      let config = {
        data,
        method : httpMethod,
        url: endpoint,
        baseURL: "http://rcu-smartcity.smartu.ae/",
        timeout : 180000,
        headers : {
          "transactionId": this.generateUUID(),
          "Content-Type" : "application/json",
          "Authorization": 'Bearer '+ localStorage.getItem("token")
      }
      }
      axios.request(config)
      .then((res)=> {
        resolve(res)
    }).catch((err)=> reject(err))
    })

  }

















}
