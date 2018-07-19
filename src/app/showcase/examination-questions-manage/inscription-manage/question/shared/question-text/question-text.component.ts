import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {QuestionComponent} from '../../question.component';

// 答案别名连接符
const aliasSignConst = '@#';
// 答案连接符
const answerSignConst = '|';


@Component({
  moduleId: module.id,
  selector: 'question-text',
  templateUrl: 'question-text.component.html',
  styleUrls: ['question-text.component.css'],
  // encapsulation: ViewEncapsulation.None  // 相当于全局的样式
})
export class QuestionTextComponent extends QuestionComponent implements OnInit {
  // 别名
  readonly aliasConst = '1';
// 不是别名
  readonly unAliasConst = '0';
// 乱序
  readonly orderConst = '1';
// 不是乱序
  readonly unOrderConst = '0';
// 有效
  readonly effectiveConst = 't';
// 无效
  readonly unEffectiveConst = 'f';

  display = false;
  message = '';
  msgs: any;
  @ViewChild('modal')
  modal: ElementRef;
  @Input() smallQuestion: any;
  @Input() Code: string;
  @Input() addProblemModel: any;
  // 是否编辑
  @Input() editable: boolean;
  // 用来判断是哪种题型
  @Input() order: number;
  //
  @Input() mix = 0;
  //
  @Input() i: number;
  // 删除时emit
  @Output() deleteQuestionRequest: EventEmitter<any> = new EventEmitter();
  // 输入题干失去焦点 触发
  @Output() getOtherQuestionRequest: EventEmitter<any> = new EventEmitter();

  // 要保存的试题
  // 保存试题触发
  @Output() saveProblemEmit: EventEmitter<any> = new EventEmitter();
  /********重构题库新添加字段************* */
    // 显示别名设置字段，默认不显示
  @Input() aliasFlag = false;
  // 显示乱序设置字段 默认不显示
  @Input() outOfOrderFlag = false;
  // 是否编辑字段 默认为编辑
  @Input() editFlag = true;
  @Input() courseId: string;
  // 承载答案字段 AnswerModel类型数组
  answerArray = [];
  // 承载答案的别名字段 为二维数组
  aliasAnswerArray = [];
  private index;
  private url: string;
  private realUrl: string;
  private urlName: string;
  private test: Array<number>;
  private uploadUrl = 'http://192.168.22.52:8080/exam-web/questionBankManager/FileUpload';  // 上传图片的url
  // 上传图片
  public uploader: FileUploader = new FileUploader({
    url: this.uploadUrl,
    method: 'POST',
    allowedFileType: ['image']

  });
  private el: HTMLElement;
  private imageUrl;

  /************************************* */



  ngOnInit() {




  }

  analysisQuestionContent() {
    this.userText = this.onConvert(this.addProblemModel.questionContent); // 题干内容
  }

  onDeleteQuestion() {
    this.addProblemModel = null;
    this.answerArray = [];
    this.aliasAnswerArray = [];
  }

///

  // solr查询相似题
  getOtherQuestion(obj: any) {
    this.onBlur();
    this.getOtherQuestionRequest.emit(this.addProblemModel.questionContent);
  }

  // TODO:
  /**************未重构部分*********************************************** */

  onDeleteOption(index: number) {
    if (this.addProblemModel.questionSubEntityList.length <= 1) {
      return;
    }
    this.addProblemModel.blankCount;
    this.answerArray.splice(index, 1);
    // 删除当前的选项
    this.addProblemModel.questionSubEntityList.splice(index, 1);
    this.addProblemModel.questionSubEntityList.forEach(x => {
      if (x.optionOrder > index) {
        --x.optionOrder;
      }
    });
    this.test = new Array(this.addProblemModel.blankCount);
  }

  // 关闭模态框
  close(el: HTMLElement) {
    el.style.visibility = 'hidden';
  }

  // 打开上传图片模态框
  openUpload(el: HTMLElement, index?: number) {

    if (this.isEmpty(this.courseId)) {
      this.showMessage('请选择课程');
      return;
    }
    this.index = index;
    this.el = el;
    el.style.visibility = 'visible';
  }

  uploadFile() {
    try {
      const obj = this;
      // 上传
      this.uploader.queue[this.uploader.queue.length - 1].onSuccess = function (response, status, headers) {
        const tempRes = JSON.parse(response);
        //  上传文件成功
        if (tempRes.code === '0000') {
          obj.url = tempRes.data.url;
          obj.realUrl = tempRes.data.realUrl;
          obj.urlName = obj.courseId + tempRes.data.urlName;
          if (obj.index == null) {
            obj.questionImg();
          } else {
            obj.optionImg();
          }
        }
      };
      this.uploader.queue[this.uploader.queue.length - 1].upload(); // 开始上传
    } catch (error) {
      this.msgs = [{
        severity: 'success',
        summary: '提示',
        detail: '请上传图片格式文件'
      }];
    }

    this.close(this.modal.nativeElement); // 关闭模块框
  }

  questionImg() {
    console.log(this.addProblemModel);
    const el = document.getElementById(this.addProblemModel.questionCode + '_' + this.i);
    el.setAttribute('src', this.realUrl);
    el.style.display = 'block';
    this.addProblemModel.imageId = this.realUrl;
    this.addProblemModel.imageName = this.urlName;

  }

