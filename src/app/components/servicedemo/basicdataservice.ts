/**
 * Created by WGP on 2017/4/25.
 */
import { Injectable, Input } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HOST_API_PATH, HOST_PATH } from './constant';
import { User } from '../model/user-model';

@Injectable()


export abstract class BasicDataService {
    protected http: Http;
    private readonly host = HOST_PATH;
    private readonly host_api = HOST_API_PATH;

    constructor(http: Http) {


    }

    public set path(path) {
        this.path = path;
    }
    public get currentUser(): User {
        const currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser;
    }

    public get token(): string {
        if (this.currentUser != null) {
            return this.currentUser.password;
        } else {
            return null;
        }
    }

    public getItem(id) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', this.token);
        const searchParams = new URLSearchParams();
        console.log(this.currentUser);
        let url = this.host_api + '/' + this.path;
        return this.http.get(url + '/' + id, { search: searchParams, headers: headers })
            .map(response => response.json());
    }

/**
 * 获取多条记录
 * @param path 
 */
    public getList(path:string) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        headers.append('Authorization', this.token);

        const searchParams = new URLSearchParams();
        let url = this.host_api + '/' + this.path;
        return this.http.get(url, { search: searchParams, headers: headers })
            .map(response => response.json());
    }


    public getListByPageInfo(page:string, pageSize:string,path:string) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        headers.append('Authorization', this.token);

        const searchParams = new URLSearchParams();
        searchParams.set('page', page);
        searchParams.set('pageSize', pageSize);
        // searchParams.set('total', total);
        let url = this.host_api +　'/' + path;
        return this.http.get(url , { search: searchParams, headers: headers })
            .map(response => response.json());
    }

    /**
     * 添加单个对象
     * @param data 对象
     */
    public create(data,path:string) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
          let url = this.host_api +　'/' + path;
        return this.http.post(url, JSON.stringify(data), { headers: headers })
            .map(res => res.json());
    }

    /**
     * 编辑服务
     * @param data 实体对象
     */
    public edit(data,path) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        let url = this.host_api +　'/' + path;
        return this.http.put(url, JSON.stringify(data), { headers: headers })
            .map(res => res.json());
    }
    /**
     * 根据id删除对象
     * @param id 
     */
    public delete(id,path) {
        if (id) {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', this.token);
              let url = this.host_api +　'/' + path;
            return this.http.delete(url + '/' + id, { headers: headers })
                .map(res => res.json());
        }
    }



}