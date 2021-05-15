class Form{
    constructor(){

    }
    display(){
      var title = createElement('h2');
      title.html("Multiplayer Car Racing Game");
      title.position(250,10);
      
      var input = createInput("Name");
      var button = createButton('play');
      var greeting = createElement('h3');
      input.position(50,250);
      button.position(250,350);

      button.mousePressed(
          function(){
        input.hide();
        button.hide();
        
        var name = input.value();
        playerCount = playerCount + 1;
        greeting.html("hello " + name);
        greeting.position(130,160);
       console.log("working");
      })
    }
}