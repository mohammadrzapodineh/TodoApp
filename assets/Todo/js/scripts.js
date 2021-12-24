
/*

Table of Contents

01. Css Loading Util
02. Theme Selector And Initializer
*/

/* 01. Css Loading Util */
function loadStyle(href, callback) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].href == href) {
      return;
    }
  }
  var head = document.getElementsByTagName("head")[0];
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = href;
  if (callback) {
    link.onload = function () {
      callback();
    };
  }
  var mainCss = $(head).find('[href$="main.css"]');
  if (mainCss.length !== 0) {
    mainCss[0].before(link);
  } else {
    head.appendChild(link);
  }
}

/* 02. Theme Selector, Layout Direction And Initializer */
(function ($) {
  if ($().dropzone) {
    Dropzone.autoDiscover = false;
  }

  var themeColorsDom = /*html*/`
  <div class="theme-colors">
    <div class="p-4">
    <p class="text-muted mb-2">تم روشن</p>
    <div class="d-flex flex-row justify-content-between mb-3">
      <a href="#" data-theme="dore.light.bluenavy.min.css" class="theme-color theme-color-bluenavy"></a>
      <a href="#" data-theme="dore.light.blueyale.min.css" class="theme-color theme-color-blueyale"></a>
      <a href="#" data-theme="dore.light.blueolympic.min.css" class="theme-color theme-color-blueolympic"></a>
      <a href="#" data-theme="dore.light.greenmoss.min.css" class="theme-color theme-color-greenmoss"></a>
      <a href="#" data-theme="dore.light.greenlime.min.css" class="theme-color theme-color-greenlime"></a>
    </div>
    <div class="d-flex flex-row justify-content-between mb-4">
      <a href="#" data-theme="dore.light.purplemonster.min.css" class="theme-color theme-color-purplemonster"></a>
      <a href="#" data-theme="dore.light.orangecarrot.min.css" class="theme-color theme-color-orangecarrot"></a>
      <a href="#" data-theme="dore.light.redruby.min.css" class="theme-color theme-color-redruby"></a>
      <a href="#" data-theme="dore.light.yellowgranola.min.css" class="theme-color theme-color-yellowgranola"></a>
      <a href="#" data-theme="dore.light.greysteel.min.css" class="theme-color theme-color-greysteel"></a>
    </div>
    <p class="text-muted mb-2">تم تیره</p>
    <div class="d-flex flex-row justify-content-between mb-3">
      <a href="#" data-theme="dore.dark.bluenavy.min.css" class="theme-color theme-color-bluenavy"></a>
      <a href="#" data-theme="dore.dark.blueyale.min.css" class="theme-color theme-color-blueyale"></a>
      <a href="#" data-theme="dore.dark.blueolympic.min.css" class="theme-color theme-color-blueolympic"></a>
      <a href="#" data-theme="dore.dark.greenmoss.min.css" class="theme-color theme-color-greenmoss"></a>
      <a href="#" data-theme="dore.dark.greenlime.min.css" class="theme-color theme-color-greenlime"></a>
    </div>
    <div class="d-flex flex-row justify-content-between">
    <a href="#" data-theme="dore.dark.purplemonster.min.css" class="theme-color theme-color-purplemonster"></a>
    <a href="#" data-theme="dore.dark.orangecarrot.min.css" class="theme-color theme-color-orangecarrot"></a>
    <a href="#" data-theme="dore.dark.redruby.min.css" class="theme-color theme-color-redruby"></a>
    <a href="#" data-theme="dore.dark.yellowgranola.min.css" class="theme-color theme-color-yellowgranola"></a>
    <a href="#" data-theme="dore.dark.greysteel.min.css" class="theme-color theme-color-greysteel"></a>
  </div>
  </div>
  <div class="p-4">
    <p class="text-muted mb-2">گِرد بودن حاشیه ها</p>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="roundedRadio" name="radiusRadio" class="custom-control-input radius-radio" data-radius="rounded">
      <label class="custom-control-label" for="roundedRadio">گِرد</label>
    </div>
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="flatRadio" name="radiusRadio" class="custom-control-input radius-radio" data-radius="flat">
      <label class="custom-control-label" for="flatRadio">صاف</label>
    </div>
  </div>
  <div class="p-4">
    <p class="text-muted mb-2">چینش صحفه </p>
    <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="ltrRadio" name="directionRadio" class="custom-control-input direction-radio" data-direction="ltr">
    <label class="custom-control-label" for="ltrRadio">چپ به راست </label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="rtlRadio" name="directionRadio" class="custom-control-input direction-radio" data-direction="rtl">
    <label class="custom-control-label" for="rtlRadio">راست به جپ</label>
  </div>
</div>
<a href="#" class="theme-button"> <i class="simple-icon-magic-wand"></i> </a>
</div>
`;

  $("body").append(themeColorsDom);


  /* Default Theme Color, Border Radius and  Direction */
  var theme = "dore.light.bluenavy.min.css";
  var direction = "rtl";
  var radius = "rounded";

  if (typeof Storage !== "undefined") {
    if (localStorage.getItem("dore-theme-color")) {
      theme = localStorage.getItem("dore-theme-color");
    } else {
      localStorage.setItem("dore-theme-color", theme);
    }
    if (localStorage.getItem("dore-direction")) {
      direction = localStorage.getItem("dore-direction");
    } else {
      localStorage.setItem("dore-direction", direction);
    }
    if (localStorage.getItem("dore-radius")) {
      radius = localStorage.getItem("dore-radius");
    } else {
      localStorage.setItem("dore-radius", radius);
    }
  }

  $(".theme-color[data-theme='" + theme + "']").addClass("active");
  $(".direction-radio[data-direction='" + direction + "']").attr("checked", true);
  $(".radius-radio[data-radius='" + radius + "']").attr("checked", true);
  $("#switchDark").attr("checked", theme.indexOf("dark") > 0 ? true : false);

  loadStyle("/static/Todo/css/" + theme, onStyleComplete);
  function onStyleComplete() {
    setTimeout(onStyleCompleteDelayed, 300);
  }

  function onStyleCompleteDelayed() {
    $("body").addClass(direction);
    $("html").attr("dir", direction);
    $("body").addClass(radius);
    $("body").dore();
  }

  $("body").on("click", ".theme-color", function (event) {
    event.preventDefault();
    var dataTheme = $(this).data("theme");
    if (typeof Storage !== "undefined") {
      localStorage.setItem("dore-theme-color", dataTheme);
      window.location.reload();
    }
  });

  $("input[name='directionRadio']").on("change", function (event) {
    var direction = $(event.currentTarget).data("direction");
    if (typeof Storage !== "undefined") {
      localStorage.setItem("dore-direction", direction);
      window.location.reload();
    }
  });

  $("input[name='radiusRadio']").on("change", function (event) {
    var radius = $(event.currentTarget).data("radius");
    if (typeof Storage !== "undefined") {
      localStorage.setItem("dore-radius", radius);
      window.location.reload();
    }
  });

  $("#switchDark").on("change", function (event) {
    var mode = $(event.currentTarget)[0].checked ? "dark" : "light";
    if (mode == "dark") {
      theme = theme.replace("light", "dark");
    } else if (mode == "light") {
      theme = theme.replace("dark", "light");
    }
    if (typeof Storage !== "undefined") {
      localStorage.setItem("dore-theme-color", theme);
      window.location.reload();
    }
  });

  $(".theme-button").on("click", function (event) {
    event.preventDefault();
    $(this)
      .parents(".theme-colors")
      .toggleClass("shown");
  });

  $(document).on("click", function (event) {
    if (
      !(
        $(event.target)
          .parents()
          .hasClass("theme-colors") ||
        $(event.target)
          .parents()
          .hasClass("theme-button") ||
        $(event.target).hasClass("theme-button") ||
        $(event.target).hasClass("theme-colors")
      )
    ) {
      if ($(".theme-colors").hasClass("shown")) {
        $(".theme-colors").removeClass("shown");
      }
    }
  });
})(jQuery);




