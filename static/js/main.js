let form = '<div class="row">\
    <form class="col s12" action="/add" method = "get">\
      <div class="row">\
        <div class="input-field col s12">\
          <textarea name="title" id="title" class="materialize-textarea"></textarea>\
          <label for="title">제목</label>\
        </div>\
      </div>\
      <div class="row">\
        <div class="input-field col s12">\
          <textarea name="content" id="content" class="materialize-textarea"></textarea>\
          <label for="content">내용</label>\
        </div>\
      </div>\
      <input type = "submit" class="waves-effect waves-light btn" id="submit_button" value="제출"/>\
    </form>\
  </div>';
document.addEventListener("DOMContentLoaded", function(event) {
  let addButton = document.getElementById('add_button');
  let editButton = document.getElementById('edit_button');
  let options = document.getElementById('options');
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, options);
  addButton.addEventListener('click', function(){
    options.innerHTML += form;
    document.getElementById('submit_button').addEventListener('click', function(){
      if (!document.getElementById('title').value | !document.getElementById('content').value){
        alert('모든 값을 입력해주세요');
      }
    });
  });
});