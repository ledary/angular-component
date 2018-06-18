import {EventEmitter, OnInit} from '@angular/core';


export class QuestionComponent implements OnInit {


  addQuestionModel: any;
  addProblemModel: any;
  backupQuestion: any;
  editable = false;
  deleteQuestionRequest: EventEmitter<any> = new EventEmitter();
  userText: string; // 用户输入的文本
  showText: string; // 处理完之后文本
  tearchAnswer = '';

  ngOnInit() {

    this.copyQuestion();
  }

  public copyQuestion() {
  

  }

  onEdit() {
  }

  onSave() {
    this.copyQuestion();
  }

  onCancel() {
   
  }

  onDelete() {
    this.deleteQuestionRequest.emit(this.addQuestionModel);
    this.deleteQuestionRequest.emit(this.addProblemModel);
  }

  /**
   * 保存用户输入的格式
   * @param event
   */
  onKeyPress() {

    let saveText = '';
    if (this.userText == null) {
      return;
    }
    // 转换为字符串数组进行处理
    const saveTextChar: string[] = this.userText.split('');

    for (let i = 0; i < saveTextChar.length; i++) {
      if (saveTextChar[i] == ' ') {
        saveTextChar[i] = '&nbsp;&nbsp;';
      }
      if (saveTextChar[i] == '\n') {
        saveTextChar[i] = '<br>';
      }
    }
    console.log(saveTextChar);
    // 将要存储文本赋给展示文本
    for (let i = 0; i < saveTextChar.length; i++) {
      saveText = saveText + saveTextChar[i];
    }
    this.showText = saveText;
    console.log(this.showText);
  }

  /**
   * 失去焦点时将有格式的内容保存在实体中
   */
  onBlur() {
    console.log('走到question组件里onblur事件' + this.showText + '前面是showtext' + this.addProblemModel.questionContent + '前面是questioncontent');
    this.addProblemModel.questionContent = this.showText;
  }

  /**
   * 将有格式的替换成没有格式的
   */
  onConvert(obj: any) {
    let showText;
    showText = obj.replace(/&nbsp;/g, ' ');
    showText = showText.replace(/<br>/g, '\n');
    return showText;
  }

  /* 处理答案 */
  processAnswer(businessList) {
    let answer = '';
    businessList.forEach((element, index) => {
      answer += '业务' + (index + 1) + '&nbsp;&nbsp;:&nbsp;&nbsp;' + element.explain + '<br>';
      answer += this.joinAnswer(element.borrowList);
      answer += this.joinAnswer(element.loanList);
      answer += '<br>';
    });
    return answer;
  }

  /* 连接答案 */
  joinAnswer(item) {
    let answer = '';
    item.forEach(element => {
      answer += '&nbsp;&nbsp;&nbsp;&nbsp;' + element.type + '&nbsp;&nbsp;&nbsp;&nbsp;' + element.subject
        + '&nbsp;&nbsp;&nbsp;&nbsp;' + element.explain + '&nbsp;&nbsp;&nbsp;&nbsp;' + element.amount + '<br>';
    });
    return answer;
  }


}
