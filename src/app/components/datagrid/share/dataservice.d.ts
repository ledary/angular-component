import { Injectable,Input}    from '@angular/core';
import { Headers, Http,Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export declare class DataService  {
  
  private Configuration:any;
   constructor(http: Http);
  
   
public getConfiguration():any;
private handleError(error: any): Promise<any>;

private getWebfig():void;

//查询数据
public getData(url:string):Promise<any>;
//删除数据
public delete(url:string):Promise<any>;
//更新数据
public update(url:string):Promise<any>;
//添加数据
public create(url:string):Promise<any>;
}
export {DataGridModule} from '../datagrid/datagrid.module';
export declare class DataGridComponent  {
	public open():void;
	public closeSrc():void;

	}