  optionImg() {
    console.log(this.addProblemModel);
    const el = document.getElementById(this.addProblemModel.questionCode + '_' + this.i + '_' + this.index);
    el.setAttribute('src', this.realUrl);
    el.style.display = 'block';
    this.addProblemModel.questionSubEntityList[this.index].imageId = this.realUrl;
    this.addProblemModel.questionSubEntityList[this.index].imageName = this.urlName;
  }

  /**
   * 杨晓风
   * 2017年11月5日08:52:05
   *modal框可拖拽
   */
  draggable() {
    $('.modal-dialog').draggable();
  }

  /*设置答案是否可以乱序 */
  setIsOrder(IsOrder: any) {
    this.addProblemModel.isOutOfOrder = IsOrder.toString();
    this.addProblemModel.answer = IsOrder.toString();
  }


  /****************************************************************************** */


  // 改变填空题的空数，增加/去除 相应的答案数量 -武刚鹏-2018年3月9日17:22:45
  onAddOption() {
  
  }

  /*****************新题库重构******************************* */

  /*
  *添加答案的个数 -武刚鹏-2018年3月9日17:23:53
  */
  addAnswer() {
   

  }

  /**
   * 删除一个空的答案 -武刚鹏-2018年3月9日17:24:41
   */

  deleteAnswer() {
    if (this.addProblemModel.blankCount == 1) {
      this.showMessage('至少有一个答案');
      return;
    }
    this.addProblemModel.blankCount--;
    this.answerArray.pop();
    this.aliasAnswerArray.pop();
  }

  /**
   * 添加别名答案 -武刚鹏-2018年3月9日17:24:47
   */

  addAliasAnswer(i: number) {
    this.answerArray[i].aliasAnswer.push('');
    this.aliasAnswerArray.push([]);
  }


  /*设置答案是否有别名 */
  setIsAlias() {
    // 如果包含别名的连接符，则设置为有别名
    if (this.addProblemModel.answer.indexOf(aliasSignConst) == -1) {
      this.addProblemModel.isAlias = this.unAliasConst;
    } else {
      this.addProblemModel.isAlias = this.aliasConst;
    }
  }


  showMessage(str: string) {
    this.display = true;
    this.message = str;
  }

  /**
   * emit试题给父组件
   * 保存试题 -武刚鹏 -2018年3月9日17:25:36
   */
  saveProblemModel() {
    if (!this.analysisUserAnswerToAnswer()) {
      this.showMessage('请填写答案的必填项！');
      return;
    } else {
      this.setIsAlias();
      console.log('----save addProblemModel');
      this.saveProblemEmit.emit(this.addProblemModel);
    }

  }

  /**
   * 解析答案为用户界面显示的答案 -武刚鹏-2018年3月9日17:27:35
   *
   * */
  analysisAnswerToUserAnswer() {


  }

  /**
   * 解析答案为实体的答案-武刚鹏-2018年3月9日17:27:08
   */
  analysisUserAnswerToAnswer() {
    this.addProblemModel.isAlias = this.unAliasConst;
    const len = this.answerArray.length;
    console.log(this.answerArray);

    for (let i = 0; i < len; i++) {
      // 校验每个填空的必填选项，没有填写，返回false
      let answer = this.answerArray[i].mustAnswer.trim();
      if (this.isEmpty(answer)) {
        this.addProblemModel.answer = '';
        alert(2);
        return false;
      }
      // 答案开始拼接别名
      if (this.answerArray[i].alias != null && this.answerArray[i].alias.trim() != '') {
        answer = answer + aliasSignConst + this.answerArray[i].alias.trim();

        if (this.aliasAnswerArray[i] != null) {
          this.aliasAnswerArray[i].forEach(str => {
            if (!this.isEmpty(str)) {
              answer = answer + aliasSignConst + str.trim();
            }
          });
        }

      }
      if (i == 0) {
        this.addProblemModel.answer = answer;
      } else {
        this.addProblemModel.answer = this.addProblemModel.answer + answerSignConst + answer;
      }
    }
    return true;
  }

  /**
   * 判断字符是否为null或为空字符串
   * @param str
   */
  isEmpty(str: String) {
    if (str == null || str.trim() == '') {
      return true;
    }
    return false;
  }

  /***************************************************************************************************** */

  /***********测试区域**************** */
  /**
   * 拖动一个元素到另一个元素里 - 武刚鹏-2018年3月9日17:29:34
   */
  dragElementToElement() {
    const obj = this;
    // 拖拽元素
    const box = document.getElementById('box');
    // 目标元素
    const target = document.getElementById('box2');

    box.ondragstart = function (e) {
      // console.log(1,"开始拖拽");
      // dataTransfer 承载体，贯穿整个拖拽周期，使用setData放置数据，getData获取数据
      console.log(e.dataTransfer);
      e.dataTransfer.effectAllowed = 'move';
      // e.target就是被拖拽的元素
      e.dataTransfer.setData('text', e.srcElement.id);
    };
    // 浏览器禁止在元素上drop (禁止将其他元素拖到目标元素上放手)
    // 需要在 dragover 时阻值浏览器的默认事件才能出发  ondrop(drop:落下，投下)
    target.ondragover = function (e) {
      // console.log(6,"在目标元素上移动");
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    };
    target.ondrop = function (e) {
      // console.log(7,"在目标元素上放手");
      // 元素已经存在时，使用appendChild拼接到另一个元素中时，并且从原来父元素中删除
      // console.log(e.dataTransfer.getData("text"));
      const eId = e.dataTransfer.getData('text');
      const m = document.querySelector('#' + eId).cloneNode();
      target.appendChild(m);
    };
  }

  /********************************* */

}

