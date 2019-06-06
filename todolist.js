window.addEventListener('load',function () {
        let table=document.querySelectorAll ('.table > li');
        let content=document.querySelector('.content');
        // console.log(content);
        let prev=0;
        let type='all';
        let todolist=[
            {
                id:1,content:'端午节能不做作业吗？',ctime:'2019/6/8',status:false
            },
            {
                id:2,content:'端午节能还有粽子吃吗？',ctime:'2019/6/9',status:true
            },
            {
                id:3,content:'端午节能还有人陪我吃饭吗？',ctime:'2019/6/10',status:false
            },
            {
                id:4,content:'端午节就剩我一个人了？',ctime:'2019/6/7',status:true
            },
            {
                id:5,content:'端午节最后可以休息了吗？',ctime:'2019/6/8',status:false
            }
        ]
        let checkboxs=document.querySelectorAll ('input[type=checkbox]');
        console.log(checkboxs);
        checkboxs.forEach(ele=>{
            ele.onclick=function () {
                let id=this.parentNode.id;
                todolist.filter(ele=>ele.id==id)[0];
                arr.status=true;
            }
        });
        table.forEach(function (ele,index) {
            ele.onclick=function () {
                table[prev].classList.remove('hot');
                this.classList.add('hot');
                prev=index;
                let type=this.getAttribute ('type');
                // console.log(type);

                // let arr=[];
                // switch (type) {
                //     case 'all':
                //         arr=todolist;
                //         break;
                //     case 'done':
                //         arr=todolist.filter(function (ele) {
                //             return ele.status;
                //         })
                //         break;
                //     case 'doing':
                //         arr=todolist.filter(function (ele) {
                //             return !ele.status;
                //         })
                //         break;
                // }

                // console.log(arr);
                render(filterDate(type));
            };
            table[0].onclick();

        // table[0].onclick();




   ////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
* 数据---》视图
* li--->数组元素
* 复选框---》数组元素status(li-->id)
*
*
* 子元素--》父元素
* */



content.onclick=function(e){
    let target=e.target;
    let id =target.parentNode.id;
    console.log(id);
    if(target.nodeName =='DEL'){
    //    id
    //    splice-->index--->findIndex()
        let index=todolist.findIndex(ele=>ele.id== id);
        console.log(index);
        todolist.splice(index,1);

    }else if(target.nodeName =='INPUT'){
        //找到该条记录id,finfIndex,filter(注意filter返回是数组)
        // let find=todoList.findIndex(ele=>ele.id==id);
        let ele=todolist.filter(ele=>ele.id==id)[0];
        //获取当前复选框状态
        // console.log(ele);
        ele.status=target.checked;
        // console.log(ele);
    }
    render(filterDate(type));
};

////////////////////////////////////添加/////////////////////////////////////////////////////
        let forms=document.forms[0];
        console.dir(forms);
        let textbtn=forms.elements['content'];
        let submitBtn=forms.elements[1];
        submitBtn.onclick=function () {
            
        }

////////////////////////////////////////////////////////////////////////////////////////
            function filterDate(type) {
                let arr=[];
                switch (type) {
                    case 'all':
                        arr=todolist;
                        break;
                    case 'done':
                        arr=todolist.filter(ele=>ele.status)
                        break;
                    case 'doing':
                        arr=todolist.filter(ele=>!ele.status)
                        break;
                }
                return arr;
            }
        });


        //////////////////////////////////////////////////////////////////////////////////////////////////////
        // render(todolist);
        //         // let doing=todolist.filter(function (ele) {
        //         //     return ele.status;
        //         // })
//    渲染对象
function render(arr) {
    let html=``;
    arr.forEach(ele=> {
        if(ele.status){
            html+=`
                <li id="${ele.id}">
               <input type="checkbox"checked="checked">  
               <p>${ele.content}</p>
               <time>${ele.ctime}</time>
               <del>X</del>
               </li>
            `
        }else{
            html+=`
                <li id="${ele.id}">
               <input type="checkbox">  
               <p>${ele.content}</p>
               <time>${ele.ctime}</time>
               <del>X</del>
</li>
            `
        }

    })
    content.innerHTML=html;
}
        // function render(arr) {
        //     // Array.isArray   arr instanceof Array   arr.constructor.name
        //     let html=``;
        //     arr.forEach(function (elem,index) {
        //         if(elem.status){
        //             html += `
        //     <li>
        //         <input type="checkbox"checked="checked"> <p>${elem.content}</p> <time>${elem.ctime}</time>
        //     </li>
        //         `
        //         }else
        //         {
        //             html += `
        //         <li>
        //             <input type="checkbox" > <p>${elem.content}</p> <time>${elem.ctime}</time>
        //         </li>
        //             `
        //         }
        //     });
        //   content.innerHTML=html;
        // }
    }




)