// A I S

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$('#avatar_input').change(function (){
    const file = this.files[0]
    let patternFileExtension = /\.([0-9a-z]+)(?:[\?#]|$)/i;
    let fileExtension = (file.name).match(patternFileExtension);
    const valid_format = ['jpg', 'png', 'jpeg']
    if (file && valid_format.includes(fileExtension[1]))
    {
         let image_url = URL.createObjectURL(file)
        document.getElementById('image_preview').src = image_url

    }
    else
    {
        $(this).val('')
        const title = 'خطایی رخ داده است'
        const message = 'فایل ارسال شده پشتیبانی نمیشد لطفا عکس انتخاب کنید'
        showNotification('top', 'center', "primary", title, message);

    }

})
// Del B
$('.delete').click(function ()
{
    let id = $(this).attr('data-delete')
    let book = '#B'+ id;
    $.get('/account/dashboard/delete_bookmark/'+ id, function (data)
    {
       if (data['status'] === 200)
       {
           $(book).remove();
           showNotification('top', 'center', "primary", 'پیام جدید', 'دوره با موفقیت حذف شد');

           const product_element = document.querySelector(".BookObject");
            if (product_element === null)
            {
                const paginator = document.getElementById('paginator_section');
                paginator.remove();
                $('#BookList').append("<div class=\"alert alert-secondary\" role=\"alert\">\n" +
                    "                    لیست دوره های مورد علاقه شما خالی است میتوانید از طریق لینک مقابل دوره ها را تماشا کنید\n" +
                    "        <a href=\"/courses\"><span>دوره ها</span></a>\n" +
                    "    </div>")
            }

       }
       else {
           showNotification('top', 'center', "primary", 'خطا', 'خطا در حذف کردن ');

       }
    });

});

// O D
$('.ShowOrderDetail').click(function (){
    const DetailId = $(this).attr('data-detail')
    $.get('get_order_user_detail/'+ DetailId, function (data)
    {
        if (data)
        {
            const t_body = $('#bodyTableProducts')
            t_body.empty()
            for(let i=0; i<data['get_order_products'].length; i++)
            {
                let tr = document.createElement('tr');
                let td_t = document.createElement('td');
                let td_p = document.createElement('td');
                let td_h = document.createElement('th');
                td_t.innerHTML = data['get_order_products'][i].course;
                td_p.innerHTML = numberWithCommas(data['get_order_products'][i].price);
                td_h.innerHTML = i + 1;
                tr.appendChild(td_h);
                tr.appendChild(td_t);
                tr.appendChild(td_p);
                t_body.append(tr);
            }
        }
        else {

        }
    });
});

function PhoneValidator(phone)
{
    const regex = '09([0-9][0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}';
    const message = document.getElementById('phone_checker');
    if(new RegExp(regex).test(phone))
    {

      message.style.color = 'green';
      message.innerHTML = 'شماره تلفن صحیح'
    }
    else
    {
      message.style.color = 'red';
      message.innerHTML = 'شماره تلفن شما  صحیح نیست'
    }
}

function emailValidator(email)
{
    const regex = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'
    const message = document.getElementById('email_checker');
    if (new RegExp(regex).test(email))
    {

        message.style.color = 'green';
        message.innerHTML = 'ایمیل صحیح'
    }

    else
    {

        message.style.color = 'red';
        message.innerHTML = 'ایمیل صحیح نیست'

    }
}

function passwordValidator(password)
{   const message = document.getElementById('password_checker');
    const regex = [];
    if (password.length === 0 )
   {
        message.innerHTML = '';
        return;
    }

    regex.push("[A-Z]");
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.
    let passed = 0;
    for(let i=0; i<regex.length; i++)
    {
        if(new RegExp(regex[i]).test(password))
        {
            passed++;
        }
    }
    if(passed>2 && password.length>8)
    {
        passed++;
    }
    let message_color = '';
    let message_text = '';
    switch (passed)
    {
        case 0:
        case 1:
            message_color = 'red';
            message_text = 'پسورد شما ضعیف است';
            break;
        case 2:
            message_color = 'yellow';
            message_text = 'پسورد شما متوسط است';
            break;
        case 3:
        case 4:
            message_color = 'green';
            message_text = 'پسورد شما قوی است';
            break;
        case 5:
            message_color = 'darkgreen';
            message_text = 'پسورد شما بسیار قوی است';
            break;

    }
    message.style.color = message_color;
    message.innerHTML = message_text;



}
function checkPasswords()
{
    const password = document.getElementById('password').value;
    const re_password = document.getElementById('password2').value;
    const message = document.getElementById('re_password');
    if (password === re_password)
    {
        message.innerHTML = 'پسرود ها صحیح '
        message.style.color = 'green';
    }
    else
    {
        message.innerHTML = 'پسرود ها همخوانی ندارند '
        message.style.color = 'red';

    }

}
$('#new_password2').keyup(function ()
{
    passwordValidator($(this).val());
})

let block_request = false
$('.download_users').click(function (){
    let course_id =$(this).attr('data-course')
    let path = "/account/dashboard/export_courses_users/" + course_id
    if (block_request === false)
    {
        $.get(path, function (data){
        block_request = true
        if(data.status === 200){
            let message = 'دانلود شما به زودی آغاز میشود حجم فایل  : ' + data.size + ' مگابایت  '
            showNotification('top', 'center', 'primary', 'پیام جدید', message)
            window.location.href = data.download_link
        }
    })
    }
    else{
        showNotification('top', 'center', 'primary', 'خطا', 'درخواست شما مسدود شده است !' )
    }

})