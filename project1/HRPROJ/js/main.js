//// Homerun Derby Javascript Code
//// Stu Porter


//Jquery Audio

$("<audio></audio>").attr({
    'src':'audio/centerfield.mp3',
    'volume':0.2,
    'autoplay':'stop'
}).appendTo("body");

var outs  = 0;
var score = 0;



var swing   = document.getElementById('myBtn'),
    pitches = ['curveball', 'fastball', 'changeup'],
    pitchSelect = document.getElementById('pitches');

swing.addEventListener('click', function() {
  // 1. Get a random pitch
  var randomPitch = pitches[Math.floor(Math.random() * ((pitches.length - 1) - 0 + 1) + 0)];

  if (randomPitch === pitchSelect.value) {
     score++;
     $('#hr').text(score)
     $('#results').text('Going.. Going.. Gone! Homerun!!!')
     $('#compare').text('   Pitcher guessed ' + randomPitch + ' and ' + ' you guessed ' + pitchSelect.value)
    
  } else  {
    outs++;
     $('#results').text('You are out!')
     $('#outs-num').text(outs)
     $('#compare').text('   Swing and a miss! Pitcher guessed ' + randomPitch);

  } 

  if (outs === 5) {
    outs  = 0;
    score = 0;
    $('#results').text('5th and final out!');
  }

if (randomPitch === pitchSelect.value){ 
  $('.homervid').html('');
  var video = $('<video />', {
    id: 'video',
    src: 'videos/bigpapi.mp4',
    type: 'video/mp4',
    controls: true
});

video.appendTo($('.homervid'));
}

if (randomPitch != pitchSelect.value){ 
  $('.homervid').html('');
  var video = $('<video />', {
    id: 'video',
    src: 'videos/trout.mp4',
    type: 'video/mp4',
    controls: true
});

video.appendTo($('.homervid'));
}


  

});









//// BATTER INFO
// USE A PROTOTYPE THING TO ADD TO TOTAL CARREER HOMERS

function SelectBatter(number, team, name, average, homers) {
  this.number       = number;
  this.team         = team;
  this.name         = name;
  this.average      = average;
  this.homers       = homers;

}

SelectBatter.prototype.hitHomer = function(addHomer){
  return this.homers = this.homers + addHomer;
}

var batter1 = new SelectBatter('34', 'Boston Red Sox', 'David Ortiz', '.286', 521)

var batter2 = new SelectBatter('34', 'Washington Nationals', 'Bryce Harper', '.254', 112)

var batter3 = new SelectBatter('44', 'Chicago Cubs', 'Anthony Rizzo', '.277', 119)

console.log(batter1.name, batter1.team, batter1.number, batter1.average, batter1.homers);

console.log(batter2.name, batter2.team, batter2.number, batter2.average, batter2.homers);

console.log(batter3.name, batter3.team, batter3.number, batter3.average, batter3.homers);


var picture    = document.getElementsByClassName('col-4'),
    select     = document.getElementsByClassName('select-player'),
    ortiz      = document.getElementById('david'),
    ortizimg   = 'img/Ortiz.jpg',
    rizzo      = document.getElementById('anthony'),
    rizzoimg   = 'img/Rizzo.jpg',
    harper     = document.getElementById('bryce'),
    harperimg  = 'img/Harper.jpg';

//SELECT THEN ACTION


$('input[name="hitters"]').click(function(e) {
  if ($(this).val() === 'David Ortiz'){

      $('.batter-img').html('<p>Now Batting:</p><img src="http://i.imgur.com/TDdw32c.png?1">');

  } else if ($(this).val() === 'Anthony Rizzo') {
      $('.batter-img').html('<p>Now Batting:</p><img src="http://i.imgur.com/SgOH6pW.png?1">');
  
  }
  else if ($(this).val() === 'Bryce Harper') {
      $('.batter-img').html('<p>Now Batting:</p><img src="http://i.imgur.com/gpMkJ1t.png?1">');
  }

  
});

$('input[name="hitters"]').click(function(e) {
  if ($(this).val() === 'David Ortiz'){
      $('.about').html('<p>Learn More About Me</p>Now batting for the ' + batter1.team + ' #' + batter1.number + ' ' + batter1.name + '!' + ' He is batting ' + '' + batter1.average + ' with ' + batter1.homers + ' career homeruns.');

  } else if ($(this).val() === 'Anthony Rizzo') {
      $('.about').html('<p>Learn More About Me</p>Now batting for the ' + batter3.team + ' #' + batter3.number + ' ' + batter3.name + '!' + ' He is batting ' + '' + batter3.average + ' with ' + batter3.homers + ' career homeruns.');
  
  }
  else if ($(this).val() === 'Bryce Harper') {
      $('.about').html('<p>Learn More About Me</p>Now batting for the ' + batter2.team + ' #' + batter2.number + ' ' + batter2.name + '!' + ' He is batting ' + '' + batter2.average + ' with ' + batter2.homers + ' career homeruns.');
  }

  
});














