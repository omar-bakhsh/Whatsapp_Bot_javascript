alert("Whatsapp Bot Is Running ");

const toggleAttach = (e) => {
    // select the span with reliable identification like data-*
    const clipNode = document.querySelectorAll('.TbtXF')[e];
    // take its element, i.e. the button itself
    const clipButtonNode = clipNode.parentNode;
    // extract the current offset position relative to the document
    // more info here https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    // we can use this for filling in the non-0 screenX and screenY
    const clipButtonNodeClientRect = clipButtonNode.getBoundingClientRect();

    clipButtonNode.dispatchEvent(new MouseEvent("mousedown", {
        bubbles: true,
        cancelable: true,
        screenX: clipButtonNodeClientRect.x,
        screenY: clipButtonNodeClientRect.y
    }));
}

var start = 0;
var go = true;
var subs = [

];



setInterval(() => {


    document.querySelectorAll('.TbtXF').forEach((e, i) => {
        if ((e.innerHTML.includes('رسالة ١ غير مقروءة') || e.innerHTML.includes('رسالتان ٢ غير مقروءتين') || e.innerHTML.includes('رسائل غير مقروءة')) && go) {
            toggleAttach(i)
            go = false;

        }
    });
    setTimeout(() => {
        var Messages = document.getElementsByClassName("GDTQm")
        var lastMessage = Messages[Messages.length - 1]

        go = true;




        if (!lastMessage.classList.contains('message-out')) {
            if (lastMessage.innerHTML.includes('#help')||lastMessage.innerHTML.includes('#Help')) {
                var event = new InputEvent('input', { bubbles: true });

                var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")

                textbox.innerHTML = `hi there i'm whatsapp bot pk i can Help you one of the topics listed below👇🏻
1- for tracking order send #track 
2- for price info send #price 
3- for customer service send #talk 
`;

                textbox.dispatchEvent(event);
                document.getElementsByClassName("_1E0Oz")[0].click();

            }



            if (lastMessage.innerHTML.includes('السلام عليكم')) {
                var event = new InputEvent('input', { bubbles: true });

                var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")

                textbox.innerHTML = `وعليكم السلام ورحمة الله وبركاته  
                hi there I'm a WhatsApp business bot I can Help you with one of the topics listed below👇🏻
                 1- for tracking, order send #track
                   2- for price info send #price
                     3- for customer service send #talk .
                     مرحبًا ، أنا روبوت أعمال WhatsApp يمكنني مساعدتك في أحد الموضوعات المدرجة أدناه👇🏻
                     1- للتتبع الطلبات ارسل #track .
                     2- لمعرفة سعر الاشتراك ارسل #price .
                     3- للتواصل مع خدمة العملاء ارسل #talk .
                `;

                textbox.dispatchEvent(event);
                
                document.getElementsByClassName("_1E0Oz")[0].click();
            }
          // price response .
if (lastMessage.innerHTML.includes('#price')) {
                var event = new InputEvent('input', { bubbles: true });

                var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")

                textbox.innerHTML = ` 1- plus : 280$ in month.
2- pro : 500$ in month.
- for subscribe send #sub `;

                textbox.dispatchEvent(event);
                
                document.getElementsByClassName("_1E0Oz")[0].click();
            }
               // talk response .
if (lastMessage.innerHTML.includes('#talk')) {
                var event = new InputEvent('input', { bubbles: true });

                var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")

                textbox.innerHTML = `we are not available now we will contact with you soon as it possible !! 
                نحن غير متوفرين حاليا سوف نتواصل معك في اقرب وقت ممكن !!`;

                textbox.dispatchEvent(event);
                
                document.getElementsByClassName("_1E0Oz")[0].click();
            }
          
          // track number response 
if (lastMessage.innerHTML.includes('Track_Number')) {
                var event = new InputEvent('input', { bubbles: true });

                var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")

                textbox.innerHTML = 'your package well be arrive tomorrow . منتجك سوف يصل غدا .';

                textbox.dispatchEvent(event);
                
                document.getElementsByClassName("_1E0Oz")[0].click();
            }
          
          if (lastMessage.innerHTML.includes('#track')) {
                var event = new InputEvent('input', { bubbles: true });

                var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")

                textbox.innerHTML = 'https://api.whatsapp.com/send?phone=966543201512&text=Track_Number%20:';

                textbox.dispatchEvent(event);
                
                document.getElementsByClassName("_1E0Oz")[0].click();
            }

    var title="try later"; 
  if (lastMessage.innerHTML.includes('Track_Number')) {
    var event = new InputEvent('input', { bubbles: true });

 fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.warn('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // json to obj the text in the response
      response.json().then(function(data) {
        console.log('------'+data+'---------');
        console.table(data);
      title= data.title ; 
      });
    }
  )
  .catch(function(err) {
    console.error('Fetch Error :-S', err);
  });


    var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")

    textbox.innerHTML = title ;

    textbox.dispatchEvent(event);
    
    document.getElementsByClassName("_1E0Oz")[0].click();
}

            if (lastMessage.innerHTML.includes('name :')) {
               let sendername = document.querySelector("header div ._35k-1._1adfa._3-8er").innerText;
                var index = subs.findIndex(x => x.sender == sendername);
                console.log(index)
                console.log( lastMessage.innerHTML)
                console.log(index !== -1 )


                if (  index !== -1 ) {
                  var  name =  lastMessage.querySelector("._3-8er.selectable-text.copyable-text span").innerText.split(':');
                  subs[index].name = name[1];


                  var event = new InputEvent('input', { bubbles: true });
                  var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")
                  textbox.innerHTML = " your name in our record is  " + sendername + " your subscribe name is   " + subs[index].name;
                  textbox.dispatchEvent(event);
                  document.getElementsByClassName("_1E0Oz")[0].click();
                }
                
            }




            if (lastMessage.innerHTML.includes('#sub')||lastMessage.innerHTML.includes('#Sub')) {

                var messageSend = 'welcome 🥰 '
                var event = new InputEvent('input', { bubbles: true });

                var textbox = document.querySelector("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text")


                var index = subs.findIndex(x => x.sender == document.querySelector("header div ._35k-1._1adfa._3-8er").innerText);
                // here you can check specific property for an object whether it exist in your array or not
               let sendername = document.querySelector("header div ._35k-1._1adfa._3-8er").innerText;
                index === -1 ? subs[subs.length] = { sender: sendername, name: "" } : messageSend = ' alrady subscribe!! '

                var index = subs.findIndex(x => x.sender == document.querySelector("header div ._35k-1._1adfa._3-8er").innerText);




                textbox.innerHTML = messageSend;

                textbox.dispatchEvent(event);
                document.getElementsByClassName("_1E0Oz")[0].click();
                

                setTimeout(() => {
                    if (subs[index].name == "") {
                        textbox.innerHTML = `send your name by this link ارسل اسمك بالظغط على الرابط
                        https://api.whatsapp.com/send?phone=966547588252&text=name :`;

                        textbox.dispatchEvent(event);
                        document.getElementsByClassName("_1E0Oz")[0].click();
                    }
                }, 1000);


            }



            go = true;

        }


    }, 1000);

}, 4000);